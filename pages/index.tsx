import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Header></Header>
            </body>
        </div>
    )
}

export default Home
