import Links from "@/components/navbar/links/Links";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { auth } from "@/lib/auth";

export default async function Navbar () {

  const session = await auth()

  console.log(session);

  return (
    <div className={styles.container + ' flex justify-between items-center'}>
      <Link href={'/'} className={styles.logo + ' text-3xl font-bold '}>Logo</Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  )
}