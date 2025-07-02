import React from 'react';
import { Modal } from './ui/Modal';
import { Button } from './ui/Button';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    features: string[];
    benefits: string[];
    process: string[];
    pricing?: string;
  } | null;
  onBookConsultation: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  isOpen,
  onClose,
  service,
  onBookConsultation,
}) => {
  if (!service) return null;

  const handleBookConsultation = () => {
    onClose();
    onBookConsultation();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" title={service.title}>
      <div className="space-y-8">
        {/* Description */}
        <div>
          <p className="text-lg text-slate-600 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Features */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4">Benefits</h3>
          <div className="space-y-3">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 bg-sky-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span className="text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4">Our Process</h3>
          <div className="space-y-4">
            {service.process.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="w-8 h-8 bg-gradient-to-r from-sky-500 to-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-slate-700 pt-1">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-xl p-6 border border-sky-200">
          <h4 className="text-lg font-bold text-slate-800 mb-3">Ready to Get Started?</h4>
          <p className="text-slate-600 mb-4">
            Book a free consultation to discuss how we can implement this solution for your business.
          </p>
          <Button 
            onClick={handleBookConsultation}
            icon={ArrowRight}
            className="premium-button"
          >
            Book Free Consultation
          </Button>
        </div>
      </div>
    </Modal>
  );
};