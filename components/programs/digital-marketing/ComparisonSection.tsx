export default function ComparisonSection() {
  return (
    <section className="py-8 md:py-20 bg-booth-bg-gray">
      <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Why Choose RVS CAS
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-booth-maroon text-white">
                <th className="text-left p-4 font-trade-gothic-bold">Typical Marketing Programmes</th>
                <th className="text-left p-4 font-trade-gothic-bold">RVS MBA in Digital Marketing</th>
              </tr>
            </thead>
            <tbody className="text-booth-dark-gray font-trade-gothic-light">
              <tr className="border-b border-gray-200">
                <td className="p-4">Limited practical simulation exposure</td>
                <td className="p-4">Structured Stukent simulation integrated into the curriculum</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4">Theory-heavy delivery with low platform familiarity</td>
                <td className="p-4">Concept-first approach with hands-on platform training</td>
              </tr>
              <tr>
                <td className="p-4">Weak industry-readiness outcomes</td>
                <td className="p-4">Career readiness built through internship, projects, and applied thinking</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
