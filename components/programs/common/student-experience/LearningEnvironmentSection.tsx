export default function LearningEnvironmentSection() {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Learning Environment
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-bold">Faculty-Led. Discussion-Oriented. Applied.</p>
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            The classroom at RVS CAS MBA is not passive. It is interactive and concept-driven.
          </p>
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">Students learn through:</p>
          <div>
            <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>Faculty-led discussions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>Case-based analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>Simulation exercises</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>Applied assignments and presentations</span>
              </li>
            </ul>
          </div>
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">The focus is on understanding <strong className="font-trade-gothic-bold">why decisions work</strong>, not just how to execute them.
            Students are encouraged to question assumptions, analyze frameworks, and think independently.</p>
        </div>
        <div className="mt-12 md:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {/* Card 1 */}
            <div className="flex flex-col h-full bg-white group cursor-pointer">
              <div className="relative h-48 w-full overflow-hidden mb-4 md:mb-6">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="STP Presentation on Decathlon"
                  className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl md:text-2xl font-trade-gothic-bold text-booth-dark-gray mb-3 md:mb-4 group-hover:text-booth-maroon transition-colors duration-300">
                    STP Presentation on Decathlon, Coimbatore
                  </h4>
                  <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light mb-4 md:mb-6">
                    Students presented a strategic segmentation, targeting, and positioning analysis of Decathlon, showcasing industry-oriented thinking and applied marketing frameworks.
                  </p>
                </div>
                <a href="#" className="inline-block text-booth-maroon font-trade-gothic-bold border-b-2 border-booth-maroon pb-1 relative transition-all duration-300 hover:text-booth-dark-gray hover:border-booth-dark-gray w-fit">
                  Explore student insights →
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col h-full bg-white group cursor-pointer">
              <div className="relative h-48 w-full overflow-hidden mb-4 md:mb-6">
                <img
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Case Discussion on IKEA"
                  className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl md:text-2xl font-trade-gothic-bold text-booth-dark-gray mb-3 md:mb-4 group-hover:text-booth-maroon transition-colors duration-300">
                    Case Discussion on IKEA
                  </h4>
                  <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light mb-4 md:mb-6">
                    An interactive case discussion examined IKEA’s global business model, focusing on cost leadership, supply chain efficiency, and customer-centric strategy.
                  </p>
                </div>
                <a href="#" className="inline-block text-booth-maroon font-trade-gothic-bold border-b-2 border-booth-maroon pb-1 relative transition-all duration-300 hover:text-booth-dark-gray hover:border-booth-dark-gray w-fit">
                  View discussion highlights →
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col h-full bg-white group cursor-pointer">
              <div className="relative h-48 w-full overflow-hidden mb-4 md:mb-6">
                <img
                  src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Wealth Maximisation through Market Funds"
                  className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl md:text-2xl font-trade-gothic-bold text-booth-dark-gray mb-3 md:mb-4 group-hover:text-booth-maroon transition-colors duration-300">
                    Wealth Maximisation through Market Funds
                  </h4>
                  <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light mb-4 md:mb-6">
                    This session introduced investment fundamentals, portfolio diversification, and long-term wealth creation through market funds, emphasizing analytical financial decision-making.
                  </p>
                </div>
                <a href="#" className="inline-block text-booth-maroon font-trade-gothic-bold border-b-2 border-booth-maroon pb-1 relative transition-all duration-300 hover:text-booth-dark-gray hover:border-booth-dark-gray w-fit">
                  Learn more about the session →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
