import 'antd/dist/antd.css'
import '../styles/globals.scss'
import Layout from '../components/Layout'
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';


function MyApp({ Component, pageProps }) {
  const [ isLoading, setIsLoading] = useState(false)
  
  const router = useRouter()

  const handleRouteStart = (url) => {
      console.log("route change to: ", url)
      setIsLoading(true)
  }
  const handleRouteComplete = (url) => {
    setIsLoading(false)
  }

  useEffect(() => {
      router.events.on('routeChangeStart', handleRouteStart)
      router.events.on('routeChangeComplete', handleRouteComplete)
  }, [])


  return (
    <Layout>
      {isLoading? (
        <h1 style={{margin: "auto"}}><hr/>Loading ...<hr/></h1>
      ) : (
        <Component {...pageProps} />
      )}
    </Layout>
  )
}

export default MyApp
