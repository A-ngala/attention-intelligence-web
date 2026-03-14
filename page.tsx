import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-900">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold">
              ◎
            </div>
            <span className="font-semibold">Attention Intelligence</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
              Privacy
            </Link>
            <a
              href="#"
              className="bg-primary hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              Add to Chrome
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
            100% Free • Launching March 20, 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your second pair of eyes
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
            Track and understand your attention across YouTube, Twitter/X, Reddit, Pinterest, Instagram, and TikTok.
          </p>
          <p className="text-lg text-gray-500 mb-10">
            100% local. No accounts. Your data never leaves your browser.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="w-full sm:w-auto bg-primary hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg shadow-primary/20"
            >
              Add to Chrome — Free
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition border border-gray-800"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not anti-social media. Just awareness.
          </h2>
          <p className="text-xl text-gray-400">
            A partner in understanding, not a judge.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-3">Real-time Tracking</h3>
            <p className="text-gray-400 leading-relaxed">
              Track time, quality scores, and content categories across YouTube, Twitter/X, Reddit, Pinterest, Twitch, and Rumble.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-3">Feed Audit Mode</h3>
            <p className="text-gray-400 leading-relaxed">
              Analyze Instagram and TikTok feeds in 5-10 minute sessions. See what you're actually consuming.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-3">100% Private</h3>
            <p className="text-gray-400 leading-relaxed">
              All data stored locally in your browser. No accounts, no servers, no tracking. Export anytime.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Three steps to awareness
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-3">Install Extension</h3>
            <p className="text-gray-400">
              One-click install from Chrome Web Store. No signup required.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-3">Use Normally</h3>
            <p className="text-gray-400">
              Browse YouTube, Twitter, Reddit as usual. Extension tracks in background.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-3">Understand Patterns</h3>
            <p className="text-gray-400">
              See what you consumed, how long, and what categories. Adjust as needed.
            </p>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Works across platforms
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">▶️</div>
            <div className="font-medium">YouTube</div>
            <div className="text-xs text-gray-500 mt-1">Real-time</div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">𝕏</div>
            <div className="font-medium">Twitter/X</div>
            <div className="text-xs text-gray-500 mt-1">Real-time</div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">📱</div>
            <div className="font-medium">Instagram</div>
            <div className="text-xs text-gray-500 mt-1">Audit mode</div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">♪</div>
            <div className="font-medium">TikTok</div>
            <div className="text-xs text-gray-500 mt-1">Audit mode</div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">🔴</div>
            <div className="font-medium">Reddit</div>
            <div className="text-xs text-gray-500 mt-1">Real-time</div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">📌</div>
            <div className="font-medium">Pinterest</div>
            <div className="text-xs text-gray-500 mt-1">Real-time</div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">🎮</div>
            <div className="font-medium">Twitch</div>
            <div className="text-xs text-gray-500 mt-1">Real-time</div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">📺</div>
            <div className="font-medium">Rumble</div>
            <div className="text-xs text-gray-500 mt-1">Real-time</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Free to start. Premium to unlock.
          </h2>
          <p className="text-xl text-gray-400">
            Core tracking always free. Premium unlocks historical analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-2">Free</h3>
            <div className="text-4xl font-bold mb-6">$0</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-300">YouTube, Twitter/X, Reddit tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-300">Pinterest, Twitch, Rumble tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-300">Instagram & TikTok feed audit</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-300">Daily stats & insights</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-300">100% local storage</span>
              </li>
            </ul>
            <div className="bg-gray-800 text-white px-6 py-3 rounded-lg text-center font-semibold">
              Always Free
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-purple-900/10 border-2 border-primary/50 rounded-xl p-8 relative">
            <div className="absolute -top-3 right-6 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
              COMING SOON
            </div>
            <h3 className="text-2xl font-bold mb-2">Premium</h3>
            <div className="text-4xl font-bold mb-1">$7.99</div>
            <div className="text-gray-400 mb-6">per month</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-300">Everything in Free</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">★</span>
                <span className="text-gray-300">Instagram historical audit</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">★</span>
                <span className="text-gray-300">TikTok historical audit</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">★</span>
                <span className="text-gray-300">AI-powered insights (future)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">★</span>
                <span className="text-gray-300">Priority support</span>
              </li>
            </ul>
            <div className="bg-primary/20 border border-primary/50 text-white px-6 py-3 rounded-lg text-center font-semibold">
              Available June 2026
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Common questions
          </h2>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Is my data private?</h3>
            <p className="text-gray-400">
              Yes. 100% of your data stays in your browser's local storage. We never see it, store it on servers, or share it. You can export your data anytime.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Do I need to create an account?</h3>
            <p className="text-gray-400">
              No. The extension works completely offline. No signup, no login, no email required.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Which platforms are supported?</h3>
            <p className="text-gray-400">
              Real-time tracking: YouTube, Twitter/X, Reddit, Pinterest, Twitch, Rumble. Audit mode: Instagram, TikTok.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Will this slow down my browser?</h3>
            <p className="text-gray-400">
              No. The extension is highly optimized and runs in the background. You won't notice any performance impact.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Can I use this on mobile?</h3>
            <p className="text-gray-400">
              Not yet. Currently Chrome desktop only. Mobile app planned for future.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">What's the difference between Free and Premium?</h3>
            <p className="text-gray-400">
              Free gives you full real-time tracking across all platforms. Premium unlocks historical analysis for Instagram and TikTok (reading your saved posts and liked videos).
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-900">
        <div className="text-center bg-gradient-to-br from-primary/10 to-purple-900/10 border border-primary/30 rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to understand your attention?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join the launch on March 20, 2026
          </p>
          <a
            href="#"
            className="inline-block bg-primary hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg shadow-primary/20"
          >
            Add to Chrome — Free
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs font-bold">
                ◎
              </div>
              <span className="text-sm text-gray-400">© 2026 AGN, Nairobi Kenya</span>
            </div>
            <div className="flex items-center gap-8">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <a href="mailto:alwaysngala@gmail.com" className="text-sm text-gray-400 hover:text-white">
                Contact
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Chrome Web Store
              </a>
            </div>
          </div>
          <div className="text-center mt-8 text-xs text-gray-600">
            100% local · No accounts · No data leaves your browser
          </div>
        </div>
      </footer>
    </main>
  );
}
