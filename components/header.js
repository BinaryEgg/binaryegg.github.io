import styles from "../styles/components/header.module.css"
import {useRouter} from "next/router"
import Link from "next/link"

export default function Header() {
    const router = useRouter();
    return (
        <div className={styles.header}>
            <Link href='/'><span id={router.pathname === '/' ? 'text_yellow_underline' : ''}>Home</span></Link>
            <Link href='/blog'><span id={router.pathname === '/blog' ? 'text_yellow_underline' : ''}>Blog</span></Link>
        </div>
    )
}
