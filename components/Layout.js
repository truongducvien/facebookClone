import NavBar from "./NavBar";
import styles from '../styles/Layout.module.scss';

export default function Layout ( {children} ) {
   return (
      <>
         <NavBar />
         <div className={styles.content}>
            {children}
         </div>
      </>
   )
}