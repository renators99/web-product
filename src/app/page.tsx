import { LoginForm } from "@/components/auth/Login";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="grid text-center lg:w-full lg:max-w-5xl lg:grid-cols-1 lg:text-left">
        <LoginForm />
      </div>
    </main>
  );
}
