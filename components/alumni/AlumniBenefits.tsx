import CurriculumAccordion from './CurriculumAccordion'
const curriculumData = [
    {
        title: "Lifelong Community",
        content: [
            {
                type: "paragraph" as const,
                text: (
                    <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
                        Membership in the alumni network connects graduates with peers, faculty, and industry partners across regions and sectors.
                    </p>
                ),
            },
        ],
    },
    {
        title: "Professional Development",
        content: [
            {
                type: "paragraph" as const,
                text: (
                    <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
                        Alumni are invited to exclusive workshops, career sessions, and industry discussions that deepen domain expertise and expand professional networks.
                    </p>
                ),
            },
        ],
    },
    {
        title: "Mentorship & Giving Back",
        content: [
            {
                type: "paragraph" as const,
                text: (
                    <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
                        Alumni provide mentorship to current students, host guest sessions, and contribute to the relevance of the curriculum through industry insight.
                    </p>
                ),
            },
        ],
    },
    {
        title: "Events & Reunions",
        content: [
            {
                type: "paragraph" as const,
                text: (
                    <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
                        Regular alumni events — both on campus and virtually — foster reconnecting, collaboration, and learning beyond graduation.
                    </p>
                ),
            },
        ],
    },
    // {
    //   title: "Test",
    //   content: [
    //     { type: "paragraph" as const, text: "Intro text..." },
    //     { type: "list" as const, items: ["Point 1", "Point 2"] },
    //     { type: "paragraph" as const, text: "Conclusion text..." },
    //   ],
    // },
];
export default function AlumniBenefits() {
    return (
        <section className="py-8 md:py-20 bg-white">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-8 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        Alumni Benefits & Engagement
                    </h2>
                    {/* <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed mb-6">Placement preparation at RVS CAS MBA is a deliberate, structured process that starts long before recruitment drives. Students benefit from a series of interventions designed to strengthen both functional expertise and professional presence.</p>
                    <h3 className="text-2xl md:text-3xl font-trade-gothic-bold text-booth-dark-gray mb-4">Pre-Placement Preparation Includes</h3> */}
                </div>

                <CurriculumAccordion items={curriculumData} />
            </div>
        </section>
    )
}
