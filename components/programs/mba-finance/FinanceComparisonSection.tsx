export default function FinanceComparisonSection() {
  return (
    <section className="py-8 md:py-20 bg-booth-bg-gray">
      <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Not All Finance Degrees Teach You How to Think
          </h2>
        </div>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-booth-maroon text-white">
                <th className="text-left p-4 font-trade-gothic-bold">Typical Finance Programmes</th>
                <th className="text-left p-4 font-trade-gothic-bold">RVS MBA - Global Finance & Corporate Analyst</th>
              </tr>
            </thead>
            <tbody className="text-booth-dark-gray font-trade-gothic-light">
              <tr className="border-b border-gray-200">
                <td className="p-4">Focus on formulas and ratios</td>
                <td className="p-4">Focus on financial judgment, not just calculation</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4">Treat accounting numbers as absolute truth</td>
                <td className="p-4">Understand limitations and context behind numbers</td>
              </tr>
              <tr>
                <td className="p-4">Limited exposure to real-world decision-making</td>
                <td className="p-4">Learn how real business decisions are actually made</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-bold mb-4">
          Finance is about decision-making, not just numbers.
        </p>
        <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
          <li className="flex items-center gap-3"><span className="text-booth-maroon mt-1">•</span><span>Financial Statement Mastery</span></li>
          <li className="flex items-center gap-3"><span className="text-booth-maroon mt-1">•</span><span>FP&A and Forecasting Skills</span></li>
          <li className="flex items-center gap-3"><span className="text-booth-maroon mt-1">•</span><span>Corporate Finance Expertise</span></li>
          <li className="flex items-center gap-3"><span className="text-booth-maroon mt-1">•</span><span>Capital Markets Exposure</span></li>
          <li className="flex items-center gap-3"><span className="text-booth-maroon mt-1">•</span><span>Real-World Decision-Making Ability</span></li>
          <li className="flex items-center gap-3"><span className="text-booth-maroon mt-1">•</span><span>Business-Focused Financial Thinking</span></li>
        </ul>
      </div>
    </section>
  );
}
