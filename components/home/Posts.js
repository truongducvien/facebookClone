import styles from '../../styles/Posts.module.scss';
import { useEffect } from 'react';
import Image from 'next/image';
import avatar from '../../assets/images/userAvatar.jpg'

export default function Posts ( {posts} ) {
    

    return (
        <div className={styles.posts}>
            {posts && posts.map(item => (

                <div key={item.id} className={styles.post}>
                    <div className={styles.info}>
                        <div>
                            <img src={item.userAvatar} alt="userAvatar" />
                        </div>
                        <h3>{item.username}</h3>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.detail}>
                            {item.title}
                        </div>

                        {/* <Image
                            src={avatar}
                            alt="image"
                            fill
                        /> */}
                        <img src={item.imageUrl} alt="image" />
                    </div>

                    <div className={styles.interactive}>
                        
                    </div>

                    <div className={styles.comments}>
                        
                    </div>
                </div>

            ))}
        </div>
    )
}