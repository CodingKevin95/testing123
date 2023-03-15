// import './IntroPage.css'
// import '@/styles/IntroPage.css'
import {BsArrow90DegRight} from 'react-icons/bs'
// import { motion } from 'framer-motion'
import styles from './IntroPage.module.css'
import kevin from '../assets/photo-of-kevin.jpg'
import Image from 'next/image'

export default function IntroPage() {

    const scrollToBottom = () =>{ 
        window.scrollTo({ 
          top: document.documentElement.scrollHeight, 
          behavior: 'smooth'
        }); 
      }; 

    return (
        // <motion.div className='introPage'
        // initial={{opacity: 0,}}
        // animate={{opacity: 1,}}
        // exit={{opacity: 0, }}
        // transition={{delay:.25}}
        // >
        <div className={styles.introPage}>
            <div className={styles.backgroundColor}></div>
            <div className={styles.backgroundColor2}></div>
            <div className={styles.leftAboutMe}>
                {/* <h1 className={styles.introTitle}>Hi, my name is Kevin and I'm a software developer 👋</h1> */}
                <Image
              src={kevin}
              alt="Picture of the author"
              className={styles.imageOfKevin}
            />
            </div>
            <div className={styles.aboutMe}>
                {/* <p className={styles.aboutMeParagraph}>
                I'm a React.JS developer with experience of building client and server-side web applications.Though I mainly work with the React ecosystem, I'm always actively learning new tools and technology. At the backend, I have experience with NodeJS, Express, MongoDB, SQL and CMS.
                </p> */}
                <h1 className={styles.introTitle}>Hi, my name is Kevin and I'm a software developer 👋</h1>
                <p className={styles.aboutMeParagraph}>
                I love working and interacting with people, colleagues and clients to help come up with solutions. I strive for self improvement and am always eager to take on any challenge.
                </p>
                <a className={styles.contactSection}>
                    <BsArrow90DegRight/>
                    <button className={styles.contactButton} onClick={scrollToBottom}>Let's get in touch</button>
                    <div className={styles.highlightContactButton}></div>
                    <div className={styles.highlightContactButton2}></div>
                </a>
            </div>
        </div>
        // </motion.div>
    )
}