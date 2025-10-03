import { Metadata } from 'next';
import LandingPageClient from '@/components/LandingPageClient';
import {
  generateSoftwareApplicationSchema,
  generateFAQSchema,
  generateOrganizationSchema,
  generateBreadcrumbSchema
} from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Prompt Theory - Professional AI Prompt Management',
  description: 'Never lose meticulously crafted AI prompts again. Professional prompt management for engineers, designers, and technical professionals who ship with AI.',
  alternates: {
    canonical: 'https://prompttheory.dev',
  },
};

export default function HomePage() {
  const softwareSchema = generateSoftwareApplicationSchema();
  const faqSchema = generateFAQSchema();
  const orgSchema = generateOrganizationSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://prompttheory.dev' }
  ]);

  return (
    <>
      {/* Schema Markup - Server-rendered for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Client-side interactive component */}
      <LandingPageClient />
    </>
  );
}
