import styles from './Footer.module.scss';

export default function Footer () {
  return (
    <div className={`${styles.container} flex justify-between h-24 items-center`}>
      <h2 className={`font-bold`}>lamadev</h2>
      <p>Lama creative thoughts agentcy All rights reserved.</p>
    </div>
  )
}