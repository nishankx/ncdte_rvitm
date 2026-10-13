import React, { useState } from 'react';
import InstitutionsMarquee from './components/InstitutionsMarquee';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Institution from './components/Institution';
import Department from './components/Department';
import Tracks from './components/Tracks';
import Guidelines from './components/Guidelines';
import WhyParticipate from './components/WhyParticipate';
import SubmissionProcess from './components/SubmissionProcess';
import ImportantDates from './components/ImportantDates';
import Fees from './components/Fees';
import Committee from './components/Committee';
import FAQ from './components/FAQ';
import CtaBand from './components/CtaBand';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';

export default function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: "submission", // "submission" | "registration"
  });

  const handleOpenModal = (type = "submission") => {
    setModalState({
      isOpen: true,
      type,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col text-ink font-sans antialiased selection:bg-aurora-ice overflow-x-clip">
      {/* 1. Institutions Marquee (First element, full-bleed strip at top of page) */}
      <InstitutionsMarquee />

      {/* 2. Sticky Navbar with negative bottom margin to overlay hero canvas */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Content Sections (Strict Alternating White/Mist Rhythm) */}
      <main className="flex-1">
        {/* 3. Hero (#home, White) */}
        <Hero onOpenModal={handleOpenModal} />

        {/* 4. About (#about, Mist) */}
        <About />

        {/* 5. About RVITM (#institution, White) */}
        <Institution />

        {/* 6. Department (#department, Mist) */}
        <Department />

        {/* 7. Research Tracks (#tracks, White) */}
        <Tracks />

        {/* 8. Guidelines & Presentation Formats (#guidelines, Mist) */}
        <Guidelines onOpenModal={handleOpenModal} />

        {/* 9. Why Participate (#why, White) */}
        <WhyParticipate />

        {/* 10. Submission Process (#process, Mist) */}
        <SubmissionProcess onOpenModal={handleOpenModal} />

        {/* 11. Important Dates (#dates, White) */}
        <ImportantDates />

        {/* 12. Registration Fee (#registration, Mist) */}
        <Fees onOpenModal={handleOpenModal} />

        {/* 13. Committee & Helpdesk (#committee, White) */}
        <Committee />

        {/* 14. Frequently Asked Questions (#faq, Mist) */}
        <FAQ />

        {/* 15. CTA Band (Ink) */}
        <CtaBand onOpenModal={handleOpenModal} />
      </main>

      {/* 16. Footer (Ink) */}
      <Footer />

      {/* 17. Registration Modal */}
      <RegistrationModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        initialStep={modalState.type}
      />
    </div>
  );
}
