import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { CaseStudyAutomatedCustomerSupport } from './pages/CaseStudyAutomatedCustomerSupport';
import { CaseStudyLeadQualificationBooking } from './pages/CaseStudyLeadQualificationBooking';
import { CaseStudyClientOnboardingAutomation } from './pages/CaseStudyClientOnboardingAutomation';
import { CaseStudyUserActivationFlows } from './pages/CaseStudyUserActivationFlows';

function App() {
  return (
    <div className="min-h-screen bg-blue-50 w-full overflow-x-hidden">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/case-study-automated-customer-support" element={<CaseStudyAutomatedCustomerSupport />} />
        <Route path="/case-study-lead-qualification-booking" element={<CaseStudyLeadQualificationBooking />} />
        <Route path="/case-study-client-onboarding-automation" element={<CaseStudyClientOnboardingAutomation />} />
        <Route path="/case-study-user-activation-flows" element={<CaseStudyUserActivationFlows />} />
      </Routes>
    </div>
  );
}

export default App;