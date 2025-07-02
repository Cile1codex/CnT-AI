import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { CaseStudyAutomatedCustomerSupport } from './pages/CaseStudyAutomatedCustomerSupport';
import { CaseStudyLeadQualificationBooking } from './pages/CaseStudyLeadQualificationBooking';
import { CaseStudyClientOnboardingAutomation } from './pages/CaseStudyClientOnboardingAutomation';
import { CaseStudyUserActivationFlows } from './pages/CaseStudyUserActivationFlows';
import { AIChatbots } from './pages/AIChatbots';
import { ConversionWebsites } from './pages/ConversionWebsites';
import { LeadFunnelAutomation } from './pages/LeadFunnelAutomation';
import { EmailAutomation } from './pages/EmailAutomation';
import { BackendIntegration } from './pages/BackendIntegration';

// Macedonian pages
import { MacedonianHomePage } from './pages/mk/HomePage';
import { MacedonianPrivacyPolicy } from './pages/mk/PrivacyPolicy';
import { MacedonianTermsOfService } from './pages/mk/TermsOfService';

function App() {
  return (
    <div className="min-h-screen bg-blue-50 w-full overflow-x-hidden">
      <Routes>
        {/* English routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/case-study-automated-customer-support" element={<CaseStudyAutomatedCustomerSupport />} />
        <Route path="/case-study-lead-qualification-booking" element={<CaseStudyLeadQualificationBooking />} />
        <Route path="/case-study-client-onboarding-automation" element={<CaseStudyClientOnboardingAutomation />} />
        <Route path="/case-study-user-activation-flows" element={<CaseStudyUserActivationFlows />} />
        <Route path="/ai-chatbots" element={<AIChatbots />} />
        <Route path="/conversion-websites" element={<ConversionWebsites />} />
        <Route path="/lead-funnel-automation" element={<LeadFunnelAutomation />} />
        <Route path="/email-automation" element={<EmailAutomation />} />
        <Route path="/backend-integration" element={<BackendIntegration />} />
        
        {/* Macedonian routes */}
        <Route path="/mk" element={<MacedonianHomePage />} />
        <Route path="/mk/" element={<MacedonianHomePage />} />
        <Route path="/mk/privacy-policy" element={<MacedonianPrivacyPolicy />} />
        <Route path="/mk/terms-of-service" element={<MacedonianTermsOfService />} />
        
        {/* Macedonian service pages - using English pages for now, can be translated later */}
        <Route path="/mk/ai-chatbots" element={<AIChatbots />} />
        <Route path="/mk/conversion-websites" element={<ConversionWebsites />} />
        <Route path="/mk/lead-funnel-automation" element={<LeadFunnelAutomation />} />
        <Route path="/mk/email-automation" element={<EmailAutomation />} />
        <Route path="/mk/backend-integration" element={<BackendIntegration />} />
        <Route path="/mk/case-study-automated-customer-support" element={<CaseStudyAutomatedCustomerSupport />} />
        <Route path="/mk/case-study-lead-qualification-booking" element={<CaseStudyLeadQualificationBooking />} />
        <Route path="/mk/case-study-client-onboarding-automation" element={<CaseStudyClientOnboardingAutomation />} />
        <Route path="/mk/case-study-user-activation-flows" element={<CaseStudyUserActivationFlows />} />
      </Routes>
    </div>
  );
}

export default App;