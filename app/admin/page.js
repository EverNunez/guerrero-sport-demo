"use client";

import Link from "next/link";
import { PageHeader, StatCard, Panel } from "@/components/admin/AdminUI";
import { Icon } from "@/components/icons";
import { SERVICIOS } from "@/lib/site";
import { ADMIN_NAV } from "@/lib/admin";
import { useStore } from "@/lib/store";

export default function AdminDashboard() {
  const { productos, categorias, galeria, banners, resetAll } = useStore();

  const stats = [
    { icon: "shirt", label: "Productos en catálogo", valor: productos.length, hint: `${productos.filter((p) => p.visible !== false).length} visibles` },
    { icon: "tag", label: "Categorías", valor: categorias.length },
    { icon: "image", label: "Imágenes en galería", valor: galeria.length },
    { icon: "layout", label: "Banners", valor: banners.length },
  ];

  const accesos = ADMIN_NAV.filter((n) => n.href !== "/admin");

  const onReset = () => {
    if (
      confirm(
        "¿Restablecer todo el contenido a los valores originales? Se perderán los cambios guardados en este navegador."
      )
    ) {
      resetAll();
    }
  };

  return (
    <>
      <PageHeader
        titulo="Resumen general"
        descripcion="Gestioná el contenido del sitio. Los cambios se guardan en este navegador y se reflejan al instante en la página pública."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <StatCard key={s.label} {...s} delay={i * 0.06} />
        ))}
      </div>

      <h2 className="mb-4 mt-9 text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
        Accesos rápidos
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {accesos.map((a) => (
          <Link
            key={a.href}
            href={a.href}
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-carbon-800/40 p-5 transition-all hover:-translate-y-1 hover:border-white/20 hover:shadow-card"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/[0.04] text-spartan-400">
                <Icon name={a.icon} className="h-5 w-5" />
              </span>
              <span className="font-semibold text-white">{a.label}</span>
            </div>
            <Icon
              name="arrow"
              className="h-5 w-5 text-white/30 transition-all group-hover:translate-x-1 group-hover:text-white"
            />
          </Link>
        ))}
      </div>

      <h2 className="mb-4 mt-9 text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
        Servicios publicados
      </h2>
      <Panel className="p-2">
        <ul className="divide-y divide-white/5">
          {SERVICIOS.map((s) => (
            <li key={s.titulo} className="flex items-center gap-3 px-4 py-3.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/[0.04] text-white/70">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium text-white/85">{s.titulo}</span>
              <span className="ml-auto rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
                Activo
              </span>
            </li>
          ))}
        </ul>
      </Panel>

      <div className="mt-9 flex flex-col items-start gap-3 rounded-2xl border border-white/10 bg-carbon-800/40 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-white">Restablecer contenido</p>
          <p className="text-sm text-white/50">
            Vuelve productos, categorías, galería, banners y contacto a los valores originales.
          </p>
        </div>
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white/80 transition-colors hover:border-white/30"
        >
          <Icon name="refresh" className="h-4 w-4" />
          Restablecer
        </button>
      </div>
    </>
  );
}
