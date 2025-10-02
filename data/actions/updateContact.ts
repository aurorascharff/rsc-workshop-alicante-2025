'use server';

import { redirect } from 'next/navigation';
import { prisma } from '@/db';
import { contactSchema } from '@/validations/contactSchema';

export async function updateContact(contactId: string, formData: FormData) {
  const data = Object.fromEntries(formData);
  const result = contactSchema.parse(data);

  await prisma.contact.update({
    data: result,
    where: { id: contactId },
  });

  redirect(`/contacts/${contactId}`);
}
