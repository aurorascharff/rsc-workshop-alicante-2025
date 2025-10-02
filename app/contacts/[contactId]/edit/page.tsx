import { Suspense } from 'react';
import Skeleton from '@/components/ui/Skeleton';
import ContactForm from './_components/ContactForm';

type PageProps = {
  params: Promise<{
    contactId: string;
  }>;
};

export default async function EditContactPage({ params }: PageProps) {
  const contactId = (await params).contactId;
  return (
    <Suspense fallback={<Skeleton />}>
      <ContactForm contactId={contactId} />;
    </Suspense>
  );
}
