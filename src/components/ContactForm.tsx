import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { MessageCircle, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    consultationReason: '',
    preferredLocation: '',
    insurance: '',
  });

  const consultationReasons = [
    'Revisión de próstata',
    'Cálculos renales',
    'Biopsia de próstata',
    'Ultrasonido urológico',
    'Consulta general',
    'Seguimiento post-operatorio',
    'Otro',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally send the data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Consulta enviada",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    
    // Reset form
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      consultationReason: '',
      preferredLocation: '',
      insurance: '',
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hola Dr. del Rosario, me gustaría agendar una consulta.\n\nNombre: ${formData.fullName}\nTeléfono: ${formData.phone}\nMotivo: ${formData.consultationReason}\nUbicación preferida: ${formData.preferredLocation}`
    );
    window.open(`https://wa.me/50760000000?text=${message}`, '_blank');
  };

  const handleCliniWeb = () => {
    window.open('https://cliniweb.com/dr-javier-del-rosario', '_blank');
  };

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="fullName">{t('contact.name')}</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="form-medical mt-2"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="phone">{t('contact.phone')}</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="form-medical mt-2"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">{t('contact.email')}</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-medical mt-2"
                  required
                />
              </div>
            </div>

            <div>
              <Label>{t('contact.reason')}</Label>
              <Select 
                value={formData.consultationReason} 
                onValueChange={(value) => setFormData({ ...formData, consultationReason: value })}
              >
                <SelectTrigger className="form-medical mt-2">
                  <SelectValue placeholder="Selecciona el motivo de tu consulta" />
                </SelectTrigger>
                <SelectContent>
                  {consultationReasons.map((reason, index) => (
                    <SelectItem key={index} value={reason}>
                      {reason}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>{t('contact.location')}</Label>
              <RadioGroup
                value={formData.preferredLocation}
                onValueChange={(value) => setFormData({ ...formData, preferredLocation: value })}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="colon" id="colon" />
                  <Label htmlFor="colon">Colón</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="coronado" id="coronado" />
                  <Label htmlFor="coronado">Coronado</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="insurance">{t('contact.insurance')}</Label>
              <Input
                id="insurance"
                value={formData.insurance}
                onChange={(e) => setFormData({ ...formData, insurance: e.target.value })}
                className="form-medical mt-2"
                placeholder="Opcional"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button type="submit" className="btn-primary flex-1">
                {t('contact.submit')}
              </Button>
              
              <Button type="button" onClick={handleWhatsApp} className="btn-whatsapp flex-1">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </form>

          <div className="text-center mt-8">
            <Button onClick={handleCliniWeb} variant="outline" className="btn-secondary">
              <Calendar className="w-5 h-5 mr-2" />
              {t('contact.cliniweb')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;