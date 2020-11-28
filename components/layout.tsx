  import Prism from 'prismjs'
import { useEffect } from 'react'
import Alert from './alert'
import Meta from './meta'

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
      </div>
    </>
  )
}

export default Layout
