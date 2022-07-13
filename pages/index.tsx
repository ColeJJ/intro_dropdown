import type { NextPage } from 'next'
import Head from 'next/head'
import BodyPic from '../components/bodypic'
import Header from '../components/header'
import Partners from '../components/partners'
import Text from '../components/text'

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
                <div className="relative">
                    <Text></Text>
                    <Partners></Partners>
                    <BodyPic></BodyPic>
                </div>
            </body>
        </div>
    )
}

export default Home
