"use client";

import { useState } from "react";
import DrSenthilProfileModal from "./DrSenthilProfileModal";

export default function DrSenthilIntroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-12 md:py-20 bg-booth-bg-gray">
        <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Led by Dr. K. Senthil Ganesh
          </h2>
          <p className="text-booth-maroon font-trade-gothic-bold text-lg mb-6">
            Managing Trustee – RVS Educational Institutions
          </p>
          <p className="text-booth-dark-gray font-trade-gothic-light text-base md:text-lg leading-relaxed mb-4">
            Dr. Senthil Ganesh brings over 25 years of leadership across strategy, finance, and institutional transformation. As Managing Trustee of RVS Educational Institutions — a group of 50+ institutions serving 20,000+ students — he has built and modernized one of South India&apos;s respected academic groups.
          </p>
          <p className="text-booth-dark-gray font-trade-gothic-light text-base md:text-lg leading-relaxed mb-6">
            Internationally trained and continuously engaged in executive education at institutions including MIT, Harvard, Oxford, Kellogg, London Business School, IMD, and ISB, he blends global exposure with institutional depth.
          </p>
          <p className="text-booth-dark-gray font-trade-gothic-light text-base md:text-lg italic mb-8">
            In his classroom, finance is not taught as calculation.<br />It is taught as economic reasoning.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="border-2 border-booth-maroon text-booth-maroon px-6 py-3 font-trade-gothic-bold uppercase hover:bg-booth-maroon hover:text-white transition text-sm"
          >
            View Full Profile
          </button>
        </div>
      </section>

      <DrSenthilProfileModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
