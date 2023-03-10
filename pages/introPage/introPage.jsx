// import './IntroPage.css'
// import '@/styles/IntroPage.css'
import {BsArrow90DegRight} from 'react-icons/bs'
// import { motion } from 'framer-motion'
import styles from './IntroPage.module.css'
import { Manrope } from 'next/font/google'

const roboto = Manrope({
  subsets: ['latin'],
  weight:'400'
})


export default function IntroPage() {
    return (
        // <motion.div className='introPage'
        // initial={{opacity: 0,}}
        // animate={{opacity: 1,}}
        // exit={{opacity: 0, }}
        // transition={{delay:.25}}
        // >
        <div className={styles.introPage}>
            <div className={styles.backgroundColor}></div>
            <div className={styles.leftAboutMe}>
                <h1 className={styles.introTitle}>Hi, my name is Kevin and I'm a software developer 👋</h1>
            </div>
            <div className={styles.aboutMe}>
                <p className={styles.aboutMeParagraph}>
                I'm a React.JS developer with experience in building client and server-side web applications.Though I mainly work with React ecosystem, I'm always actively learning new tools and technology. On the Backend, I have experience with NodeJS, Express, MongoDB, SQL and CMS.
                </p>
                <p className={styles.aboutMeParagraph}>
                I love working and interacting with people, colleauge and clients to help come up with solution. I strive for self improvement and am always eager to take on any challenge.
                </p>
                <a href='/contact' rel="noreferrer" className={styles.contactSection}>
                <BsArrow90DegRight/>
                <button className={styles.contactButton}>Let's chat</button>
                </a>
            </div>
        </div>
        // </motion.div>
    )
}