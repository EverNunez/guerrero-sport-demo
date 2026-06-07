"use client";

import { useState } from "react";
import {
  PageHeader,
  Modal,
  Field,
  Input,
  Select,
  Toggle,
  IconButton,
  ImageInput,
} from "@/components/admin/AdminUI";
import { Icon } from "@/components/icons";
import ProductMedia from "@/components/ui/ProductMedia";
import { useStore } from "@/lib/store";

const COLORES = [
  { value: "royal", label: "Azul" },
  { value: "spartan", label: "Rojo" },
  { value: "gold", label: "Dorado / Naranja" },
  { value: "carbon", label: "Carbón / Gris" },
];

const vacio = {
  titulo: "",
  tipo: "",
  base: "royal",
  numero: "GS",
  imagen: "",
  visible: true,
};

export default function AdminGaleria() {
  const { galeria, addGaleria, updateGaleria, removeGaleria, toggleGaleria } = useStore();
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(vacio);

  const abrirNuevo = () => {
    setEditId(null);
    setForm(vacio);
    setOpen(true);
  };
  const abrirEditar = (g) => {
    setEditId(g.id);
    setForm({ ...vacio, ...g });
    setOpen(true);
  };

  const guardar = () => {
    if (!form.titulo.trim()) {
      alert("Poné un título a la imagen.");
      return;
    }
    if (editId) updateGaleria(editId, form);
    else addGaleria(form);
    setOpen(false);
  };

  const eliminar = (g) => {
    if (confirm(`¿Eliminar "${g.titulo}" de la galería?`)) removeGaleria(g.id);
  };

  const set = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e?.target ? e.target.value : e }));

  return (
    <>
      <PageHeader
        titulo="Galería de trabajos"
        descripcion="Subí las fotos de trabajos terminados. Aparecen en la sección Galería de la web."
        accion="Agregar imagen"
        onAccion={abrirNuevo}
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {galeria.map((g) => (
          <figure
            key={g.id}
            className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-carbon-700/60 to-carbon-900"
          >
            <div className="absolute inset-0 flex items-center justify-center p-5">
              <ProductMedia
                imagen={g.imagen}
                alt={g.titulo}
                base={g.base}
                numero={g.numero}
                jerseyClassName="h-full w-auto"
                sizes="(max-width:1024px) 50vw, 25vw"
              />
            </div>

            {g.visible === false && (
              <span className="absolute left-2 top-2 rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-semibold text-white/70">
                Oculta
              </span>
            )}

            {/* Acciones */}
            <div className="absolute right-2 top-2 flex gap-1.5 opacity-0 transition-opacity group-hover:opacity-100">
              <IconButton
                icon={g.visible !== false ? "eye" : "eye-off"}
                title={g.visible !== false ? "Ocultar" : "Mostrar"}
                onClick={() => toggleGaleria(g.id)}
              />
              <IconButton icon="edit" title="Editar" variant="edit" onClick={() => abrirEditar(g)} />
              <IconButton icon="trash" title="Eliminar" variant="danger" onClick={() => eliminar(g)} />
            </div>

            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-carbon-950 to-transparent p-3">
              <p className="text-xs font-semibold text-white">{g.titulo}</p>
              <p className="text-[11px] text-white/50">{g.tipo}</p>
            </figcaption>
          </figure>
        ))}

        {/* Slot para agregar */}
        <button
          onClick={abrirNuevo}
          className="grid aspect-square place-items-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02] text-white/40 transition-colors hover:border-spartan/40 hover:text-spartan-400"
        >
          <span className="flex flex-col items-center gap-2 text-xs font-semibold uppercase tracking-wider">
            <Icon name="plus" className="h-6 w-6" />
            Agregar
          </span>
        </button>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={guardar}
        title={editId ? "Editar imagen" : "Agregar imagen"}
        submitLabel={editId ? "Guardar cambios" : "Agregar"}
      >
        <ImageInput value={form.imagen} onChange={set("imagen")} label="Foto del trabajo" />
        <Field label="Título">
          <Input value={form.titulo} onChange={set("titulo")} placeholder="Ej: Club Nanawa" />
        </Field>
        <Field label="Tipo / descripción corta">
          <Input value={form.tipo} onChange={set("tipo")} placeholder="Ej: Camiseta titular" />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Color base" hint="Para el diseño de muestra (si no hay foto)">
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
            <p className="text-xs text-white/45">Si está oculta, no aparece en la galería pública.</p>
          </div>
          <Toggle checked={form.visible !== false} onChange={(v) => set("visible")(v)} />
        </div>
      </Modal>
    </>
  );
}
