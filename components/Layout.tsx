import React, { ReactNode, useState } from 'react';
import Navbar from './Navbar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full mx-auto flex-col bg-black">
      <Navbar />
      {children}
    </div>
  );
}
