export function generateSoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Prompt Theory',
    applicationCategory: 'ProductivityApplication',
    operatingSystem: 'Chrome',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    },
    description: 'Professional AI prompt management Chrome extension for engineers, designers, and technical professionals. Organize, version, and access AI prompts instantly with keyboard shortcuts.',
    url: 'https://prompttheory.dev',
    image: 'https://prompttheory.dev/images/promotional-small-440x280.png',
    author: {
      '@type': 'Organization',
      name: 'Prompt Theory',
      url: 'https://prompttheory.dev'
    },
    downloadUrl: 'https://chromewebstore.google.com/detail/prompt-theory/cckiiafaifdbfbookaiihfmfkceceoko',
    softwareVersion: '1.0',
    softwareHelp: {
      '@type': 'WebPage',
      url: 'https://prompttheory.dev'
    },
    featureList: [
      'Unlimited prompts and projects',
      'Instant access with Cmd+Shift+Space',
      'Version history tracking',
      'Project-based organization',
      'Fast search (300ms)',
      'Cloud sync'
    ]
  };
}

export function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Prompt Theory?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Prompt Theory is a professional Chrome extension for managing AI prompts. It helps engineers, designers, and technical professionals organize, version, and access their AI prompts instantly across ChatGPT, Claude, and other AI tools.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is Prompt Theory free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Prompt Theory offers a free tier with unlimited prompts, unlimited projects, basic search, 30-day history, and cloud sync. Pro and Team tiers with advanced features are coming soon.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do I access my prompts in Prompt Theory?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use the keyboard shortcut Cmd+Shift+Space (Mac) or Ctrl+Shift+Space (Windows) in any AI tool to instantly access your entire prompt library in 300ms.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is my data secure with Prompt Theory?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Your prompts stay yours with complete ownership and control. We don\'t sell your data, you can delete anything anytime, and we use simple, transparent storage with clear data practices.'
        }
      },
      {
        '@type': 'Question',
        name: 'What AI tools does Prompt Theory work with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Prompt Theory works with all major AI platforms including ChatGPT, Claude, Google Gemini, and any web-based AI tool. The extension integrates seamlessly with your browser to provide instant prompt access anywhere.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I organize my prompts by project?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Prompt Theory allows you to organize prompts by project, workflow, or any system that makes sense for your work. You can create unlimited projects and categorize prompts for easy retrieval.'
        }
      }
    ]
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Prompt Theory',
    url: 'https://prompttheory.dev',
    logo: 'https://prompttheory.dev/images/icon-128.png',
    description: 'Professional prompt management for people who ship with AI.',
    foundingDate: '2024',
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'support@prompttheory.dev',
      availableLanguage: 'English'
    }
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}
