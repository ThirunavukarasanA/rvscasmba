export default function AdmissionsSnapshotSection() {
  return (
    <section className="py-8 md:py-20 bg-booth-bg-gray">
      <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Admissions Snapshot
          </h2>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl md:text-2xl font-trade-gothic-bold text-booth-dark-gray mb-4">
              Key Admissions Criteria
            </h3>
            <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>
                  <strong>Academic Record:</strong> Strong quantitative and
                  analytical foundation
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>
                  <strong>Entrance Test:</strong> Valid CAT / MAT / CMAT /
                  TANCET scores
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>
                  <strong>Personal Statement:</strong> Clear interest in finance
                  and analytics
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>
                  <strong>Interview:</strong> Demonstrated reasoning ability and
                  program fit
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="/programs/common/admissions"
              className="border-2 border-booth-maroon bg-white text-booth-maroon px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-booth-maroon hover:text-white transition text-sm md:text-base"
            >
              Admissions Details
            </a>
            <a
              href="/programs/common/how-to-apply"
              className="border-2 border-booth-maroon bg-white text-booth-maroon px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-booth-maroon hover:text-white transition text-sm md:text-base"
            >
              How to Apply
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
