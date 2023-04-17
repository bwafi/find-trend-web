import React, { ReactNode, useState } from 'react';
import Navbar from './Navbar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex w-full flex-col bg-black">
      <Navbar />
      {children}
    </div>
  );
}
