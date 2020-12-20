  import Head from 'next/head'
import Prism from 'prismjs'
import React, { useEffect } from 'react'
import Alert from './alert'
import Footer from './Footer'
import Meta from './meta'


declare function prettyPrint(): void;

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [])
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
