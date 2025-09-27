"use client";

import React from 'react';
import Link from 'next/link';

const BlogPage = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">Blog del Dr. Javier del Rosario</h1>
      <p className="text-xl mb-8">Educación urológica moderna para pacientes informados.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-3">Condiciones Comunes</h2>
          <p className="text-gray-600 mb-4">Información sobre las condiciones urológicas más frecuentes.</p>
          <Link href="/blog/condiciones-comunes" className="text-blue-600 hover:underline">
            Leer más →
          </Link>
        </div>
        
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-3">Síntomas de Alerta</h2>
          <p className="text-gray-600 mb-4">Cuándo consultar urgentemente al urólogo.</p>
          <Link href="/blog/sintomas-alerta" className="text-blue-600 hover:underline">
            Leer más →
          </Link>
        </div>
        
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-3">Prevención</h2>
          <p className="text-gray-600 mb-4">Consejos para mantener una buena salud urológica.</p>
          <Link href="/blog/prevencion" className="text-blue-600 hover:underline">
            Leer más →
          </Link>
        </div>
        
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-3">Procedimientos</h2>
          <p className="text-gray-600 mb-4">Guías detalladas sobre procedimientos urológicos.</p>
          <Link href="/blog/procedimientos" className="text-blue-600 hover:underline">
            Leer más →
          </Link>
        </div>
        
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-3">Preguntas Frecuentes</h2>
          <p className="text-gray-600 mb-4">Respuestas a las dudas más comunes sobre urología.</p>
          <Link href="/blog/preguntas-frecuentes" className="text-blue-600 hover:underline">
            Leer más →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;