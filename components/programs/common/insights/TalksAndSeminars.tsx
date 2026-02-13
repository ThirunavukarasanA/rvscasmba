export default function TalksAndSeminars() {
    return (
        <section className="py-8 md:py-20 bg-booth-bg-gray">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-6 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        Talks & Seminars
                    </h2>
                </div>

                <div className="space-y-6">
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-bold">Conversations That Extend Learning</p>
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        RVS CAS MBA hosts academic talks, industry discussions, and internal seminar sessions that bring practitioners and scholars into dialogue with students.
                    </p>
                    <p>These sessions may include:</p>
                    <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
                        <li className="flex items-start gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Industry guest lectures</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Alumni interaction forums</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Academic workshops</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Panel discussions on emerging business themes</span>
                        </li>
                    </ul>
                    <p className="text-base md:text-lg text-booth-light-gray font-trade-gothic-light italic">
                        *Upcoming talks and seminar summaries will be updated here.
                    </p>
                </div>
            </div>
        </section>
    )
}
