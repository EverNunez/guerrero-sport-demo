"use client";

import { useState } from "react";
import {
  PageHeader,
  Panel,
  Modal,
  Field,
  Input,
  Textarea,
  Select,
  Toggle,
  IconButton,
  ImageInput,
} from "@/components/admin/AdminUI";
import ProductMedia from "@/components/ui/ProductMedia";
import { useStore } from "@/lib/store";

const COLORES = [
  { value: "royal", label: "Azul" },
  { value: "spartan", label: "Rojo" },
  { value: "gold", label: "Dorado / Naranja" },
  { value: "carbon", label: "Carbón / Gris" },
];

const vacio = {
  nombre: "",
  descripcion: "",
  etiqueta: "",
  categoria: "camisetas",
  precio: "",
  base: "royal",
  numero: "10",
  imagen: "",
  visible: true,
};

export default function AdminProductos() {
  const { productos, categorias, addProducto, updateProducto, removeProducto, toggleProducto } =
    useStore();
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(vacio);

  const abrirNuevo = () => {
    setEditId(null);
    setForm({ ...vacio, categoria: categorias[0]?.slug || "camisetas" });
    setOpen(true);
  };

  const abrirEditar = (p) => {
    setEditId(p.id);
    setForm({ ...vacio, ...p });
    setOpen(true);
  };

  const guardar = () => {
    if (!form.nombre.trim()) {
      alert("Poné un nombre al producto.");
      return;
    }
    if (editId) updateProducto(editId, form);
    else addProducto(form);
    setOpen(false);
  };

  const eliminar = (p) => {
    if (confirm(`¿Eliminar "${p.nombre}"? Esta acción no se puede deshacer.`)) {
      removeProducto(p.id);
    }
  };

  const set = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e?.target ? e.target.value : e }));

  return (
    <>
      <PageHeader
        titulo="Productos"
        descripcion="Creá, editá y ordená el catálogo. Los cambios aparecen al instante en la web pública."
        accion="Nuevo producto"
        onAccion={abrirNuevo}
      />

      <Panel>
        <div className="hidden grid-cols-[64px_1.3fr_2fr_110px_90px_110px] gap-4 border-b border-white/10 px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-white/40 md:grid">
          <span>Foto</span>
          <span>Nombre</span>
          <span>Descripción</span>
          <span>Categoría</span>
          <span>Estado</span>
          <span className="text-right">Acciones</span>
        </div>

        <ul className="divide-y divide-white/5">
          {productos.map((p) => {
            const cat = categorias.find((c) => c.slug === p.categoria);
            return (
              <li
                key={p.id}
                className="grid grid-cols-[56px_1fr_auto] items-center gap-4 px-4 py-4 md:grid-cols-[64px_1.3fr_2fr_110px_90px_110px] md:px-5"
              >
                <div className="relative grid h-14 w-14 place-items-center overflow-hidden rounded-xl border border-white/10 bg-carbon-900">
                  <ProductMedia
                    imagen={p.imagen}
                    alt={p.nombre}
                    base={p.base}
                    numero={p.numero}
                    jerseyClassName="h-12 w-auto"
                    jerseyPadding="p-1"
                    sizes="56px"
                  />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">{p.nombre}</p>
                  <p className="text-xs text-white/45">
                    {p.etiqueta}
                    {p.precio ? ` · ${p.precio}` : ""}
                  </p>
                  <p className="mt-1 text-xs text-white/45 md:hidden">
                    {cat?.nombre || p.categoria}
                  </p>
                </div>

                <p className="hidden truncate text-sm text-white/55 md:block">
                  {p.descripcion}
                </p>

                <span className="hidden text-xs text-white/60 md:block">
                  {cat?.nombre || p.categoria}
                </span>

                <span className="hidden md:block">
                  <button
                    onClick={() => toggleProducto(p.id)}
                    className={`rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors ${
                      p.visible !== false
                        ? "bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/25"
                        : "bg-white/10 text-white/50 hover:bg-white/20"
                    }`}
                  >
                    {p.visible !== false ? "Visible" : "Oculto"}
                  </button>
                </span>

                <div className="col-start-3 flex items-center justify-end gap-2 md:col-auto">
                  <IconButton
                    icon={p.visible !== false ? "eye" : "eye-off"}
                    title={p.visible !== false ? "Ocultar" : "Mostrar"}
                    onClick={() => toggleProducto(p.id)}
                  />
                  <IconButton icon="edit" title="Editar" variant="edit" onClick={() => abrirEditar(p)} />
                  <IconButton icon="trash" title="Eliminar" variant="danger" onClick={() => eliminar(p)} />
                </div>
              </li>
            );
          })}
        </ul>

        {productos.length === 0 && (
          <p className="px-5 py-10 text-center text-sm text-white/50">
            No hay productos. Tocá “Nuevo producto” para agregar el primero.
          </p>
        )}
      </Panel>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={guardar}
        title={editId ? "Editar producto" : "Nuevo producto"}
        submitLabel={editId ? "Guardar cambios" : "Crear producto"}
      >
        <ImageInput value={form.imagen} onChange={set("imagen")} label="Foto del producto" />

        <Field label="Nombre">
          <Input value={form.nombre} onChange={set("nombre")} placeholder="Ej: Camiseta titular 2025" />
        </Field>

        <Field label="Descripción">
          <Textarea value={form.descripcion} onChange={set("descripcion")} placeholder="Detalles del producto…" />
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Categoría">
            <Select value={form.categoria} onChange={set("categoria")}>
              {categorias.map((c) => (
                <option key={c.id} value={c.slug}>
                  {c.nombre}
                </option>
              ))}
            </Select>
          </Field>
          <Field label="Etiqueta" hint="Texto del distintivo (ej: Más pedida)">
            <Input value={form.etiqueta} onChange={set("etiqueta")} placeholder="Más pedida" />
          </Field>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <Field label="Precio (opcional)">
            <Input value={form.precio} onChange={set("precio")} placeholder="Desde Gs. 90.000" />
          </Field>
          <Field label="Color base" hint="Para el diseño de muestra">
            <Select value={form.base} onChange={set("base")}>
              {COLORES.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </Select>
          </Field>
          <Field label="Número" hint="Para el diseño de muestra">
            <Input value={form.numero} onChange={set("numero")} placeholder="10" />
          </Field>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-carbon-900/60 px-4 py-3">
          <div>
            <p className="text-sm font-semibold text-white">Mostrar en la web</p>
            <p className="text-xs text-white/45">Si está oculto, no aparece en el catálogo público.</p>
          </div>
          <Toggle checked={form.visible !== false} onChange={(v) => set("visible")(v)} />
        </div>
      </Modal>
    </>
  );
}
