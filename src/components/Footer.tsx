import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <div>
    <div className="h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-red flex align-items justify-between">
      <Link href="/" className="font-bold xl">Bella Vita</Link>
    <p>All Rights Reserved</p>
    </div>
    </div>
  )
}

export default Footer;
