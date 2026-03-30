export default function ComparisonSection() {
  return (
    <section className="py-8 md:py-20 bg-booth-bg-gray">
      <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Not All HR Programmes Create Business Leaders
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-booth-maroon text-white">
                <th className="text-left p-4 font-trade-gothic-bold">Typical HR Programmes</th>
                <th className="text-left p-4 font-trade-gothic-bold">RVS MBA in Human Resources</th>
              </tr>
            </thead>
            <tbody className="text-booth-dark-gray font-trade-gothic-light">
              <tr className="border-b border-gray-200">
                <td className="p-4">Focus on processes and compliance</td>
                <td className="p-4">Focus on performance and organizational systems</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4">Limited exposure to business impact</td>
                <td className="p-4">Strong link between HR strategy and business outcomes</td>
              </tr>
              <tr>
                <td className="p-4">Administrative orientation</td>
                <td className="p-4">Strategic and leadership-oriented approach</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
