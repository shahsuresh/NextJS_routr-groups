import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-evenly bg-amber-100 rounded-2xl p-5  text-3xl text-amber-800 my-3'> <Link href="/">Home</Link>
    <Link href="/contactList">Contact List</Link>
    <Link href="/service">Service</Link>
    <Link href="/about">About</Link></div>
  )
}

export default Navbar