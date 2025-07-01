import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { HomePage } from './pages/HomePage';
import { HomePageMK } from './pages/mk/HomePageMK';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { PrivacyPolicyMK } from './pages/mk/PrivacyPolicyMK';
import { TermsOfService } from './pages/TermsOfService';
import { TermsOfServiceMK } from './pages/mk/TermsOfServiceMK';
import { CaseStudyAutomatedCustomerSupport } from './pages/CaseStudyAutomatedCustomerSupport';
import { CaseStudyAutomatedCustomerSupportMK } from './pages/mk/CaseStudyAutomatedCustomerSupportMK.tsx';
import { CaseStudyLeadQualificationBooking } from './pages/CaseStudyLeadQualificationBooking';
import { CaseStudyLeadQualificationBookingMK } from './pages/mk/CaseStudyLeadQualificationBookingMK';
import { CaseStudyClientOnboardingAutomation } from './pages/CaseStudyClientOnboardingAutomation';
import { CaseStudyClientOnboardingAutomationMK } from './pages/mk/CaseStudyClientOnboardingAutomationMK';
import { CaseStudyUserActivationFlows } from './pages/CaseStudyUserActivationFlows';
import { CaseStudyUserActivationFlowsMK } from './pages/mk/CaseStudyUserActivationFlowsMK';
import { AIChatbots } from './pages/AIChatbots';
import { AIChatbotsMK } from './pages/mk/AIChatbotsMK';
import { ConversionWebsites } from './pages/ConversionWebsites';
import { ConversionWebsitesMK } from './pages/mk/ConversionWebsitesMK';
import { LeadFunnelAutomation } from './pages/LeadFunnelAutomation';
import { LeadFunnelAutomationMK } from './pages/mk/LeadFunnelAutomationMK';
import { EmailAutomation } from './pages/EmailAutomation';
import { EmailAutomationMK } from './pages/mk/EmailAutomationMK';
import { BackendIntegration } from './pages/BackendIntegration';
import { BackendIntegrationMK } from './pages/mk/BackendIntegrationMK';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-blue-50 w-full overflow-x-hidden">
        <Routes>
          {/* English Routes */}
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

          {/* Macedonian Routes */}
          <Route path="/mk" element={<HomePageMK />} />
          <Route path="/mk/privacy-policy" element={<PrivacyPolicyMK />} />
          <Route path="/mk/terms-of-service" element={<TermsOfServiceMK />} />
          <Route path="/mk/case-study-automated-customer-support" element={<CaseStudyAutomatedCustomerSupportMK />} />
          <Route path="/mk/case-study-lead-qualification-booking" element={<CaseStudyLeadQualificationBookingMK />} />
          <Route path="/mk/case-study-client-onboarding-automation" element={<CaseStudyClientOnboardingAutomationMK />} />
          <Route path="/mk/case-study-user-activation-flows" element={<CaseStudyUserActivationFlowsMK />} />
          <Route path="/mk/ai-chatbots" element={<AIChatbotsMK />} />
          <Route path="/mk/conversion-websites" element={<ConversionWebsitesMK />} />
          <Route path="/mk/lead-funnel-automation" element={<LeadFunnelAutomationMK />} />
          <Route path="/mk/email-automation" element={<EmailAutomationMK />} />
          <Route path="/mk/backend-integration" element={<BackendIntegrationMK />} />
        </Routes>
      </div>
    </HelmetProvider>
  );
}

export default App;