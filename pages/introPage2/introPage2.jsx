import styles from './introPage2.module.css'

export default function IntroPage2() {
    return (
        <div className={styles.introParagraph}>
            <p className={styles.paragraph}>
                I'm a <d className={styles.react}>React.JS</d> developer with experience of building client and server-side web applications.Though I mainly work with the React ecosystem, I'm always actively learning new tools and technology. At the backend, I have experience with NodeJS, Express, MongoDB, SQL and CMS.
            </p>
        </div>
    )
}