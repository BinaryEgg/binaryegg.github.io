import Link from 'next/link'
import CustomHead from "../components/custom-head";
import styles from '../styles/404.module.css'

export default function ErrorPage() {
    return (
        <div className={styles.container}>
            <CustomHead title="404"/>
            <div className={styles.content}>
                <span className={styles.error_code}>404</span>
                <span className={styles.error_info}>This page could not be found.</span>
                <span className={styles.error_info}>Back to <Link href='/'><span className={styles.pointer}
                                                   id='text_yellow_underline'>BinaryEgg</span></Link></span>
            </div>
        </div>
    )
}
