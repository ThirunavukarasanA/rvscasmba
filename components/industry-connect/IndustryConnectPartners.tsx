import Image from "next/image";

export default function IndustryConnectPartners() {
    return (
        <section className="py-8 md:py-20 bg-white">
            <div className="w-full max-w-full min-[700px]:max-w-[70%] xl:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-6 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        Industry Connect
                    </h2>
                </div>
                <div className="space-y-6">
                    {/* Logos Here */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                        <div className="flex items-center justify-center group">
                            <Image src="/images/industry-connect/cii.png" alt="CII" width={250} height={250} className="group-hover:scale-105 transition-all duration-300" />
                        </div>
                        <div className="flex items-center justify-center group">
                            <Image src="/images/industry-connect/finshiksha.png" alt="Finshiksha" width={250} height={250} className="group-hover:scale-105 transition-all duration-300" />
                        </div>
                        <div className="flex items-center justify-center group">
                            <Image src="/images/industry-connect/trainedge.webp" alt="Trainedge" width={250} height={250} className="group-hover:scale-105 transition-all duration-300" />
                        </div>
                        <div className="flex items-center justify-center group">
                            <Image src="/images/industry-connect/stukent.webp" alt="Stukent" width={250} height={250} className="group-hover:scale-105 transition-all duration-300" />
                        </div>
                        <div className="flex items-center justify-center group">
                            <Image src="/images/industry-connect/pipp.png" alt="PIPP" width={150} height={150} className="group-hover:scale-105 transition-all duration-300" />
                        </div>
                        <div className="flex items-center justify-center group">
                            <Image src="/images/industry-connect/ttlogo.png" alt="TT" width={150} height={150} className="group-hover:scale-105 transition-all duration-300" />
                        </div>
                    </div>
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">Through these collaborations, students gain exposure to live industry cases, digital tools, applied simulations, and structured mentorship from practicing professionals.</p>
                </div>
            </div>
        </section>
    )
}
