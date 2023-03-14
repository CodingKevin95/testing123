import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import IntroPage from './introPage/introPage'
// import '../styles/IntroPage.module.css'
import { Manrope } from 'next/font/google'
import PortfolioPage from './portfolioPage/portfolioPage'
import IntroPage2 from './introPage2/introPage2'
import Footer from './footer/footer'

const roboto = Manrope({
  subsets: ['latin'],
  weight:'400'
})

export default function Home() {
  return (
    <>
      <IntroPage/>
      <IntroPage2/>
      <PortfolioPage/>
      <Footer/>
    </>
  )
}
