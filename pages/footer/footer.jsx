import styles from "./footer.module.css"

export default function footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.contact}>
                <div className={styles.contactSectionTitle}>Contact</div>
                <a className={styles.contactSection} href="mailto:kevinson95@gmail.com">Email</a>
                <a className={styles.contactSection} href='https://github.com/CodingKevin95' target="_blank">GitHub</a>
                <a className={styles.contactSection} href='https://www.linkedin.com/in/kevins-on/' target="_blank">LinkedIn</a>
                <a className={styles.contactSection} href='https://content.celero.io/s/5ba576bd/kevin-son-resumedocx-1/' target="_blank">Resume</a>
            </div>
        </div>
    )
}