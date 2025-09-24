import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsRegular = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins-regular",
});

export const metadata: Metadata = {
  title: "Frame x Frame",
  description:
    "Expositor de trabajos realizados por Ignacio Ceci Lucero en la carrera de Producción Audiovisual de la Escuela de Comunicación ETER.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppinsRegular.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
