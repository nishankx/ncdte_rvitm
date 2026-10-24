import React, { useState } from "react";
import Navbar from "./components/Navbar";
import InstitutionsMarquee from "./components/InstitutionsMarquee";
import Hero from "./components/Hero";
import DatesTimelineStrip from "./components/DatesTimelineStrip";
import About from "./components/About";
import Institution from "./components/Institution";
import Department from "./components/Department";
import Tracks from "./components/Tracks";
import Guidelines from "./components/Guidelines";
import WhyParticipate from "./components/WhyParticipate";
import SubmissionProcess from "./components/SubmissionProcess";
import ImportantDates from "./components/ImportantDates";
import Fees from "./components/Fees";
import Committee from "./components/Committee";
import FAQ from "./components/FAQ";
import CtaBand from "./components/CtaBand";
import Footer from "./components/Footer";
import RegistrationModal from "./components/RegistrationModal";

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
    <div className="flex min-h-screen flex-col overflow-x-clip font-sans text-ink antialiased selection:bg-aurora-ice">
      {/* Site-wide Ambient Aurora Mesh & Subtle Geometric Grids */}
      <div
        aria-hidden="true"
        className="bg-aurora-mesh pointer-events-none fixed inset-0 -z-30 opacity-60"
      />
      <div
        aria-hidden="true"
        className="bg-tech-grid pointer-events-none fixed inset-0 -z-20 opacity-35"
      />
      <div
        aria-hidden="true"
        className="bg-tech-lines pointer-events-none fixed inset-0 -z-10 opacity-20"
      />

      {/* 1. Sticky Navbar */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 3. Hero (#home) */}
        <Hero onOpenModal={handleOpenModal} />

        {/* Milestone Dates Horizontal Timeline Strip */}
        <ImportantDates />

        {/* 4. About (#about) */}
        <About />

        {/* 5. About RVITM (#institution) */}
        <Institution />

        {/* 6. Department (#department) */}
        <Department />

        {/* 7. Research Tracks (#tracks) */}
        <Tracks />

        {/* 8. Guidelines & Presentation Formats (#guidelines) */}
        <Guidelines onOpenModal={handleOpenModal} />

        {/* 9. Why Participate (#why) */}
        <WhyParticipate />

        {/* 10. Submission Process (#process) */}
        <SubmissionProcess onOpenModal={handleOpenModal} />
        {/* 12. Registration Fee (#registration) */}
        <Fees onOpenModal={handleOpenModal} />

        {/* 13. Committee & Helpdesk (#committee) */}
        <Committee />

        {/* 14. Frequently Asked Questions (#faq) */}
        <FAQ />

        {/* 15. CTA Band */}
        <CtaBand onOpenModal={handleOpenModal} />
      </main>

      {/* 16. Footer */}
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
