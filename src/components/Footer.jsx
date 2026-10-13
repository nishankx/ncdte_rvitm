import React from 'react';
import Container from './Container';
import { CONFIG } from '../config';
import { CONTACT_DETAILS } from '../data/dates';
import { AFFILIATIONS_DATA } from '../data/affiliations';

export default function Footer() {
  const importantLinks = [
    { name: "About Conference", href: "#about" },
    { name: "Department", href: "#department" },
    { name: "Research Tracks", href: "#tracks" },
    { name: "Timeline & Deadlines", href: "#dates" },
    { name: "Registration", href: "#registration" },
  ];

  return (
    <footer className="bg-ink text-white pt-20 pb-12 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pb-16 items-start">
          {/* Column 1: Description, Organiser address & White Affiliation Logos */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="font-sans font-bold text-2xl text-white tracking-tight">
                NCDTE
              </span>
              <span className="font-serif italic font-normal text-aurora text-2xl">
                2026
              </span>
            </div>

            <div className="space-y-2 text-small text-white/70 leading-relaxed max-w-[42ch]">
              <p className="font-medium text-white/90">
                Organised by RV Institute of Technology and Management
              </p>
              <p>
                Department of Computer Science and Engineering
              </p>
              <p className="text-caption text-white/60">
                Sy. No. 171/5, Kothanur, 8th Phase, JP Nagar, Bengaluru - 560076, Karnataka, India
              </p>
            </div>

            {/* Institution Logos in white (brightness-0 invert opacity-70) */}
            <div className="pt-2 space-y-3">
              <span className="text-eyebrow uppercase text-white/40 tracking-widest block">
                Recognised & Governed By
              </span>
              <div className="flex flex-wrap items-center gap-4">
                {AFFILIATIONS_DATA.map((aff) => (
                  <div
                    key={aff.name}
                    className="h-8 px-2 flex items-center justify-center filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                    title={aff.fullName}
                  >
                    <img
                      src={aff.img}
                      alt={aff.name}
                      className="max-h-6 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Important Links */}
          <div className="space-y-4">
            <span className="text-eyebrow uppercase text-white/40 tracking-widest block">
              Important Links
            </span>
            <ul className="space-y-3 text-small text-white/70">
              {importantLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              {CONFIG.BROCHURE_URL && CONFIG.BROCHURE_URL.trim() !== "" && (
                <li>
                  <a
                    href={CONFIG.BROCHURE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-aurora-cyan hover:text-white transition-colors block"
                  >
                    Download Brochure ↗
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="space-y-4 text-small text-white/70">
            <span className="text-eyebrow uppercase text-white/40 tracking-widest block">
              Contact Us
            </span>
            <div className="space-y-3 leading-relaxed">
              <a
                href={CONFIG.MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors block text-white/80"
              >
                {CONTACT_DETAILS.address}
              </a>

              <div>
                <a
                  href={`mailto:${CONFIG.EMAIL}`}
                  className="hover:text-white transition-colors block text-white font-medium break-all"
                >
                  {CONFIG.EMAIL}
                </a>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-caption font-mono text-white/60 pt-1">
                {CONFIG.CONTACT_PHONES.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:+91${phone}`}
                    className="hover:text-white transition-colors tabular-nums"
                  >
                    +91 {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Giant Cropped Wordmark "NCDTE-2026" centered */}
        <div className="relative overflow-hidden select-none -mb-8 sm:-mb-16 pointer-events-none text-center">
          <div className="font-sans font-bold text-[22vw] leading-none text-white/[0.06] tracking-tighter uppercase whitespace-nowrap">
            NCDTE-2026
          </div>
        </div>

        {/* Copyright Line */}
        <div className="pt-8 text-center text-caption text-white/40 font-normal">
          © 2026 RV Institute of Technology and Management. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}
