import styles from '../../styles/Watch.module.scss';
import Aside from "../../components/Aside";
import Main from "../../components/Main";
import Link from "next/link";
import { useEffect, useRef } from 'react';


export async function getStaticProps () {
   const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
   const data = await res.json();

   return {
      props: {
         video: data
      }
   }
}

export default function Watch ({video}) {
   const watchRef = useRef();

   const handleScroll = (e) => {
      console.log('pageYOffset: ', window.pageYOffset, 'offsetHeight: ', watchRef.current.offsetHeight, 'innerHeight: ', window.innerHeight)
      if(window.pageYOffset + window.innerHeight >= watchRef.current.offsetHeight){
         console.log("You've arrived to bottom")
      }
   }

   useEffect(() => {
      window.addEventListener('scroll', handleScroll) 
      return () => {window.removeEventListener('scroll', handleScroll)} 
   }, []);

   return (
      <>
         <Aside>
            <h1>Aside for Watch</h1>
         </Aside>

         <Main>
            <div className={styles.watch} ref={watchRef}>
               {video.map(item => (
                  <Link href={`/watch/${item.id}`} key={item.id}>
                     <h2>{item.title}</h2>
                  </Link>
               ))}
            </div>
         </Main>
      </>
   )
}