import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Database, Cloud, User, Key, Globe, Settings, AlertCircle, ChevronLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://prompttheory.dev/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Privacy Policy",
        "item": "https://prompttheory.dev/privacy"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-[#0A0F0A] text-[#E5E7E5] font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0A0F0A]/90 backdrop-blur-md border-b border-[#1F2F1F] z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-[#00D37F]">Prompt Theory</Link>
            </div>
            
            <Link to="/" className="text-[#9CA39C] hover:text-[#E5E7E5] transition flex items-center">
              <ChevronLeft className="mr-1" size={16} />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Privacy Policy Content */}
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <Shield className="text-[#00D37F] mx-auto mb-4" size={48} />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-[#E5E7E5]">Your prompts are yours. Here's how we handle them.</p>
            <p className="text-sm text-[#9CA39C] mt-2">Last updated: August 20, 2025</p>
          </div>

          {/* How Prompt Theory Works */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">How Prompt Theory Works</h2>
            
            <div className="space-y-6">
              <div className="bg-[#0F1A0F] p-6 rounded border border-[#1F2F1F]">
                <h3 className="text-xl font-semibold mb-3 text-[#00D37F]">Local Storage (Default)</h3>
                <p className="text-[#9CA39C]">All your prompts, projects, and settings are stored locally in your browser. Sign in to sync across devices, or stay signed out for local-only storage.</p>
              </div>

              <div className="bg-[#0F1A0F] p-6 rounded border border-[#00D37F]/30">
                <h3 className="text-xl font-semibold mb-3 text-[#00D37F]">Cloud Sync (When Logged In)</h3>
                <p className="text-[#9CA39C]">Sign in to automatically sync your prompts across devices. Your data is encrypted and stored on secure PostgreSQL servers hosted by Neon.</p>
              </div>

              <div className="bg-[#0F1A0F] p-6 rounded border border-[#1F2F1F]">
                <h3 className="text-xl font-semibold mb-3 text-[#00D37F]">Account Options</h3>
                <ul className="space-y-2 text-[#9CA39C]">
                  <li><strong className="text-[#E5E7E5]">No account needed</strong> - Full functionality with local storage only</li>
                  <li><strong className="text-[#E5E7E5]">Google Sign-in</strong> - Automatic sync across devices</li>
                  <li><strong className="text-[#E5E7E5]">Email Magic Links</strong> - Passwordless sync option</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Chrome Permissions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Chrome Permissions</h2>
            
            <div className="bg-[#0F1A0F] p-6 rounded border border-[#1F2F1F]">
              <p className="text-[#9CA39C] mb-4">We request only what's needed to function:</p>
              <ul className="space-y-2 text-[#9CA39C]">
                <li><strong className="text-[#E5E7E5]">Storage</strong> - Save your prompts locally</li>
                <li><strong className="text-[#E5E7E5]">Clipboard</strong> - Copy prompts with one click</li>
                <li><strong className="text-[#E5E7E5]">Active Tab</strong> - Insert prompts where you're working</li>
                <li><strong className="text-[#E5E7E5]">Side Panel</strong> - Show the extension interface</li>
              </ul>
            </div>
          </section>

          {/* Data Handling */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Data Handling</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#0F1A0F] p-6 rounded border border-[#1F2F1F]">
                <h3 className="text-xl font-semibold mb-3 text-[#00D37F]">What We Store</h3>
                <ul className="space-y-2 text-[#9CA39C]">
                  <li>• Your prompts and projects</li>
                  <li>• Organization structure (folders, tags)</li>
                  <li>• UI preferences</li>
                  <li>• Version history (last 10 versions)</li>
                </ul>
              </div>

              <div className="bg-[#0F1A0F] p-6 rounded border border-[#1F2F1F]">
                <h3 className="text-xl font-semibold mb-3 text-[#00D37F]">How Sync Works</h3>
                <p className="text-[#9CA39C]">When you're logged in, your data syncs every 5 minutes or on-demand. Synced data includes everything stored locally plus timestamps for conflict resolution.</p>
              </div>
            </div>

            <div className="bg-[#0F1A0F] p-6 rounded border border-[#1F2F1F]">
              <h3 className="text-xl font-semibold mb-3 text-[#00D37F]">Backup & Recovery</h3>
              <ul className="space-y-2 text-[#9CA39C]">
                <li><strong className="text-[#E5E7E5]">Local:</strong> Data persists until you delete it</li>
                <li><strong className="text-[#E5E7E5]">Cloud:</strong> 30-day recovery window for deleted items</li>
              </ul>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Third-Party Services</h2>
            
            <div className="bg-[#0F1A0F] p-6 rounded border border-[#1F2F1F]">
              <p className="text-[#9CA39C] mb-4">We work with minimal external services (only when you're signed in):</p>
              <ul className="space-y-2 text-[#9CA39C]">
                <li><strong className="text-[#E5E7E5]">Neon</strong> - Database hosting for synced data</li>
                <li><strong className="text-[#E5E7E5]">Google OAuth</strong> - Authentication</li>
                <li><strong className="text-[#E5E7E5]">Render.com</strong> - API hosting</li>
              </ul>
              <p className="text-[#E5E7E5] mt-4 font-semibold">No analytics. No ads. No tracking.</p>
            </div>
          </section>

          {/* Your Control */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Your Control</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#0F1A0F] p-6 rounded border border-[#00D37F]/30">
                <h3 className="text-xl font-semibold mb-3 text-[#00D37F]">You Can Always:</h3>
                <ul className="space-y-2 text-[#9CA39C]">
                  <li>• Delete specific prompts or everything</li>
                  <li>• Work offline anytime</li>
                  <li>• Sign out to use local-only mode</li>
                  <li>• Close your account (90-day recovery window)</li>
                </ul>
              </div>

              <div className="bg-[#0A0F0A] p-6 rounded border border-red-500/30">
                <h3 className="text-xl font-semibold mb-3 text-red-400">We Never:</h3>
                <ul className="space-y-2 text-[#9CA39C]">
                  <li>• Share data with third parties</li>
                  <li>• Track your usage patterns</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Security</h2>
            
            <div className="bg-[#0F1A0F] p-6 rounded border border-[#1F2F1F]">
              <ul className="space-y-2 text-[#9CA39C]">
                <li>• HTTPS encryption for all transfers</li>
                <li>• Secure authentication tokens</li>
                <li>• Rate limiting on API requests</li>
                <li>• Regular security updates</li>
              </ul>
            </div>
          </section>

          {/* Compliance */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Compliance</h2>
            
            <div className="bg-[#0F1A0F] p-6 rounded border border-[#1F2F1F]">
              <p className="text-[#9CA39C]">We respect privacy regulations including GDPR and CCPA. Not intended for users under 13.</p>
            </div>
          </section>

          {/* Updates */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Updates</h2>
            
            <div className="bg-[#0F1A0F] p-6 rounded border border-[#1F2F1F]">
              <p className="text-[#9CA39C]">We'll notify you through the extension if this policy changes significantly. Previous versions available on GitHub.</p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Contact</h2>
            
            <div className="bg-[#0F1A0F] p-6 rounded border border-[#1F2F1F]">
              <ul className="space-y-2 text-[#9CA39C]">
                <li><strong className="text-[#E5E7E5]">Email:</strong> privacy@prompttheory.dev</li>
                <li><strong className="text-[#E5E7E5]">Support:</strong> support@prompttheory.dev</li>
                <li><strong className="text-[#E5E7E5]">Response time:</strong> Within 72 hours</li>
              </ul>
            </div>
          </section>

          {/* Trust Message */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-[#00D37F]/10 to-[#00A865]/10 p-8 rounded border border-[#00D37F] text-center">
              <p className="text-[#E5E7E5] text-lg font-medium italic">
                Prompt Theory is built on trust. We make money from subscriptions, not your data.
              </p>
            </div>
          </section>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-[#1F2F1F]">
            <p className="text-[#9CA39C] mb-4">
              This privacy policy was last updated on August 20, 2025.
            </p>
            <Link to="/" className="text-[#00D37F] hover:text-[#00A865] transition">
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;