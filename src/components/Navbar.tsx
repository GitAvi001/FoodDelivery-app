import React from 'react'
import Menu from './Menu';
import Link from 'next/link';
import CartIcon from './Carticon';
import Image from 'next/image';

const Navbar = () => {

  const user = false;
  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
        {/*Left links*/}
        <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>

      <div className="text-xl md:font-bold md:text-center flex-1">
        <Link href={"/"}>Bella Vita</Link>
        </div>

        {/*Mobile menu*/}
      <div>
        <Menu/>
      </div>

      {/*Right links*/}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
        
        <Image src="/phone.png" alt="" width={20} height={20} />

        <span>076-4572910</span>
        </div>
        
        {!user ? (
        
        <Link href="/login">Login</Link>
        ) : (
        <Link href="/orders">Orders</Link>
        )}
        <CartIcon/>
        <Link href="/">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar;
