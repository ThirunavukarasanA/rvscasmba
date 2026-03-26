export default function ComparisonSection() {
  return (
    <section className="py-8 md:py-20 bg-booth-bg-gray">
      <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Not All Programmes Build Decision-Makers
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-booth-maroon text-white">
                <th className="text-left p-4 font-trade-gothic-bold">Typical Logistics Programmes</th>
                <th className="text-left p-4 font-trade-gothic-bold">RVS MBA in Logistics and SCM</th>
              </tr>
            </thead>
            <tbody className="text-booth-dark-gray font-trade-gothic-light">
              <tr className="border-b border-gray-200">
                <td className="p-4">Focus mainly on execution and processes</td>
                <td className="p-4">Focus on system-level and strategic thinking</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4">Limited connection to business outcomes</td>
                <td className="p-4">Strong connection to financial and business outcomes</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4">Operational, not strategic</td>
                <td className="p-4">Decision-oriented learning approach</td>
              </tr>
              <tr>
                <td className="p-4"></td>
                <td className="p-4">Balanced focus on operations, analytics, and strategy with Lean Six Sigma Black Belt guidance</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
