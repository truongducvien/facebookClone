import { useState } from 'react';        
import styles from '../../styles/InputForm.module.scss';
import userAvatar from '../../assets/images/userAvatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile, faPhotoFilm, faVideo } from '@fortawesome/free-solid-svg-icons';

export default function InputForm () {
    const [inputVal, setInputVal] = useState('')

    return (
        <div className={styles.inputForm}>
            <div className={styles.textInput}>
                <div className={styles.avatarContainer}>
                    <img src={userAvatar.src} alt="avatar" />
                </div>
                <input 
                    type="text" 
                    name="" 
                    value={inputVal} 
                    placeholder="What's on your mind?"
                    onChange={e => setInputVal(e.target.value)}
                />
            </div>

            <div className={styles.fileInput}>
                <div className={styles.liveVideo}>
                    <FontAwesomeIcon icon={faVideo}/>
                    <span>Live video</span>
                </div>
                <div className={styles.photo}>
                    <FontAwesomeIcon icon={faPhotoFilm}/>
                    <span>Photo/Video</span>
                </div>
                <div className={styles.feeling}>
                    <FontAwesomeIcon icon={faFaceSmile}/>
                    <span>Feeling/Activity</span>
                </div>

            </div>
        </div>
    )
}