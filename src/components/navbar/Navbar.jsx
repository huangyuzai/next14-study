import Links from "@/components/navbar/links/Links";
import styles from "./Navbar.module.scss";
import Link from "next/link";

export default function Navbar () {
  return (
    <div className={styles.container + ' flex justify-between items-center'}>
      <Link href={'/'} className={styles.logo + ' text-3xl font-bold '}>Logo</Link>
      <div>
        <Links />
      </div>
    </div>
  )
}