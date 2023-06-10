import { EmailContextProvider } from "@/context/context";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend Mentor | Newsletter sign-up form with success message",
  description: "Frontend Mentor | Newsletter sign-up form with success message",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="md:bg-charcoal-grey">
      <body className={inter.className}>
        <EmailContextProvider>{children}</EmailContextProvider>
      </body>
    </html>
  );
}
