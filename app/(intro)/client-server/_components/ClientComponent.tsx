'use client';

import React from 'react';

export default function ClientComponent() {
  console.log('Rendering ClientComponent');

  // Without "use client", we cannot use onClick or other client-side hooks, useState, useEffect, window.location
  return (
    <div className="rounded border-2 border-red-500 p-4">
      ClientComponent
      <button
        onClick={() => {
          alert('Clicked!');
        }}
      >
        Click me
      </button>
    </div>
  );
}
