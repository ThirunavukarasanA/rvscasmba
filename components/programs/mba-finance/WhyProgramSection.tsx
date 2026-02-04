export default function WhyProgramSection() {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Why MBA in Applied Finance at RVS CAS
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            Finance today is no longer limited to accounting or reporting roles. Organizations demand professionals who can analyze data, assess risk, value businesses, and support strategic decisions.
          </p>

          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            This program prepares students to:
          </p>

          <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Interpret financial statements critically</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Build financial models and valuations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Understand capital markets and fintech trends</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Apply finance concepts to real business problems</span>
            </li>
          </ul>

          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            The curriculum emphasizes <strong className="font-trade-gothic-bold">application over theory</strong>, ensuring graduates are industry-ready.
          </p>
        </div>
      </div>
    </section>
  );
}

