import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900/50 backdrop-blur border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-green-400">📊 CryptoTracker Pro</div>
            <div className="flex gap-4">
              <Link href="/dashboard" className="text-slate-300 hover:text-white transition">
                Dashboard
              </Link>
              <Link href="/auth/login" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Professional Crypto Portfolio Analytics
        </h1>
        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          Real-time alerts, AI-powered predictions, backtesting engine, and advanced portfolio insights.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center mb-16">
          <Link
            href="/dashboard"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105"
          >
            View Dashboard →
          </Link>
          <Link
            href="/auth/login"
            className="border border-green-400 text-green-400 hover:bg-green-400/10 px-8 py-3 rounded-lg font-semibold transition"
          >
            Get Started Free
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="text-4xl mb-4">🚨</div>
            <h3 className="text-xl font-semibold text-white mb-2">Smart Alerts</h3>
            <p className="text-slate-400">
              Real-time notifications for price changes, volume spikes, and market opportunities.
            </p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold text-white mb-2">AI Predictions</h3>
            <p className="text-slate-400">
              Machine learning models trained on years of crypto market data.
            </p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-semibold text-white mb-2">Backtesting</h3>
            <p className="text-slate-400">
              Test your strategies against historical data before risking capital.
            </p>
          </div>
        </div>

        {/* Pricing */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-white mb-2">Free</h4>
            <p className="text-2xl font-bold text-green-400 mb-4">$0</p>
            <p className="text-slate-400 mb-4">Perfect for beginners</p>
            <button className="w-full bg-slate-700 text-white px-4 py-2 rounded hover:bg-slate-600 transition">
              Get Started
            </button>
          </div>
          <div className="bg-slate-800/50 border border-green-500/50 rounded-lg p-6 ring-2 ring-green-500/20">
            <h4 className="text-lg font-semibold text-white mb-2">Pro</h4>
            <p className="text-2xl font-bold text-green-400 mb-4">$9.99/mo</p>
            <p className="text-slate-400 mb-4">Advanced analytics & alerts</p>
            <button className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition font-semibold">
              Subscribe Now
            </button>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-white mb-2">Premium</h4>
            <p className="text-2xl font-bold text-green-400 mb-4">$24.99/mo</p>
            <p className="text-slate-400 mb-4">All features + Priority support</p>
            <button className="w-full bg-slate-700 text-white px-4 py-2 rounded hover:bg-slate-600 transition">
              Upgrade to Premium
            </button>
          </div>
        </div>

        {/* Health Check */}
        <div className="bg-green-900/20 border border-green-700 rounded-lg p-4 max-w-md mx-auto text-green-400">
          ✅ Platform is online and ready to use
        </div>
      </div>
    </div>
  );
}
