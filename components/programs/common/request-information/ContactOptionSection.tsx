export default function ContactOptionSection() {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Contact Option
          </h2>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl md:text-2xl font-trade-gothic-bold text-booth-dark-gray mb-4">
              Prefer to Talk Directly?
            </h3>
          </div>
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            If you’d rather speak to someone:
          </p>
          <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Contact the admissions office by phone or email</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Visit the campus for an in-person discussion (by appointment)</span>
            </li>
          </ul>
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            Our team is happy to answer your questions at any stage.
          </p>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <p className="text-lg md:text-xl font-trade-gothic-bold text-booth-dark-gray mb-2">
                Mr. Afsal T.I.
              </p>
              <div className="space-y-1 text-booth-dark-gray font-trade-gothic-light">
                <p>
                  <a href="tel:+919095692229" className="hover:text-booth-maroon">
                    +91 90956 92229
                  </a>
                </p>
                <p>
                  <a href="mailto:afsal@rvsgroup.com" className="hover:text-booth-maroon">
                    afsal@rvsgroup.com
                  </a>
                </p>
              </div>
            </div>

            <div>
              <p className="text-lg md:text-xl font-trade-gothic-bold text-booth-dark-gray mb-2">
                Dr. R. N. Vivekanandar
              </p>
              <div className="space-y-1 text-booth-dark-gray font-trade-gothic-light">
                <p>
                  <a href="tel:+919655955551" className="hover:text-booth-maroon">
                    +91 96559 55551
                  </a>
                </p>
                <p>
                  <a href="mailto:admission-director@rvsgroup.com" className="hover:text-booth-maroon">
                    admission-director@rvsgroup.com
                  </a>
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
