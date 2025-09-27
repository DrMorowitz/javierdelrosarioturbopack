'use client'

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Página No Encontrada
          </h2>
          <p className="text-muted-foreground mb-6">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Ir al Inicio
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/blog" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Ver Blog
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Si necesitas ayuda médica urgente, contacta al{" "}
            <a 
              href="https://wa.me/50760000000" 
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dr. Javier del Rosario
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;