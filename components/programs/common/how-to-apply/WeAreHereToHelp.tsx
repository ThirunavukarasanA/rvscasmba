export default function WeAreHereToHelp() {
    return (
        <section className="py-8 md:py-20 bg-white">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-6 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        We’re Here to Help
                    </h2>
                </div>

                <div className="space-y-6">
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        If you need assistance at any point, the admissions team can help with:
                    </p>

                    <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
                        <li className="flex items-start gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Program and specialization clarification</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Application guidance</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Document submission support</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Campus visit coordination</span>
                        </li>
                    </ul>
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        Reach out to us whenever you need clarity.
                    </p>
                </div>
            </div>
        </section>
    )
}
