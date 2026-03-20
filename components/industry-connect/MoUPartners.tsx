export default function MoUPartners() {
    return (
        <section className="py-8 md:py-20 bg-white">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-6 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        MoU Partners
                    </h2>
                </div>
                <div className="space-y-6">
                    {/* <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        RVS CAS MBA maintains strategic MoUs with leading companies and institutions to create meaningful academic–industry integration. These partnerships enable:
                    </p> */}
                    <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
                        <li className="flex items-center gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Zoho Corporation</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>CMSDI</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Patrician College of Arts and Science</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Safa College of Arts and Science</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Nilgiri College of Arts and Science</span>
                        </li>
                    </ul>
                    {/* <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        These partnerships help bridge the gap between academic preparation and professional execution, enabling students to graduate with practical confidence and career readiness.
                    </p> */}
                </div>
            </div>
        </section>
    )
}
