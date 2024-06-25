'use client';
import styles from './page.module.css'
import { login } from "@/lib/actions";
import { useFormState } from 'react-dom'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LoginFormPage() {

    const [state, formAction] = useFormState(login, undefined)
    const router = useRouter()

    useEffect(() => {
        state?.success && router.push('/')
    }, [state?.success, router])

  return (
    <form action={formAction} className={`${styles.form} flex flex-col gap-7`}>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
        { state?.error && <p>{state.error}</p> }
    </form>
  );
}
