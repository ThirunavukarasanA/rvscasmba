export default function AfterYouApplySection() {
  return (
    <section className="py-8 md:py-20 bg-booth-bg-gray">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            What Happens After You Apply
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            After submitting your application:
          </p>

          <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Your application is reviewed by the admissions team</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>You may be contacted for additional information or interaction</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Successful applicants receive an offer letter</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Enrollment guidance is provided for next steps</span>
            </li>
          </ul>
          <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light">
            Throughout this stage, communication remains <strong className="font-trade-gothic-bold">clear and supportive</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
