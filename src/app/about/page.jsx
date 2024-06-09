import styles from './about.module.scss'
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className={`${styles.container} flex gap-24 items-center`}>
      <div className={`${styles.textContainer} flex flex-col gap-12`}>
        <h2 className={`font-bold text-3xl`}>About Agency</h2>
        <h1 className={`text-[54px] font-bold`}>We create digital ideas that are bigger, bolder, braver and better.</h1>
        <p className={`text-[20px]`}>We create digital ideas that are bigger, bolder, braver and better. We beliece in good ideas flexibility and precission We're world's Oue Special Team best consulting & finance solution provider. Wide range of web and software development services.</p>
        <div className={`flex justify-between items-center`}>
          <div className={`${styles.descItem}`}>
            <h2 className={`font-bold text-3xl`}>10 K+</h2>
            <p>Year of experience</p>
          </div>
          <div className={`${styles.descItem}`}>
            <h2 className={`font-bold text-3xl`}>234 K+</h2>
            <p>People reached</p>
          </div>
          <div className={`${styles.descItem}`}>
            <h2 className={`font-bold text-3xl`}>5 K+</h2>
            <p>Services and plugins</p>
          </div>
        </div>
      </div>
      <div className={`${styles.imgContainer}`}>
        <Image src={'/about.png'} alt={''} fill className={`${styles.img} block !relative w-full`} />
      </div>
    </main>
  );
}
