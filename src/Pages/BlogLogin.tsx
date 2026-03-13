import React, { useState } from 'react';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import {
  getPasswordHint,
  resetPassword,
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
  const [showPassword, setShowPassword] = useState(false);
  const [remainingAttempts, setRemainingAttempts] = useState<number | null>(null);

  const { login, register, currentUser } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const returnTo = searchParams.get('returnTo') || '/blog/dashboard';

  React.useEffect(() => {
    if (currentUser) {
      navigate(returnTo);
    }
  }, [currentUser, navigate, returnTo]);

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
      navigate(returnTo);
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

    setLoading(true);
    try {
      await register(email, password, passwordHint);
      navigate(returnTo);
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

  // Shared input style — bordered rounded box
  const inputCls = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors bg-white text-gray-800 placeholder-gray-400";

  return (
    <PageLayout title="">
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-12">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              {mode === 'login' && 'Sign In'}
              {mode === 'register' && 'Create Account'}
              {mode === 'forgot' && 'Forgot Password'}
              {mode === 'reset' && 'Reset Password'}
            </h1>
            <p className="text-red-700 mt-2 text-sm">
              {mode === 'login' && 'Sign in with your USD email to access the research lab portal'}
              {mode === 'register' && 'Fill out the information below to create your account'}
              {mode === 'forgot' && 'Retrieve your password hint or contact an admin'}
              {mode === 'reset' && 'Set a new password for your account'}
            </p>
          </div>

          {/* Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">{error}</div>
            )}
            {success && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm">{success}</div>
            )}

            {/* LOGIN FORM */}
            {mode === 'login' && (
              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">USD Email Address</label>
                  <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    className={inputCls} placeholder="your.name@usd.edu" required />
                  <p className="mt-1 text-xs text-gray-500">Accepts @usd.edu or @coyotes.usd.edu emails</p>
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <div className="relative">
                    <input id="password" type={showPassword ? 'text' : 'password'} value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`${inputCls} pr-12`} placeholder="Enter your password" required />
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
                  className="w-full py-3 px-4 bg-gradient-to-r from-red-800 to-gray-900 text-white font-medium rounded-lg hover:from-red-700 hover:to-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
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
                  <button type="button" onClick={() => switchMode('register')} className="text-red-700 hover:text-red-900 font-medium">Sign Up</button>
                  <button type="button" onClick={() => switchMode('forgot')} className="text-gray-500 hover:text-gray-700">Forgot password?</button>
                </div>
              </form>
            )}

            {/* REGISTER FORM */}
            {mode === 'register' && (
              <form onSubmit={handleRegister} className="space-y-5">
                <div>
                  <label htmlFor="reg-email" className="block text-sm font-medium text-gray-700 mb-1">USD Email <span className="text-red-600">*</span></label>
                  <input id="reg-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    className={inputCls} placeholder="your.name@usd.edu" required />
                  <p className="mt-1 text-xs text-gray-500">Please provide your USD email address (@usd.edu or @coyotes.usd.edu).</p>
                </div>
                <div>
                  <label htmlFor="reg-password" className="block text-sm font-medium text-gray-700 mb-1">Password <span className="text-red-600">*</span></label>
                  <div className="relative">
                    <input id="reg-password" type={showPassword ? 'text' : 'password'} value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`${inputCls} pr-12`} placeholder="Minimum 6 characters" required minLength={6} />
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
                  <p className="mt-1 text-xs text-gray-500">Please provide a password (minimum 6 characters).</p>
                </div>
                <div>
                  <label htmlFor="reg-confirm" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password <span className="text-red-600">*</span></label>
                  <input id="reg-confirm" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                    className={inputCls} placeholder="Re-enter your password" required minLength={6} />
                  <p className="mt-1 text-xs text-gray-500">Please confirm your password.</p>
                </div>
                <div>
                  <label htmlFor="reg-hint" className="block text-sm font-medium text-gray-700 mb-1">Password Hint <span className="text-red-600">*</span></label>
                  <input id="reg-hint" type="text" value={passwordHint} onChange={(e) => setPasswordHint(e.target.value)}
                    className={inputCls} placeholder="e.g. My pet name + year" required />
                  <p className="mt-1 text-xs text-gray-500">A hint to help you remember your password.</p>
                </div>
                <button type="submit" disabled={loading}
                  className="w-full py-3 px-4 bg-gradient-to-r from-red-800 to-gray-900 text-white font-medium rounded-lg hover:from-red-700 hover:to-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                  {loading ? 'Creating account...' : 'Create Account'}
                </button>
                <div className="text-center pt-1">
                  <button type="button" onClick={() => switchMode('login')} className="text-sm text-gray-500 hover:text-gray-700">Already have a password? Sign in</button>
                </div>
              </form>
            )}

            {/* FORGOT FORM */}
            {mode === 'forgot' && (
              <form onSubmit={handleForgotPassword} className="space-y-5">
                <div>
                  <label htmlFor="forgot-email" className="block text-sm font-medium text-gray-700 mb-1">USD Email Address</label>
                  <input id="forgot-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    className={inputCls} placeholder="your.name@usd.edu" required />
                </div>
                <button type="submit" disabled={loading}
                  className="w-full py-3 px-4 bg-gradient-to-r from-red-800 to-gray-900 text-white font-medium rounded-lg hover:from-red-700 hover:to-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                  {loading ? 'Retrieving...' : 'Get Password Hint'}
                </button>
                {hintDisplay && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm font-medium text-red-800 mb-1">Your Password Hint:</p>
                    <p className="text-red-700 font-semibold text-lg">{hintDisplay}</p>
                    {maskedEmail && <p className="text-xs text-red-700 mt-2">Account: {maskedEmail}</p>}
                    <button type="button" onClick={() => switchMode('reset')}
                      className="mt-3 text-sm text-red-700 hover:underline font-medium">Still can't remember? Reset password</button>
                  </div>
                )}
                <div className="text-center pt-1">
                  <button type="button" onClick={() => switchMode('login')} className="text-sm text-gray-500 hover:text-gray-700">Back to sign in</button>
                </div>
              </form>
            )}

            {/* RESET FORM */}
            {mode === 'reset' && (
              <form onSubmit={handleResetPassword} className="space-y-5">
                <div>
                  <label htmlFor="reset-email" className="block text-sm font-medium text-gray-700 mb-1">USD Email Address</label>
                  <input id="reset-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    className={inputCls} placeholder="your.name@usd.edu" required />
                </div>
                <div>
                  <label htmlFor="reset-password" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                  <input id="reset-password" type={showPassword ? 'text' : 'password'} value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={inputCls} placeholder="Minimum 6 characters" required minLength={6} />
                </div>
                <div>
                  <label htmlFor="reset-confirm" className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                  <input id="reset-confirm" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                    className={inputCls} placeholder="Re-enter new password" required minLength={6} />
                </div>
                <div>
                  <label htmlFor="reset-hint" className="block text-sm font-medium text-gray-700 mb-1">New Password Hint (optional)</label>
                  <input id="reset-hint" type="text" value={passwordHint} onChange={(e) => setPasswordHint(e.target.value)}
                    className={inputCls} placeholder="A hint to help you remember" />
                </div>
                <button type="submit" disabled={loading}
                  className="w-full py-3 px-4 bg-gradient-to-r from-red-800 to-gray-900 text-white font-medium rounded-lg hover:from-red-700 hover:to-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                  {loading ? 'Resetting...' : 'Reset Password'}
                </button>
                <div className="text-center pt-1">
                  <button type="button" onClick={() => switchMode('login')} className="text-sm text-gray-500 hover:text-gray-700">Back to sign in</button>
                </div>
              </form>
            )}
          </div>

          {/* Back to Blog */}
          <div className="mt-6 text-center">
            <Link to="/blog" className="text-gray-500 hover:text-gray-700 transition-colors inline-flex items-center text-sm">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
