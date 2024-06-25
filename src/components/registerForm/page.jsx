'use client';
import styles from './page.module.css'
import { handleRegister } from '@/lib/actions'
import { useFormState } from 'react-dom'
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RegisterPage() {

    const [state, formAction] = useFormState(handleRegister, undefined)

    const router = useRouter()

    useEffect(() => {
        state?.success && router.push('/login')
    }, [state?.success, router])

  return (
    <form action={formAction} className={`${styles.form} flex flex-col gap-7`}>
        <input type="text" placeholder="username" name="username" />
        <input type="text" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <input type="password" placeholder="password again" name="passwordRepeat" />
        <button>Register</button>
        { state?.error && <p>{state?.error}</p> }
        <Link href={'/login'}>Have an account? <b>Login</b></Link>
    </form>
  );
}
