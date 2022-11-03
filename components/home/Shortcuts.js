import Link from "next/link";
import { useEffect } from "react";
import { shortcutPages } from "../../assets/data/pageData"
import styles from '../../styles/Shortcuts.module.scss';


export default function Shortcuts () {
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