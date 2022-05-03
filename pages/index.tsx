import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Body from '../components/body'

/**
 * 1. remove FontAwesomeIcon
 *
 */

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Header></Header>
                <Body></Body>
            </body>
        </div>
    )
}

export default Home
