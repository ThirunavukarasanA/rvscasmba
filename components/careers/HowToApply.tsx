import Link from "next/link";

export default function HowToApply() {
    return (
        <section className="py-8 md:py-20 bg-booth-bg-gray">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-6 md:mb-10">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        How to Apply
                    </h2>
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        If you are interested in joining our community, please send:
                    </p>
                </div>
                <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light mb-5">
                    <li className="flex items-start gap-3">
                        <span className="text-booth-maroon mt-1">•</span>
                        <span>Your CV / Academic Resume</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-booth-maroon mt-1">•</span>
                        <span>Contact Information for References</span>
                    </li>
                </ul>
                <div className='flex items-baseline justify-start gap-1.5 mb-3'>
                    <h3 className="text-xl md:text-2xl font-trade-gothic-bold text-booth-dark-gray mb-2">
                        to:
                    </h3>
                    <a href="mailto:sara@rvsgroup.com" className="text-lg hover:text-booth-maroon hover:underline transition-all duration-300 md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        sara@rvsgroup.com
                    </a>
                </div>
                <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">Please include the <b>position title</b> in the subject line</p>
                {/* <div className='flex items-baseline justify-start gap-1.5'>
                    <h3 className="text-xl md:text-2xl font-trade-gothic-bold text-booth-dark-gray mb-2">
                        Office Hours:
                    </h3>
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        Mon – Sat, 9:30 AM to 5:30 PM
                    </p>
                </div> */}
            </div>
        </section>
    )
}
