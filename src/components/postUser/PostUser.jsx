import styles from './PostUser.module.scss'
import Image from "next/image";
import {getUser} from "@/lib/data";

export default async function PostUser ({ userId }) {

    const user = await getUser(userId)

    return (
    <div className={`${styles.detailText} flex gap-x-5 items-center`}>
        <Image
          src={ user.img ? user.img : '/noavatar.png'}
          alt={''}
          width={50}
          height={50}
          className={`${styles.authImg} !relative rounded-[50%]`}
        />
        <div className={'flex flex-col gap-y-2'}>
            <span className={`${styles.detailTitle} font-bold`}>Author</span>
            <span className={`${styles.detailValue}`}>{user.username}</span>
        </div>
    </div>
    )
}