import Head from 'next/head'
import Link from 'next/link'
import Foot from '../components/foot'
import styles from '../styles/Home.module.css'
import pastoryStyles from '../styles/Pastory.module.css'

export default function Home() {
    // const router = useRouter();
    // <ul>
    //     <li className={router.pathname == '/' ? 'active' : ''}>
    //       <Link href='/'>home</Link>
    //     </li>
    //     <li className={router.pathname == '/about' ? 'active' : ''}>
    //       <Link href='/about'>about</Link>
    //     </li>
    //   </ul>
    return (
        <main>
            <Head>
                <title>BinaryEgg</title>
            </Head>
            <div className={styles.header}>
                <span id='text_yellow_underline'>Home</span>
                <span>Blog</span>
            </div>
            <div className={styles.content_container}>
                <div className={styles.intro_container}>
                    <h1>👋Hi there, this is <span id='text_yellow_underline'>BinaryEgg</span>.</h1>
                    <p>We create <del>tools</del> apps.</p>
                </div>
                <Link href='/app/pastory'>
                    <div className={pastoryStyles.section1_bg}>
                        <div className={`${pastoryStyles.section1} ${styles.pastory_container}`}>
                            <img src='/images/pastory/icon.png' alt='Pastory Icon' className={pastoryStyles.icon}
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
