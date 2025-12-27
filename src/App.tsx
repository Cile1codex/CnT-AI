import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { CaseStudyAutomatedCustomerSupport } from './pages/CaseStudyAutomatedCustomerSupport';
import { CaseStudyLeadQualificationBooking } from './pages/CaseStudyLeadQualificationBooking';
import { CaseStudyClientOnboardingAutomation } from './pages/CaseStudyClientOnboardingAutomation';
import { CaseStudyUserActivationFlows } from './pages/CaseStudyUserActivationFlows';
import { CaseStudyTeamTaskManagement } from './pages/CaseStudyTeamTaskManagement';
import { AIChatbots } from './pages/AIChatbots';
import { ConversionWebsites } from './pages/ConversionWebsites';
import { LeadFunnelAutomation } from './pages/LeadFunnelAutomation';
import { EmailAutomation } from './pages/EmailAutomation';
import { BackendIntegration } from './pages/BackendIntegration';
import { ReviewBoost } from './pages/ReviewBoost';
import { CustomerReactivation } from './pages/CustomerReactivation';

// Macedonian pages
import { MacedonianHomePage } from './pages/mk/HomePage';
import { MacedonianPrivacyPolicy } from './pages/mk/PrivacyPolicy';
import { MacedonianTermsOfService } from './pages/mk/TermsOfService';
import { MacedonianAIChatbots } from './pages/mk/AIChatbots';
import { MacedonianConversionWebsites } from './pages/mk/ConversionWebsites';
import { MacedonianLeadFunnelAutomation } from './pages/mk/LeadFunnelAutomation';
import { MacedonianEmailAutomation } from './pages/mk/EmailAutomation';
import { MacedonianBackendIntegration } from './pages/mk/BackendIntegration';
import { MacedonianCaseStudyAutomatedCustomerSupport } from './pages/mk/CaseStudyAutomatedCustomerSupport';
import { MacedonianCaseStudyLeadQualificationBooking } from './pages/mk/CaseStudyLeadQualificationBooking';
import { MacedonianCaseStudyClientOnboardingAutomation } from './pages/mk/CaseStudyClientOnboardingAutomation';
import { MacedonianCaseStudyUserActivationFlows } from './pages/mk/CaseStudyUserActivationFlows';

function App() {
  return (
    <div className="min-h-screen bg-blue-50 w-full overflow-x-hidden">
      {/* Holiday Snowflakes */}
      <div className="snowflake">❄</div>
      <div className="snowflake">❄</div>
      <div className="snowflake">❄</div>
      <div className="snowflake">❄</div>
      <div className="snowflake">❄</div>
      <div className="snowflake">❄</div>
      <div className="snowflake">❄</div>
      <div className="snowflake">❄</div>
      <div className="snowflake">❄</div>
      <div className="snowflake">❄</div>

      {/* Christmas Decorations */}
      <div className="candy-cane">🍭</div>
      <div className="candy-cane">🍭</div>
      <div className="christmas-ornament">🎄</div>
      <div className="christmas-ornament">🎄</div>
      <div className="christmas-ornament" style={{ top: '40%', left: '5%', fontSize: '1.8rem' }}>🎁</div>
      <div className="christmas-ornament" style={{ top: '70%', right: '8%', fontSize: '1.6rem' }}>⭐</div>

      <Routes>
        {/* English routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/case-study-automated-customer-support" element={<CaseStudyAutomatedCustomerSupport />} />
        <Route path="/case-study-lead-qualification-booking" element={<CaseStudyLeadQualificationBooking />} />
        <Route path="/case-study-client-onboarding-automation" element={<CaseStudyClientOnboardingAutomation />} />
        <Route path="/case-study-user-activation-flows" element={<CaseStudyUserActivationFlows />} />
        <Route path="/case-study-team-task-management" element={<CaseStudyTeamTaskManagement />} />
        <Route path="/ai-chatbots" element={<AIChatbots />} />
        <Route path="/conversion-websites" element={<ConversionWebsites />} />
        <Route path="/lead-funnel-automation" element={<LeadFunnelAutomation />} />
        <Route path="/email-automation" element={<EmailAutomation />} />
        <Route path="/backend-integration" element={<BackendIntegration />} />
        <Route path="/review-boost" element={<ReviewBoost />} />
        <Route path="/customer-reactivation" element={<CustomerReactivation />} />

        {/* Macedonian routes */}
        <Route path="/mk" element={<MacedonianHomePage />} />
        <Route path="/mk/" element={<MacedonianHomePage />} />
        <Route path="/mk/privacy-policy" element={<MacedonianPrivacyPolicy />} />
        <Route path="/mk/terms-of-service" element={<MacedonianTermsOfService />} />
        
        {/* Macedonian service pages */}
        <Route path="/mk/ai-chatbots" element={<MacedonianAIChatbots />} />
        <Route path="/mk/conversion-websites" element={<MacedonianConversionWebsites />} />
        <Route path="/mk/lead-funnel-automation" element={<MacedonianLeadFunnelAutomation />} />
        <Route path="/mk/email-automation" element={<MacedonianEmailAutomation />} />
        <Route path="/mk/backend-integration" element={<MacedonianBackendIntegration />} />
        <Route path="/mk/case-study-automated-customer-support" element={<MacedonianCaseStudyAutomatedCustomerSupport />} />
        <Route path="/mk/case-study-lead-qualification-booking" element={<MacedonianCaseStudyLeadQualificationBooking />} />
        <Route path="/mk/case-study-client-onboarding-automation" element={<MacedonianCaseStudyClientOnboardingAutomation />} />
        <Route path="/mk/case-study-user-activation-flows" element={<MacedonianCaseStudyUserActivationFlows />} />
      </Routes>
    </div>
  );
}

export default App;