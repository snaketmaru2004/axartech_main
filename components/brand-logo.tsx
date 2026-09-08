'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function BrandLogo({ href = '/' }: { href?: string }) {
  return (
    <Link href={href} className="inline-flex items-center rounded-lg px-1 py-1" aria-label="AxarTech home">
      <Image
        src="/logo.svg"
        alt="AxarTech"
        width={150}
        height={36}
        priority
        className="h-9 w-auto object-contain dark:hidden"
      />
      <Image
        src="/logo-final.svg"
        alt="AxarTech"
        width={150}
        height={36}
        priority
        className="hidden h-9 w-auto object-contain dark:block"
      />
    </Link>
  )
}
