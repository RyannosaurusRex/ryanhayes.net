import { AppProps } from 'next/app'
import '../styles/tailwind.css'
import '../styles/prism.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
