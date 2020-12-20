import Prism from 'prismjs'
import React, { useEffect } from 'react'
import Alert from './alert'
import BottomFooter from './BottomFooter'
import Footer from './BottomFooter'
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
        <BottomFooter />
      </div>
    </>
  )
}

export default Layout
