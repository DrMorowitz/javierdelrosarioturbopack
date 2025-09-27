"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { buttonAnimation } from '@/lib/animations';

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  size?: 'default' | 'sm' | 'lg';
}

const WhatsAppButton = ({ 
  message = "Hola Dr. del Rosario, me gustaría agendar una consulta.", 
  className = "",
  size = "default"
}: WhatsAppButtonProps) => {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/50760000000?text=${encodedMessage}`, '_blank');
  };

  return (
    <motion.div
      variants={buttonAnimation}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
    >
      <Button 
        onClick={handleWhatsApp}
        className={`btn-whatsapp ${className}`}
        size={size}
      >
        <MessageCircle className="w-4 h-4 mr-2" />
        WhatsApp
      </Button>
    </motion.div>
  );
};

export default WhatsAppButton;