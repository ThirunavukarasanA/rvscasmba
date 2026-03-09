import CurriculumAccordion from './CurriculumAccordion'
const curriculumData = [
    {
        title: "Resume Strategy Workshops",
        content: [
            {
                type: "paragraph" as const,
                text: (
                    <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
                        Students craft resumes that reflect academic depth, analytical projects, tool proficiency, and career intention — not just coursework completed.
                    </p>
                ),
            },
        ],
    },
    {
        title: "Case-Based Interview Practice",
        content: [
            {
                type: "paragraph" as const,
                text: (
                    <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
                        Focused preparation on analytical and behavioral interview formats helps candidates approach employer conversations with clarity and logic.
                    </p>
                ),
            },
        ],
    },
    {
        title: "Career Enhancement Program",
        content: [
            {
                type: "paragraph" as const,
                text: (
                    <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
                        Through outbound learning activities, collaborative challenges, and structured team engagements, students develop teamwork, leadership presence, adaptability, and decision-making under pressure. This program strengthens their ability to function as effective team players in corporate environments.
                    </p>
                ),
            },
        ],
    },
    {
        title: "Portfolio Development",
        content: [
            {
                type: "paragraph" as const,
                text: (
                    <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
                        Students curate project portfolios, analytics case summaries, simulation outcomes, and tool-driven deliverables that demonstrate applied capability.
                    </p>
                ),
            },
        ],
    },
    {
        title: "Aptitude & Communication Training",
        content: [
            {
                type: "paragraph" as const,
                text: (
                    <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
                        Structured sessions on logical reasoning, business writing, and professional communication reduce barriers to performance in assessment processes.
                    </p>
                ),
            },
        ],
    },
    {
        title: "Mentoring & Career Advising",
        content: [
            {
                type: "paragraph" as const,
                text: (
                    <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
                        Faculty and industry advisors guide students in aligning career interests with functional strengths and market opportunities.
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
export default function CareerPreparation() {
    return (
        <section className="py-8 md:py-20 bg-white">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-8 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        Career Preparation – Before Placement Begins
                    </h2>
                    <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed mb-6">Placement preparation at RVS CAS MBA is a <strong>deliberate, structured process</strong> that starts long before recruitment drives. Students benefit from a series of interventions designed to strengthen both functional expertise and professional presence.</p>
                    <h3 className="text-2xl md:text-3xl font-trade-gothic-bold text-booth-dark-gray mb-4">Pre-Placement Preparation Includes</h3>
                </div>

                <CurriculumAccordion items={curriculumData} />
            </div>
        </section>
    )
}
