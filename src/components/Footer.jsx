import React from "react";
import Container from "./Container";
import { CONFIG } from "../config";
import { CONTACT_DETAILS } from "../data/dates";
import { AFFILIATIONS_DATA } from "../data/affiliations";

export default function Footer() {
  const importantLinks = [
    { name: "About Conference", href: "#about" },
    { name: "Department", href: "#department" },
    { name: "Research Tracks", href: "#tracks" },
    { name: "Timeline & Deadlines", href: "#dates" },
    { name: "Registration", href: "#registration" },
  ];

  return (
    <footer className="overflow-hidden bg-ink pb-12 pt-20 text-white">
      <Container>
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
                Organised by RV Institute of Technology and Management
              </p>
              <p>Department of Computer Science and Engineering</p>
              <p className="text-caption text-white/60">
                Sy. No. 171/5, Kothanur, 8th Phase, JP Nagar, Bengaluru - 560076, Karnataka, India
              </p>
            </div>

            {/* Institution Logos in original color inside white chips */}
            <div className="w-full space-y-3 pt-2">
              <span className="block text-eyebrow uppercase tracking-widest text-white/40">
                Recognised & Governed By
              </span>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {AFFILIATIONS_DATA.map((aff) => (
                  <div
                    key={aff.name}
                    className="inline-flex items-center justify-center rounded-md bg-white px-3 py-2"
                    title={aff.fullName}
                  >
                    <img
                      src={aff.img}
                      alt={aff.alt || aff.name}
                      width={100}
                      height={24}
                      className="max-h-6 w-auto object-contain"
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
                    className="block text-aurora-cyan transition-colors hover:text-white"
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
