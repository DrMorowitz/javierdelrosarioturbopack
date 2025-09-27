const HomePage = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">Dr. Javier del Rosario - Urólogo</h1>
      <p className="text-xl mb-8">Especialista en urología con más de 25 años de experiencia en Panamá.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-3">25+ Años de Experiencia</h2>
          <p className="text-gray-600">Especialista en cirugías urológicas y tratamientos avanzados.</p>
        </div>
        
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-3">5,000+ Procedimientos</h2>
          <p className="text-gray-600">Experiencia comprobada en procedimientos urológicos exitosos.</p>
        </div>
        
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-3">3 Ubicaciones</h2>
          <p className="text-gray-600">Consultorios en Panama Clinic, CHSF-Coronado y Centro Médico del Caribe-Colón.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;