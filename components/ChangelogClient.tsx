'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, Zap, Menu, X } from 'lucide-react';

// Changelog entry type
interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  items: {
    type: 'feature' | 'improvement' | 'fix';
    description: string;
  }[];
}

const changelogEntries: ChangelogEntry[] = [
  {
    version: '1.3.0',
    date: 'October 3, 2025',
    title: 'Dark Mode Edition',
    items: [
      {
        type: 'feature',
        description: 'Complete dark mode support that automatically matches your system preferences',
      },
      {
        type: 'feature',
        description: 'Professional dark color palette designed for extended use',
      },
      {
        type: 'improvement',
        description: 'Enhanced contrast for better readability in any lighting',
      },
      {
        type: 'improvement',
        description: 'All buttons, panels, and dialogs now theme-aware',
      },
    ],
  },
  {
    version: '1.2.2',
    date: 'January 10, 2025',
    title: 'Smarter Sync',
    items: [
      {
        type: 'fix',
        description: 'Fixed issue where prompts created before signing in wouldn\'t sync to the cloud',
      },
      {
        type: 'feature',
        description: 'Prompts created offline now automatically upload when sync is enabled',
      },
      {
        type: 'improvement',
        description: 'Refined left sidebar with clearer hover effects and stronger highlighting',
      },
      {
        type: 'improvement',
        description: 'Larger text for nested folders with smarter spacing',
      },
    ],
  },
  {
    version: '1.2.1',
    date: 'January 9, 2025',
    title: 'Smoother Sign-In',
    items: [
      {
        type: 'fix',
        description: 'Fixed email sign-in flow - button now updates to "Check your email..." after clicking',
      },
      {
        type: 'improvement',
        description: 'Modal closes automatically after successful sign-in via magic link',
      },
    ],
  },
  {
    version: '1.2.0',
    date: 'January 9, 2025',
    title: 'Simpler Setup',
    items: [
      {
        type: 'improvement',
        description: 'Removed confusing "Start Migration" dialog when enabling cloud sync',
      },
      {
        type: 'feature',
        description: 'One-click sync setup - prompts upload automatically when sync is enabled',
      },
    ],
  },
  {
    version: '1.1.1',
    date: 'January 9, 2025',
    title: 'Bug Fixes',
    items: [
      {
        type: 'fix',
        description: 'Stopped migration dialog from appearing every time you opened the extension',
      },
    ],
  },
  {
    version: '1.1.0',
    date: 'January 2, 2025',
    title: 'Cleaner Code',
    items: [
      {
        type: 'improvement',
        description: 'Reorganized entire codebase for faster updates and better reliability',
      },
      {
        type: 'improvement',
        description: 'Improved extension stability and maintainability',
      },
    ],
  },
  {
    version: '1.0.6',
    date: 'December 25, 2024',
    title: 'Critical Stability Fixes',
    items: [
      {
        type: 'fix',
        description: 'Fixed "logout when minimizing Chrome" bug',
      },
      {
        type: 'fix',
        description: 'Fixed background service worker crashes by rewriting long-running task management',
      },
    ],
  },
  {
    version: '1.0.5',
    date: 'November 28, 2024',
    title: 'Drag & Drop',
    items: [
      {
        type: 'feature',
        description: 'Added drag and drop support for prompts and projects',
      },
      {
        type: 'feature',
        description: 'Visual feedback shows where items will land when dragging',
      },
      {
        type: 'improvement',
        description: 'Cleaned up 30+ TypeScript errors for smoother experience',
      },
    ],
  },
  {
    version: '1.0.4',
    date: 'November 27, 2024',
    title: 'Polish & Performance',
    items: [
      {
        type: 'improvement',
        description: 'Prepared for Chrome Web Store launch with production optimizations',
      },
      {
        type: 'improvement',
        description: 'Improved sync reliability and reduced bundle size',
      },
    ],
  },
  {
    version: '1.0.3',
    date: 'November 26, 2024',
    title: 'Better Reliability',
    items: [
      {
        type: 'fix',
        description: 'Deleted prompts no longer reappear after syncing (proper soft-delete filtering)',
      },
      {
        type: 'fix',
        description: 'Improved service worker stability (resolved 1,243+ errors)',
      },
      {
        type: 'improvement',
        description: 'Smarter timeout handling (10-minute limit instead of 5)',
      },
      {
        type: 'improvement',
        description: '90% fewer console warnings',
      },
    ],
  },
  {
    version: '1.0.2',
    date: 'November 25, 2024',
    title: 'Search Overhaul',
    items: [
      {
        type: 'feature',
        description: 'Completely rebuilt search system - 8x better at finding relevant prompts',
      },
      {
        type: 'fix',
        description: 'Fixed search results disappearing when typing additional characters',
      },
      {
        type: 'fix',
        description: 'Navigation panel now stays visible during searches',
      },
      {
        type: 'improvement',
        description: 'Faster search with built-in caching and eliminated race conditions',
      },
    ],
  },
  {
    version: '1.0.1',
    date: 'November 24, 2024',
    title: 'Settings & Sync',
    items: [
      {
        type: 'feature',
        description: 'Added complete settings modal with 5 organized tabs (General, Appearance, Sync, Advanced, About)',
      },
      {
        type: 'feature',
        description: 'New "Unsorted" collection for prompts without a project',
      },
      {
        type: 'feature',
        description: 'New "Trash" collection for deleted items',
      },
      {
        type: 'improvement',
        description: 'Cleaner project counts and improved filtering',
      },
    ],
  },
  {
    version: '1.0.0',
    date: 'November 23, 2024',
    title: 'Initial Release',
    items: [
      {
        type: 'feature',
        description: 'Hotkey access with Ctrl+Shift+Space (Cmd+Shift+Space on Mac)',
      },
      {
        type: 'feature',
        description: 'Fast search - find any prompt in milliseconds',
      },
      {
        type: 'feature',
        description: 'Projects & collections for organizing prompts',
      },
      {
        type: 'feature',
        description: 'Optional cloud sync to access prompts anywhere',
      },
      {
        type: 'feature',
        description: 'Offline-first design - works without internet, syncs when connected',
      },
      {
        type: 'feature',
        description: 'One-click copy to paste into ChatGPT, Claude, etc.',
      },
    ],
  },
];

const ChangelogClient: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'feature':
        return '✨';
      case 'improvement':
        return '🔧';
      case 'fix':
        return '🐛';
      default:
        return '•';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'feature':
        return 'New';
      case 'improvement':
        return 'Improved';
      case 'fix':
        return 'Fixed';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-[0_1px_3px_rgba(0,0,0,0.08)] border-b border-neutral-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-primary-500">
                Prompt Theory
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#features" className="text-neutral-500 hover:text-neutral-900 transition">Features</Link>
              <Link href="/#security" className="text-neutral-500 hover:text-neutral-900 transition">Security</Link>
              <Link href="/#pricing" className="text-neutral-500 hover:text-neutral-900 transition">Pricing</Link>
              <Link href="/changelog" className="text-neutral-500 hover:text-neutral-900 transition">Changelog</Link>
              <a
                href="https://chromewebstore.google.com/detail/prompt-theory/cckiiafaifdbfbookaiihfmfkceceoko"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-primary-600 hover:shadow-md transition-all duration-200"
              >
                Install Free Extension
              </a>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-neutral-100 shadow-lg">
            <div className="px-4 pt-3 pb-4 space-y-2">
              <Link
                href="/#features"
                className="block px-3 py-3 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/#security"
                className="block px-3 py-3 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Security
              </Link>
              <Link
                href="/#pricing"
                className="block px-3 py-3 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/changelog"
                className="block px-3 py-3 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Changelog
              </Link>
              <a
                href="https://chromewebstore.google.com/detail/prompt-theory/cckiiafaifdbfbookaiihfmfkceceoko"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-primary-500 text-white px-3 py-3 rounded-md shadow-sm hover:bg-primary-600 hover:shadow-md transition-all duration-200 mt-3 font-semibold"
              >
                Install Free Extension
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Changelog Content */}
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <Zap className="text-primary-500 mx-auto mb-4" size={48} />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">What's New in Prompt Theory</h1>
            <p className="text-lg text-neutral-500">
              Current Version: 1.3.0 • Last updated October 3, 2025
            </p>
          </div>

          {/* Changelog Entries */}
          <div className="space-y-12">
            {changelogEntries.map((entry, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] border border-neutral-200 hover:shadow-[0_4px_6px_rgba(0,0,0,0.07),0_2px_4px_rgba(0,0,0,0.05)] transition-shadow duration-200"
              >
                {/* Version Header */}
                <div className="mb-6 pb-4 border-b border-neutral-200">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h2 className="text-2xl font-bold text-primary-500">
                      v{entry.version}
                    </h2>
                    <div className="flex items-center text-neutral-500">
                      <Calendar size={16} className="mr-2" />
                      <span>{entry.date}</span>
                    </div>
                  </div>
                  {entry.title && (
                    <h3 className="text-xl font-semibold mt-2">{entry.title}</h3>
                  )}
                </div>

                {/* Changes List */}
                <ul className="space-y-3">
                  {entry.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="mr-3 text-xl flex-shrink-0">
                        {getTypeIcon(item.type)}
                      </span>
                      <div className="flex-1">
                        <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded bg-primary-50 text-primary-500 mr-2">
                          {getTypeLabel(item.type)}
                        </span>
                        <span className="text-neutral-900">{item.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Empty State (shown when no entries) */}
          {changelogEntries.length === 0 && (
            <div className="text-center py-16">
              <p className="text-neutral-500 text-lg">
                No changelog entries yet. Check back soon for updates!
              </p>
            </div>
          )}

          {/* Footer */}
          <div className="text-center pt-12 border-t border-neutral-200 mt-12">
            <h2 className="text-2xl font-bold mb-6">Get Prompt Theory</h2>
            <div className="mb-8">
              <p className="text-neutral-500">
                <strong>Support:</strong>{' '}
                <a
                  href="mailto:support@prompttheory.com"
                  className="text-primary-500 hover:text-primary-600 transition"
                >
                  support@prompttheory.com
                </a>
              </p>
            </div>
            <p className="text-neutral-500 italic mb-6 max-w-2xl mx-auto">
              Prompt Theory is an indie Chrome extension built for people who use AI tools daily. Save your best prompts. Access them instantly. Never start from scratch again.
            </p>
            <Link
              href="/"
              className="inline-block text-primary-500 hover:text-primary-600 transition font-semibold"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangelogClient;
