"use client";

import { useEffect } from "react";

interface DrSenthilProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DrSenthilProfileModal({ isOpen, onClose }: DrSenthilProfileModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="relative bg-white max-h-[90vh] w-full max-w-2xl overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="sticky top-0 right-0 float-right m-4 p-2 rounded-full bg-booth-bg-gray hover:bg-gray-200 transition z-10"
          aria-label="Close"
        >
          <svg className="w-6 h-6 text-booth-dark-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="px-6 md:px-10 pb-12 pt-2">
          {/* Header */}
          <div className="mb-8">
            <div className="w-16 h-0.5 bg-booth-maroon mb-4"></div>
            <h2 className="text-2xl md:text-3xl font-trade-gothic-bold text-booth-dark-gray">
              Dr. K. Senthil Ganesh
            </h2>
            <p className="text-booth-maroon font-trade-gothic-bold mt-1">
              Managing Trustee – RVS Educational Institutions
            </p>
            <p className="text-booth-light-gray font-trade-gothic-light text-sm mt-1">
              Founder – Transform Tech
            </p>
          </div>

          {/* Institutional Leadership */}
          <div className="mb-8">
            <h3 className="text-lg font-trade-gothic-bold text-booth-maroon mb-3">
              Institutional Leadership
            </h3>
            <p className="text-booth-dark-gray font-trade-gothic-light leading-relaxed">
              Dr. K. Senthil Ganesh is the Managing Trustee of RVS Educational Institutions — a diversified academic group comprising over 50 institutions and serving more than 20,000 students across South India.
            </p>
            <p className="text-booth-dark-gray font-trade-gothic-light leading-relaxed mt-4">
              Since 2000, he has played a pivotal role in shaping the growth trajectory of the RVS Group, working alongside Founder–Chairman Dr. K. V. Kuppuswamy to assemble teams of eminent academicians, management experts, and finance professionals. Between 2000 and 2008, this vision translated into the establishment of 10 new institutions across Dental Sciences, Health Sciences, Engineering, and Alternative Medicine.
            </p>
            <p className="text-booth-dark-gray font-trade-gothic-light leading-relaxed mt-4">
              From 2008 onward, Dr. Ganesh led a large-scale institutional transformation focused on digital relevance and 21st-century education. Under his leadership, the Arts & Science, Health Sciences, and Ayurveda institutions underwent curriculum innovation, administrative modernization, and co-curricular restructuring — resulting in growth from 2,500 students to over 7,500 in key divisions.
            </p>
            <p className="text-booth-dark-gray font-trade-gothic-light leading-relaxed mt-4">
              Today, he is widely regarded as an edupreneur who blends institutional governance with strategic foresight.
            </p>
          </div>

          {/* Accolades & Institutional Recognition */}
          <div className="mb-8">
            <h3 className="text-lg font-trade-gothic-bold text-booth-maroon mb-3">
              Accolades & Institutional Recognition
            </h3>
            <p className="text-booth-dark-gray font-trade-gothic-light leading-relaxed mb-4">
              Under his leadership, RVS institutions have earned significant recognition:
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-trade-gothic-bold text-booth-dark-gray mb-2">RVS Arts & Science College</p>
                <ul className="space-y-2 text-booth-dark-gray font-trade-gothic-light">
                  <li>• Ranked 1st in international student enrollment by Bharathiar University (2007)</li>
                  <li>• Named among Top 4 Colleges in Coimbatore – Times of India (2008)</li>
                  <li>• College of the Year – Silicon India Magazine (2019)</li>
                  <li>• Top 10 Emerging Colleges in India – Business Connect (2020)</li>
                </ul>
              </div>
              <div>
                <p className="font-trade-gothic-bold text-booth-dark-gray mb-2">RVS Institute of Management Studies and Research</p>
                <ul className="space-y-2 text-booth-dark-gray font-trade-gothic-light">
                  <li>• Best College – Business Week (2008–09)</li>
                  <li>• Ranked among Top 100 B-Schools in India – Higher Education Review (2021)</li>
                </ul>
              </div>
              <p className="text-booth-dark-gray font-trade-gothic-light leading-relaxed mt-4">
                In recognition of his leadership in education and regional development, Dr. Ganesh served as Chairman of CII, Coimbatore (2023–24), strengthening collaboration between academia, industry, and government.
              </p>
            </div>
          </div>

          {/* Global Executive Education */}
          <div className="mb-8">
            <h3 className="text-lg font-trade-gothic-bold text-booth-maroon mb-3">
              Global Executive Education & Continuous Learning
            </h3>
            <p className="text-booth-dark-gray font-trade-gothic-light leading-relaxed mb-4">
              A strong believer in lifelong learning, Dr. Ganesh has completed over 20 global executive education programs at leading international institutions, including:
            </p>
            <ul className="list-disc list-inside text-booth-dark-gray font-trade-gothic-light space-y-1">
              <li>MIT</li>
              <li>Harvard</li>
              <li>Oxford</li>
              <li>Kellogg School of Management</li>
              <li>London Business School</li>
              <li>IMD</li>
              <li>Indian School of Business (ISB)</li>
            </ul>
            <p className="text-booth-dark-gray font-trade-gothic-light leading-relaxed mt-4">
              His recent academic pursuits focus on digital transformation, artificial intelligence, finance, real estate, and strategic leadership — reinforcing his commitment to bringing global insights into Indian higher education.
            </p>
          </div>

          {/* Industry & Entrepreneurial Experience */}
          <div className="mb-8">
            <h3 className="text-lg font-trade-gothic-bold text-booth-maroon mb-3">
              Industry & Entrepreneurial Experience
            </h3>
            <p className="text-booth-dark-gray font-trade-gothic-light leading-relaxed mb-4">
              Before joining RVS full time, Dr. Ganesh built professional experience in the United States IT sector:
            </p>
            <ul className="space-y-2 text-booth-dark-gray font-trade-gothic-light">
              <li>• Business Application Developer – Zales Corporation (1997–1998)</li>
              <li>• Founder & Principal IT Consultant – Mantel Corporation (1998–2002), serving Fortune 500 clients including Sprint and AT&T</li>
              <li>• Technical Consultant – Cracker Barrel Inc. (RETEK ERP implementation)</li>
            </ul>
            <p className="text-booth-dark-gray font-trade-gothic-light leading-relaxed mt-4">
              He continues to remain actively engaged with industry as an investor and board member of Transform Tech, an EdTech company offering online programs in Data Science, Artificial Intelligence, Digital Marketing, and IoT.
            </p>
            <p className="text-booth-dark-gray font-trade-gothic-light leading-relaxed mt-4">
              This blend of academic leadership and industry exposure shapes his teaching philosophy — grounded in practical economic reasoning rather than theoretical abstraction.
            </p>
          </div>

          {/* Academic Background */}
          <div className="mb-8">
            <h3 className="text-lg font-trade-gothic-bold text-booth-maroon mb-3">
              Academic Background
            </h3>
            <ul className="space-y-2 text-booth-dark-gray font-trade-gothic-light">
              <li>• Ph.D. in Management – Bharathiar University, India (2018)</li>
              <li>• M.Sc. in Software Engineering – University of Westminster, UK (2004)</li>
              <li>• MBA – Texas A&M University–Commerce, USA (1997)</li>
              <li>• BBA – East Texas State University, USA (1995)</li>
            </ul>
          </div>

          {/* Vision */}
          <div>
            <h3 className="text-lg font-trade-gothic-bold text-booth-maroon mb-3">
              Vision
            </h3>
            <p className="text-booth-dark-gray font-trade-gothic-light leading-relaxed mb-4">
              Dr. Senthil Ganesh believes that education must evolve alongside technology and markets. His initiatives in curriculum design, faculty development, and industry-linked programs aim to create graduates who are:
            </p>
            <ul className="space-y-2 text-booth-dark-gray font-trade-gothic-light">
              <li>• Digitally fluent</li>
              <li>• Strategically aware</li>
              <li>• Financially analytical</li>
              <li>• Industry ready</li>
            </ul>
            <p className="text-booth-dark-gray font-trade-gothic-light leading-relaxed mt-4">
              His work continues to position RVS institutions at the intersection of academic rigor, digital transformation, and global relevance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
