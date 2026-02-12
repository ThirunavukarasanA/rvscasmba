export default function WhatHappensNextSection() {
  return (
    <section className="py-8 md:py-20 bg-booth-bg-gray">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            What Happens Next
          </h2>

        </div>

        <div className="space-y-6">
          <p className="text-xl md:text-2xl text-booth-dark-gray font-trade-gothic-light">
            <strong className="font-trade-gothic-bold">After you submit the form:</strong>
          </p>
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            Once you request information:
          </p>

          <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>You’ll receive a response from the admissions team</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Program details will be shared via email or phone</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>You may be invited for a short guidance conversation (optional)</span>
            </li>
          </ul>
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            There is <b className="font-trade-gothic-bold">no pressure to apply</b> — just support to help you decide.
          </p>
        </div>
      </div>
    </section>
  );
}
