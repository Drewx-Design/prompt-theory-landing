'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Shield, Lock, Database, Cloud, User, Key, Globe, Settings, AlertCircle, ChevronLeft } from 'lucide-react';

const PrivacyPolicyClient: React.FC = () => {
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
      <div className="min-h-screen bg-white text-[#1A1A1A] font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-[0_1px_3px_rgba(0,0,0,0.08)] border-b border-[#F5F5F5] z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-[#0066FF]">Prompt Theory</Link>
            </div>

            <Link href="/" className="text-[#6B7280] hover:text-[#1A1A1A] transition flex items-center">
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
            <Shield className="text-[#0066FF] mx-auto mb-4" size={48} />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-[#1A1A1A]">Your prompts are yours. Here's how we handle them.</p>
            <p className="text-sm text-[#6B7280] mt-2">Last updated: August 20, 2025</p>
          </div>

          {/* How Prompt Theory Works */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">How Prompt Theory Works</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] border border-[#E5E5E5]">
                <h3 className="text-xl font-semibold mb-3 text-[#0066FF]">Local Storage (Default)</h3>
                <p className="text-[#6B7280]">All your prompts, projects, and settings are stored locally in your browser. Sign in to sync across devices, or stay signed out for local-only storage.</p>
              </div>

              <div className="bg-[#F0F7FF] p-6 rounded-lg border-2 border-[#0066FF]">
                <h3 className="text-xl font-semibold mb-3 text-[#0066FF]">Cloud Sync (When Logged In)</h3>
                <p className="text-[#6B7280]">Sign in to automatically sync your prompts across devices. Your data is encrypted and stored on secure PostgreSQL servers hosted by Neon.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] border border-[#E5E5E5]">
                <h3 className="text-xl font-semibold mb-3 text-[#0066FF]">Account Options</h3>
                <ul className="space-y-2 text-[#6B7280]">
                  <li><strong className="text-[#1A1A1A]">No account needed</strong> - Full functionality with local storage only</li>
                  <li><strong className="text-[#1A1A1A]">Google Sign-in</strong> - Automatic sync across devices</li>
                  <li><strong className="text-[#1A1A1A]">Email Magic Links</strong> - Passwordless sync option</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Chrome Permissions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Chrome Permissions</h2>

            <div className="bg-white p-6 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] border border-[#E5E5E5]">
              <p className="text-[#6B7280] mb-4">We request only what's needed to function:</p>
              <ul className="space-y-2 text-[#6B7280]">
                <li><strong className="text-[#1A1A1A]">Storage</strong> - Save your prompts locally</li>
                <li><strong className="text-[#1A1A1A]">Clipboard</strong> - Copy prompts with one click</li>
                <li><strong className="text-[#1A1A1A]">Active Tab</strong> - Insert prompts where you're working</li>
                <li><strong className="text-[#1A1A1A]">Side Panel</strong> - Show the extension interface</li>
              </ul>
            </div>
          </section>

          {/* Data Handling */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Data Handling</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] border border-[#E5E5E5]">
                <h3 className="text-xl font-semibold mb-3 text-[#0066FF]">What We Store</h3>
                <ul className="space-y-2 text-[#6B7280]">
                  <li>• Your prompts and projects</li>
                  <li>• Organization structure (folders, tags)</li>
                  <li>• UI preferences</li>
                  <li>• Version history (last 10 versions)</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] border border-[#E5E5E5]">
                <h3 className="text-xl font-semibold mb-3 text-[#0066FF]">How Sync Works</h3>
                <p className="text-[#6B7280]">When you're logged in, your data syncs every 5 minutes or on-demand. Synced data includes everything stored locally plus timestamps for conflict resolution.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] border border-[#E5E5E5]">
              <h3 className="text-xl font-semibold mb-3 text-[#0066FF]">Backup & Recovery</h3>
              <ul className="space-y-2 text-[#6B7280]">
                <li><strong className="text-[#1A1A1A]">Local:</strong> Data persists until you delete it</li>
                <li><strong className="text-[#1A1A1A]">Cloud:</strong> 30-day recovery window for deleted items</li>
              </ul>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Third-Party Services</h2>

            <div className="bg-white p-6 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] border border-[#E5E5E5]">
              <p className="text-[#6B7280] mb-4">We work with minimal external services (only when you're signed in):</p>
              <ul className="space-y-2 text-[#6B7280]">
                <li><strong className="text-[#1A1A1A]">Neon</strong> - Database hosting for synced data</li>
                <li><strong className="text-[#1A1A1A]">Google OAuth</strong> - Authentication</li>
                <li><strong className="text-[#1A1A1A]">Render.com</strong> - API hosting</li>
              </ul>
              <p className="text-[#1A1A1A] mt-4 font-semibold">No analytics. No ads. No tracking.</p>
            </div>
          </section>

          {/* Your Control */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Your Control</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#F0F7FF] p-6 rounded-lg border-2 border-[#0066FF]">
                <h3 className="text-xl font-semibold mb-3 text-[#0066FF]">You Can Always:</h3>
                <ul className="space-y-2 text-[#6B7280]">
                  <li>• Delete specific prompts or everything</li>
                  <li>• Work offline anytime</li>
                  <li>• Sign out to use local-only mode</li>
                  <li>• Close your account (90-day recovery window)</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] border border-[#E5E5E5]">
                <h3 className="text-xl font-semibold mb-3 text-[#DC2626]">We Never:</h3>
                <ul className="space-y-2 text-[#6B7280]">
                  <li>• Share data with third parties</li>
                  <li>• Track your usage patterns</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Security</h2>

            <div className="bg-white p-6 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] border border-[#E5E5E5]">
              <ul className="space-y-2 text-[#6B7280]">
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

            <div className="bg-white p-6 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] border border-[#E5E5E5]">
              <p className="text-[#6B7280]">We respect privacy regulations including GDPR and CCPA. Not intended for users under 13.</p>
            </div>
          </section>

          {/* Updates */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Updates</h2>

            <div className="bg-white p-6 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] border border-[#E5E5E5]">
              <p className="text-[#6B7280]">We'll notify you through the extension if this policy changes significantly. Previous versions available on GitHub.</p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Contact</h2>

            <div className="bg-white p-6 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] border border-[#E5E5E5]">
              <ul className="space-y-2 text-[#6B7280]">
                <li><strong className="text-[#1A1A1A]">Email:</strong> privacy@prompttheory.dev</li>
                <li><strong className="text-[#1A1A1A]">Support:</strong> support@prompttheory.dev</li>
                <li><strong className="text-[#1A1A1A]">Response time:</strong> Within 72 hours</li>
              </ul>
            </div>
          </section>

          {/* Trust Message */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-[#0066FF]/10 to-[#6B46C1]/10 p-8 rounded-lg border-2 border-[#0066FF] shadow-[0_4px_6px_rgba(0,102,255,0.1)] text-center">
              <p className="text-[#1A1A1A] text-lg font-medium italic">
                Prompt Theory is built on trust. We make money from subscriptions, not your data.
              </p>
            </div>
          </section>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-[#E5E5E5]">
            <p className="text-[#6B7280] mb-4">
              This privacy policy was last updated on August 20, 2025.
            </p>
            <Link href="/" className="text-[#0066FF] hover:text-[#0052CC] transition">
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default PrivacyPolicyClient;
