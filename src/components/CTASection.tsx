import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Star,
  Stethoscope,
  Shield,
  Award,
  Clock
} from 'lucide-react';

// Particle interface
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

// Medical particles background component
const MedicalParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      life: Math.random() * 60 + 60,
      maxLife: Math.random() * 60 + 60
    });

    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 15; i++) {
        particlesRef.current.push(createParticle());
      }
    };

    const updateParticles = () => {
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Mouse interaction - gentle attraction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100 * 0.01;
          particle.vx += dx * force * 0.01;
          particle.vy += dy * force * 0.01;
        }

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width || 
            particle.y < 0 || particle.y > canvas.height || 
            particle.life <= 0) {
          particlesRef.current[index] = createParticle();
        }
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        const opacity = particle.life / particle.maxLife;
        const size = 2 + (opacity * 2);
        
        // Medical blue gradient
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, size * 2
        );
        gradient.addColorStop(0, `rgba(37, 99, 235, ${opacity * 0.6})`);
        gradient.addColorStop(1, `rgba(37, 99, 235, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

// Interactive highlight wrapper
const MedicalHighlight: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!elementRef.current) return;
    
    const rect = elementRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      ref={elementRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Highlight effect */}
      {isHovering && (
        <div
          className="absolute pointer-events-none transition-opacity duration-300"
          style={{
            left: mousePosition.x - 100,
            top: mousePosition.y - 100,
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%)',
            transform: 'translate3d(0, 0, 0)',
            borderRadius: '50%',
            filter: 'blur(20px)'
          }}
        />
      )}
      {children}
    </div>
  );
};

const CTASection: React.FC = () => {

  return (
    <section className="relative section-padding bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden">
      {/* Animated particles background */}
      <MedicalParticles />
      
      {/* Content */}
      <div className="relative section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Trust badges */}
          <div className="flex justify-center gap-4 mb-6">
            <Badge variant="secondary" className="gap-2">
              <Award className="w-4 h-4" />
              25 Años Experiencia
            </Badge>
            <Badge variant="secondary" className="gap-2">
              <Shield className="w-4 h-4" />
              Seguros Aceptados
            </Badge>
            <Badge variant="secondary" className="gap-2">
              <Star className="w-4 h-4" />
              +500 Pacientes
            </Badge>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿Listo para agendar su consulta?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Obtén el diagnóstico y tratamiento que necesitas. Elige tu método de contacto preferido 
            y agenda tu cita con el Dr. del Rosario hoy mismo.
          </p>

          {/* Urgency indicator */}
          <div className="flex items-center justify-center gap-2 mb-8 text-primary">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">Consultas disponibles esta semana</span>
          </div>
        </motion.div>

        {/* Single Elegant CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <MedicalHighlight className="inline-block">
            <div className="relative">
              {/* Glowing effect container */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/80 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              
              {/* Main button */}
              <Button 
                size="lg"
                className="relative bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                asChild
              >
                <Link to="/contacto" className="flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  Agenda Consulta
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </Link>
              </Button>
            </div>
          </MedicalHighlight>
        </motion.div>

        {/* Bottom trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="flex items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Stethoscope className="w-5 h-5" />
              <span>Consulta Especializada</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Información Confidencial</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span>Resultados Comprobados</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;