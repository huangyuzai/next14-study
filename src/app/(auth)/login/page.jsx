import { handleGithubLogin } from "@/lib/actions";

export default async function LoginPage() {

  return (
    <main>
      <form action={handleGithubLogin}>
        <button>点击登录</button>
      </form>
    </main>
  );
}
