import Link from 'next/link';
import styles from './Links.module.scss';
import NavLink from "@/components/navbar/links/navLink/NavLink";

export default function Links () {
  const links = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' },
    { title: 'Blog', href: '/blog' },
  ]
  // mock 判断是否登录，以及是否管理员
  const session = true
  const isAdmin = true
  return (
    <div className={styles.container + ' flex items-center gap-2.5'}>
      {links.map(link => (
        <NavLink link={link} key={link.href} />
      ))}
      {
        session ? (
          <>
            { isAdmin && <NavLink link={{ title: 'Admin', href: '/admin' }} /> }
            <button className={`${styles.logout} rounded-md text-center p-2.5 font-bold`}>Logout</button>
          </>
        ) : (
          <NavLink link={{ title: 'Login', href: '/login' }} />
        )
      }
    </div>
  )
}