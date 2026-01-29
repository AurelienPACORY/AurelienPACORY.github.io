import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CONTACT_INFO } from '../utils/constants';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

export const Contact = () => {
  const { ref } = useScrollAnimation({ triggerOnce: true });
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '', // Added honeypot field
  });
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    if (formData.honeypot) { // Check if honeypot field was filled
      console.log("Honeypot caught a bot!");
      setSubmissionStatus('success'); // Pretend it was a success to not alert the bot
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '', honeypot: '' });
      return;
    }

    setSubmissionStatus('sending');

    try {
      emailjs.sendForm('service_9eeimyp', 'template_k4mbmpa', form.current, '7HVQZrWVf8U2JibLy')
        .then((result) => {
            console.log(result.text);
            setSubmissionStatus('success');
            setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '', honeypot: '' });
        }, (error) => {
            console.log(error.text);
            setSubmissionStatus('error');
        });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={ref} className="py-32 relative overflow-hidden">
      {/* ... (rest of the component is the same) ... */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div /* ... */ >
            {/* ... */}
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          <motion.div /* ... */ >
            {/* ... */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Card delay={0.4}>
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-3 text-foreground/80">Prénom*</label>
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-6 py-4 rounded-2xl glass-strong border-2 border-transparent focus:border-luxury-accent transition-all duration-300 outline-none" placeholder="Votre prénom" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-3 text-foreground/80">Nom de famille*</label>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full px-6 py-4 rounded-2xl glass-strong border-2 border-transparent focus:border-luxury-accent transition-all duration-300 outline-none" placeholder="Votre nom de famille" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-3 text-foreground/80">Email*</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-6 py-4 rounded-2xl glass-strong border-2 border-transparent focus:border-luxury-accent transition-all duration-300 outline-none" placeholder="votre@email.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-3 text-foreground/80">Téléphone</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl glass-strong border-2 border-transparent focus:border-luxury-accent transition-all duration-300 outline-none" placeholder="Votre numéro de téléphone (facultatif)" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-3 text-foreground/80">Écrire un message*</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-6 py-4 rounded-2xl glass-strong border-2 border-transparent focus:border-luxury-accent transition-all duration-300 outline-none resize-none" placeholder="Votre message..."></textarea>
                </div>
                
                {/* Honeypot field for spam protection */}
                <div style={{ display: 'none' }}>
                    <label htmlFor="honeypot">Ne pas remplir ce champ</label>
                    <input
                        type="text"
                        id="honeypot"
                        name="honeypot"
                        value={formData.honeypot}
                        onChange={handleChange}
                    />
                </div>

                <Button type="submit" className="w-full flex items-center justify-center gap-3" disabled={submissionStatus === 'sending'}>
                  {submissionStatus === 'sending' ? 'Envoi en cours...' : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </>
                  )}
                </Button>

                {submissionStatus === 'success' && (
                  <div className="flex items-center gap-2 p-4 rounded-2xl bg-green-500/20 text-green-500">
                    <CheckCircle className="w-5 h-5" />
                    <span>Votre message a été envoyé avec succès !</span>
                  </div>
                )}
                {submissionStatus === 'error' && (
                  <div className="flex items-center gap-2 p-4 rounded-2xl bg-red-500/20 text-red-500">
                    <AlertCircle className="w-5 h-5" />
                    <span>Une erreur est survenue. Veuillez réessayer.</span>
                  </div>
                )}
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};