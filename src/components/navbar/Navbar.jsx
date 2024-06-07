import Links from "@/components/navbar/links/Links";
import styles from "./Navbar.module.scss";

export default function Navbar () {
  return (
    <div className={styles.container + ' flex justify-between items-center'}>
      <div className={styles.logo + ' text-3xl font-bold '}>Logo</div>
      <div>
        <Links />
      </div>
    </div>
  )
}