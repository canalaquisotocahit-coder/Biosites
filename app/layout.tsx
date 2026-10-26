import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BioSites | Presença digital para advocacia",
  description:
    "Uma página profissional para apresentar sua atuação jurídica, compartilhar seus contatos e facilitar o primeiro contato com clientes.",
  keywords: ["bio site para advogados", "advocacia", "presença digital", "perfil profissional"],
  openGraph: {
    title: "BioSites — Presença digital para advocacia",
    description: "Sua atuação jurídica, apresentada com clareza e profissionalismo.",
    type: "website",
    locale: "pt_BR"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
