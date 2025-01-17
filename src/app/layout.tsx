import "./globals.css";
import Footer from "./shared/footer";
import Header from "./shared/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <div className="md:mx-60 mx-10">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
