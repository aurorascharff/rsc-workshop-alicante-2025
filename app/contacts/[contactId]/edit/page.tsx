import { Suspense } from 'react';
import ContactForm from './_components/ContactForm';

type PageProps = {
  params: Promise<{
    contactId: string;
  }>;
};

export default async function EditContactPage({ params }: PageProps) {
  const contactId = (await params).contactId;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactForm contactId={contactId} />;
    </Suspense>
  );
}
