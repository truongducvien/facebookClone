import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faHouseUser, faMagnifyingGlass, faFilm, faShop, faPeopleLine, faBars, faBell } from '@fortawesome/free-solid-svg-icons'

import styles from '../styles/NavBar.module.scss';
import userAvatar from '../assets/images/userAvatar.jpg';
import NavLink from "./NavLink";
import Link from "next/link";



export default function NavBar () {
   const [inputVal, setInputVal] = useState('')

   const handleChange = (e) => {
      setInputVal(e.target.value)
   }

   return (
      <nav className={styles.navbars}>
         <div className={styles.general}>
            <Link href='/'>
               <FontAwesomeIcon 
                  className={styles.facebookIcon} 
                  icon={faFacebook}
               />
            </Link>

            <div className={styles.searchContainer}>
               <FontAwesomeIcon 
                  className={styles.searchIcon} 
                  icon={faMagnifyingGlass}
               />

               <input 
                  type="text" 
                  name="search-facebook" 
                  value={inputVal}
                  placeholder="Search Facebook"
                  onChange={handleChange}
               />
            </div>
         </div>

         <div className={styles.commonContainer}>
            <NavLink href='/' title="Home">
               <FontAwesomeIcon icon={faHouseUser}/>
            </NavLink>

            <NavLink href='/watch' title="Watch">
               <FontAwesomeIcon icon={faFilm}/>
            </NavLink>

            <NavLink href='/marketplace' title="Market Place">
               <FontAwesomeIcon icon={faShop}/>
            </NavLink>

            <NavLink href='/groups' title="Group">
               <FontAwesomeIcon icon={faPeopleLine}/>
            </NavLink>
         </div>

         <div className={styles.personalContainer}>
            <NavLink href='/menu' title="Menu">
               <FontAwesomeIcon icon={faBars}/>
            </NavLink>
            <NavLink href='/messenger' title="Messenger">
               <FontAwesomeIcon icon={faFacebookMessenger}/>
            </NavLink>
            <NavLink href='/notifications' title="Notification">
               <FontAwesomeIcon icon={faBell}/>
            </NavLink>
            <div className={styles.avatarContainer}>
               <img 
                  className={styles.avatar} 
                  src={userAvatar.src}    
                  alt="avatar"
               />
            </div>
         </div>

      </nav>
   )
}