"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Logo from "@/components/ui/Logo";
import { Icon } from "@/components/icons";
import { ADMIN_NAV } from "@/lib/admin";
import { useStore } from "@/lib/store";

function NavItems({ pathname, onNavigate }) {
  return (
    <nav className="flex flex-col gap-1">
      {ADMIN_NAV.map((item) => {
        const active =
          item.href === "/admin"
            ? pathname === "/admin"
            : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={`group flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all ${
              active
                ? "bg-spartan/15 text-white shadow-[inset_0_0_0_1px_rgba(226,16,42,0.4)]"
                : "text-white/60 hover:bg-white/[0.05] hover:text-white"
            }`}
          >
            <span
              className={`grid h-8 w-8 place-items-center rounded-lg transition-colors ${
                active
                  ? "bg-spartan text-white"
                  : "bg-white/[0.04] text-white/60 group-hover:text-white"
              }`}
            >
              <Icon name={item.icon} className="h-4.5 w-4.5" />
            </span>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export default function AdminShell({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const { authed, loaded, logout } = useStore();
  const [open, setOpen] = useState(false);

  const isLogin = pathname === "/admin/login";

  // Guard: si no hay sesión, redirige al login.
  useEffect(() => {
    if (loaded && !authed && !isLogin) {
      router.replace("/admin/login");
    }
  }, [loaded, authed, isLogin, router]);

  const handleLogout = () => {
    logout();
    router.replace("/admin/login");
  };

  // La pantalla de login se muestra sin el panel.
  if (isLogin) return <>{children}</>;

  // Mientras carga o redirige, mostramos un loader (evita ver el panel sin sesión).
  if (!loaded || !authed) {
    return (
      <div className="grid min-h-screen place-items-center bg-carbon-950 text-white/60">
        <div className="flex items-center gap-3 text-sm">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-spartan" />
          Cargando panel…
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-carbon-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-spartan/10 blur-[130px]" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-royal/10 blur-[130px]" />
      </div>

      <div className="flex">
        {/* Sidebar desktop */}
        <aside className="sticky top-0 hidden h-screen w-72 shrink-0 flex-col border-r border-white/10 bg-carbon-900/60 p-5 backdrop-blur-xl lg:flex">
          <div className="px-1.5 py-2">
            <Logo />
          </div>
          <p className="mb-5 mt-3 px-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/35">
            Panel administrativo
          </p>
          <NavItems pathname={pathname} />
          <div className="mt-auto space-y-2">
            <Link
              href="/"
              className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-white/55 transition-colors hover:bg-white/[0.05] hover:text-white"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/[0.04]">
                <Icon name="arrow" className="h-4.5 w-4.5 rotate-180" />
              </span>
              Ver sitio público
            </Link>
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-white/55 transition-colors hover:bg-red-500/10 hover:text-red-300"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/[0.04]">
                <Icon name="logout" className="h-4.5 w-4.5" />
              </span>
              Cerrar sesión
            </button>
          </div>
        </aside>

        {/* Columna principal */}
        <div className="flex min-h-screen w-full flex-col">
          <header className="sticky top-0 z-30 flex items-center justify-between border-b border-white/10 bg-carbon-950/80 px-4 py-3.5 backdrop-blur-xl sm:px-6">
            <button
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] lg:hidden"
              aria-label="Abrir menú"
            >
              <span className="space-y-1.5">
                <span className="block h-0.5 w-5 bg-white" />
                <span className="block h-0.5 w-5 bg-white" />
                <span className="block h-0.5 w-5 bg-white" />
              </span>
            </button>
            <div className="hidden lg:block">
              <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                Guerrero Sport
              </p>
              <p className="text-sm font-semibold text-white/80">
                Administración del sitio
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleLogout}
                className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/70 transition-colors hover:border-red-500/30 hover:text-red-300 sm:flex"
              >
                <Icon name="logout" className="h-4 w-4" />
                Salir
              </button>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-spartan to-spartan-600 text-sm font-bold text-white shadow-glow">
                GS
              </span>
            </div>
          </header>

          <main className="flex-1 px-4 py-6 sm:px-6 sm:py-8">{children}</main>
        </div>
      </div>

      {/* Sidebar móvil (desmonta al cerrar para no dejar overlay invisible) */}
      {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-white/10 bg-carbon-900 p-5 lg:hidden"
            >
              <div className="mb-6 flex items-center justify-between">
                <Logo />
                <button
                  onClick={() => setOpen(false)}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-white/70"
                  aria-label="Cerrar menú"
                >
                  <Icon name="x" className="h-5 w-5" />
                </button>
              </div>
              <NavItems pathname={pathname} onNavigate={() => setOpen(false)} />
              <div className="mt-auto space-y-2">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-white/55 hover:text-white"
                >
                  <Icon name="arrow" className="h-4.5 w-4.5 rotate-180" />
                  Ver sitio público
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-red-300/80 hover:text-red-300"
                >
                  <Icon name="logout" className="h-4.5 w-4.5" />
                  Cerrar sesión
                </button>
              </div>
            </motion.aside>
          </>
      )}
    </div>
  );
}
