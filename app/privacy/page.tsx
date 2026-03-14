import Link from 'next/link';

export default function Privacy() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-900">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold">
              ◎
            </div>
            <span className="font-semibold">Attention Intelligence</span>
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white text-sm">
            ← Back to Home
          </Link>
        </nav>
      </header>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-400 mb-12">Last updated: March 14, 2026</p>

        <div className="prose prose-invert prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Attention Intelligence is built on a simple principle: <strong>your data is yours</strong>. We believe privacy is a fundamental right, not a premium feature.
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
              <p className="text-lg font-semibold mb-2">Quick Summary</p>
              <ul className="space-y-2 text-gray-300">
                <li>✓ 100% of your data stays in your browser</li>
                <li>✓ We never see, store, or access your tracking data</li>
                <li>✓ No accounts, no servers, no data collection</li>
                <li>✓ You can export and delete your data anytime</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. What Data We Collect</h2>
            <h3 className="text-xl font-semibold mb-3 text-gray-200">Data Stored Locally (In Your Browser)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              The extension stores the following data in your browser's local storage:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
              <li>Time spent on platforms (YouTube, Twitter/X, Reddit, Pinterest, etc.)</li>
              <li>Video titles, post titles, and hashtags you view</li>
              <li>Content categories (automatically classified)</li>
              <li>Quality scores for videos watched</li>
              <li>Your manual corrections to classifications</li>
              <li>Your settings (daily goals, preferences)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-200">Data We Never Collect</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>We do NOT collect your browsing history</li>
              <li>We do NOT track what websites you visit</li>
              <li>We do NOT collect personal information (name, email, etc.)</li>
              <li>We do NOT use cookies or analytics</li>
              <li>We do NOT send your data to our servers</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Data</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              All data processing happens <strong>locally in your browser</strong>. Here's what the extension does:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Tracks time spent on supported platforms</li>
              <li>Classifies content into categories (Tech, Entertainment, News, etc.)</li>
              <li>Calculates quality scores for YouTube videos</li>
              <li>Shows you daily and weekly summaries</li>
              <li>Stores everything in Chrome's local storage API</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              <strong>Important:</strong> Your tracking data NEVER leaves your device. We have no servers collecting user data.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. Third-Party Services</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-200">What We Don't Use</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
              <li>No Google Analytics or tracking scripts</li>
              <li>No Facebook Pixel or social media trackers</li>
              <li>No advertising networks</li>
              <li>No cloud storage of your data</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-200">What We May Use (Future)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you choose to purchase a Premium license, we may use:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><strong>Paddle or Stripe:</strong> Payment processing (they handle payment data, not us)</li>
              <li><strong>License validation:</strong> We verify your license key is valid (no tracking data is sent)</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Even with Premium, your tracking data remains 100% local.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. Data Storage & Security</h2>
            <h3 className="text-xl font-semibold mb-3 text-gray-200">Where Your Data Lives</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              All tracking data is stored using Chrome's built-in storage API (<code>chrome.storage.local</code> and <code>chrome.storage.sync</code>):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
              <li><strong>Local storage:</strong> Tracking data, history, classifications (device-only)</li>
              <li><strong>Sync storage:</strong> Settings, preferences (syncs across your Chrome browsers)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-200">Data Security</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Data is stored in Chrome's secure storage (encrypted by Chrome)</li>
              <li>Only the extension can access this data</li>
              <li>Other websites and extensions cannot read your data</li>
              <li>If you uninstall the extension, all data is automatically deleted</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You have complete control over your data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><strong>Export:</strong> Download all your data as JSON (Settings → Data → Export My Data)</li>
              <li><strong>Delete:</strong> Clear all data anytime (Settings → Data → Reset Everything)</li>
              <li><strong>Pause:</strong> Stop tracking temporarily (Pause button in extension)</li>
              <li><strong>Uninstall:</strong> Removing the extension deletes all local data</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">6. Browser Permissions</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The extension requests these Chrome permissions:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-300">
              <li>
                <strong>storage:</strong> To save your tracking data locally
              </li>
              <li>
                <strong>tabs:</strong> To detect which platform you're on (YouTube, Twitter, etc.)
              </li>
              <li>
                <strong>activeTab:</strong> To track time on active tab only
              </li>
              <li>
                <strong>sidePanel:</strong> To show side panel interface
              </li>
              <li>
                <strong>notifications:</strong> To show goal alerts (optional, can be disabled)
              </li>
              <li>
                <strong>Host permissions:</strong> To track YouTube, Twitter/X, Reddit, Pinterest, Instagram, TikTok, Twitch, Rumble
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              We only request the minimum permissions needed. We do NOT request:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Full browsing history access</li>
              <li>Access to all websites</li>
              <li>Clipboard access</li>
              <li>Webcam or microphone</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">7. Changes to Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this privacy policy occasionally. If we make significant changes, we'll notify you via the extension. Continued use of the extension after changes means you accept the updated policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              The extension is not intended for children under 13. We do not knowingly collect data from children. If you're under 13, please do not use this extension.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have questions about this privacy policy or how the extension works:
            </p>
            <ul className="list-none space-y-2 text-gray-300">
              <li>📧 Email: <a href="mailto:alwaysngala@gmail.com" className="text-primary hover:underline">alwaysngala@gmail.com</a></li>
              <li>🌍 Location: Nairobi, Kenya</li>
              <li>👤 Developer: AGN (Adam Ngala)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">10. Legal Compliance</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We comply with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><strong>GDPR (EU):</strong> No data collection = automatic compliance</li>
              <li><strong>CCPA (California):</strong> No data sale, no tracking</li>
              <li><strong>Chrome Web Store Policies:</strong> Full transparency, user control</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Since we don't collect, store, or process user data on servers, most data protection regulations don't apply. Your data never leaves your device.
            </p>
          </section>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 my-12">
            <h3 className="text-xl font-bold mb-4">The Bottom Line</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>We built Attention Intelligence the way we'd want our own data handled.</strong>
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>✓ Your data stays on your device</li>
              <li>✓ We never see what you track</li>
              <li>✓ No accounts, no servers, no surveillance</li>
              <li>✓ You control everything</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Privacy isn't a feature. It's the foundation.
            </p>
          </div>
        </div>
      </article>

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
              <Link href="/" className="text-sm text-gray-400 hover:text-white">
                Home
              </Link>
              <a href="mailto:alwaysngala@gmail.com" className="text-sm text-gray-400 hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
