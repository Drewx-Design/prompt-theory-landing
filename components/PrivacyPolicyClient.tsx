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
      <div className="min-h-screen bg-white text-[var(--neutral-900)] font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-[0_1px_3px_rgba(0,0,0,0.08)] border-b border-[var(--neutral-100)] z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-[var(--primary-500)]">Prompt Theory</Link>
            </div>

            <Link href="/" className="text-[var(--neutral-500)] hover:text-[var(--neutral-900)] transition flex items-center">
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
            <Shield className="text-[var(--primary-500)] mx-auto mb-4" size={48} />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-[var(--neutral-900)]">Your prompts are yours. Here's how we handle them.</p>
            <p className="text-sm text-[var(--neutral-500)] mt-2">Last updated: August 20, 2025</p>
          </div>

          {/* How It Works */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">How It Works</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] border border-[var(--neutral-200)]">
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary-500)]">Local Storage (Default)</h3>
                <p className="text-[var(--neutral-500)]">All prompts stored in your browser. Works completely offline. No account needed.</p>
              </div>

              <div className="bg-[var(--primary-50)] p-6 rounded-lg border-2 border-[var(--primary-500)]">
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary-500)]">Cloud Sync (Optional)</h3>
                <p className="text-[var(--neutral-500)]">Sign in to sync across devices. Your prompts (including full content) sync to secure servers.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] border border-[var(--neutral-200)]">
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary-500)]">Account Options</h3>
                <ul className="space-y-2 text-[var(--neutral-500)]">
                  <li>• No account needed - Local storage only</li>
                  <li>• Google Sign-in - Auto sync</li>
                  <li>• Email magic links - Passwordless sync</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Chrome Permissions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Chrome Permissions</h2>

            <div className="bg-white p-6 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] border border-[var(--neutral-200)]">
              <p className="text-[var(--neutral-500)] mb-4">We request minimal permissions:</p>
              <div className="space-y-4 text-[var(--neutral-500)]">
                <div>
                  <p className="text-[var(--neutral-900)] font-semibold mb-2">🔑 "Read and change data on all websites"</p>
                  <p className="ml-4 mb-2"><strong className="text-[var(--neutral-900)]">Why we need it:</strong> To detect Ctrl+Shift+Space and show your prompt library instantly on any site (ChatGPT, Claude, Notion, Docs, etc.)</p>
                  <p className="ml-4 mb-2"><strong className="text-[var(--neutral-900)]">What it does:</strong> Listens for your hotkey. That's it.</p>
                  <p className="ml-4"><strong className="text-[var(--neutral-900)]">What it doesn't do:</strong> Read page content, track browsing, or access your data on websites.</p>
                </div>
                <div>
                  <p className="text-[var(--neutral-900)] font-semibold mb-1">📋 "Modify clipboard"</p>
                  <p className="ml-4">→ Writes prompts to clipboard when you click them</p>
                  <p className="ml-4">→ Never reads what you've copied from other sources</p>
                </div>
                <div>
                  <p className="text-[var(--neutral-900)] font-semibold mb-1">🔔 "Display notifications"</p>
                  <p className="ml-4">→ Optional sync status updates only</p>
                </div>
                <div>
                  <p className="text-[var(--neutral-900)] font-semibold mb-1">💾 Storage & Side Panel</p>
                  <p className="ml-4">→ Save prompts locally and show the UI</p>
                </div>
              </div>
            </div>
          </section>

          {/* What We Store */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">What We Store</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] border border-[var(--neutral-200)]">
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary-500)]">Local Storage (Always):</h3>
                <ul className="space-y-2 text-[var(--neutral-500)]">
                  <li>• Your prompts and their full content</li>
                  <li>• Projects, collections, and tags</li>
                  <li>• UI preferences (theme, hotkey, pinned prompts)</li>
                  <li>• Local usage counts</li>
                  <li>• Version history</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] border border-[var(--neutral-200)]">
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary-500)]">Cloud Storage (When Logged In):</h3>
                <ul className="space-y-2 text-[var(--neutral-500)]">
                  <li>• Your prompts and their full content</li>
                  <li>• Organization (projects, collections, tags)</li>
                  <li>• Usage counts and timestamps</li>
                  <li>• Your email address (for authentication)</li>
                  <li>• Name and avatar (if using Google OAuth)</li>
                  <li>• Sync metadata</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Analytics & Tracking */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Analytics & Tracking</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] border border-[var(--neutral-200)]">
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary-500)]">Extension Analytics:</h3>
                <ul className="space-y-2 text-[var(--neutral-500)]">
                  <li>• We use Chrome's built-in analytics to understand feature usage</li>
                  <li>• This tracks interactions within the extension only</li>
                  <li>• Helps us prioritize which features to build next</li>
                  <li>• Cannot be disabled</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] border border-[var(--neutral-200)]">
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary-500)]">Usage Data (When Logged In):</h3>
                <ul className="space-y-2 text-[var(--neutral-500)]">
                  <li>• How often you copy each prompt (useCount)</li>
                  <li>• When you last used each prompt (lastUsedAt)</li>
                  <li>• How often you open the extension (quickAccessCount)</li>
                  <li>• Sync events and frequency</li>
                  <li>• Tied to your account email</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Access */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Data Access</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] border border-[var(--neutral-200)]">
                <p className="text-[var(--neutral-500)] mb-4">When you enable cloud sync, your prompts are stored on our servers. As the service provider, we have technical access to this data for:</p>
                <ul className="space-y-2 text-[var(--neutral-500)]">
                  <li>• Backup and recovery</li>
                  <li>• System maintenance</li>
                  <li>• Legal compliance if required</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] border border-[var(--neutral-200)]">
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary-500)]">What We Don't Do:</h3>
                <ul className="space-y-2 text-[var(--neutral-500)]">
                  <li>• Read your prompts for any other purpose</li>
                  <li>• Use prompt content for training or analytics</li>
                  <li>• Share prompt content with third parties</li>
                  <li>• Track which websites you visit</li>
                  <li>• Monitor your clipboard activity</li>
                  <li>• Sell your data</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Your Control */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Your Control</h2>

            <div className="bg-[var(--primary-50)] p-6 rounded-lg border-2 border-[var(--primary-500)]">
              <p className="text-[var(--neutral-500)] mb-4">You can always:</p>
              <ul className="space-y-2 text-[var(--neutral-500)]">
                <li>• Delete specific prompts or everything</li>
                <li>• Work offline (no cloud sync)</li>
                <li>• Sign out for local-only mode</li>
                <li>• Request data export: privacy@prompttheory.dev</li>
                <li>• Delete your account and all cloud data</li>
              </ul>
            </div>
          </section>

          {/* Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Security</h2>

            <div className="bg-white p-6 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] border border-[var(--neutral-200)]">
              <ul className="space-y-2 text-[var(--neutral-500)]">
                <li>• End-to-end encryption for synced data (AES-GCM 256-bit)</li>
                <li>• Secure authentication (no password storage)</li>
                <li>• Regular security updates</li>
                <li>• Database encryption at rest</li>
              </ul>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Third-Party Services</h2>

            <div className="bg-white p-6 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] border border-[var(--neutral-200)]">
              <p className="text-[var(--neutral-500)] mb-4">When signed in, we use:</p>
              <ul className="space-y-2 text-[var(--neutral-500)]">
                <li>• Neon - Database hosting</li>
                <li>• Google OAuth - Authentication</li>
                <li>• Render.com - API hosting</li>
                <li>• Resend - Email delivery</li>
              </ul>
            </div>
          </section>

          {/* Compliance */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Compliance</h2>

            <div className="bg-white p-6 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] border border-[var(--neutral-200)]">
              <p className="text-[var(--neutral-500)]">Not intended for users under 13.</p>
            </div>
          </section>

          {/* Updates */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Updates</h2>

            <div className="bg-white p-6 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] border border-[var(--neutral-200)]">
              <p className="text-[var(--neutral-500)]">We'll notify you if this policy changes. Previous versions on GitHub.</p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Contact</h2>

            <div className="bg-white p-6 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] border border-[var(--neutral-200)]">
              <ul className="space-y-2 text-[var(--neutral-500)]">
                <li><strong className="text-[var(--neutral-900)]">Email:</strong> privacy@prompttheory.dev</li>
                <li><strong className="text-[var(--neutral-900)]">Support:</strong> support@prompttheory.dev</li>
                <li><strong className="text-[var(--neutral-900)]">Response time:</strong> Within 72 hours</li>
              </ul>
            </div>
          </section>

          {/* Trust Message */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-[var(--primary-500)]/10 to-[#6B46C1]/10 p-8 rounded-lg border-2 border-[var(--primary-500)] shadow-[0_4px_6px_rgba(0,102,255,0.1)] text-center">
              <p className="text-[var(--neutral-900)] text-lg font-medium italic">
                Prompt Theory makes money from subscriptions, not your data.
              </p>
            </div>
          </section>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-[var(--neutral-200)]">
            <p className="text-[var(--neutral-500)] mb-4">
              This privacy policy was last updated on August 20, 2025.
            </p>
            <Link href="/" className="text-[var(--primary-500)] hover:text-[var(--primary-600)] transition">
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
