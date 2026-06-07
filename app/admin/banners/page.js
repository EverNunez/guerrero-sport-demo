"use client";

import { useState } from "react";
import {
  PageHeader,
  Panel,
  Modal,
  Field,
  Input,
  Select,
  IconButton,
} from "@/components/admin/AdminUI";
import { Icon } from "@/components/icons";
import { useStore } from "@/lib/store";

const ESTADOS = ["Activo", "Programado", "Borrador"];

const estadoColor = {
  Activo: "bg-emerald-500/15 text-emerald-300",
  Programado: "bg-royal/20 text-royal-400",
  Borrador: "bg-white/10 text-white/60",
};

const vacio = { titulo: "", ubicacion: "", estado: "Borrador" };

export default function AdminBanners() {
  const { banners, addBanner, updateBanner, removeBanner } = useStore();
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(vacio);

  const abrirNuevo = () => {
    setEditId(null);
    setForm(vacio);
    setOpen(true);
  };
  const abrirEditar = (b) => {
    setEditId(b.id);
    setForm({ ...vacio, ...b });
    setOpen(true);
  };

  const guardar = () => {
    if (!form.titulo.trim()) {
      alert("Poné un título al banner.");
      return;
    }
    if (editId) updateBanner(editId, form);
    else addBanner(form);
    setOpen(false);
  };

  const eliminar = (b) => {
    if (confirm(`¿Eliminar el banner "${b.titulo}"?`)) removeBanner(b.id);
  };

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <>
      <PageHeader
        titulo="Banners"
        descripcion="Mensajes y campañas destacadas para distintas secciones del sitio (hero, promociones)."
        accion="Nuevo banner"
        onAccion={abrirNuevo}
      />

      <Panel className="p-2">
        <ul className="divide-y divide-white/5">
          {banners.map((b) => (
            <li
              key={b.id}
              className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/[0.04] text-gold">
                  <Icon name="layout" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{b.titulo}</p>
                  <p className="text-xs text-white/45">{b.ubicacion || "Sin ubicación"}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`w-max rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                    estadoColor[b.estado] ?? "bg-white/10 text-white/60"
                  }`}
                >
                  {b.estado}
                </span>
                <IconButton icon="edit" title="Editar" variant="edit" onClick={() => abrirEditar(b)} />
                <IconButton icon="trash" title="Eliminar" variant="danger" onClick={() => eliminar(b)} />
              </div>
            </li>
          ))}
        </ul>

        {banners.length === 0 && (
          <p className="px-4 py-10 text-center text-sm text-white/50">
            No hay banners. Tocá “Nuevo banner”.
          </p>
        )}
      </Panel>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={guardar}
        title={editId ? "Editar banner" : "Nuevo banner"}
        submitLabel={editId ? "Guardar cambios" : "Crear banner"}
      >
        <Field label="Título">
          <Input value={form.titulo} onChange={set("titulo")} placeholder="Ej: Temporada 2025" />
        </Field>
        <Field label="Ubicación">
          <Input value={form.ubicacion} onChange={set("ubicacion")} placeholder="Ej: Hero principal" />
        </Field>
        <Field label="Estado">
          <Select value={form.estado} onChange={set("estado")}>
            {ESTADOS.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </Select>
        </Field>
      </Modal>
    </>
  );
}
