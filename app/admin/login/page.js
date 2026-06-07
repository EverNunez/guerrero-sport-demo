"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Logo from "@/components/ui/Logo";
import { Icon } from "@/components/icons";
import { Field, Input } from "@/components/admin/AdminUI";
import { useStore } from "@/lib/store";

export default function LoginPage() {
  const router = useRouter();
  const { login, authed, loaded } = useStore();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  // Si ya hay sesión, entra directo al panel.
  useEffect(() => {
    if (loaded && authed) router.replace("/admin");
  }, [loaded, authed, router]);

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");
    const ok = login(user.trim(), pass);
    if (ok) router.replace("/admin");
    else setError("Usuario o contraseña incorrectos.");
  };

  return (
    <div className="relative grid min-h-screen place-items-center overflow-hidden bg-carbon-950 px-4">
      {/* Fondo deportivo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-radial-spotlight" />
        <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-spartan/20 blur-[120px]" />
        <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-royal/20 blur-[120px]" />
        <div className="absolute inset-0 bg-grid-lines bg-[size:46px_46px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-md rounded-3xl border border-white/10 bg-carbon-800/70 p-7 shadow-card backdrop-blur-xl sm:p-9"
      >
        <div className="flex flex-col items-center text-center">
          <Logo />
          <h1 className="mt-6 text-2xl font-bold text-white">Panel administrativo</h1>
          <p className="mt-1.5 text-sm text-white/55">
            Ingresá tus credenciales para gestionar el sitio.
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <Field label="Usuario">
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/40">
                <Icon name="user" className="h-5 w-5" />
              </span>
              <Input
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder="admin"
                autoComplete="username"
                className="!pl-10"
                required
              />
            </div>
          </Field>

          <Field label="Contraseña">
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/40">
                <Icon name="lock" className="h-5 w-5" />
              </span>
              <Input
                type={show ? "text" : "password"}
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
                className="!pl-10 !pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShow((s) => !s)}
                className="absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-lg text-white/50 hover:text-white"
                aria-label={show ? "Ocultar contraseña" : "Mostrar contraseña"}
              >
                <Icon name={show ? "eye-off" : "eye"} className="h-5 w-5" />
              </button>
            </div>
          </Field>

          {error && (
            <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">
              {error}
            </p>
          )}

          <button type="submit" className="btn-primary sheen w-full">
            <Icon name="lock" className="h-4 w-4" />
            Ingresar
          </button>
        </form>

        <a
          href="/"
          className="mt-6 flex items-center justify-center gap-2 text-sm text-white/45 transition-colors hover:text-white"
        >
          <Icon name="arrow" className="h-4 w-4 rotate-180" />
          Volver al sitio
        </a>
      </motion.div>
    </div>
  );
}
