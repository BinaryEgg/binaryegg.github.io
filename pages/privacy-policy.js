import CustomHead from '../components/custom-head'
import Foot from '../components/foot'
import styles from '../styles/PrivacyPolicy.module.css'
import Link from "next/link"

export default function PrivacyPolicy() {
    return (
        <main>
            <CustomHead title="Privacy Policy"/>
            <div className={styles.content}>
                <h1>Privacy Policy</h1>
                <p>Last updated March 05, 2021</p>
                <br/>

                <p>This policy describes the information may collected from BinaryEgg Software and BinaryEgg Website,
                    and how we handle it.</p>
                <p>We only collect crash logs, aiming to fix crashing bugs.</p>
                <p>We know that private information is very important to you.</p>
                <p>We don't want or need to collect any private information from you.</p>
                <p>Here are the details.</p>

                <h2>Crash Logs</h2>
                <p>Sending crash logs is optional.</p>
                <p>We will not send crash logs without your consent.</p>
                <p>Crash logs contains the time, IP address and device model, no additional information.</p>
                <p>It will only be used to fix crashing bugs.</p>

                <h2>Questions</h2>
                <p>If you have any question about it, you can contact us at <a
                    href="mailto:contact@binaryegg.com">contact@binaryegg.com</a>.</p>

                <h2>Policy Updates</h2>
                <p>We may update this policy as necessary.</p>

                <div className={styles.return_to_home}>
                    <p>Back to <Link href='/'><a id='text_yellow_underline'>BinaryEgg</a></Link></p>
                </div>
            </div>
            <Foot/>
        </main>
    )
}
