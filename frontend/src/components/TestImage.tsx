import Image from 'next/image';
import React from 'react';

export default function TestImage() {
  return (
    <section className="mx-auto w-full">
      <Image
        src="/images/logo.png"
        alt={'Logo of LunarEclipse'}
        width={300}
        height={300}
        priority={true}
      />
    </section>
  );
}
