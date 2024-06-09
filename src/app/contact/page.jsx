import styles from './contact.module.scss'
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className={`${styles.container} flex gap-24 justify-between items-center`}>
      <div className={`${styles.imgContainer}`}>
        <Image src={'/contact.png'} alt={''} fill className={`!relative`} />
      </div>
      <div className={`${styles.formContainer}`}>
        <form action="" className={`${styles.form} flex flex-col gap-5`}>
          <input type="text" placeholder={'Name and Sumname'}/>
          <input type="text" placeholder={'Email address'}/>
          <input type="text" placeholder={'Phone Number (Options)'}/>
          <textarea name="" id="" cols="30" rows="10" placeholder={'Message'} />
          <button className={`${styles.sendBtn} text-center p-5 rounded-[5px]`}>Send</button>
        </form>
      </div>
    </main>
  );
}
