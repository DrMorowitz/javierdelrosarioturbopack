import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center max-w-md mx-auto p-8">
        <h1 className="text-8xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Página No Encontrada</h2>
        <p className="text-gray-600 mb-6">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        
        <div className="space-y-4">
          <Link href="/" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Ir al Inicio
          </Link>
        </div>
        
        <div className="mt-8 pt-8 border-t">
          <p className="text-sm text-gray-600">
            Si necesitas ayuda médica urgente, contacta al{" "}
            <a 
              href="https://wa.me/50760000000" 
              className="text-blue-600 hover:underline"
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