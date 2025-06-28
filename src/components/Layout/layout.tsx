import { Footer } from "../Footer";
import { Header } from "../Header";

type LayoutProps = {
    children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex min-h-screen flex-col bg-background/95 dark">
      <Header />

      <main className="flex-1 flex flex-col mb-12">
        {children}
      </main>

      <Footer />
    </div>
  );
};
