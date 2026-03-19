import React from 'react';

export const pastEvents = [
    {
        id: 1,
        title: "Personality Development Programme – I MBA Students",
        description: "The objective of this programme is to build self-confidence, enhance self-esteem and improve overall personality of the students.",
        image: "/images/Social/personality-development-programme.webp",
        slugtitle: "The objective of this programme is to build self-confidence, enhance self-esteem and improve overall personality of the students.",
        resource: "Resource Person: Mr.Jayaraman Umashankar,Vibha Training Academy,Salem,",
        date: "Date: 23/01/2020",
        venue: "Venue: MBA Seminar Hall",
        link: "#"
    },
    {
        id: 2,
        title: "Reunion 2019",
        description: "RVS CAS MBA is happy to host reunion for the Alumni batch 2024-2025. It gives us immense pleasure to continue everlasting ties with you.",
        image: "/images/Social/reunion.webp",
        slugtitle: "Reunion 2019 (Alumni meet)",
        slugpara: "RVS CAS MBA is happy to host reunion for the Alumni batch 2001-03 and 2002-04. It gives us immense pleasure to continue everlasting ties with you. Hope you are faring well in your job and earning laurels for yourself as well as for your family and the Institution. We are sure that you will certainly mark this day in your calendar to walk down the memory lanes and make it available to be with your adorable teachers, mentors and not the least, your bosom friends and colleagues. We welcome all the Alumni of these batches to honor the occasion and make it a success.",
        resource: "",
        link: "#"
    },
    {
        id: 3,
        title: "Machine Learning",
        description: "Resource Person: Sathya Narayanan, Associate Director, Cognizant Coimbatore",
        image: "/images/Social/machine-learning.webp",
        slugtitle: "Machine Learning",
        resource: "Resource Person: Sathya Narayanan, Associate Director, Cognizant Coimbatore",
        date: "Date: 01.11.2021",
        link: "#"
    },
];

export const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
};

export const featuredEvents = [
    {
        id: 1,
        title: "DIGIGO 5.0 – The Ultimate Digital Marketing Challenge",
        description: "Presented by MBA Digital Marketing, RVS College of Arts and Science",
        image: "/images/Social/DIGIGO.webp",
        slugimage: "/images/Social/DIGIGO-slug.png",
        slugtitle: "DIGIGO 5.0 – The Ultimate Digital Marketing Challenge",
        resource: "Presented by MBA Digital Marketing, RVS College of Arts and Science",
        slugpara: (
            <>
                <p className="mb-4">
                    The MBA Digital Marketing department of RVS College of Arts and Science proudly presents DIGIGO 5.0, a dynamic event crafted to test creativity, strategic thinking, and digital expertise. Designed by Digital Marketing students for all UG students of RVS CAS, this event features an exciting lineup of competitions that challenge participants to think, create, and dominate the digital space!
                </p>

                <h3 className="text-xl font-bold text-booth-maroon mb-2 mt-6">Event Lineup</h3>

                <div className="mb-4">
                    <p className="font-bold text-booth-maroon">DIGIDRIVE (Venue: New Lab)</p>
                    <p className="mb-2">Format: 2 participants per team</p>
                    <ul className="list-none space-y-2 ml-4">
                        <li><span className="text-booth-maroon font-bold">&raquo;</span> <strong>Round 1:</strong> Digital Marketing Hunt (Using Mentimeter): Test your knowledge with interactive quizzes.</li>
                        <li><span className="text-booth-maroon font-bold">&raquo;</span> <strong>Round 2:</strong> Tech Puzzles: Solve digital marketing and tech-based puzzles.</li>
                        <li><span className="text-booth-maroon font-bold">&raquo;</span> <strong>Round 3:</strong> Social Media Content Race (Final Round): Create a 30-second reel and compete to get the most likes.</li>
                    </ul>
                </div>

                <div className="mb-4 mt-6">
                    <p className="font-bold text-booth-maroon uppercase">Event Spark (Venue: O-207)</p>
                    <p className="mb-2">Format: 2 participants per team</p>
                    <ul className="list-none space-y-2 ml-4">
                        <li><span className="text-booth-maroon font-bold">&raquo;</span> <strong>Round 1:</strong> Shades a Logo: Identify the brand logo's color.</li>
                        <li><span className="text-booth-maroon font-bold">&raquo;</span> <strong>Round 2:</strong> Video Creation: Develop a compelling short video.</li>
                        <li><span className="text-booth-maroon font-bold">&raquo;</span> <strong>Round 3:</strong> Poster Creation: Design an impactful digital poster.</li>
                    </ul>
                </div>

                <div className="mb-4 mt-6">
                    <p className="font-bold text-booth-maroon uppercase">ADZAP (Venue: Conference Hall)</p>
                    <p className="mb-2">Format: 2 participants per team</p>
                    <ul className="list-none space-y-2 ml-4">
                        <li><span className="text-booth-maroon font-bold">&raquo;</span> <strong>Round 1:</strong> Logo Identification: Recognize and analyze famous brand logos.</li>
                        <li><span className="text-booth-maroon font-bold">&raquo;</span> <strong>Round 2:</strong> DM Charades: Act out digital marketing concepts in an engaging charades game.</li>
                        <li><span className="text-booth-maroon font-bold">&raquo;</span> <strong>Round 3:</strong> Guess The Ad (Final Round): Identify advertisements and decode marketing messages.</li>
                    </ul>
                </div>

                <h3 className="text-lg font-bold text-booth-maroon mb-2 mt-6">Think. Create. Dominate.</h3>
                <p>
                    Are you ready to showcase your digital marketing skills? DIGIGO 5.0 is your platform to innovate, compete, and master the digital landscape.<br />
                    Gear up for an electrifying day of strategy and creativity at the MBA Block on 28th February 2025.
                </p>
            </>
        ),
        date: "Date: 28th February 2025",
        venue: "Venue: MBA Block",
        link: "#"
    },
    {
        id: 2,
        title: "IMPORT PANDAS – 2K25",
        description: "Presented by MBA Business Analytics, RVS College of Arts and Science",
        image: "/images/Social/IMPORT-PANDAS.webp",
        slugimage: "/images/Social/IMPORT-PANDAS-slug.png",
        slugtitle: "IMPORT PANDAS – 2K25",
        resource: "Presented by MBA Business Analytics, RVS College of Arts and Science",
        slugpara: (
            <>
                <p className="mb-4">
                    The MBA Business Analytics department of RVS College of Arts and Science proudly presents IMPORT PANDAS – 2K25, an exhilarating event designed to challenge participants in analytical thinking, problem-solving, and data-driven decision-making. Engage in a series of intellectually stimulating competitions that will put your analytical skills to the ultimate test!
                </p>

                <h3 className="text-xl font-bold text-booth-maroon mb-2 mt-6">Event Lineup</h3>

                <div className="mb-4">
                    <p className="font-bold text-booth-maroon">Code n Conquer</p>
                    <p className="mb-1">Challenge: Solve real-world business cases using data insights.</p>
                    <p className="font-bold text-booth-maroon mb-1">Apply analytical techniques to tackle complex business problems.</p>
                    <p>Showcase your ability to derive meaningful conclusions from data.</p>
                </div>

                <div className="mb-4 mt-6">
                    <p className="font-bold text-booth-maroon">Mad Angles</p>
                    <p className="mb-1">Challenge: Sharpen your logical reasoning through mind-bending puzzles.</p>
                    <p className="font-bold text-booth-maroon mb-1">Test your critical thinking and problem-solving skills.</p>
                    <p>Compete against fellow participants in a series of logical challenges.</p>
                </div>

                <div className="mb-4 mt-6">
                    <p className="font-bold text-booth-maroon">Loading Logic</p>
                    <p className="mb-1">Challenge: Solve mini-tasks to unlock crucial hints.</p>
                    <p className="font-bold text-booth-maroon mb-1">Navigate through a sequence of analytical puzzles.</p>
                    <p>Each solved task leads to the next level of problem-solving.</p>
                </div>

                <div className="mb-4 mt-6">
                    <p className="font-bold text-booth-maroon">Data Dynasty</p>
                    <p className="mb-1">Challenge: Prove your expertise in an exciting data-centric quiz.</p>
                    <p className="font-bold text-booth-maroon mb-1">Answer thought-provoking questions on business analytics and data science.</p>
                    <p>Compete to see who emerges as the ultimate data strategist.</p>
                </div>

                <p className="mt-8">
                    Gear up for a day of strategy, logic, and innovation! Whether you're a problem-solver, a strategist, or a data enthusiast, IMPORT PANDAS – 2K25 is your arena to showcase your expertise. Stay tuned for registration details and be ready to take on the challenge!
                </p>
            </>
        ),
        date: "Date: 24th February 2025 | Time: 9:30 AM",
        venue: "Venue: MBA Block",
        link: "#"
    },
    {
        id: 3,
        title: "LOGISTICIA 2K25",
        description: "Presented by RVS CAS MBA Logistics, RVS College of Arts and Science",
        image: "/images/Social/LOGISTICIA-2K25.webp",
        slugimage: "/images/Social/LOGISTICIA-2K25-slug.png",
        slugtitle: "LOGISTICIA 2K25",
        resource: "Presented by RVS CAS MBA \u2013 Logistics",
        slugpara: (
            <>
                <p className="mb-4">
                    RVS CAS MBA &ndash; Logistics is proud to present LOGISTICIA 2K25, an exciting event designed by Logistics students exclusively for all final-year UG students of RVS CAS. Join us for a day filled with challenging and fun logistics activities that will put your skills to the test!
                </p>

                <h3 className="text-xl font-bold text-booth-maroon mb-2 mt-6">Event Activities</h3>

                <div className="mb-4">
                    <p className="font-bold text-booth-maroon">Cargo IQ (Quiz)</p>
                    <p className="font-bold mb-2">Tagline: <span className="font-normal">Prove Your Logistics IQ!</span></p>
                    <ul className="list-none space-y-2 ml-4">
                        <li><span className="text-booth-maroon font-bold">&raquo;</span> <strong>Format:</strong> Team event with 3 players per team</li>
                        <li><span className="text-booth-maroon font-bold">&raquo;</span> <strong>Duration:</strong> 30 minutes</li>
                        <li><span className="text-booth-maroon font-bold">&raquo;</span> <strong>Rules:</strong>
                            <ul className="list-none space-y-1 ml-4 mt-1">
                                <li><span className="text-booth-maroon font-bold">&raquo;</span> Mobile phones are not allowed.</li>
                                <li><span className="text-booth-maroon font-bold">&raquo;</span> The quiz consists of 25 questions.</li>
                                <li><span className="text-booth-maroon font-bold">&raquo;</span> Each correct answer is scaled to 20 points.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="mb-4 mt-6">
                    <p className="font-bold text-booth-maroon">Warehouse Wizard (Layout Design)</p>
                    <p className="font-bold mb-2">Tagline: <span className="font-normal">Build Smart, Store Smart!</span></p>
                    <ul className="list-none space-y-2 ml-4">
                        <li><span className="text-booth-maroon font-bold">&raquo;</span> <strong>Format:</strong> Team event with 3 players per team</li>
                        <li><span className="text-booth-maroon font-bold">&raquo;</span> <strong>Duration:</strong> 30 minutes</li>
                        <li><span className="text-booth-maroon font-bold">&raquo;</span> <strong>Rules:</strong>
                            <ul className="list-none space-y-1 ml-4 mt-1">
                                <li><span className="text-booth-maroon font-bold">&raquo;</span> Use only the materials provided.</li>
                                <li><span className="text-booth-maroon font-bold">&raquo;</span> Design your layout with an emphasis on safety, accessibility, and space optimization.</li>
                                <li><span className="text-booth-maroon font-bold">&raquo;</span> Judging will be based on both creativity and functionality.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="mb-4 mt-6">
                    <p className="font-bold text-booth-maroon">Document Decoder</p>
                    <p className="font-bold mb-2">Tagline: <span className="font-normal">Spot It, Fix It, Ace It!</span></p>
                    <ul className="list-none space-y-2 ml-4">
                        <li><span className="text-booth-maroon font-bold">&raquo;</span> <strong>Task:</strong> Identify 10 mistakes in a faulty invoice.</li>
                        <li><span className="text-booth-maroon font-bold">&raquo;</span> <strong>Scoring:</strong> Each identified mistake earns 2 marks (Total score: 20 marks).</li>
                    </ul>
                </div>

                <div className="mb-4 mt-6">
                    <p className="font-bold text-booth-maroon">Delivery Daredevil</p>
                    <p className="font-bold mb-2">Tagline: <span className="font-normal">Steady Hands, Perfect Delivery!</span></p>
                    <ul className="list-none space-y-2 ml-4">
                        <li><span className="text-booth-maroon font-bold">&raquo;</span> <strong>Task:</strong> Use a rope to place 4 balls into 4 designated bowls.</li>
                        <li><span className="text-booth-maroon font-bold">&raquo;</span> <strong>Duration:</strong> 5 minute</li>
                    </ul>
                </div>

                <div className="mb-4 mt-6">
                    <p className="font-bold text-booth-maroon">Smart Path</p>
                    <p className="font-bold mb-2">Tagline: <span className="font-normal">See Without Seeing!!</span></p>
                    <ul className="list-none space-y-2 ml-4">
                        <li><span className="text-booth-maroon font-bold">&raquo;</span> <strong>Format:</strong>
                            <ul className="list-none space-y-1 ml-4 mt-1">
                                <li><span className="text-booth-maroon font-bold">&raquo;</span> One team member is blindfolded while the other two provide guidance.</li>
                            </ul>
                        </li>
                        <li><span className="text-booth-maroon font-bold">&raquo;</span> <strong>Task:</strong>
                            <ul className="list-none space-y-1 ml-4 mt-1">
                                <li><span className="text-booth-maroon font-bold">&raquo;</span> Safely deliver goods without dropping them.</li>
                                <li><span className="text-booth-maroon font-bold">&raquo;</span> Guides are allowed to give verbal cues only&mdash;no physical contact is permitted.</li>
                            </ul>
                        </li>
                        <li><span className="text-booth-maroon font-bold">&raquo;</span> <strong>Objective:</strong>
                            <ul className="list-none space-y-1 ml-4 mt-1">
                                <li><span className="text-booth-maroon font-bold">&raquo;</span> The team that completes the task the fastest and most accurately wins. Gear up for LOGISTICIA 2K25 and put your logistics expertise to the test! Whether you're strategizing your next move or collaborating with teammates, this event is your chance to showcase your skills in a competitive yet fun environment.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </>
        ),
        date: "Date: 18th February 2025 | Time: 10:00 AM",
        venue: "Venue: C.K. Prahalad Hall",
        link: "#"
    },
    {
        id: 4,
        title: "FINESTA 2025 – Fuel Your Competitive Spirit!",
        description: "Presented by RVS CAS MBA Applied Finance, RVS College of Arts and Science",
        image: "/images/Social/FINESTA.webp",
        slugimage: "/images/Social/FINESTA-slug.png",
        link: "#"
    },
    {
        id: 5,
        title: "The head hunters 3.0 – HR FEST 2025",
        description: "Presented by RVS CAS MBA Human Resource, RVS College of Arts and Science",
        image: "/images/Social/HR-FEST.webp",
        slugimage: "",
        link: "#"
    },
    {
        id: 6,
        title: "Six-Day Faculty Development Programme",
        description: "The School of Management Studies-PG (MBA) successfully hosted a six-day Faculty Development Programme (FDP)",
        image: "/images/Social/FDP.webp",
        slugimage: "",
        link: "#"
    }
];

export const upcomingEvents = [
    {
        title: "Onam Celebration 2025",
        description:
            "The School of Management Studies (PG) celebrated Onam 2025.",
        image:
            "/images/Social/onam.webp",
    },
    {
        title: "Vidhyarambha 2025 is here!",
        description:
            "RVS College of Arts and Science is all set to welcome the incoming MBA batch with VIDYARAMBHA 2025 — an inspiring and engaging orientation program scheduled from 15th July to 21st July 2025.",
        image:
            "/images/Social/Vidyarambha_2025.webp",
    },
    {
        title: "Campus to Corporate - Bridge Program",
        description:
            "RVS College of Arts & Science (RVS CAS MBA) successfully organized the 'Campus to Corporate - Bridge Program' on 01 Aug 2024, at 9:30 am in the prestigious VM Hall.",
        image:
            "/images/Social/campus-to-corporate.webp",
    },
];

