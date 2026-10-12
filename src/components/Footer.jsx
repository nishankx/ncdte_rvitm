import React, { useState } from 'react';
import { CONFIG } from '../config';
import { CONTACT_DETAILS } from '../data/dates';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

export default function Footer() {
  const [imgError, setImgError] = useState(false);

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Tracks", href: "#tracks" },
    { name: "Guidelines", href: "#guidelines" },
    { name: "Important Dates", href: "#dates" },
    { name: "Committee", href: "#committee" },
    { name: "FAQ", href: "#faq" },
  ];

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "RV Institute of Technology and Management Sy. No. 171/5, Kothanur, 8th Phase, JP Nagar, Bengaluru - 560076, Karnataka, India"
  )}`;

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1 (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              {!imgError ? (
                <img
                  src="/images/rvitm-logo.png"
                  alt="RVITM Logo"
                  className="w-12 h-12 object-contain bg-white rounded-xl p-1 shadow"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-12 h-12 rounded-xl bg-royal flex items-center justify-center font-bold text-white text-base">
                  RV
                </div>
              )}
              <div>
                <span className="font-heading font-black text-xl text-white tracking-wide block">
                  NCDTE-2026
                </span>
                <span className="text-xs text-sky font-medium">
                  National Conference on Digital Technology & Engineering
                </span>
              </div>
            </div>

            <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-sm">
              NCDTE-2026 is hosted by RV Institute of Technology and Management, Bengaluru.
            </p>

            <div className="mt-4 text-xs text-slate-400">
              Department of Computer Science and Engineering
            </div>
          </div>

          {/* Column 2 "Quick Links" (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-heading font-bold text-white text-base uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-sky transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-sky/60">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 "Contact Us" (4 cols) */}
          <div className="lg:col-span-4">
            <h3 className="font-heading font-bold text-white text-base uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Contact Us
            </h3>
            <div className="space-y-3.5 text-sm">
              {/* Address */}
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-white transition-colors group"
              >
                <MapPin className="w-4 h-4 text-sky shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span className="leading-snug">
                  {CONTACT_DETAILS.address}
                </span>
              </a>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky shrink-0" />
                <a
                  href={`mailto:${CONFIG.EMAIL}`}
                  className="hover:text-white transition-colors"
                >
                  {CONFIG.EMAIL}
                </a>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-sky shrink-0 mt-1" />
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {CONTACT_DETAILS.phones.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:+91${phone.number}`}
                      className="hover:text-white font-mono text-xs text-slate-300"
                    >
                      {phone.number}
                    </a>
                  ))}
                </div>
              </div>

              {/* Conference Website link (hidden if CONFIG.CONFERENCE_WEBSITE is empty) */}
              {CONFIG.CONFERENCE_WEBSITE && CONFIG.CONFERENCE_WEBSITE.trim() !== "" && (
                <div className="pt-2">
                  <a
                    href={CONFIG.CONFERENCE_WEBSITE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sky hover:underline text-xs font-semibold uppercase tracking-wider"
                  >
                    <span>Conference Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip in bg-plum */}
      <div className="bg-plum text-white py-4 px-4 text-center text-xs sm:text-sm font-medium">
        © 2026 RV Institute of Technology and Management. All Rights Reserved.
      </div>
    </footer>
  );
}
