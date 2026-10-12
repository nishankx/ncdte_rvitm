import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tracks from './components/Tracks';
import Fees from './components/Fees';
import Guidelines from './components/Guidelines';
import ImportantDates from './components/ImportantDates';
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
    <div className="min-h-screen bg-slate-50 flex flex-col text-ink selection:bg-sky selection:text-banner">
      {/* Top Sticky Navigation */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 5.1 Identity strip + Hero */}
        <Hero onOpenModal={handleOpenModal} />

        {/* 5.2 About */}
        <About />

        {/* 5.3 Call for Papers & Tracks */}
        <Tracks />

        {/* 5.4 Registration Fee */}
        <Fees onOpenModal={handleOpenModal} />

        {/* 5.5 Guidelines for Submission */}
        <Guidelines onOpenModal={handleOpenModal} />

        {/* 5.6 Important Dates */}
        <ImportantDates />

        {/* 5.7 Committee */}
        <Committee />

        {/* 5.8 FAQ */}
        <FAQ />

        {/* 5.9 CTA band */}
        <CtaBand onOpenModal={handleOpenModal} />
      </main>

      {/* 5.10 Footer */}
      <Footer />

      {/* Global Interactive Modal */}
      <RegistrationModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        initialStep={modalState.type}
      />
    </div>
  );
}
