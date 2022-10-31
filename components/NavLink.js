import Link from "next/link";
import { useRouter } from "next/router";
import styles from '../styles/NavLink.module.scss';

export default function NavLink ( {href, children} ) {
   const { pathname } = useRouter()

   return (
      <div className={href === pathname? styles.active : ''}>
         <Link href={href}>
            {children}
         </Link>
      </div>
   )
}