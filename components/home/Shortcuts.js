import Link from "next/link";
import { useEffect } from "react";
import { shortcutPages } from "../../assets/data/pageData"
import styles from '../../styles/Shortcuts.module.scss';


export default function Shortcuts () {

   useEffect(() => {
      fetch('http://localhost:3000/api/posts')
         .then(res => res.json())
         .then(data => console.log(data))
   }, [])

   return (
      <div className={styles.shortcuts}>
         <h4>Your shortcuts</h4>

         {shortcutPages.length > 0 && shortcutPages.map( item => (

            <Link href={item.href} key={item.id}>
               <div className={styles.item}>
                  <div className={styles.imageContainer}>
                     <img src={item.url} />
                  </div>
                  <span>{item.name}</span>
               </div>
            </Link>

         ))}
      </div>
   )
}