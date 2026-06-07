"use client";

// ============================================================================
// Store del sitio Guerrero Sport (persistencia en el navegador con localStorage)
// ----------------------------------------------------------------------------
// - El sitio público y el panel /admin leen y escriben desde acá.
// - Los datos por defecto vienen de lib/site.js.
// - Los cambios del panel se guardan en localStorage y se reflejan en la web
//   (en el mismo navegador / dispositivo).
// - Para un backend multiusuario real (multi-dispositivo) se reemplazaría esta
//   capa por llamadas a una base de datos, manteniendo la misma interfaz.
// ============================================================================

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  PRODUCTOS,
  CATEGORIAS,
  GALERIA,
  BANNERS,
  CONTACTO,
} from "@/lib/site";

const STORAGE_KEY = "gs_data_v1";
const SESSION_KEY = "gs_session_v1";

// Credenciales del panel administrativo.
export const ADMIN_USER = "admin";
export const ADMIN_PASS = "guerrero2025";

// Estado inicial (defaults) — usado en SSR y como base de "restablecer".
function defaults() {
  return {
    productos: PRODUCTOS,
    categorias: CATEGORIAS,
    galeria: GALERIA,
    banners: BANNERS,
    contacto: CONTACTO,
  };
}

export function newId(prefix = "id") {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return `${prefix}-${crypto.randomUUID().slice(0, 8)}`;
  }
  return `${prefix}-${Date.now().toString(36)}${Math.random()
    .toString(36)
    .slice(2, 6)}`;
}

// Convierte un archivo de imagen a data URL redimensionado (para no llenar
// localStorage). Máx ~900px lado largo, JPEG calidad 0.82.
export function fileToDataURL(file, max = 900) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        let { width, height } = img;
        if (width > max || height > max) {
          if (width >= height) {
            height = Math.round((height * max) / width);
            width = max;
          } else {
            width = Math.round((width * max) / height);
            height = max;
          }
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.82));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [data, setData] = useState(defaults);
  const [loaded, setLoaded] = useState(false);
  const [authed, setAuthed] = useState(false);

  // Carga desde localStorage al montar (evita mismatch de hidratación:
  // el primer render usa defaults igual que el servidor).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setData({ ...defaults(), ...parsed });
      }
      setAuthed(localStorage.getItem(SESSION_KEY) === "1");
    } catch {
      // si falla, seguimos con defaults
    }
    setLoaded(true);
  }, []);

  // Persiste cada cambio (sólo después de la carga inicial).
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      // Probable cuota excedida (imágenes muy pesadas en localStorage).
      console.warn("No se pudo guardar en localStorage:", e);
    }
  }, [data, loaded]);

  const actions = useMemo(() => {
    const updateList = (key, fn) =>
      setData((d) => ({ ...d, [key]: fn(d[key]) }));

    return {
      // ---- Productos ----
      addProducto: (p) =>
        updateList("productos", (list) => [
          { id: newId("prod"), visible: true, base: "spartan", numero: "10", imagen: "", precio: "", ...p },
          ...list,
        ]),
      updateProducto: (id, patch) =>
        updateList("productos", (list) =>
          list.map((p) => (p.id === id ? { ...p, ...patch } : p))
        ),
      removeProducto: (id) =>
        updateList("productos", (list) => list.filter((p) => p.id !== id)),
      toggleProducto: (id) =>
        updateList("productos", (list) =>
          list.map((p) => (p.id === id ? { ...p, visible: !p.visible } : p))
        ),

      // ---- Categorías ----
      addCategoria: (c) =>
        updateList("categorias", (list) => [
          ...list,
          { id: newId("cat"), ...c },
        ]),
      updateCategoria: (id, patch) =>
        updateList("categorias", (list) =>
          list.map((c) => (c.id === id ? { ...c, ...patch } : c))
        ),
      removeCategoria: (id) =>
        updateList("categorias", (list) => list.filter((c) => c.id !== id)),

      // ---- Galería ----
      addGaleria: (g) =>
        updateList("galeria", (list) => [
          { id: newId("gal"), visible: true, base: "royal", numero: "GS", span: "", imagen: "", ...g },
          ...list,
        ]),
      updateGaleria: (id, patch) =>
        updateList("galeria", (list) =>
          list.map((g) => (g.id === id ? { ...g, ...patch } : g))
        ),
      removeGaleria: (id) =>
        updateList("galeria", (list) => list.filter((g) => g.id !== id)),
      toggleGaleria: (id) =>
        updateList("galeria", (list) =>
          list.map((g) => (g.id === id ? { ...g, visible: !g.visible } : g))
        ),

      // ---- Banners ----
      addBanner: (b) =>
        updateList("banners", (list) => [
          ...list,
          { id: newId("ban"), estado: "Borrador", ubicacion: "", ...b },
        ]),
      updateBanner: (id, patch) =>
        updateList("banners", (list) =>
          list.map((b) => (b.id === id ? { ...b, ...patch } : b))
        ),
      removeBanner: (id) =>
        updateList("banners", (list) => list.filter((b) => b.id !== id)),

      // ---- Contacto ----
      updateContacto: (patch) =>
        setData((d) => ({ ...d, contacto: { ...d.contacto, ...patch } })),

      // ---- Global ----
      resetAll: () => {
        setData(defaults());
      },
    };
  }, []);

  // ---- Autenticación (gate del panel, no es seguridad de servidor) ----
  const login = (user, pass) => {
    const ok = user === ADMIN_USER && pass === ADMIN_PASS;
    if (ok) {
      try {
        localStorage.setItem(SESSION_KEY, "1");
      } catch {}
      setAuthed(true);
    }
    return ok;
  };
  const logout = () => {
    try {
      localStorage.removeItem(SESSION_KEY);
    } catch {}
    setAuthed(false);
  };

  const value = useMemo(
    () => ({ ...data, ...actions, loaded, authed, login, logout }),
    [data, actions, loaded, authed]
  );

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) {
    throw new Error("useStore debe usarse dentro de <StoreProvider>");
  }
  return ctx;
}
