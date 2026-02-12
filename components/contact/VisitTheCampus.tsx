export default function VisitTheCampus() {
    return (
        <section className="py-8 md:py-20 bg-white">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-6 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        Visit the Campus
                    </h2>
                </div>

                <div className="space-y-6">
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        We welcome prospective students and families to visit our campus and learn more about the MBA experience at RVS CAS.
                    </p>
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        To schedule a visit, call: <a href="tel:+919655955551" className="hover:text-booth-maroon hover:underline transition-all duration-300">+91 96559 55551</a>
                    </p>

                    <p className="text-base md:text-lg text-booth-light-gray font-trade-gothic-light italic">
                        Campus visits are by appointment only.
                    </p>
                </div>
            </div>
        </section>
    )
}
