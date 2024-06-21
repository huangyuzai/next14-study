import styles from './page.module.css'
import { handleGithubLogin, login } from "@/lib/actions";

export default async function LoginPage() {

  return (
    <main className={`${styles.container} flex flex-col gap-7`}>
      <form action={login} className={`${styles.form} flex flex-col gap-7`}>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
      </form>
      <form action={handleGithubLogin} className={`${styles.form} flex flex-col gap-7`}>
        <button>github 登录</button>
      </form>
    </main>
  );
}
