export interface FacultyMember {
  name: string;
  title: string;
  image: string;
  academicArea: string;
  slug: string;
  email?: string;
  bio?: string[];
  accolades?: { category: string; items: string[] }[];
  lifelongLearning?: string;
  industryExperience?: string[];
  academicBackground?: string[];
  vision?: string;
  teachingAreasTitle?: string;
  teachingAreasIntro?: string;
  teachingAreas?: string[];
  teachingAreasOutro?: string;
  publicationsIntro?: string;
  publications?: string[];
  publicationsOutro?: string;
  conferences?: string[];
  certifications?: string[];
  publicationsTitle?: string;
  engagementTitle?: string;
  engagements?: string[];
  advancedPrograms?: string[];
  projects?: string[];
  professionalExpertise?: string[];
}

export const facultyMembers: FacultyMember[] = [
  {
    name: "Dr. K. Senthil Ganesh",
    title: "Managing Trustee, RVS Educational Institutions",
    image: "/images/faculties/Trustee.png",
    academicArea: "Leadership & Strategy, Finance",
    slug: "dr-k-senthil-ganesh",
    email: "",
    bio: [
      "Dr. K. Senthil Ganesh is the Managing Trustee of RVS Educational Institutions, which today encompasses over 50 institutions serving more than 20,000 students. Since 2000, he has played a pivotal role in the growth of the RVS Group, working alongside the Founder–Chairman, Dr. K. V. Kuppuswamy, to assemble a team of eminent academicians, management experts, and finance professionals. Between 2000 and 2008, this vision translated into the establishment of 10 new institutions in diverse fields including Dental, Health Sciences, Engineering, and Alternative Medicine.",
      "With more than 25 years of leadership experience spanning strategy, finance, and marketing, Dr. Senthil Ganesh has been instrumental in transforming RVS into one of South India's most respected educational groups. From 2008 onward, he embarked on a large-scale transformation project with a focus on Digital Disruption and Relevance in Education for the 21st century. Under his leadership, the Arts & Science, Health Sciences, and Ayurveda institutions were repositioned with innovative curricular, co-curricular, and administrative reforms. This division grew from 2,500 students to more than 7,500, earning numerous accolades along the way.",
    ],
    accolades: [
      {
        category: "RVS Arts & Science College",
        items: [
          "Ranked 1st in international student enrollment by Bharathiar University (2007)",
          "Named among Top 4 Colleges in Coimbatore by Times of India (2008)",
          "College of the Year – Silicon India Magazine (2019)",
          "Top 10 Emerging Colleges in India – Business Connect (2020)",
        ],
      },
      {
        category: "RVS Institute of Management Studies and Research",
        items: [
          "Best College – Business Week (2008–09)",
          "Ranked among Top 100 B-Schools in India – Higher Education Review (2021)",
          "As a recognition of his leadership in education, Dr. Senthil Ganesh also served as Chairman of CII, Coimbatore (2023–24), where he led collaborations between academia, industry, and government to strengthen regional development.",
        ],
      },
      // {
      //   category: "Leadership Context",
      //   items: [
      //     "As a recognition of his leadership in education, Dr. Senthil Ganesh also served as Chairman of CII, Coimbatore (2023–24), where he led collaborations between academia, industry, and government to strengthen regional development.",
      //   ],
      // },
    ],
    lifelongLearning:
      "Dr. Ganesh is a constant learner and has completed over 20 global executive education programs from world-renowned institutions including <strong>MIT, Harvard, Oxford, Kellogg, London Business School, IMD, and ISB</strong>. His recent focus includes advanced programs in digital transformation, artificial intelligence, finance, real estate, and strategy, reflecting his commitment to bringing global insights into Indian higher education.",
    industryExperience: [
      "Prior to joining RVS full time, Dr. Ganesh worked in the US IT sector:",
      "• <strong class=\"\">Business Application Developer</strong>, Zales Corporation (1997–1998)",
      "• <strong class=\"\">Founder & Principal IT Consultant</strong>, Mantel Corporation (1998–2002), servicing Fortune 500 clients including Sprint and AT&T",
      "• <strong class=\"\">Technical Consultant</strong>, Cracker Barrel Inc. (RETEK ERP application)",
      "He continues to engage actively with industry as an investor and board member of Transform Tech, an EdTech company focused on online programs in Data Science, Artificial Intelligence, Digital Marketing, and IoT.",
    ],
    academicBackground: [
      "<strong class=\"\">Ph.D. in Management</strong>, Bharathiar University, India (2018)",
      "<strong class=\"\">M.Sc. Software Engineering</strong>, University of Westminster, UK (2004)",
      "<strong class=\"\">BBA</strong>, East Texas State University, USA (1995)",
    ],
    vision:
      "Dr. Senthil Ganesh is widely regarded as an <strong>edupreneur with a digital vision</strong>. His initiatives in curriculum design, faculty training, and industry-linked programs aim to create <strong>future-ready graduates</strong> equipped with skills in Data Science, AI, Big Data Analytics, and Cloud Computing. With a belief that education must evolve with technology, he has consistently worked to position RVS institutions as pioneers of <strong>Education for Digital Era</strong>.",
  },
  {
    name: "Dr. B. Raja Rajeswari",
    title: "Associate Professor, Marketing",
    image: "/images/faculties/Dr. B. Raja Rajeswari.webp",
    academicArea: "Leadership & Strategy, Human Resource",
    slug: "dr-b-raja-rajeswari",
    email: "rajarajeswari@rvsgroup.com",
    bio: [
      "Dr. B. Raja Rajeswari is a management scholar with <strong class=\"\">24 years of teaching and research experience</strong>, known for a rigorous yet student-centered approach to management education. Her work bridges <strong class=\"\">marketing, systems, and strategic management</strong>, with a distinctive research specialization in <strong class=\"\">Green Marketing</strong>. She brings an interdisciplinary lens to the classroom—drawing on consumer behavior, psychology, and sustainability—to help students connect concepts to real managerial decisions.",
      "She qualified for the <strong class=\"\">UGC-NET (June 2011)</strong> and has contributed actively to academic publishing and conference communities. She also served as a <strong class=\"\">reviewer</strong> for <em>Information Technology for Management</em> (McGraw-Hill), reflecting her expertise in the intersection of management and technology.",
    ],
    teachingAreasIntro:
      "Dr. Raja Rajeswari’s teaching spans core and specialization domains, including:",
    teachingAreas: [
      "Marketing Management",
      "Consumer Behavior",
      "Strategic Management",
      "Systems in Management",
      "Sustainability and Green Marketing",
    ],
    teachingAreasOutro:
      "Her classes emphasize conceptual clarity, discussion, and applied reasoning—linking frameworks to real-world business contexts.",
    publications: [
      "“Green Marketing – A Myth or a Reality” — International Journal of Business Intelligence and Innovation, Vol. 2, Issue 1 (March 2014), ISSN 2348-4705",
      "“Green Marketing” — Research Explorer (Refereed Bi-Annual Journal), ISSN: 2250-1940, pp. 437–440",
      "“Can Green Innovations Lead to Sustainable Development? A Case Study on the Knitwear Cluster of Tirupur, India” — Global Conference on Innovations in Management, UK (2011)",
      "“Green Marketing Strategies & Issues” — in Global Marketing Strategies & Practices (2011), ISBN 978-93-80530-17-8, pp. 101–103",
    ],
    conferences: [
      "Raja Rajeswari B — “Green Marketing,” International Conference on HRM on Sustainable Inclusive Growth, Adaikalamatha Institute of Management, 2013.",
      "Raja Rajeswari B — “Enterprise Resource Planning: Implementation Issues,” International Conference on New Vistas of Indian Business, Brahma School of Business, 2013.",
      "Raja Rajeswari B — “Performance Appraisal,” International Conference on HRM in the Era of Global Mobility, Kongunadu Arts and Science College, 2012.",
      "Raja Rajeswari B — “Indian Retail Industry: Opportunities, Challenges and Development,” National Conference on Emerging Trends in Global Business, RVS IMSR, 2012.",
      "Pandian P. K., Raja Rajeswari B., & Nair S. — “Green Innovations and Sustainable Development: Tirupur Case Study,” CIBMP Conference, City University, London, 2011.",
      "Raja Rajeswari B — “Green Marketing Strategies and Issues,” International Conference on Global Marketing Strategies, Nehru Institute of Management Studies, 2010.",
      "Raja Rajeswari B — “Retaining Customers for the Lifetime,” International Conference on Contemporary Practices in Finance & Marketing, 2011.",
      "Raja Rajeswari B — “E-Waste Management,” National Conference on Green Management, 2010.",
      "Raja Rajeswari B — “Viral Marketing: A New Promotion Tool,” National Conference on Global Competitiveness, 2010.",
      "Raja Rajeswari B — “Brand Management with Special Reference to Indian Products,” National Seminar on Modern Management Thoughts, 2011.",
      "Raja Rajeswari B — “Maintaining Strong Brands,” National Seminar on Modern Management Thoughts, 2011.",
      "Raja Rajeswari B — “E-Waste and Recycling,” National Seminar on E-Governance, 2009.",
      "Raja Rajeswari B — “Human Resource Information System,” National Seminar on Innovative HR Practices, 2009.",
    ],
  },
  {
    name: "Mr. Afsal T. I.",
    title: "Assistant Professor – Logistics & Supply Chain Management",
    image: "/images/faculties/Mr. Afsal TI.webp",
    academicArea: "Logistics & Supply Chain Management",
    slug: "mr-afsal-t-i",
    email: "afsal@rvsgroup.com",
    bio: [
      "Mr. Afsal T. I. brings over 13 years of combined industry and academic experience in Logistics and Supply Chain Management. With a strong foundation in procurement, materials leadership, and operations strategy, he integrates real-world business practices into classroom learning.",
      "A certified <strong class=\"\">Lean Six Sigma Black Belt</strong> and proficient in <strong class=\"\">SAP MM</strong>, he emphasizes operational excellence, process optimization, and ERP-driven supply chain management. His professional journey spans purchasing, warehouse operations, materials management, and quality improvement initiatives—allowing him to connect conceptual frameworks with practical execution.",
      "He is actively involved in mentoring students in career readiness, entrepreneurship development, and institutional incubation initiatives, supporting the MBA’s structured approach to industry alignment.",
    ],
    teachingAreas: [
      "Logistics & Supply Chain Management",
      "Procurement & Materials Management",
      "Operations Strategy",
      "Lean Six Sigma & Quality Management",
      "SAP MM & ERP Systems",
      "Strategic Management & Case Analysis",
      "Entrepreneurship Development",
    ],
    certifications: [
      "Lean Six Sigma Black Belt",
      "SAP MM (Materials Management)",
    ],
    accolades: [
      {
        category: "Achievements",
        items: [
          "Best Outgoing Student Award – Confederation of Indian Industry – Institute of Logistics (CII-IL), Chennai (2012)",
        ],
      },
    ],
    publications: [
      "“Factors Affecting Starting a Café Business in Semi-Urban Cities” — International Journal of Engineering Research in Electronics and Communication Engineering, Vol. 11, Issue 08 (Nov 2023)",
    ],
    engagements: [
      "Case Study Presentation – Strategic Management Forum (SMF), Birla Institute of Management and Technology, Noida",
    ],
  },
  {
    name: "Mrs. M. Surya",
    title: "Assistant Professor – Finance",
    image: "/images/faculties/Mrs. M. Surya.webp",
    academicArea: "Finance",
    slug: "mrs-m-surya",
    email: "surya@rvsgroup.com",
    bio: [
      "Mrs. M. Surya is an Assistant Professor of Finance with a background in International Business and Accounting. With academic expertise in taxation, financial systems, and international trade, she brings practical exposure from consultancy and industry-linked training into the classroom.",
      "She has actively contributed to placement training and business process management (BPM) instruction for commerce and management students. Her work extends beyond academia through consultancy services supporting MSMEs in filing, auditing, and the implementation of accounting systems.",
      "Her approach to finance education emphasizes regulatory clarity, practical accounting applications, and business-oriented financial analysis.",
    ],
    teachingAreas: [
      "Financial Accounting",
      "Taxation (GST & Direct Taxes)",
      "International Business",
      "Accounts Payable & Receivable Management",
      "Financial Reporting",
      "Business Compliance & Auditing",
    ],
    certifications: [
      "SWAYAM Certification – Introduction to GST",
      "Coursera Certification – Principles of Accounts Payable & Receivable Management",
    ],
    conferences: [
      "“Impact of Progressive Tax Reform in India: GST – An Approach,” National Seminar, Bannari Amman Institute of Technology (2020)",
      "“AI’s Influence on Accounting Information Disclosure,” 45th All India Accounting Conference & International Seminar, University of Kerala (2023)",
      "First Prize – “Enhancing Business Skills for Tribal Women Entrepreneurs in Tamil Nadu,” Sri Ramakrishna College of Arts & Science (2023)",
    ],
    accolades: [
      {
        category: "Academic Achievements",
        items: [
          "Faculty Excellence Award – RVS College of Arts & Science (Three Consecutive Years: 2021–2024)",
        ],
      },
    ],
  },
  {
    name: "Dr. M. Suganya",
    title: "Associate Professor – Machine Learning & Computer Networks",
    image: "/images/faculties/Dr. M. Suganya.webp",
    academicArea: "Machine Learning & Computer Networks",
    slug: "dr-m-suganya",
    email: "suganya@rvsgroup.com",
    bio: [
      "Dr. M. Suganya is an Associate Professor with over 18 years of academic experience and 15 years of research expertise in Computer Networks and Machine Learning–driven systems. She holds a Ph.D. from Bharathiar University and has published extensively in national and international journals.",
      "Her academic work spans network systems, data-driven architectures, and applied machine learning models. She brings strong technical depth to interdisciplinary programs, contributing to analytics-focused and technology-integrated management education.",
      "As a research mentor, she has guided multiple doctoral scholars and continues to support emerging research in data systems and intelligent computing applications.",
    ],
    teachingAreas: [
      "Machine Learning Foundations",
      "Computer Networks",
      "Data Systems & Architecture",
      "Intelligent Authentication Systems",
      "Applied AI Models",
    ],
    publicationsIntro:
      "Dr. Suganya has authored and co-authored 25 research articles across national and international journals. Her research interests include:",
    publications: [
      "Network security design",
      "Graphical authentication systems",
      "Intelligent data processing frameworks",
      "Network optimization models",
    ],
    accolades: [
      {
        category: "Academic Achievements",
        items: [
          "Gold Medalist – Undergraduate Academic Excellence",
          "Best Faculty Award – RVS College (2011–12, 2013–14)",
          "Guided 6 part-time and 1 full-time Ph.D. scholars; currently mentoring 3 scholars",
        ],
      },
    ],
  },
  {
    name: "Dr. S. Yamini",
    title:
      "Associate Professor & Director (Academic) – Data Science & Analytics",
    image: "/images/faculties/Dr. S. Yamini.webp",
    academicArea: "Data Science & Analytics",
    slug: "dr-s-yamini",
    email: "yamini@rvsgroup.com",
    bio: [
      "Dr. S. Yamini is an Associate Professor and Director (Academic) in the School of Computer Studies, with strong expertise in Data Science, Statistics, and Network Security. A University First Rank holder and Gold Medalist in her Master’s degree, she combines academic distinction with applied technical depth.",
      "Her research focuses on multi-level network security design, graphical authentication systems, and advanced data-driven security models. She is certified in Artificial Intelligence by Harvard Business School and has completed specialized certifications in Cyber Security and Machine Learning from leading global institutions including RIT (New York), University of Maryland, and Imperial College London.",
      "Dr. Yamini brings analytical rigor and structured problem-solving into management and analytics programs, integrating statistics, security frameworks, and machine learning principles into interdisciplinary learning.",
    ],
    teachingAreas: [
      "Data Science & Analytics",
      "Artificial Intelligence",
      "Statistics for Data Modeling",
      "Machine Learning Foundations",
      "Network Security Systems",
      "Cyber Security & Authentication Models",
    ],
    advancedPrograms: [
      "Artificial Intelligence Certification – Harvard Business School",
      "MicroMasters in Cyber Security – Rochester Institute of Technology (edX)",
      "Cyber Security Specialization – University of Maryland (Coursera)",
      "Mathematics for Machine Learning – Imperial College London (Coursera)",
    ],
    publications: [
      "S. Yamini — Analysis of Graphical Password Systems, Data Warehousing and Data Mining, Mar 2011. ISBN: 978-81-91",
      "S. Yamini — Gaze-Based Password Entry Systems, CiiT International Journal, Apr 2011.",
      "S. Yamini — Authentication in Graphical Password Schemes, Coimbatore Institute of Information Technology, July 2011. ISBN: 978-1-4507-6434",
      "S. Yamini — Usability Features of Recognition-Based Graphical Password, Advanced Computing (NCAC-2012), Mar 2012. ISBN: 978-81-922849-4",
      "S. Yamini — Phishing, Advanced Computing, Mar 2012. ISBN: 978-81-922849-4",
      "S. Yamini — Energy Efficient Protocol for Wireless Sensor Networks, Journal of Computer Applications (JCA), May 2012. ISSN: 0974-1925",
      "S. Yamini — Action-Based Graphical Password, Intelligent Information System and Management, July 2012. ISBN: 978-93-80716-96",
      "S. Yamini & Dr. D. Maheswari — An Enhanced Port Tunneling Device Tracking Authentication Mechanism, International Journal of Soft Computing and Software Engineering, Apr 2014. ISSN: 2251-7545",
      "S. Yamini & Dr. D. Maheswari — A Multiple Click Based Graphical Authentication System, Journal of Applied and Theoretical Information Technology, Apr 2014. ISSN: 1992-8645",
    ],
  },
  {
    name: "Mr. N. Vellingiri",
    title: "Assistant Professor – Data Engineering & Generative AI",
    image: "/images/faculties/Mr. N. Vellingiri.png",
    academicArea: "Data Engineering",
    slug: "mr-n-vellingiri",
    email: "nvellingiri@rvsgroup.com",
    bio: [
      "Mr. N. Vellingiri is a Data Engineering faculty member with over 20 years of combined teaching and IT industry experience. His work focuses on data acquisition, processing, storage, and analytics-driven problem solving.",
      "He completed the “Data Engineering for the Social World” program at the London School of Economics and Political Science (LSE), UK, strengthening his applied understanding of data systems in real-world contexts. He brings strong expertise in Python programming, web scraping, Oracle and MySQL database systems, data warehousing, and exploratory data analysis (EDA).",
      "His teaching integrates structured data engineering workflows with practical analytics applications, preparing students for data-driven decision environments.",
    ],
    teachingAreas: [
      "Data Engineering",
      "Data Acquisition & Web Scraping",
      "Database Management Systems (Oracle, MySQL)",
      "Data Warehousing Concepts",
      "Exploratory Data Analysis (EDA)",
      "Generative AI Applications",
      "SQL for Data Science & AI",
    ],
    publicationsTitle: "Publication",
    publications: [
      "<em>Principal Component Analysis and Hybrid Fuzzy Convolution Neural Network Techniques Based Heart Disease Prediction Model</em> — The Bioscan",
    ],
    engagementTitle: "Workshops & Industry Engagement",
    engagements: [
      "Workshop: “SQL for Data Science and AI” – RVSCAS",
      "Workshop: “SQL for Data-Driven Decision Making” – RVSCAS",
      "Workshop: “Data Analysis Using SQL: From Raw Data to Insights” – RVSCAS",
      "Workshop: “Financial Analysis Using Advanced Excel” – Multiple Institutions",
      "Presentation: “Data Engineering for Social World” – MBA Orientation Program",
      "Paper Presentation: Deep Learning-Based Predictive Model for Heart Disease Detection (LIST-2K25 Conference)",
      "Paper Presentation: Transformer-Based Multi-Modal Deep Learning Models for Heart Disease Prediction (ICRTMAR’25)",
    ],
  },
  {
    name: "Mr. A. Karthikeyan",
    title:
      "Assistant Professor – Digital Marketing\nDigital Marketing Executive",
    image: "/images/faculties/Mr. A. Karthikeyan.webp",
    academicArea: "Digital Marketing",
    slug: "mr-a-karthikeyan",
    email: "a.karthikeyan@rvsgroup.com",
    bio: [
      "Mr. A. Karthikeyan is an Assistant Professor in Digital Marketing at the School of Management Studies (PG), RVS College of Arts and Science. With a background in Information Technology and an MBA specialization in Digital Marketing and Global Finance & Corporate Analyst, he brings a balanced blend of technical knowledge and business strategy into the classroom.",
      "In addition to academia, he serves as a Digital Marketing Executive at Transform Tech, where he has gained hands-on industry experience in SEO, Meta Ads, Google Ads, performance marketing, and analytics-driven campaign optimization. His corporate exposure enables him to translate live industry practices into structured learning experiences for MBA students.",
      "He focuses on building practical competence in digital marketing strategy, search engine optimization, marketing analytics tools, and performance measurement frameworks.",
    ],
    teachingAreas: [
      "Introduction to Digital Marketing",
      "Search Engine Optimization (SEO)",
      "Paid Advertising (Google Ads, Meta Ads)",
      "Performance Marketing Strategy",
    ],
    engagements: [
      "Digital Marketing Executive – Transform Tech",
      "Experience in SEO, Social Media Marketing, Paid Campaigns & Data-Driven Optimization",
      "Participated in 3-Day Faculty Development Program on Digital Marketing – Infosys Mysore Campus",
    ],
  },
  {
    name: "Dr. V. Radja Ramane",
    title: "Associate Professor – Economics, Statistics & Research Methods",
    image: "/images/faculties/Dr. V. Radja Ramane.png",
    academicArea: "Economics, Statistics & Research Methods",
    slug: "dr-v-radja-ramane",
    email: "radjaramane@rvsgroup.com",
    bio: [
      "Dr. V. Radja Ramane is a distinguished academician with over 30 years of teaching and research experience in Economics and Management. He holds M.A., M.Phil., and Ph.D. degrees in Economics and was awarded UGC–JRF for his doctoral research.",
      "He has served in leading institutions including Pondicherry University, Shri Nehru Maha Vidyalaya College, RVS Institute of Management, Government Arts College, and PSGIM. Since 2021, he has been serving as Professor at RVS College of Arts and Science, contributing significantly to research mentoring and academic development.",
      "His expertise spans Econometrics, Time Series Analysis, Structural Equation Modelling, Research Methodology, Statistics, and Applied Economics, with strong command over Excel and SPSS for empirical research.",
    ],
    teachingAreas: [
      "Managerial Economics",
      "Business Statistics",
      "Research Methodology",
      "Econometrics",
      "Time Series Analysis",
      "Structural Equation Modelling",
      "Data Analysis using Excel & SPSS",
    ],
    projects: [
      "Major UGC Project: Solid Waste Management in Urban Areas of Coimbatore",
      "Minor UGC Project: Access to Health Services by Construction Workers",
      "Project: Impact of Educational Investment on Urban Earnings",
      "Recognized by IGIDR, Mumbai (1998) for research potential in urban air pollution and public health",
    ],
    publications: [
      "“Economic Development through Human Resource Development: Some Empirical Evidences”",
      "“Trade Performance of Indian Agriculture Since Liberalisation”",
      "“Financial Performance of Nationalised Banks in India: A Post-Liberalisation Analysis”",
      "“Self Help Groups and Social Empowerment: Impact Assessment”",
      "“Disparity in Cotton Growth among Indian States”",
      "Chapters in edited volumes on Globalization, Agricultural Trade, and Indian Economic Analysis",
    ],
  },
  {
    name: "Dr. K. Mangayarkarasi",
    title: "Head – Aptitude Training & Career Guidance",
    image: "/images/faculties/Dr. K. Mangayarkarasi.webp",
    academicArea: "Aptitude Training",
    slug: "dr-k-mangayarkarasi",
    email: "mangayarkarasi@rvsgroup.com",
    bio: [
      "Dr. K. Mangayarkarasi is the Head of Aptitude Training at RVS College of Arts and Science, bringing extensive expertise in career guidance, employability skills, and quantitative aptitude development. She holds M.Sc., M.Phil., MBA (HR), and Ph.D. in Extension and Career Guidance from Bharathiar University.",
      "With years of experience in student training and faculty development, she plays a pivotal role in enhancing MBA students’ analytical ability, problem-solving skills, and placement readiness. Her structured training programs focus on aptitude reasoning, interview preparation, communication skills, and competitive examination readiness.",
      "She has authored books on Analytical and Mental Ability, Interview Guide, and Skill-set Matrix & Learning Opportunities, reinforcing her commitment to employability-driven education.",
    ],
    teachingAreas: [
      "Quantitative Aptitude & Logical Reasoning",
      "Interview Preparation & Employability Skills",
      "Career Guidance & Mentorship",
      "Personality Development",
      "NET / SLET Aptitude Preparation",
      "Faculty Development in Aptitude Teaching Methodology",
    ],
    engagements: [
      "Conducted multiple FDPs on Aptitude Teaching Methodology",
      "Organized workshops on Aptitude Question Design and Preparation",
      "Resource Person for Career Guidance and Placement Training across institutions",
      "Participated in national-level training programs on pedagogy and research methodology",
    ],
  },
  {
    name: "Mr. D. Sharan Krishnan",
    title: "Placement Officer – Corporate Outreach & Career Development",
    image: "/images/faculties/Mr. D. Sharan Krishnan.jpg",
    academicArea: "Corporate Outreach",
    slug: "mr-d-sharan-krishnan",
    email: "sharankrishnan@rvsgroup.com",
    bio: [
      "Mr. D. Sharan Krishnan serves as the Placement Officer at RVS CAS MBA, leading corporate engagement, student career development, and institutional placement strategy. With prior experience as a Young Professional/Consultant under the Ministry of Labour & Employment, he has coordinated large-scale job fairs, skill development initiatives, and employability programs across institutions.",
      "He focuses on building strong industry relationships, organizing campus recruitment drives, and preparing students for competitive corporate environments. His approach blends structured mentorship, communication training, and data-driven placement planning to create meaningful and sustainable career opportunities.",
    ],
    teachingAreasTitle: "Areas of Responsibility",
    teachingAreas: [
      "Corporate Outreach & Industry Relations",
      "Campus Recruitment Coordination",
      "Resume Building & Mock Interviews",
      "Student Skill Assessment & Mentorship",
      "Career Readiness & Employability Training",
      "Placement Analytics & Reporting",
    ],
    professionalExpertise: [
      "Microsoft Excel (Advanced)",
      "Data Analytics using Pivot Tables",
      "Business Intelligence with Power BI",
      "AI-Based Productivity Tools",
      "Event Coordination & Industry Networking",
    ],
  },
];
