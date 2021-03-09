import Link from 'next/link'
import CustomHead from '../components/custom-head'
import Foot from '../components/foot'
import Header from '../components/header'
import styles from '../styles/Home.module.css'
import pastoryStyles from '../styles/Pastory.module.css'

export default function Home() {
    return (
        <main>
            <CustomHead/>
            <Header/>
            <div className={styles.content_container}>
                <div className={styles.intro_container}>
                    <h1>👋Hi there, this is <span id='text_yellow_underline'>BinaryEgg</span>.</h1>
                    <p>We create <del>tools</del> apps.</p>
                </div>
                <Link href='/app/pastory'>
                    <div id='pointer' className={pastoryStyles.section1_bg}>
                        <div className={`${pastoryStyles.section1} ${styles.pastory_container}`}>
                            <img src='/images/pastory/icon.webp' alt='Pastory Icon' className={pastoryStyles.icon}
                                 width='120px' height='120px'/>
                            <h1><span id="text_yellow_underline">Pastory</span></h1>
                            <p>A new way to manage your clipboard history.</p>
                            <img className={pastoryStyles.download_from_mac_app_store}
                                 src='/images/download_from_mac_app_store.svg' alt='Download from mac app store'
                                 width='160px' height='40px'/>
                            <span className={pastoryStyles.info}>Require macOS 10.14 or later</span>
                        </div>
                    </div>
                </Link>
            </div>
            <Foot/>
        </main>
    )
}
