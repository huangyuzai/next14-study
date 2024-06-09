import styles from './page.module.scss'
import Image from "next/image";

export default function Home() {
  return (
    <main className={`${styles.container} flex gap-24 items-center`}>
      <div className={`${styles.textContainer} flex flex-col gap-12`}>
        <h1 className={`text-8xl font-bold`}>Creative Thoughts Agency.</h1>
        <p className={`text-[20px]`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero blanditils adipisci minima reiclendis a autem assumenda dolore.</p>
        <div className={`${styles.buttons} flex gap-5`}>
          <button className={`p-5 rounded min-w-[120px]`}>Learn More</button>
          <button className={`p-5 rounded min-w-[120px]`}>Contact</button>
        </div>
        <div>
          <Image src={'/brands.png'} alt='' fill className={`block !relative grayscale`} />
        </div>
      </div>
      <div className={`${styles.imageContainer}`}>
        <Image src={'/hero.gif'} alt='' fill className={`${styles.heroImage} !relative`} />
      </div>
    </main>
  );
}
