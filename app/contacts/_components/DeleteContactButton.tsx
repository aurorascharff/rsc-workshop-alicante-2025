'use client';

import React from 'react';
import SubmitButton from '@/components/ui/SubmitButton';
import { deleteContact } from '@/data/actions/deleteContact';

export default function DeleteContactButton({ contactId }: { contactId: string }) {
  return (
    <form
      action={async () => {
        const response = confirm('Are you sure you want to delete this contact?');
        if (response) {
          await deleteContact(contactId);
        }
      }}
    >
      <SubmitButton type="submit" theme="destroy">
        Delete
      </SubmitButton>
    </form>
  );
}
