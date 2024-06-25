import styles from './page.module.css'
import { handleRegister } from '@/lib/actions'
import RegisterFormPage from '@/components/registerForm/page';

export default function RegisterPage() {
  return (
    <main className={styles.container}>
      <RegisterFormPage />
    </main>
  );
}
