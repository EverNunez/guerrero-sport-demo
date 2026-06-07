"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/icons";
import { fileToDataURL } from "@/lib/store";

// ---------- Encabezado de página ----------
export function PageHeader({ titulo, descripcion, accion, onAccion }) {
  return (
    <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">{titulo}</h1>
        {descripcion && (
          <p className="mt-1.5 max-w-2xl text-sm text-white/55">{descripcion}</p>
        )}
      </div>
      {accion && (
        <button className="btn-primary !py-2.5 !text-xs" type="button" onClick={onAccion}>
          <Icon name="plus" className="h-4 w-4" />
          {accion}
        </button>
      )}
    </div>
  );
}

// ---------- Tarjeta de estadística ----------
export function StatCard({ icon, label, valor, hint, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-white/10 bg-carbon-800/50 p-5 transition-colors hover:border-white/20"
    >
      <div className="flex items-center justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-spartan/15 text-spartan-400">
          <Icon name={icon} className="h-5 w-5" />
        </span>
        {hint && <span className="text-xs text-white/40">{hint}</span>}
      </div>
      <p className="mt-4 font-display text-3xl font-bold text-white">{valor}</p>
      <p className="text-sm text-white/55">{label}</p>
    </motion.div>
  );
}

// ---------- Contenedor ----------
export function Panel({ children, className = "" }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-white/10 bg-carbon-800/40 ${className}`}>
      {children}
    </div>
  );
}

// ---------- Campos de formulario ----------
export function Field({ label, hint, children }) {
  return (
    <label className="block">
      {label && (
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">
          {label}
        </span>
      )}
      {children}
      {hint && <span className="mt-1 block text-xs text-white/35">{hint}</span>}
    </label>
  );
}

const inputCls =
  "w-full rounded-xl border border-white/10 bg-carbon-900/80 px-3.5 py-2.5 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-spartan/60 focus:bg-carbon-900";

export function Input(props) {
  return <input {...props} className={`${inputCls} ${props.className || ""}`} />;
}

export function Textarea(props) {
  return <textarea {...props} className={`${inputCls} min-h-[88px] resize-y ${props.className || ""}`} />;
}

export function Select({ children, ...props }) {
  return (
    <select {...props} className={`${inputCls} ${props.className || ""}`}>
      {children}
    </select>
  );
}

// ---------- Toggle (mostrar/ocultar) ----------
export function Toggle({ checked, onChange, label }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="inline-flex items-center gap-2"
      aria-pressed={checked}
    >
      <span
        className={`relative h-6 w-11 rounded-full transition-colors ${
          checked ? "bg-emerald-500" : "bg-white/15"
        }`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
            checked ? "translate-x-[22px]" : "translate-x-0.5"
          }`}
        />
      </span>
      {label && <span className="text-sm text-white/70">{label}</span>}
    </button>
  );
}

// ---------- Botón de ícono ----------
export function IconButton({ icon, title, onClick, variant = "ghost" }) {
  const styles = {
    ghost: "border-white/10 bg-white/[0.03] text-white/70 hover:text-white hover:border-white/25",
    danger: "border-red-500/30 bg-red-500/10 text-red-300 hover:bg-red-500/20",
    edit: "border-royal/30 bg-royal/10 text-royal-400 hover:bg-royal/20",
  };
  return (
    <button
      type="button"
      title={title}
      aria-label={title}
      onClick={onClick}
      className={`grid h-9 w-9 place-items-center rounded-lg border transition-colors ${styles[variant]}`}
    >
      <Icon name={icon} className="h-4.5 w-4.5" />
    </button>
  );
}

// ---------- Subir imagen (a data URL) ----------
export function ImageInput({ value, onChange, label = "Imagen" }) {
  const ref = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoading(true);
    try {
      const dataUrl = await fileToDataURL(file);
      onChange(dataUrl);
    } catch {
      alert("No se pudo procesar la imagen. Probá con otra.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Field label={label} hint="Se redimensiona automáticamente. Si la dejás vacía, se usa un diseño de muestra.">
      <div className="flex items-center gap-3">
        <div className="relative grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-xl border border-white/10 bg-carbon-900">
          {value ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={value} alt="" className="h-full w-full object-cover" />
          ) : (
            <Icon name="image" className="h-6 w-6 text-white/30" />
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => ref.current?.click()}
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-white/80 hover:border-white/30"
          >
            <Icon name="upload" className="h-4 w-4" />
            {loading ? "Procesando…" : value ? "Cambiar" : "Subir foto"}
          </button>
          {value && (
            <button
              type="button"
              onClick={() => onChange("")}
              className="inline-flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs font-semibold text-red-300 hover:bg-red-500/20"
            >
              <Icon name="trash" className="h-4 w-4" />
              Quitar
            </button>
          )}
        </div>
        <input ref={ref} type="file" accept="image/*" onChange={handleFile} className="hidden" />
      </div>
    </Field>
  );
}

// ---------- Modal ----------
export function Modal({ open, onClose, title, children, onSubmit, submitLabel = "Guardar" }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm sm:items-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="my-8 w-full max-w-lg rounded-2xl border border-white/10 bg-carbon-800 shadow-card"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <button
                type="button"
                onClick={onClose}
                className="grid h-8 w-8 place-items-center rounded-lg text-white/60 hover:bg-white/10 hover:text-white"
                aria-label="Cerrar"
              >
                <Icon name="x" className="h-5 w-5" />
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit?.();
              }}
            >
              <div className="max-h-[65vh] space-y-4 overflow-y-auto px-5 py-5">
                {children}
              </div>
              <div className="flex justify-end gap-3 border-t border-white/10 px-5 py-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/70 hover:border-white/30 hover:text-white"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn-primary !py-2.5 !text-xs">
                  <Icon name="save" className="h-4 w-4" />
                  {submitLabel}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
