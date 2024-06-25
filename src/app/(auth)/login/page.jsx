import styles from './page.module.css'
import { handleGithubLogin } from "@/lib/actions";
import Link from "next/link";
import LoginForm from '@/components/loginForm/page'

export default async function LoginPage() {

  return (
    <main className={`${styles.container} flex flex-col gap-7`}>
      <form action={handleGithubLogin} className={`${styles.form} flex flex-col gap-7`}>
        <button className={`!bg-gray-400`}>github 登录</button>
      </form>
      <LoginForm />
      <Link href={'/register'}>Not account? <b>Register</b></Link>
    </main>
  );
}
