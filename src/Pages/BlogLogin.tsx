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

  // Minimal underline input style
  const inputCls = "w-full border-0 border-b border-gray-400 bg-transparent py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-700 transition-colors";

  return (
    <PageLayout title="">
      <div className="min-h-[60vh] flex items-start justify-start px-8 sm:px-16 py-12">
        <motion.div
          className="w-full max-w-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-700 rounded text-sm">{error}</div>
          )}
          {success && (
            <div className="mb-6 p-3 bg-green-50 border border-green-200 text-green-700 rounded text-sm">{success}</div>
          )}

          {/* LOGIN SECTION */}
          {(mode === 'login' || mode === 'forgot' || mode === 'reset') && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Login</h2>
              {mode === 'login' && (
                <form onSubmit={handleLogin} className="space-y-6">
                  <input
                    type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    className={inputCls} placeholder="Email" required
                  />
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'} value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={inputCls} placeholder="Password" required
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}
                      aria-label="Toggle password visibility"
                      className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d={showPassword
                            ? "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M3 3l18 18"
                            : "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"} />
                      </svg>
                    </button>
                  </div>
                  {remainingAttempts !== null && remainingAttempts < 3 && remainingAttempts > 0 && (
                    <p className="text-xs text-orange-600 font-medium">{remainingAttempts} attempt(s) remaining before lockout</p>
                  )}
                  <div className="flex justify-end">
                    <button type="submit" disabled={loading}
                      className="text-blue-600 hover:text-blue-800 font-semibold uppercase text-sm tracking-wide disabled:opacity-50">
                      {loading ? 'Signing in...' : 'LOGIN'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* REGISTER SECTION */}
          {mode === 'login' && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Register</h2>
              <p className="text-gray-700 text-sm">
                If you are a member of the BAIR community, please{' '}
                <button type="button" onClick={() => switchMode('register')}
                  className="text-blue-600 hover:underline">
                  register for an account
                </button>
                .
              </p>
            </div>
          )}

          {/* REGISTER FORM (full) */}
          {mode === 'register' && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Register</h2>
              <form onSubmit={handleRegister} className="space-y-6">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  className={inputCls} placeholder="Email" required />
                <div className="relative">
                  <input type={showPassword ? 'text' : 'password'} value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={inputCls} placeholder="Create Password (min 6 chars)" required minLength={6} />
                  <button type="button" onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                    className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d={showPassword
                          ? "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M3 3l18 18"
                          : "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"} />
                    </svg>
                  </button>
                </div>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                  className={inputCls} placeholder="Confirm Password" required minLength={6} />
                <input type="text" value={passwordHint} onChange={(e) => setPasswordHint(e.target.value)}
                  className={inputCls} placeholder="Password Hint (e.g. 'My pet name + year')" required />
                <div className="flex items-center justify-between">
                  <button type="button" onClick={() => switchMode('login')}
                    className="text-sm text-gray-500 hover:text-gray-700">Back to Login</button>
                  <button type="submit" disabled={loading}
                    className="text-blue-600 hover:text-blue-800 font-semibold uppercase text-sm tracking-wide disabled:opacity-50">
                    {loading ? 'Creating...' : 'REGISTER'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* FORGOT PASSWORD SECTION */}
          {mode === 'login' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Forgot Password</h2>
              <p className="text-gray-700 text-sm">
                If you have forgotten your password, please{' '}
                <button type="button" onClick={() => switchMode('forgot')}
                  className="text-blue-600 hover:underline">
                  reset your password
                </button>
                .
              </p>
            </div>
          )}

          {/* FORGOT FORM (full) */}
          {mode === 'forgot' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Forgot Password</h2>
              <form onSubmit={handleForgotPassword} className="space-y-6">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  className={inputCls} placeholder="Email" required />
                <div className="flex items-center justify-between">
                  <button type="button" onClick={() => switchMode('login')}
                    className="text-sm text-gray-500 hover:text-gray-700">Back to Login</button>
                  <button type="submit" disabled={loading}
                    className="text-blue-600 hover:text-blue-800 font-semibold uppercase text-sm tracking-wide disabled:opacity-50">
                    {loading ? 'Retrieving...' : 'GET HINT'}
                  </button>
                </div>
              </form>
              {hintDisplay && (
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
                  <p className="text-sm font-medium text-blue-800 mb-1">Your Password Hint:</p>
                  <p className="text-blue-700 font-semibold text-lg">{hintDisplay}</p>
                  {maskedEmail && <p className="text-xs text-blue-600 mt-2">Account: {maskedEmail}</p>}
                  <button type="button" onClick={() => switchMode('reset')}
                    className="mt-3 text-sm text-red-600 hover:underline">Still can't remember? Reset password</button>
                </div>
              )}
            </div>
          )}

          {/* RESET PASSWORD FORM */}
          {mode === 'reset' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Reset Password</h2>
              <form onSubmit={handleResetPassword} className="space-y-6">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  className={inputCls} placeholder="Email" required />
                <input type={showPassword ? 'text' : 'password'} value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={inputCls} placeholder="New Password (min 6 chars)" required minLength={6} />
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                  className={inputCls} placeholder="Confirm New Password" required minLength={6} />
                <input type="text" value={passwordHint} onChange={(e) => setPasswordHint(e.target.value)}
                  className={inputCls} placeholder="New Password Hint (optional)" />
                <div className="flex items-center justify-between">
                  <button type="button" onClick={() => switchMode('login')}
                    className="text-sm text-gray-500 hover:text-gray-700">Back to Login</button>
                  <button type="submit" disabled={loading}
                    className="text-blue-600 hover:text-blue-800 font-semibold uppercase text-sm tracking-wide disabled:opacity-50">
                    {loading ? 'Resetting...' : 'RESET'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Back to Blog */}
          <div className="mt-10">
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
