export default function FacultyArticles() {
    return (
        <section className="py-8 md:py-20 bg-white">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-6 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        Faculty Articles
                    </h2>
                </div>

                <div className="space-y-6">
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-bold">Faculty Perspectives on Management and Markets</p>
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        RVS CAS MBA faculty regularly contribute analytical reflections on business trends, managerial decision-making, financial reasoning, digital marketing strategy, and organizational behavior.
                    </p>
                    <p>These articles aim to:</p>
                    <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
                        <li className="flex items-start gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Simplify complex business ideas</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Bridge academic frameworks with real-world application</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Encourage analytical thinking among students</span>
                        </li>
                    </ul>
                    <p className="text-base md:text-lg text-booth-light-gray font-trade-gothic-light italic">
                        *Faculty articles will be published periodically.
                    </p>
                </div>
            </div>
        </section>
    )
}
