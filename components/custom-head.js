import Head from "next/head"
import PropTypes from "prop-types"

export default function CustomHead({title}) {
    return (
        <Head>
            <meta name="language" content="english"/>
            <meta name="copyright" content="© 2021 BinaryEgg"/>
            <meta name="publisher" content="BinaryEgg"/>
            <meta name="author" content="BinaryEgg"/>

            <link rel="shortcut icon" href="/favicon.ico"/>
            <link rel="apple-touch-icon" href="/favicon/favicon-114.png"/>

            <title>{title === undefined ? 'BinaryEgg' : title}</title>
        </Head>
    )
}

CustomHead.propTypes = {
    title: PropTypes.string
}
