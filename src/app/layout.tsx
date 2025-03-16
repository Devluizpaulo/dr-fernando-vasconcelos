import { Geist, Geist_Mono } from "next/font/google";
import { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Fernando Vasconcellos - Consultoria Jurídica",
  description:
    "Consultoria jurídica especializada nas áreas de Direito Trabalhista, Tributário, Cível e muito mais. Protegendo os seus direitos com ética, transparência e dedicação.",
  keywords:
    "advogado, consultoria jurídica, direito trabalhista, direito tributário, direito cível, defesa de direitos",
  authors: [
    {
      name: "Dr. Fernando Vasconcellos",
      url: "https://www.fvadvogados.com.br", // Adicionando o link para o site do autor
    },
  ],
  openGraph: {
    title: "Dr. Fernando Vasconcellos - Consultoria Jurídica",
    description:
      "Consultoria jurídica especializada nas áreas de Direito Trabalhista, Tributário, Cível e muito mais. Protegendo os seus direitos com ética, transparência e dedicação.",
    images: "/VASCONCELLOS.png",
    url: "https://www.fvadvogados.com.br/",
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        {/* Outros metadados globais podem ser adicionados aqui */}
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
