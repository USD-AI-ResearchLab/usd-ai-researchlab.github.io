import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import {
  getPasswordHint,
  resetPassword,
  setGitHubToken,
  hasGitHubToken,
  NeedsRegistrationError,
  getRemainingAttempts,
} from '../services/blogDatabase';
import PageLayout from '../components/PageLayout';

type Mode = 'login' | 'register' | 'forgot' | 'reset';

const BlogLogin: React.FC = () => {
  const [mode, setMode] = useState<Mode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordHint, setPasswordHint] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [hintDisplay, setHintDisplay] = useState<string | null>(null);
  const [maskedEmail, setMaskedEmail] = useState<string | null>(null);
  const [showTokenSetup, setShowTokenSetup] = useState(false);
  const [githubToken, setGithubToken] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remainingAttempts, setRemainingAttempts] = useState<number | null>(null);

  const { login, register, currentUser } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (currentUser) {
      navigate('/blog/dashboard');
    }
  }, [currentUser, navigate]);

  const validateEmail = (em: string): boolean => {
    const lower = em.toLowerCase().trim();
    return lower.endsWith('@usd.edu') || lower.endsWith('@coyotes.usd.edu');
  };

  const clearForm = () => {
    setPassword('');
    setConfirmPassword('');
    setPasswordHint('');
    setError('');
    setSuccess('');
    setHintDisplay(null);
    setMaskedEmail(null);
    setShowPassword(false);
    setRemainingAttempts(null);
  };

  const switchMode = (newMode: Mode) => {
    clearForm();
    setMode(newMode);
  };

  // Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setHintDisplay(null);

    if (!email.trim()) { setError('Please enter your email address.'); return; }
    if (!validateEmail(email)) { setError('Only @usd.edu or @coyotes.usd.edu email addresses are allowed.'); return; }
    if (!password.trim()) { setError('Please enter your password.'); return; }

    setLoading(true);
    try {
      await login(email, password);
      navigate('/blog/dashboard');
    } catch (err: unknown) {
      if (err instanceof NeedsRegistrationError) {
        const regEmail = err.userEmail;
        clearForm();
        setMode('register');
        setEmail(regEmail);
        setSuccess(`Welcome, ${err.userName}! Please create your password to get started.`);
        setLoading(false);
        return;
      }
      const error = err as { message?: string };
      setError(error.message || 'Login failed.');
      const remaining = getRemainingAttempts(email);
      setRemainingAttempts(remaining);
    }
    setLoading(false);
  };

  // Register
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email.trim()) { setError('Please enter your email address.'); return; }
    if (!validateEmail(email)) { setError('Only @usd.edu or @coyotes.usd.edu email addresses are allowed.'); return; }
    if (!password.trim() || password.length < 6) { setError('Password must be at least 6 characters long.'); return; }
    if (password !== confirmPassword) { setError('Passwords do not match.'); return; }
    if (!passwordHint.trim()) { setError('Please provide a password hint to help you remember.'); return; }
    if (!hasGitHubToken()) {
      setError('A GitHub token is required for first-time registration. Ask an admin to set it up, or configure it below.');
      setShowTokenSetup(true);
      return;
    }

    setLoading(true);
    try {
      await register(email, password, passwordHint);
      navigate('/blog/dashboard');
    } catch (err: unknown) {
      const error = err as { message?: string };
      setError(error.message || 'Registration failed.');
    }
    setLoading(false);
  };

  // Forgot Password
  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setHintDisplay(null);
    setMaskedEmail(null);

    if (!email.trim()) { setError('Please enter your email address.'); return; }
    if (!validateEmail(email)) { setError('Only @usd.edu or @coyotes.usd.edu email addresses are allowed.'); return; }

    setLoading(true);
    try {
      const result = await getPasswordHint(email);
      if (result.hint) {
        setHintDisplay(result.hint);
        setMaskedEmail(result.maskedEmail);
        setSuccess('Your password hint is shown below. If you still cannot remember, contact an admin to reset your password.');
      } else {
        setSuccess('No password hint was set. Contact an admin to reset your password.');
      }
    } catch (err: unknown) {
      const error = err as { message?: string };
      setError(error.message || 'Could not retrieve password hint.');
    }
    setLoading(false);
  };

  // Reset Password
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email.trim()) { setError('Please enter your email address.'); return; }
    if (!validateEmail(email)) { setError('Only @usd.edu or @coyotes.usd.edu email addresses are allowed.'); return; }
    if (!password.trim() || password.length < 6) { setError('New password must be at least 6 characters long.'); return; }
    if (password !== confirmPassword) { setError('Passwords do not match.'); return; }
    if (!hasGitHubToken()) {
      setError('A GitHub token is required to reset passwords. Ask an admin.');
      setShowTokenSetup(true);
      return;
    }

    setLoading(true);
    try {
      await resetPassword(email, password, passwordHint);
      setSuccess('Password has been reset successfully. You can now sign in.');
      setTimeout(() => switchMode('login'), 2000);
    } catch (err: unknown) {
      const error = err as { message?: string };
      setError(error.message || 'Password reset failed.');
    }
    setLoading(false);
  };

  const handleSaveToken = () => {
    if (githubToken.trim()) {
      setGitHubToken(githubToken.trim());
      setGithubToken('');
      setShowTokenSetup(false);
      setSuccess('GitHub token saved. You can now proceed.');
      setError('');
    }
  };

  return (
    <PageLayout title="">
      <div className="min-h-[60vh] flex items-center justify-center">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {mode === 'login' && 'Author Login'}
              {mode === 'register' && 'Create Your Password'}
              {mode === 'forgot' && 'Forgot Password'}
              {mode === 'reset' && 'Reset Password'}
            </h1>
            <p className="text-gray-600 mt-2">
              {mode === 'login' && 'Sign in with your USD email to manage your blog posts'}
              {mode === 'register' && 'Set up your account password and a hint to remember it'}
              {mode === 'forgot' && 'Retrieve your password hint or contact an admin'}
              {mode === 'reset' && 'Set a new password for your account'}
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">{error}</div>
            )}
            {success && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm">{success}</div>
            )}

            {/* Login Form */}
            {mode === 'login' && (
              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">USD Email Address</label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="your.name@usd.edu" required />
                  <p className="mt-1 text-xs text-gray-500">Accepts @usd.edu or @coyotes.usd.edu emails</p>
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <div className="relative">
                    <input type={showPassword ? 'text' : 'password'} id="password" value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors pr-12"
                      placeholder="Enter your password" required />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}
                      aria-label="Toggle password visibility"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d={showPassword
                            ? "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M3 3l18 18"
                            : "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"} />
                      </svg>
                    </button>
                  </div>
                  {remainingAttempts !== null && remainingAttempts < 3 && remainingAttempts > 0 && (
                    <p className="mt-1 text-xs text-orange-600 font-medium">{remainingAttempts} attempt(s) remaining before lockout</p>
                  )}
                </div>
                <button type="submit" disabled={loading}
                  className="w-full py-3 px-4 bg-gradient-to-r from-red-800 to-gray-900 text-white font-medium rounded-lg hover:from-red-700 hover:to-gray-800 focus:ring-4 focus:ring-red-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing in...
                    </span>
                  ) : 'Sign In'}
                </button>
                <div className="flex items-center justify-between text-sm pt-1">
                  <button type="button" onClick={() => switchMode('register')} className="text-red-600 hover:text-red-700 font-medium">First time? Create password</button>
                  <button type="button" onClick={() => switchMode('forgot')} className="text-gray-500 hover:text-gray-700">Forgot password?</button>
                </div>
              </form>
            )}

            {/* Register Form */}
            {mode === 'register' && (
              <form onSubmit={handleRegister} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">USD Email Address</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="your.name@usd.edu" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Create Password</label>
                  <div className="relative">
                    <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors pr-12"
                      placeholder="Minimum 6 characters" required minLength={6} />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}
                      aria-label="Toggle password visibility"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d={showPassword
                            ? "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M3 3l18 18"
                            : "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"} />
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                  <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Re-enter your password" required minLength={6} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password Hint</label>
                  <input type="text" value={passwordHint} onChange={(e) => setPasswordHint(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="A hint to help you remember (e.g., 'My pet name + year')" required />
                  <p className="mt-1 text-xs text-gray-500">This hint will be shown if you forget your password</p>
                </div>
                <button type="submit" disabled={loading}
                  className="w-full py-3 px-4 bg-gradient-to-r from-red-800 to-gray-900 text-white font-medium rounded-lg hover:from-red-700 hover:to-gray-800 focus:ring-4 focus:ring-red-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating account...
                    </span>
                  ) : 'Create Password & Sign In'}
                </button>
                <div className="text-center pt-1">
                  <button type="button" onClick={() => switchMode('login')} className="text-sm text-gray-500 hover:text-gray-700">Already have a password? Sign in</button>
                </div>
              </form>
            )}

            {/* Forgot Password Form */}
            {mode === 'forgot' && (
              <form onSubmit={handleForgotPassword} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">USD Email Address</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="your.name@usd.edu" required />
                </div>
                <button type="submit" disabled={loading}
                  className="w-full py-3 px-4 bg-gradient-to-r from-red-800 to-gray-900 text-white font-medium rounded-lg hover:from-red-700 hover:to-gray-800 focus:ring-4 focus:ring-red-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                  {loading ? 'Retrieving...' : 'Get Password Hint'}
                </button>
                {hintDisplay && (
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm font-medium text-blue-800 mb-1">Your Password Hint:</p>
                    <p className="text-blue-700 font-semibold text-lg">{hintDisplay}</p>
                    {maskedEmail && <p className="text-xs text-blue-600 mt-2">Account: {maskedEmail}</p>}
                  </div>
                )}
                <div className="text-center space-y-2 pt-1">
                  <button type="button" onClick={() => switchMode('reset')} className="block w-full text-sm text-red-600 hover:text-red-700 font-medium">Still can't remember? Reset password</button>
                  <button type="button" onClick={() => switchMode('login')} className="block w-full text-sm text-gray-500 hover:text-gray-700">Back to sign in</button>
                </div>
              </form>
            )}

            {/* Reset Password Form */}
            {mode === 'reset' && (
              <form onSubmit={handleResetPassword} className="space-y-5">
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-700">
                  Password reset requires a GitHub token. If you are not an admin, contact an admin to reset your password.
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">USD Email Address</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="your.name@usd.edu" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                  <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Minimum 6 characters" required minLength={6} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                  <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Re-enter new password" required minLength={6} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">New Password Hint (optional)</label>
                  <input type="text" value={passwordHint} onChange={(e) => setPasswordHint(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="A hint to help you remember" />
                </div>
                <button type="submit" disabled={loading}
                  className="w-full py-3 px-4 bg-gradient-to-r from-red-800 to-gray-900 text-white font-medium rounded-lg hover:from-red-700 hover:to-gray-800 focus:ring-4 focus:ring-red-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                  {loading ? 'Resetting...' : 'Reset Password'}
                </button>
                <div className="text-center pt-1">
                  <button type="button" onClick={() => switchMode('login')} className="text-sm text-gray-500 hover:text-gray-700">Back to sign in</button>
                </div>
              </form>
            )}

            {/* GitHub Token Setup */}
            {showTokenSetup && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="text-sm font-medium text-gray-900 mb-2">GitHub Token Setup</h4>
                <p className="text-xs text-gray-600 mb-3">Required for writing data (registration, creating posts, publishing). Admin-only.</p>
                <div className="flex gap-2">
                  <input type="password" value={githubToken} onChange={(e) => setGithubToken(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="ghp_..." />
                  <button onClick={handleSaveToken}
                    className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">Save</button>
                </div>
                {hasGitHubToken() && <p className="mt-2 text-xs text-green-600 font-medium">Token is configured.</p>}
              </div>
            )}

            {/* Role Info */}
            {mode === 'login' && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Access Levels</h4>
                <div className="space-y-1 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span><strong>Admin</strong> Full control, can manage all posts and authors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span><strong>Reviewer</strong> Can review, edit and publish all posts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span><strong>Author</strong> Can write and edit your own posts only</span>
                  </div>
                </div>
              </div>
            )}

            {/* Admin Token Toggle */}
            {!showTokenSetup && (
              <div className="mt-4 text-center">
                <button type="button" onClick={() => setShowTokenSetup(true)}
                  className="text-xs text-gray-400 hover:text-gray-600 transition-colors">Admin: Configure GitHub Token</button>
              </div>
            )}
          </div>

          {/* Back to Blog */}
          <div className="mt-6 text-center">
            <Link to="/blog" className="text-gray-600 hover:text-red-600 transition-colors inline-flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default BlogLogin;
