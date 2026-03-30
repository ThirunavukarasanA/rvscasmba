import Image from "next/image";

export default function EmployerEngagement() {
    const logos = [
        "vantor.jpg",
        "propel.jpg",
        "reliance-retail.jpg",
        "Tech Mahindra.jpg",
        "EY.jpg",
        "L&T.jpg",
        "pwc.jpg",
        "Infosys.jpg",
        "Kotak-Bank.jpg",
        "joyalukkas.jpg",
        "Fed-Ex.jpg",
        "icici-bank.jpg",
        "Deloitte.jpg",
        "Axis-Bank.jpg",
        "Ecom-Express.jpg",
        "TCS.jpg",
        "dmart.jpg",
        "Ampere-by-Greaves.jpg",
        "Grant-Thronton.jpg",
        "Siemens.jpg",
    ];

    const encodeLogoPath = (name: string) => `/images/logos/${encodeURIComponent(name)}`;

    return (
        <section className="py-8 md:py-20 bg-white">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-6 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        Employer Partners
                    </h2>
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">RVS CAS MBA collaborates with industry partners across domains — analytics, consulting, finance, marketing, supply chain, and enterprise technology — ensuring exposure to varied career paths and organizational cultures.</p>
                </div>

                <div className="space-y-6">
                    <h3 className="text-2xl md:text-3xl font-trade-gothic-bold text-booth-dark-gray">Employer partners include:</h3>
                    <div className="relative overflow-hidden py-0">
                        <div className="logo-scroll-track flex w-max gap-4 md:gap-6 lg:gap-8">
                            {[...logos, ...logos].map((logo, index) => (
                                <div
                                    key={`${logo}-${index}`}
                                    className="h-[200px] w-44 md:w-52 lg:w-60 shrink-0 bg-white border border-gray-200 rounded-md flex items-center justify-center p-1"
                                >
                                    <Image
                                        src={encodeLogoPath(logo)}
                                        alt={logo.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ")}
                                        width={160}
                                        height={80}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}