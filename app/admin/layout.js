import AdminShell from "@/components/admin/AdminShell";

export const metadata = {
  title: "Panel administrativo",
  description: "Administración del sitio Guerrero Sport.",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }) {
  return <AdminShell>{children}</AdminShell>;
}
