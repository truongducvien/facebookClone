import Options from "./Options";
import Shortcuts from "./Shortcuts";
import styles from '../../styles/LeftAside.module.scss';

export default function LeftAside () {
   return (
      <div className={styles.leftAside}>
         <Options />
         <hr/>
         <Shortcuts />
      </div>
   )
}