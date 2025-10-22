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
                            <Link
                                href="https://www.producthunt.com/posts/pastory?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-pastory"
                                target="_blank">
                                <img className={pastoryStyles.product_hunt}
                                     src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=290053&theme=light"
                                     alt="Pastory - Clipboard History Manager | Product Hunt"/></Link>
                            <Link href='https://apps.apple.com/us/app/pastory/id1560463189'>
                                <img className={pastoryStyles.download_from_mac_app_store}
                                     src='/images/download_from_mac_app_store.svg'
                                     alt='Download from mac app store'
                                     width='180px'/></Link>
                            <Link href='/app/pastory/updates/Pastory-latest.zip'>
                                <span className={pastoryStyles.download_directly}>Download</span>
                            </Link>
                            <span className={pastoryStyles.info}>Require macOS 10.14 or later</span>
                        </div>
                    </div>
                </Link>
            </div>
            <Foot/>
        </main>
    )
}
