import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { OPTIONS } from "../../assets/data/pageData"
import avatar from '../../assets/images/userAvatar.jpg';
import { API_URL } from "../../assets/data/pageData";
import styles from '../../styles/Options.module.scss';
import Link from "next/link";

import { faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons'

export default function Options () {
   const [optionShow, setOptionShow] = useState([])
   const [isShowLess, setIsShowLess] = useState(true)
   const [user, setUser] = useState({})

   useEffect(() => {
      if(isShowLess){
         let options = [...OPTIONS];
         options = options.splice(0, 5) 
         setOptionShow([...options])
      } else {
         setOptionShow([...OPTIONS])
      }
   }, [isShowLess]);

   useEffect(() => {
      fetch(`${API_URL}/users`)
         .then(res => res.json())
         .then(data => setUser(data))
   }, [])

   return (
      <div className={styles.options}>
         <Link href='/user_page'>
            <div className={styles.option}>
               <div className={styles.imageContainer}>
                  <img src={avatar.src} alt='Avatar'/>
               </div>
               <span><strong>{user.name}</strong></span>
            </div>
         </Link>

         {optionShow.map( (option, index) => (
            <Link href={option.href} key={index}>
               <div key={index} className={styles.option}>
                  <FontAwesomeIcon 
                     style={{width: '20px'}} 
                     icon={option.icon}
                  />

                  <span>{option.name}</span>
               </div>
            </Link>
         ))}

         {isShowLess? (
            <div className={styles.option} onClick={() => setIsShowLess(false)}>
               <FontAwesomeIcon 
                  style={{width: '20px', color: "grey"}} 
                  icon={faAngleDown}
               />
               <span>See more</span>
            </div>
         ):(
            <div className={styles.option} onClick={() => setIsShowLess(true)}>
               <FontAwesomeIcon 
                  style={{width: '20px', color: "grey"}} 
                  icon={faAngleUp}
               />
               <span>See less</span>
            </div>
         )}
      </div>
   )
}