"use client"
import Link from "next/link";
export default function DualSpecializationModel() {
    return (
        <section className="py-8 md:py-20 bg-white">
            <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-6 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        Dual Specialization Model
                    </h2>
                </div>

                <div className="space-y-6">
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        <strong>Two Perspectives. One MBA.</strong>
                    </p>

                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        The MBA program embraces a <strong>dual specialization structure</strong>, enabling students to combine complementary domains and build broader career options.
                    </p>
                    <p className="text-md md:text-lg text-booth-dark-gray font-trade-gothic-light">Students choose two specializations from the following:</p>
                    <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
                        <Link href="/programs/mba-applied-finance" className="group">
                            <li className="flex items-start gap-3 group-hover:text-booth-maroon">
                                <span className="text-booth-maroon mt-1">•</span>
                                <span className="group-hover:underline transition-opacity duration-150"><strong>Applied Finance</strong></span>
                            </li>
                        </Link>
                        <Link href="/programs/mba-business-analytics" className="group">
                            <li className="flex items-start gap-3 group-hover:text-booth-maroon">
                                <span className="text-booth-maroon mt-1">•</span>
                                <span className="group-hover:underline transition-opacity duration-150"><strong>Business Analytics</strong></span>
                            </li>
                        </Link>
                        <Link href="/programs/mba-digital-marketing" className="group">
                            <li className="flex items-start gap-3 group-hover:text-booth-maroon">
                                <span className="text-booth-maroon mt-1">•</span>
                                <span className="group-hover:underline transition-opacity duration-150"><strong>Digital Marketing</strong></span>
                            </li>
                        </Link>
                        <Link href="/programs/mba-human-resources" className="group">
                            <li className="flex items-start gap-3 group-hover:text-booth-maroon">
                                <span className="text-booth-maroon mt-1">•</span>
                                <span className="group-hover:underline transition-opacity duration-150"><strong>Human Resources</strong></span>
                            </li>
                        </Link>
                        <Link href="/programs/mba-logistics-supply-chain-management" className="group">
                            <li className="flex items-start gap-3 group-hover:text-booth-maroon">
                                <span className="text-booth-maroon mt-1">•</span>
                                <span className="group-hover:underline transition-opacity duration-150"><strong>Logistics & Supply Chain Management</strong></span>
                            </li>
                        </Link>
                    </ul>

                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        Each combination prepares students to bridge functions.
                    </p>

                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        <strong>Focused Major with Cross-Functional Advantage</strong>
                    </p>
                    <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
                        {/* <Link href="/programs/mba-applied-finance" className="group"> */}
                        <li className="flex items-start gap-3 group-hover:text-booth-maroon">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span className="group-hover:underline transition-opacity duration-150">Business Analytics - Finance or  HR or Digital Marketing</span>
                        </li>
                        {/* </Link> */}
                        {/* <Link href="/programs/mba-business-analytics" className="group"> */}
                        <li className="flex items-start gap-3 group-hover:text-booth-maroon">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span className="group-hover:underline transition-opacity duration-150">Logistics and Supply Chain - Finance or HR or Digital Marketing</span>
                        </li>
                        {/* </Link> */}
                        {/* <Link href="/programs/mba-digital-marketing" className="group"> */}
                        <li className="flex items-start gap-3 group-hover:text-booth-maroon">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span className="group-hover:underline transition-opacity duration-150">Human Resource - Finance or Digital Marketing</span>
                        </li>
                        {/* </Link> */}
                        {/* <Link href="/programs/mba-human-resources" className="group"> */}
                        <li className="flex items-start gap-3 group-hover:text-booth-maroon">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span className="group-hover:underline transition-opacity duration-150">Digital Marketing - Applied Finance or HR</span>
                        </li>
                        {/* </Link> */}
                        {/* <Link href="/programs/mba-logistics-supply-chain-management" className="group"> */}
                        <li className="flex items-start gap-3 group-hover:text-booth-maroon">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span className="group-hover:underline transition-opacity duration-150">Applied Finance - HR or digital Marketing</span>
                        </li>
                        {/* </Link> */}
                    </ul>
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        This design ensures both <strong>breadth and depth</strong>, empowering students for cross-functional leadership and strategic roles.
                    </p>
                </div>
            </div>
        </section>
    )
}
