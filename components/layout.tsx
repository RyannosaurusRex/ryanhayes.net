  import Head from 'next/head'
import Prism from 'prismjs'
import React, { useEffect } from 'react'
import Alert from './alert'
import Meta from './meta'


declare function prettyPrint(): void;

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  useEffect(() => {
    Prism.highlightAll();
    (function(){ prettyPrint(); });
  }, [])
  return (
    <>
      <Meta />
      <Head>
        <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"></script>
      </Head>
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
