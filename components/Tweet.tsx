import Image from 'next/image';
import React from 'react';

export default function Tweet() {
  return (
    <div className="w-full mt-6">
      <div className="lg:w-8/12 w-full flex space-y-6 flex-col items-center mx-auto">
        <Image src="/img/tweet-1.jpg" alt="tweet" width={600} height={600} className="h-auto w-auto" />
        <Image src="/img/tweet-2.jpg" alt="tweet" width={600} height={600} className="h-auto w-auto" />
        <Image src="/img/tweet-3.jpg" alt="tweet" width={600} height={600} className="h-auto w-auto" />
      </div>
    </div>
  );
}
