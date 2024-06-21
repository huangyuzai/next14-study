import styles from './page.module.css'
import { handleRegister } from '@/lib/actions'

export default function RegisterPage() {
  return (
    <main className={styles.container}>
      <form action={handleRegister} className={`${styles.form} flex flex-col gap-7`}>
        <input type="text" placeholder="username" name="username" />
        <input type="text" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <input type="password" placeholder="password again" name="passwordRepeat" />
        <button>Register</button>
      </form>
    </main>
  );
}
