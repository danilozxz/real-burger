"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type CadastroForm = {
  name: string;
  login: string;
  password: string;
};

const Cadastro = () => {
  const [form, setForm] = useState<CadastroForm>({ name: '', login: '', password: '' });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados de cadastro:", form);
    router.push('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4">Cadastro</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80">
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={form.name}
          onChange={handleChange}
          className="text-black p-2 rounded outline-none"
          required
        />
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
        <button type="submit" className="bg-[#FA6A0F] text-white p-2 rounded mt-3">Cadastrar</button>
        <p className="text-center mt-2">
          Já tem uma conta? <a href="/login" className="text-[#FA6A0F] underline">Faça login</a>
        </p>
      </form>
    </div>
  );
};

export default Cadastro;
