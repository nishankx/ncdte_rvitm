import React from "react";
import Container from "./Container";
import { CONFIG } from "../config";
import { CONTACT_DETAILS } from "../data/dates";
import { AFFILIATIONS_DATA } from "../data/affiliations";

export default function Footer() {
  const importantLinks = [
    { name: "About Conference", href: "#about" },
    { name: "Call for Papers", href: "#tracks" },
    { name: "Submission Guidelines", href: "#guidelines" },
    { name: "Important Dates", href: "#dates" },
    { name: "Registration Fee", href: "#registration" },
    { name: "Conference Brochure", href: "#brochure" },
    { name: "Organizing Committee", href: "#committee" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="relative overflow-hidden bg-ink pb-12 pt-20 text-white">
      {/* Top Ambient Border Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#007a87]/40 via-[#d6fb00]/30 to-transparent"
      />
      {/* Ambient Dark Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#00545f]/25 to-transparent blur-[120px]"
      />

      <Container className="relative z-10">
        {/* Three Columns, each flex flex-col items-center text-center */}
        <div className="grid grid-cols-1 items-start gap-12 pb-16 md:grid-cols-3 lg:gap-16">
          {/* Column 1: Description, Organiser address & Original-Color Logo Chips */}
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="flex items-center justify-center gap-2.5">
              <span className="font-sans text-2xl font-bold tracking-tight text-white">NCDTE</span>
              <span className="text-aurora font-serif text-2xl font-normal italic">2026</span>
            </div>

            <div className="mx-auto max-w-[42ch] space-y-2 text-small leading-relaxed text-white/70">
              <p className="font-medium text-white/90">
                RV Institute of Technology and Management®
              </p>
              <p className="text-white/80">Coordinated by Department of Computer Science and Engineering · CSE Cluster</p>
              <p className="text-caption text-white/60">
                Sy. No. 171/5, Kothanur, 8th Phase, JP Nagar, Bengaluru - 560076, Karnataka, India
              </p>
            </div>

            {/* Institution Logos in original color inside white chips */}
            <div className="w-full space-y-3 pt-2">
              <span className="block text-eyebrow uppercase tracking-widest text-white/40">
                Recognised & Governed By
              </span>
              <div className="flex flex-wrap items-center justify-center gap-3.5">
                {AFFILIATIONS_DATA.map((aff) => (
                  <div
                    key={aff.name}
                    className="inline-flex h-12 items-center justify-center rounded-xl border border-[#264548] bg-white/95 px-4 py-2 shadow-soft transition-transform hover:-translate-y-0.5"
                    title={aff.fullName}
                  >
                    <img
                      src={aff.img}
                      alt={aff.alt || aff.name}
                      width={120}
                      height={32}
                      className="max-h-8 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Important Links */}
          <div className="flex flex-col items-center space-y-4 text-center">
            <span className="block text-eyebrow uppercase tracking-widest text-white/40">
              Important Links
            </span>
            <ul className="space-y-3 text-small text-white/70">
              {importantLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="block transition-colors hover:text-white">
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
                    className="block text-[#d6fb00] transition-colors hover:text-white"
                  >
                    Download Brochure ↗
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="flex flex-col items-center space-y-4 text-center text-small text-white/70">
            <span className="block text-eyebrow uppercase tracking-widest text-white/40">
              Contact Us
            </span>
            <div className="space-y-3 leading-relaxed">
              <a
                href={CONFIG.MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/80 transition-colors hover:text-white"
              >
                {CONTACT_DETAILS.address}
              </a>

              <div>
                <a
                  href={`mailto:${CONFIG.EMAIL}`}
                  className="break-all font-sans font-medium text-white transition-colors hover:text-white"
                >
                  {CONFIG.EMAIL}
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 pt-1 font-mono text-caption text-white/60">
                {CONFIG.CONTACT_PHONES.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:+91${phone}`}
                    className="tabular-nums transition-colors hover:text-white"
                  >
                    +91 {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Giant Cropped Wordmark "NCDTE-2026" centered */}
        <div className="pointer-events-none relative -mb-8 select-none overflow-hidden text-center sm:-mb-16">
          {/*Make it fit the container*/}
          <div className="mx-auto whitespace-nowrap font-sans text-[22vw] font-bold uppercase leading-none tracking-tighter text-white/[0.06]">
            NCDTE.
          </div>
        </div>

        {/* Copyright Line */}
        <div className="pt-[100px] text-center text-caption font-normal text-white/40">
          © 2026 RV Institute of Technology and Management. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}
