const CondicionesComunes = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">Condiciones Urológicas Comunes</h1>
      <p className="text-xl mb-8">Información sobre las condiciones urológicas más frecuentes en Panamá.</p>
      
      <div className="space-y-8">
        <article className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Cálculos Renales</h2>
          <p className="text-gray-600 mb-4">Los cálculos renales afectan al 10% de la población panameña.</p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Dolor intenso en la espalda o costado</li>
            <li>Dolor al orinar</li>
            <li>Náuseas y vómitos</li>
            <li>Orina con sangre</li>
          </ul>
        </article>
        
        <article className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Infecciones Urinarias</h2>
          <p className="text-gray-600 mb-4">Las infecciones del tracto urinario requieren atención médica.</p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Ardor al orinar</li>
            <li>Urgencia urinaria frecuente</li>
            <li>Dolor suprapúbico</li>
            <li>Fiebre y escalofríos</li>
          </ul>
        </article>
        
        <article className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Hiperplasia Prostática</h2>
          <p className="text-gray-600 mb-4">La próstata agrandada afecta al 50% de hombres después de los 50 años.</p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Dificultad para iniciar la micción</li>
            <li>Chorro urinario débil</li>
            <li>Sensación de vaciado incompleto</li>
            <li>Urgencia urinaria nocturna</li>
          </ul>
        </article>
      </div>
    </div>
  );
};

export default CondicionesComunes;