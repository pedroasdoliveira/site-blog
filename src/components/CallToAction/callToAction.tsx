import { ArrowRight, Store } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-cyan-950/20 to-gray-700 relative">
      <div className="absolute inset-0 bg-[url('/images/background-footer.svg')] bg-cover bg-center bg-no-repeat opacity-90" />

      <div className="container relative">
        <div className="flex flex-col items-center text-center">
          <div className="p-4 bg-cyan-300 w-fit rounded-full relative bottom-24">
            <Store className="text-cyan-100" />
          </div>

          <h2
            className='text-gray-100 text-balance text-heading-xl font-sans'
          >
            Crie uma loja online e inicie suas vendas ainda hoje
          </h2>

          <Button variant={"primary"} asChild className="mt-8">
            <Link href={"/criar-loja"}>
              Criar loja grátis
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
