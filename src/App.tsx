import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sobre-mi" element={<AboutPage />} />
              <Route path="/servicios" element={<ServicesPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/condiciones-comunes" element={<CondicionesComunes />} />
              <Route path="/blog/sintomas-alerta" element={<SintomasAlerta />} />
              <Route path="/blog/prevencion" element={<Prevencion />} />
              <Route path="/blog/procedimientos" element={<Procedimientos />} />
              <Route path="/blog/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
              <Route path="/contacto" element={<ContactPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
