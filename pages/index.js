import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import IntroPage from './introPage/introPage'
// import '../styles/IntroPage.module.css'
import { Manrope } from 'next/font/google'
import PortfolioPage from './portfolioPage/portfolioPage'

const roboto = Manrope({
  subsets: ['latin'],
  weight:'400'
})

export default function Home() {
  return (
    <>
      <IntroPage/>
      <PortfolioPage/>
    </>
  )
}
