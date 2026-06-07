"use client";

import { useEffect, useState } from "react";
import { PageHeader, Panel, Field, Input, IconButton } from "@/components/admin/AdminUI";
import { Icon } from "@/components/icons";
import { WHATSAPP_NUMBER } from "@/lib/site";
import { useStore } from "@/lib/store";

export default function AdminContacto() {
  const { contacto, updateContacto, loaded } = useStore();
  const [form, setForm] = useState(contacto);
  const [saved, setSaved] = useState(false);

  // Sincroniza cuando termina de cargar localStorage.
  useEffect(() => {
    setForm(contacto);
  }, [loaded]); // eslint-disable-line react-hooks/exhaustive-deps

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const setHorario = (i, key, value) =>
    setForm((f) => ({
      ...f,
      horarios: f.horarios.map((h, idx) => (idx === i ? { ...h, [key]: value } : h)),
    }));

  const addHorario = () =>
    setForm((f) => ({ ...f, horarios: [...f.horarios, { dia: "", hora: "" }] }));

  const removeHorario = (i) =>
    setForm((f) => ({ ...f, horarios: f.horarios.filter((_, idx) => idx !== i) }));

  const guardar = (e) => {
    e.preventDefault();
    updateContacto(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <>
      <PageHeader
        titulo="Información de contacto"
        descripcion="Estos datos se muestran en el footer y en la sección de contacto del sitio."
      />

      <form onSubmit={guardar}>
        <Panel className="p-5 sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="WhatsApp (visible)">
              <Input value={form.telefonoVisible || ""} onChange={set("telefonoVisible")} placeholder="0983 622 191" />
            </Field>
            <Field label="Instagram (usuario)">
              <Input value={form.instagram || ""} onChange={set("instagram")} placeholder="@guerrero.sport_" />
            </Field>
            <Field label="Instagram (enlace)">
              <Input value={form.instagramUrl || ""} onChange={set("instagramUrl")} placeholder="https://instagram.com/guerrero.sport_" />
            </Field>
            <Field label="Dirección">
              <Input value={form.direccion || ""} onChange={set("direccion")} placeholder="Presidente Franco · Barrio Santa Rosa" />
            </Field>
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-carbon-900/40 px-4 py-3 text-xs text-white/45">
            <Icon name="whatsapp" className="mr-1.5 inline h-4 w-4 text-emerald-400" />
            Número de los botones de WhatsApp: <span className="font-semibold text-white/70">{WHATSAPP_NUMBER}</span>{" "}
            (configurado en <code>lib/site.js</code> · <code>WHATSAPP_NUMBER</code>).
          </div>

          <div className="mb-3 mt-7 flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
              Horarios de atención
            </h3>
            <button
              type="button"
              onClick={addHorario}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-white/80 hover:border-white/30"
            >
              <Icon name="plus" className="h-4 w-4" />
              Agregar
            </button>
          </div>

          <div className="space-y-3">
            {form.horarios?.map((h, i) => (
              <div key={i} className="flex items-end gap-3">
                <div className="flex-1">
                  <Field label={i === 0 ? "Día" : ""}>
                    <Input value={h.dia} onChange={(e) => setHorario(i, "dia", e.target.value)} placeholder="Lunes a viernes" />
                  </Field>
                </div>
                <div className="flex-1">
                  <Field label={i === 0 ? "Horario" : ""}>
                    <Input value={h.hora} onChange={(e) => setHorario(i, "hora", e.target.value)} placeholder="7:30 a 17:00 hs" />
                  </Field>
                </div>
                <IconButton icon="trash" title="Quitar" variant="danger" onClick={() => removeHorario(i)} />
              </div>
            ))}
          </div>

          <div className="mt-7 flex items-center gap-4">
            <button type="submit" className="btn-primary !py-2.5 !text-xs">
              <Icon name="save" className="h-4 w-4" />
              Guardar cambios
            </button>
            {saved && (
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-300">
                <Icon name="check" className="h-4 w-4" />
                Guardado
              </span>
            )}
          </div>
        </Panel>
      </form>
    </>
  );
}
