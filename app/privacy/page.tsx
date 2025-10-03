import { Metadata } from 'next';
import PrivacyPolicyClient from '@/components/PrivacyPolicyClient';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Prompt Theory Privacy Policy - Your prompts are yours. Here\'s how we handle them.',
  alternates: {
    canonical: 'https://prompttheory.dev/privacy',
  },
};

export default function PrivacyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://prompttheory.dev' },
    { name: 'Privacy Policy', url: 'https://prompttheory.dev/privacy' }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PrivacyPolicyClient />
    </>
  );
}
