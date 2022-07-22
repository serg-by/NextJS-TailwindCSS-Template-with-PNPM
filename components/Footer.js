import React from 'react';
import Image from 'next/image';



export default function Footer() {
  return (
    <footer className="flex h-24 w-full items-center justify-center">
      <a
        className="flex items-center justify-center gap-2 text-gray-50"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </a>
    </footer>
  )
}
