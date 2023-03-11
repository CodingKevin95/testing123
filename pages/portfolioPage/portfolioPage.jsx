"use client"
import Image from 'next/image'
import aer from '../assets/aer-portfolio.png'
import rps from '../assets/rps.png'
import solar from '../assets/solar-conveyance.png'
import {AiOutlineLink} from 'react-icons/ai'
import styles from './portfolioPage.module.css'

export default function PortfolioPage() {

    const portfolioArray = [
        {
            img: aer,
            description: "Created a website for client's business which recieves 1000's of visits per week. The frontend was made usings CSS, React.js and some react libraries. Google analytics was implimented to help the client create a business plan to increase the proformance of the business.",
            liveLink: "https://aer-nailbar.netlify.app/"
        },
        {
            img: rps,
            description: "Desktop and laptop view only. A classic game that everyone knows and loves, but with a short narrative, an unique UI and interactions to give it a little bit of life. Hope you enjoy!",
            liveLink: "https://codingkevin95.github.io/-rock-paper-scissor/"
        },
        {
            img: solar,
            description: "The objective of this applicatio is to workin a group to display images and information about our solar system. APIs from SpaceX and NASA were used to create this application.",
            liveLink: "https://solar-conveyance-project.netlify.app/"
        },
        // {
        //     img: rps,
        //     description: "Desktop and laptop view only. A classic game that everyone knows and loves, but with a short narrative, an unique UI and interactions to give it a little bit of life. Hope you enjoy!",
        //     liveLink: "https://codingkevin95.github.io/-rock-paper-scissor/"
        // },
    ]

    return (
        <div className={styles.aboutPortfolio}>
            <h1>Projects</h1>
            <div className={styles.portfolioProjectBox}>
            { portfolioArray.map((item, i) => {
                    return (
                        <div class={styles.portfolioProject}
                        key={i}
                        >
                            <Image
                                src={item.img}
                                alt="Picture of the author"
                                className={styles.portfolioImages}
                            />
                            <div className={styles.portfolioIcons}>
                                <a href={`${item.liveLink}`} target="_blank" rel="noreferrer">
                                    <AiOutlineLink className={styles.linkButton}/>
                                </a>
                            </div>
                            <div className={styles.portfolioParagraphBox}>
                                <p className={styles.portfolioParagraph}>
                                    {item.description}
                                </p>
                            </div>    
                        </div>
                    );
                }) }
            </div>
        </div>
    )
}