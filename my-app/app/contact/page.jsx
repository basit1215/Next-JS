import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <>
      <h1>Contact</h1>
      <Link href="/contact/whatsapp">WHATSAPP</Link>
      <Link href="/contact/facebook">FACEBOOK</Link>
      <Link href="/contact/instagram">INSTAGRAM</Link>
    </>
  )
}

export default Contact