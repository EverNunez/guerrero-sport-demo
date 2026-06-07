"use client";

import { useState } from "react";
import {
  PageHeader,
  Panel,
  Modal,
  Field,
  Input,
  Textarea,
  IconButton,
} from "@/components/admin/AdminUI";
import { Icon } from "@/components/icons";
import { useStore } from "@/lib/store";

const slugify = (s) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const vacio = { nombre: "", descripcion: "", slug: "" };

export default function AdminCategorias() {
  const { categorias, productos, addCategoria, updateCategoria, removeCategoria } =
    useStore();
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(vacio);

  const abrirNuevo = () => {
    setEditId(null);
    setForm(vacio);
    setOpen(true);
  };
  const abrirEditar = (c) => {
    setEditId(c.id);
    setForm({ ...vacio, ...c });
    setOpen(true);
  };

  const guardar = () => {
    if (!form.nombre.trim()) {
      alert("Poné un nombre a la categoría.");
      return;
    }
    const slug = form.slug?.trim() || slugify(form.nombre);
    if (editId) updateCategoria(editId, { ...form, slug });
    else addCategoria({ ...form, slug });
    setOpen(false);
  };

  const eliminar = (c) => {
    const enUso = productos.filter((p) => p.categoria === c.slug).length;
    const aviso = enUso
      ? `Hay ${enUso} producto(s) en esta categoría. Seguirán existiendo pero sin categoría asignada. `
      : "";
    if (confirm(`${aviso}¿Eliminar la categoría "${c.nombre}"?`)) {
      removeCategoria(c.id);
    }
  };

  return (
    <>
      <PageHeader
        titulo="Categorías"
        descripcion="Organizá tu catálogo. Las categorías se usan al crear o editar productos."
        accion="Nueva categoría"
        onAccion={abrirNuevo}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categorias.map((c) => {
          const cant = productos.filter((p) => p.categoria === c.slug).length;
          return (
            <Panel key={c.id} className="p-5">
              <div className="flex items-start justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-spartan/15 text-spartan-400">
                  <Icon name="tag" className="h-5 w-5" />
                </span>
                <div className="flex gap-2">
                  <IconButton icon="edit" title="Editar" variant="edit" onClick={() => abrirEditar(c)} />
                  <IconButton icon="trash" title="Eliminar" variant="danger" onClick={() => eliminar(c)} />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">{c.nombre}</h3>
              <p className="mt-1 text-sm text-white/55">{c.descripcion}</p>
              <p className="mt-3 text-xs text-white/40">
                {cant} producto{cant === 1 ? "" : "s"} · /{c.slug}
              </p>
            </Panel>
          );
        })}
      </div>

      {categorias.length === 0 && (
        <p className="mt-8 text-center text-sm text-white/50">
          No hay categorías. Tocá “Nueva categoría”.
        </p>
      )}

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={guardar}
        title={editId ? "Editar categoría" : "Nueva categoría"}
        submitLabel={editId ? "Guardar cambios" : "Crear categoría"}
      >
        <Field label="Nombre">
          <Input
            value={form.nombre}
            onChange={(e) => setForm((f) => ({ ...f, nombre: e.target.value }))}
            placeholder="Ej: Camisetas"
          />
        </Field>
        <Field label="Descripción">
          <Textarea
            value={form.descripcion}
            onChange={(e) => setForm((f) => ({ ...f, descripcion: e.target.value }))}
            placeholder="Breve descripción de la categoría"
          />
        </Field>
        <Field label="Identificador (slug)" hint="Se genera solo a partir del nombre si lo dejás vacío.">
          <Input
            value={form.slug}
            onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
            placeholder="camisetas"
          />
        </Field>
      </Modal>
    </>
  );
}
