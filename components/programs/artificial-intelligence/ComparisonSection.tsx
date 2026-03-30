export default function ComparisonSection() {
  return (
    <section className="py-8 md:py-20 bg-booth-bg-gray">
      <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Not All AI Programmes Create Problem-Solvers
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-booth-maroon text-white">
                <th className="text-left p-4 font-trade-gothic-bold">Typical AI Programmes</th>
                <th className="text-left p-4 font-trade-gothic-bold">RVS MBA in Artificial Intelligence</th>
              </tr>
            </thead>
            <tbody className="text-booth-dark-gray font-trade-gothic-light">
              <tr className="border-b border-gray-200">
                <td className="p-4">Tool-heavy learning</td>
                <td className="p-4">Problem-first, tools-second approach</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4">Focus on coding without real-world application</td>
                <td className="p-4">Strong integration of data, technology, and business</td>
              </tr>
              <tr>
                <td className="p-4">Limited business integration</td>
                <td className="p-4">Focus on decision-making using AI</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
