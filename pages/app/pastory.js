import CustomHead from '../../components/custom-head'
import Link from 'next/link'
import Foot from '../../components/foot'
import styles from '../../styles/Pastory.module.css'

export default function Pastory() {
    const section3ImgId = "section3_img"
    const section4ImgId = "section4_img"
    let section3SelectedItem;
    let section4SelectedItem;
    const section3Click = (e) => {
        if (section3SelectedItem === undefined) {
            section3SelectedItem = document.getElementById('search_command_img')
        }
        setItemAndImage(section3SelectedItem, e.target, e.target.id, document.getElementById(section3ImgId))
        section3SelectedItem = e.target
    }
    const section4Click = (e) => {
        if (section4SelectedItem === undefined) {
            section4SelectedItem = document.getElementById('plain_text_img')
        }
        setItemAndImage(section4SelectedItem, e.target, e.target.id, document.getElementById(section4ImgId))
        section4SelectedItem = e.target
    }
    const setItemAndImage = (lastSelectedItem, currentSelectedItem, imageName, imageElement) => {
        lastSelectedItem.style.color = '#999'
        currentSelectedItem.style.color = '#000'
        imageElement.style.backgroundImage = "url('/images/pastory/" + imageName + ".webp')"
        currentSelectedItem.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'center'})
    }
    return (
        <main>
            <style global jsx>{`body {
              background-color: #333;
            }`}</style>
            <CustomHead title="Pastory"/>
            <div className={styles.section1_bg}>
                <div className={`${styles.section1}`}>
                    <img src='/images/pastory/icon.webp' alt='Pastory Icon' width='120px'
                         height='120px'/>
                    <h1><span id='text_yellow_underline'>Pastory</span></h1>
                    <p>A new way to manage your clipboard history.</p>
                    <Link
                        href="https://www.producthunt.com/posts/pastory?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-pastory"
                        target="_blank">
                        <img className={styles.product_hunt}
                             src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=290053&theme=light"
                             alt="Pastory - Clipboard History Manager | Product Hunt"/></Link>
                    <Link href='https://apps.apple.com/us/app/pastory/id1560463189'>
                        <img className={styles.download_from_mac_app_store}
                             src='/images/download_from_mac_app_store.svg'
                             alt='Download from mac app store'/></Link>
                    <span className={styles.info}>Require macOS 10.14 or later</span>
                </div>
            </div>
            <div className={`${styles.section2} ${styles.section}`}>
                <img src='/images/pastory/section2_bg.webp'/>
            </div>
            <div className={`${styles.section3} ${styles.section}`}>
                <ul>
                    <li id="search_command_img" onClick={section3Click}
                        className={styles.selected_indicator}>Search<br/> Filter
                    </li>
                    <li id="quick_switch_pasteboard_img" onClick={section3Click} className={styles.indicator}>Quick
                        Switch<br/> Clipboard
                    </li>
                    <li id="move_to_clipboard" onClick={section3Click}
                        className={styles.indicator}>Move to Another<br/> Clipboard
                    </li>
                    <li id="select_multiple_items_img" onClick={section3Click} className={styles.indicator}>
                        Multiple Items<br/> Support
                    </li>
                </ul>
                <div id={section3ImgId}/>
            </div>
            <div className={`${styles.section3} ${styles.section4} ${styles.section}`}>
                <div id={section4ImgId}/>
                <ul>
                    <li id="plain_text_img" onClick={section4Click} className={styles.selected_indicator}>Plain Text
                    </li>
                    <li id="rich_text_img" onClick={section4Click} className={styles.indicator}>Rich Text</li>
                    <li id="image_img" onClick={section4Click} className={styles.indicator}>Image</li>
                    <li id="file_img" onClick={section4Click} className={styles.indicator}>File</li>
                    <li id="color_img" onClick={section4Click} className={styles.indicator}>Color</li>
                    <li id="link_img" onClick={section4Click} className={styles.indicator}>Link</li>
                </ul>
            </div>
            <div className={`${styles.section5} ${styles.section}`}>
                <h1>More Features</h1>
                <div>
                    <h2>Auto Paste</h2>
                    <p>Auto paste to current running app.</p>
                </div>
                <div>
                    <h2>Ignore App</h2>
                    <p>Ignore copied content from specific app.</p>
                </div>
                <div>
                    <h2>Save to File</h2>
                    <p>Save the contents of the copied content to the file, including plain text, rich text, and
                        image.</p>
                </div>
                <div>
                    <h2>Multiple Clipboards</h2>
                    <p>Create your own clipboard and move copied item to it.</p>
                </div>
                <div>
                    <h2>Keyboard Shortcut</h2>
                    <p>Shortcut keys are supported for most operations.</p>
                </div>
                <div>
                    <h2>Data Safety</h2>
                    <p>Data is stored only on your local device.</p>
                </div>
                <div>
                    <h2>Touch Bar Support</h2>
                    <p>Using it to add filter, and switch clipboard.</p>
                </div>
                <div>
                    <h2>Dark Mode</h2>
                    <p>Automatic following system switching.</p>
                </div>
            </div>
            <div className={`${styles.author_container} ${styles.section}`}>
                <p>Made by <Link href='/'><a id='text_yellow_underline'>BinaryEgg</a></Link></p>
            </div>
            <Foot/>
        </main>
    )
}
