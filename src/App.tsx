// NOTE: This file is part of the old React/Vite structure
// Next.js uses the app/ directory for routing instead
// This file is kept for compatibility but not used in Next.js build

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from "@/contexts/LanguageContext";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage"; 
import ServicesPage from "./pages/ServicesPage";
import BlogPage from "./pages/BlogPage";
import CondicionesComunes from "./pages/blog/CondicionesComunes";
import SintomasAlerta from "./pages/blog/SintomasAlerta";
import Prevencion from "./pages/blog/Prevencion";
import Procedimientos from "./pages/blog/Procedimientos";
import PreguntasFrecuentes from "./pages/blog/PreguntasFrecuentes";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import Footer from "@/components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {/* Next.js handles routing via app/ directory */}
          <div className="min-h-screen flex flex-col">
            <p>This is the old React Router structure - Next.js uses app/ directory instead</p>
            <Footer />
          </div>
        </TooltipProvider>
      </LanguageProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
