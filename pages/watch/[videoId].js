import Head from "next/head";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos`)
    const data = await res.json();

    const paths = data.map(item => {
        return {
            params: {videoId: `${item.id}`}
        }
    })

    return {
        paths: [],
        fallback: 'blocking'
    }
}


export const getStaticProps = async ( {params} ) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${params.videoId}`)
    const data = await res.json();

    return {
        props: {
            video: data
        }
    }
}


export default function Video ( {video} ) {
    const router = useRouter()
    console.log('video: ', video)

    console.log('Router: ', router)

    if(router.isFallback){
        return <h1>Loading ...</h1>
    }

    return (
        <>
            <Head>
                <title>{video.title}</title>
            </Head>
            <div style={{margin: 'auto', width: '400px'}}>
                <h1>You've clicked video {router.query.videoId}</h1>
                <h2>Title: {video.title}</h2>
                <h3>Detail: {video.body}</h3>
            </div>
        </>
    )
}
