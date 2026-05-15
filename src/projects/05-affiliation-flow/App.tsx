import React from 'react';
import './styles/animations.css';
import './styles/components.css';

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { RegisterSection } from './components/RegisterSection';
import { GenerateCodeSection } from './components/GenerateCodeSection';
import { ShareSection } from './components/ShareSection';
import { OrderFlowSection } from './components/OrderFlowSection';
import { TimelineSection } from './components/TimelineSection';
import { RewardDashboard } from './components/RewardDashboard';
import { BusinessFlowDiagram } from './components/BusinessFlowDiagram';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

const AffiliationFlow: React.FC = () => {
  return (
    <>
      <div className='affiliate'> 
        <HeroSection />
        <RegisterSection />
        <GenerateCodeSection />
        <ShareSection />
        <OrderFlowSection />
        <TimelineSection />
        <RewardDashboard />
        <BusinessFlowDiagram />
        <CTASection />
        <Footer />
      </div>
    </>
  );
};

export default AffiliationFlow;