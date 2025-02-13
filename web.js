import React, { useState } from 'react';
import { Camera } from 'lucide-react';

const IconMenu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 12h18M3 6h18M3 18h18" />
  </svg>
);

const IconX = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const IconSearch = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

const IconChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const IconGithub = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const IconDiscord = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    <path d="M21 10c0-6-4-7-4-7s-2.5 1-4 2c-3-.5-7-.5-10 0-1.5-1-4-2-4-2s-4 1-4 7c0 6 3 12 12 12s12-6 12-12z" />
  </svg>
);

const Website = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const seccionesPrincipales = [
    {
      title: 'Normativas',
      icon: '📋',
      subSections: ['Reglas Generales', 'Actividades Ilegales', 'Comercio', 'Reglas CC']
    },
    {
      title: 'Controles',
      icon: '🎮',
      subSections: ['Comandos del Servidor', 'Teclas', 'Controles Personalizados']
    },
    {
      title: 'Locales',
      icon: '🏢',
      status: [
        { name: 'Centro Ciudad', status: 'libre' },
        { name: 'Plaza Mercado', status: 'ocupado' }
      ]
    },
    {
      title: 'Usuarios VIP',
      icon: '⭐',
      subSections: ['Beneficios', 'VIPs Actuales', 'Cómo Aplicar']
    },
    {
      title: 'Staff',
      icon: '👥',
      subSections: ['Moderadores', 'Administradores', 'Equipo de Soporte']
    },
    {
      title: 'Roles y Trabajos',
      icon: '💼',
      subSections: ['Posiciones Disponibles', 'Requisitos', 'Proceso de Aplicación']
    },
    {
      title: 'Reglas y Postulaciones',
      icon: '📝',
      subSections: ['Reglas del Servidor', 'Proceso de Ingreso', 'Postulaciones Staff']
    },
    {
      title: 'Sobre Nosotros',
      icon: '🌟',
      subSections: ['Nuestra Historia', 'Visión', 'Comunidad']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Encabezado */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-400 hover:text-white"
            >
              {sidebarOpen ? <IconX /> : <IconMenu />}
            </button>
            <h1 className="text-xl font-bold">Comunidad Gaming</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar..."
                className="bg-gray-700 text-white px-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-red-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute right-3 top-2.5 text-gray-400">
                <IconSearch />
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button className="p-2 hover:bg-gray-700 rounded-lg">
                <IconGithub className="text-gray-400 hover:text-white" />
              </button>
              <button className="p-2 hover:bg-gray-700 rounded-lg">
                <IconDiscord className="text-gray-400 hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Barra lateral */}
        {sidebarOpen && (
          <aside className="w-64 bg-gray-800 min-h-screen p-4">
            <nav>
              {seccionesPrincipales.map((seccion) => (
                <div key={seccion.title} className="mb-4">
                  <div className="flex items-center space-x-2 text-white mb-2 cursor-pointer hover:bg-gray-700 p-2 rounded">
                    <span>{seccion.icon}</span>
                    <span>{seccion.title}</span>
                    <IconChevronRight className="ml-auto" />
                  </div>
                  
                  {seccion.subSections && (
                    <div className="ml-6 space-y-1">
                      {seccion.subSections.map((sub) => (
                        <div
                          key={sub}
                          className="text-gray-400 hover:text-white cursor-pointer p-1 text-sm hover:bg-gray-700 rounded"
                        >
                          {sub}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {seccion.status && (
                    <div className="ml-6 space-y-1">
                      {seccion.status.map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center space-x-2 text-sm"
                        >
                          <span className={`w-2 h-2 rounded-full ${
                            item.status === 'libre' ? 'bg-green-500' : 'bg-red-500'
                          }`} />
                          <span className="text-gray-400">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </aside>
        )}

        {/* Contenido Principal */}
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Bienvenido a nuestra Comunidad</h2>
            <p className="text-gray-400 mb-4">
              Explora nuestra documentación completa y directrices para aprovechar al máximo tu experiencia de juego.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {seccionesPrincipales.map((seccion) => (
                <div
                  key={seccion.title}
                  className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-2xl">{seccion.icon}</span>
                    <h3 className="text-xl font-semibold">{seccion.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm">
                    {seccion.subSections ? 
                      `Explora ${seccion.subSections.length} temas relacionados` :
                      'Consulta el estado actual e información'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Website;
