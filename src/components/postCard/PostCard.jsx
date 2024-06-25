import styles from './PostCard.module.scss'
import Image from "next/image";
import Link from "next/link";

export default function PostCard({post}) {

  console.log(`card post==========`, post);

  return (
    <main className={`${styles.container} flex flex-col gap-5 mb-5`}>
      <div className={`${styles.topContainer} flex gap-5 justify-between items-center relative`}>
        <div className={`${styles.imgContainer}`}>
          { post.img && <Image
            src={post.img}
            fill
            alt={''}
            className={`${styles.img} !relative`}
          /> }
          
        </div>
        <span className={`${styles.dateTime} xx`}>{post.createdAt.toLocaleString()}</span>
      </div>
      <h2 className={`${styles.title} font-bold text-2xl`}>{post.title}</h2>
      <p className={`${styles.desc}`}>{post.body}</p>
      <Link href={`/blog/${post.slug}`} className={`underline`} >READ MORE</Link>
    </main>
  );
}
