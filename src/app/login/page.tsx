import LoginForm from "../../components/login/login-form";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15),transparent_45%)]" />

      <div className="absolute h-125 w-125 rounded-full bg-yellow-700/10 blur-3xl" />

      <LoginForm />

    </main>
  );
}