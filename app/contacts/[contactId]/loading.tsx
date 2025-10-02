import React from 'react';
import Skeleton from '@/components/ui/Skeleton';

export default function Loading() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="flex-shrink-0">
        <div className="mr-8 size-48 rounded-3xl bg-gray" />
      </div>
      <Skeleton />
    </div>
  );
}
