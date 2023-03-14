import '@/styles/globals.css'
import { Manrope } from 'next/font/google'
import Navbar from './navbar/Navbar'

const roboto = Manrope({
  subsets: ['latin'],
  // weight:'400'
})

export default function App({ Component, pageProps }) {
  return (
  <main className={roboto.className}>
    {/* <Navbar /> */}
    <Component {...pageProps} />
  </main>
  )
}
