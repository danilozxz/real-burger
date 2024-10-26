"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type LoginForm = {
  login: string;
  password: string;
};

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState<LoginForm>({ login: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados de login:", form);
    router.push('/home');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80">
        <input
          type="text"
          name="login"
          placeholder="Login"
          value={form.login}
          onChange={handleChange}
          className="text-black p-2 rounded outline-none"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={form.password}
          onChange={handleChange}
          className="text-black p-2 rounded outline-none"
          required
        />
        <button type="submit" className="bg-[#FA6A0F] text-white p-2 rounded mt-3">Entrar</button>
        <p className="text-center mt-2">
          Não tem uma conta? <a href="/cadastro" className="text-[#FA6A0F] underline">Cadastre-se</a>
        </p>
      </form>
    </div>  
  );
}
