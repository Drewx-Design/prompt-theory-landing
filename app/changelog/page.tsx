import { Metadata } from 'next';
import ChangelogClient from '@/components/ChangelogClient';

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'Latest updates, new features, and improvements to Prompt Theory.',
};

export default function ChangelogPage() {
  return <ChangelogClient />;
}
