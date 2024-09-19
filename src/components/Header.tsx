import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='flex bg-slate-200 gap-3 p-3'>
        <Link href="/">Home</Link>
        <Link href="/about">about</Link>
        <Link href="/address">address</Link>
        <Link href="/contact">contact</Link>
    </div>
  )
}

export default Header