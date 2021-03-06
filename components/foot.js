import styles from '../styles/components/foot.module.css'
import Link from "next/link";

const Foot = () => (
    <div className={styles.container}>
        <p><a href="mailto:contact@binaryegg.com">Email</a>﹒<a>RSS</a></p>
        <p><Link href='/privacy-policy'><a>Privacy Policy</a></Link></p>
        <div className={styles.rights_info}><p>© 2021 BinaryEgg. All Rights Reserved.</p></div>
    </div>
)

export default Foot
