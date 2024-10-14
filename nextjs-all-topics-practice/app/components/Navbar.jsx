import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
  <>
  <div>
   <Link href="/">HOME</Link>
   <Link href="about">ABOUT</Link>
   <Link href="contact">CONTACT</Link>
  </div>
  </>
  )
}

export default Navbar