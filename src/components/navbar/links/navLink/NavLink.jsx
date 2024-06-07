'use client'
import Link from 'next/link';
import styles from './NavLink.module.scss';
import {usePathname} from "next/navigation";

export default function NavLink ({ link }) {
  const pathName = usePathname()

  return (
    <div>
      <Link
        href={link.href}
        key={link.href}
        className={`${pathName === link.href && styles.active} ${styles.container} block p-2.5 rounded-3xl text-center`}
      >{link.title}</Link>
    </div>
  )
}