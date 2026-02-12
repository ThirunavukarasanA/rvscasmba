export default function WhatYoullReceiveSection() {
  return (
    <section className="py-8 md:py-20 bg-booth-bg-gray">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            What You'll Receive
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            By requesting information, you’ll receive:
          </p>
          <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Overview of the MBA program and specializations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Details on curriculum structure and academic experience</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Admissions process and eligibility information</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Fee structure and scholarship guidance</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Important dates and next steps</span>
            </li>
          </ul>
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            All information is shared in a <b className="font-trade-gothic-bold">clear, student-friendly format.</b>
          </p>
        </div>
      </div>
    </section>
  );
}
