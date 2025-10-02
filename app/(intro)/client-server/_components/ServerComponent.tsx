import React from 'react';
import { prisma } from '@/db';

export default async function ServerComponent() {
  console.log('Rendering ServerComponent');

  // We can access our database directly from the server component
  const data = await prisma.contact.findMany();

  return (
    <div className="rounded border-2 border-blue-500 p-4">
      {data[1].first}
      ServerComponent
    </div>
  );
}
