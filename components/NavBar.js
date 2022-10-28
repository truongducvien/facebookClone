import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faHouseUser, faMagnifyingGlass, faFilm, faShop, faPeopleLine, faBars, faBell } from '@fortawesome/free-solid-svg-icons'

import styles from '../styles/NavBar.module.scss';
import userAvatar from '../assets/userAvatar.jpg';


const iconStyle = {width: '50px'}

export default function NavBar () {
   const [inputVal, setInputVal] = useState('')
   console.log(userAvatar)

   const handleChange = (e) => {
      setInputVal(e.target.value)
   }

   return (
      <nav className={styles.navbars}>
         <div className="search-container">
            <div>
               <FontAwesomeIcon style={iconStyle} icon={faFacebook}/>
               <FontAwesomeIcon style={iconStyle} icon={faMagnifyingGlass}/>
               <input 
                  type="text" 
                  name="search-facebook" 
                  value={inputVal}
                  placeholder="Search Facebook"
                  onChange={handleChange}
               />
            </div>
         </div>

         <div className="common-container">
            <FontAwesomeIcon style={iconStyle} icon={faHouseUser}/>
            <FontAwesomeIcon style={iconStyle} icon={faFilm}/>
            <FontAwesomeIcon style={iconStyle} icon={faShop}/>
            <FontAwesomeIcon style={iconStyle} icon={faPeopleLine}/>
         </div>

         <div className="personal-container">
            <FontAwesomeIcon style={iconStyle} icon={faBars}/>
            <FontAwesomeIcon style={iconStyle} icon={faFacebookMessenger}/>
            <FontAwesomeIcon style={iconStyle} icon={faBell}/>
            <div>
               <img src={userAvatar.src} alt="avatar"/>
            </div>
         </div>

      </nav>
   )
}