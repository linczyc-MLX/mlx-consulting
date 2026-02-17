import { notFound } from "next/navigation";
import { Metadata } from "next";
import ServiceDetailClient from "./ServiceDetailClient";

/* ─── Interfaces ─── */
export interface SubService {
  title: string;
  description: string;
}

export interface MediaItem {
  title: string;
  tagline: string;
  backgroundImage: string;
  pdfUrl?: string;
  videoUrl?: string;
  comingSoon?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  extendedDescription?: string;
  heroImage: string;
  exploreText?: string;
  subServices: SubService[];
  mediaItems?: MediaItem[];
  footerText?: string;
  footerImage?: string;
  approachTitle?: string;
  approachText?: string;
  approachPoints?: { title: string; description: string }[];
  benefitsTitle?: string;
  benefitsText?: string;
  benefitPoints?: { title: string; description: string }[];
  faqs?: FAQ[];
}

/* ─── Service Data ─── */
const services: ServiceData[] = [
  /* ══════════════════════════════════════════
     1. D-VELOP360
     ══════════════════════════════════════════ */
  {
    slug: "d-velop360",
    title: "D-VELOP360",
    tagline: "Collaboration. Innovation. Execution.",
    heroImage:
      "https://framerusercontent.com/images/ZlqbNTqJA0Y4kwjo5DX7TquzzA.png",
    description:
      "The best laid plans of Owners, Developers and Investors fall apart when the critical element of alignment between all stakeholders within the project team is not optimized. The Executive Development Officer serves as the vital link between development, sales, marketing, hospitality operations, and asset management teams in complex mixed-use luxury projects.",
    exploreText:
      "Explore the D-VELOP360 services led by the Executive Development Officer and their practical application to a diverse range of project types:",
    subServices: [
      {
        title: "Executive Development Officer",
        description:
          "The EDO at the heart of alignment and execution across all project disciplines.",
      },
      {
        title: "Branded Luxury Residential",
        description:
          "Delivering optimal returns with visionary lifestyles and environments.",
      },
      {
        title: "Luxury Condominium",
        description:
          "The EDO led D360 workflow applied to a multi-tower development.",
      },
      {
        title: "Hospitality Mixed-Use",
        description:
          "A structured, strategic approach to superior profits and execution.",
      },
    ],
    mediaItems: [
      {
        title: "Executive Development Officer",
        tagline:
          "The EDO Role — The Executive Development Officer at the heart of alignment and execution.",
        backgroundImage:
          "https://framerusercontent.com/images/Xdafu8WKasAiLUkF6rZCtBW67g.jpeg",
        pdfUrl: "http://do-great.work/PRESENTATIONS/D360/EDO.pdf",
        videoUrl: "http://do-great.work/PRESENTATIONS/D360/EDO.mp4",
      },
      {
        title: "Branded Luxury Residential",
        tagline:
          "Branded Residential — Delivering optimal returns with visionary lifestyles and environments.",
        backgroundImage:
          "https://framerusercontent.com/images/ayQxVltDlVODw5oSQ0ph4Ymjok.jpeg",
        pdfUrl: "http://do-great.work/PRESENTATIONS/D360/Branded.pdf",
        videoUrl: "http://do-great.work/PRESENTATIONS/D360/Branded.mp4",
      },
      {
        title: "Luxury Condominium",
        tagline:
          "Residential Condominiums — The EDO led D360 workflow applied to a multi-tower development.",
        backgroundImage:
          "https://framerusercontent.com/images/fdvO8vlejCFyTbRy8Zt4T9EB5U.jpeg",
        pdfUrl: "http://do-great.work/PRESENTATIONS/D360/Condo.pdf",
        videoUrl: "http://do-great.work/PRESENTATIONS/D360/Condo.mp4",
      },
      {
        title: "Hospitality Mixed-Use",
        tagline:
          "Hospitality Mixed-Use — A structured, strategic approach to superior profits and execution.",
        backgroundImage:
          "https://framerusercontent.com/images/mjcbUqd5iYWulweLhjNWd8ZQ1DU.jpeg",
        pdfUrl: "http://do-great.work/PRESENTATIONS/D360/Mixed.pdf",
        videoUrl: "http://do-great.work/PRESENTATIONS/D360/Mixed.mp4",
      },
      {
        title: "The Future of Hospitality",
        tagline:
          "Disruption and Opportunity. Adapt. Or be left behind.",
        backgroundImage:
          "https://framerusercontent.com/images/p2nUEESIxWqJCgktt35OEmkLHro.jpeg",
        pdfUrl: "http://Do-Great.Work/PRESENTATIONS/THINK/The Future.pdf",
        videoUrl: "http://Not-4.sale/VMX.mp4",
      },
      {
        title: "Development & Integration",
        tagline:
          "Synthesis replaces Specialization as Developers navigate the changing landscape.",
        backgroundImage:
          "https://framerusercontent.com/images/m2SjhDn88S9ey03RWLHsJho2Pgc.jpg",
        pdfUrl: "http://Do-Great.Work/PRESENTATIONS/THINK/Integrate.pdf",
        videoUrl: "http://Do-Great.Work/PRESENTATIONS/THINK/Integrate.mp4",
      },
    ],
    footerText:
      "D-VELOP is just one example of how MLX Consulting continually strives to innovate while staying true to our core mission to add measurable value to every project with integrity, determination and a collaborative spirit that is engaging and supportive.",
    footerImage:
      "https://framerusercontent.com/images/xTIaR6AHMNg57L9F2WI2vnyynHY.png",
  },

  /* ══════════════════════════════════════════
     2. CONSULTING SERVICES
     ══════════════════════════════════════════ */
  {
    slug: "consulting-services",
    title: "Consulting Services",
    tagline: "Expert guidance at every step of your project.",
    heroImage:
      "https://framerusercontent.com/images/5F7Kzjt5sSdPDBr2sbjqN3gn5T4.jpg",
    description:
      "Navigating the development world can be overwhelming, but you don\u2019t have to do it alone. Our consulting services provide expert advice, insights, and tailored strategies to make your projects more efficient, sustainable, and aligned with your vision. We\u2019re here to guide, support, and empower you every step of the way.",
    extendedDescription:
      "Our consulting services are designed to provide strategic insights and expert guidance, empowering clients to make informed decisions that enhance their project outcomes and overall business performance.",
    subServices: [
      {
        title: "Market Research and Analysis",
        description:
          "In-depth market research helps clients understand trends, demographics, and competitive landscapes, informing strategic decisions.",
      },
      {
        title: "Investment Strategy Development",
        description:
          "Tailored investment strategies maximize returns and align with clients\u2019 financial goals and risk tolerance.",
      },
      {
        title: "Asset Management and Optimization",
        description:
          "Strategies to enhance the performance of real estate assets, ensuring they deliver optimal returns over time.",
      },
      {
        title: "Operational Efficiency Consulting",
        description:
          "Identifying inefficiencies within operations allows clients to streamline processes and reduce costs.",
      },
      {
        title: "Branding and Marketing Strategy",
        description:
          "A strong brand and effective marketing strategy are essential for attracting target audiences and differentiating projects.",
      },
      {
        title: "Financial Due Diligence and Valuation",
        description:
          "Conducting thorough due diligence ensures sound investment decisions based on accurate valuations and risk assessments.",
      },
      {
        title: "Strategic Planning and Visioning",
        description:
          "Collaborating with clients to develop long-term strategies helps define objectives and chart a clear path forward.",
      },
      {
        title: "Crisis Management and Recovery Planning",
        description:
          "Preparing for potential crises ensures clients can respond effectively to challenges, minimizing disruption and loss.",
      },
      {
        title: "Training and Development for Staff",
        description:
          "Investing in staff training enhances organizational capabilities and fosters a culture of continuous improvement.",
      },
      {
        title: "Technology Integration and Innovation",
        description:
          "Adopting innovative technologies can streamline operations and enhance project outcomes, keeping clients competitive.",
      },
    ],
    approachTitle: "Why Choose Our Consulting Services?",
    approachPoints: [
      {
        title: "Strategic Insights",
        description:
          "Market research and analysis provide owners and investors with a deep understanding of market dynamics, enabling better strategic planning and investment decisions.",
      },
      {
        title: "Increased ROI",
        description:
          "Tailored investment strategies and asset optimization consulting help maximize returns, ensuring that projects contribute positively to the bottom line.",
      },
      {
        title: "Operational Efficiency",
        description:
          "Consulting on operational processes identifies areas for improvement, leading to cost savings and enhanced performance over time.",
      },
      {
        title: "Crisis Preparedness",
        description:
          "Comprehensive crisis management planning equips stakeholders with strategies to navigate challenges effectively, safeguarding investments and ensuring business continuity.",
      },
    ],
    benefitsText:
      "In our Consulting Services, we adopt a holistic approach that combines expertise with a deep understanding of market dynamics. We begin by conducting thorough market research and analysis to provide clients with valuable insights that inform strategic decisions.\n\nOur consultants work closely with clients to develop customized investment strategies that align with their goals and risk tolerance. We emphasize operational efficiency by identifying best practices and areas for improvement, which can lead to significant cost savings. Our crisis management planning ensures readiness.\n\nBy fostering a culture of continuous improvement and innovation, we empower our clients to achieve sustainable success in their ventures.",
    faqs: [
      {
        question: "What types of consulting services do you offer?",
        answer:
          "We offer a range of consulting services, including market research, investment strategy development, operational efficiency consulting, and crisis management planning, tailored to meet the unique needs of our clients.",
      },
      {
        question: "How does market research benefit real estate projects?",
        answer:
          "Market research provides valuable insights into market trends, demographics, and competitive landscapes. This information helps clients make informed decisions regarding project feasibility and investment opportunities.",
      },
      {
        question: "What is involved in developing an investment strategy?",
        answer:
          "Developing an investment strategy involves assessing client goals, risk tolerance, and market conditions. We create tailored strategies that maximize returns while aligning with the client\u2019s overall vision.",
      },
      {
        question:
          "How can operational efficiency consulting improve a project?",
        answer:
          "Operational efficiency consulting identifies inefficiencies within processes, leading to streamlined operations, cost savings, and improved performance. This can significantly enhance the overall success of a project.",
      },
      {
        question:
          "What should clients expect from crisis management planning?",
        answer:
          "Clients can expect a comprehensive approach to crisis management that includes risk assessment, contingency planning, and strategies for effective communication during a crisis. This preparation ensures that clients can navigate challenges proactively and minimize disruption.",
      },
    ],
  },

  /* ══════════════════════════════════════════
     3. MASTER PLANNING & DESIGN
     ══════════════════════════════════════════ */
  {
    slug: "master-planning-design",
    title: "Master Planning & Design",
    tagline: "Creating cohesive visions that shape remarkable environments.",
    heroImage:
      "https://framerusercontent.com/images/eDIeYxXqe5DuGuq5gAOGQUu4Ec0.jpg",
    description:
      "Our comprehensive strategy guarantees that each master plan and design is customized to create dynamic, livable environments that endure over time. By focusing on integrated and sustainable spaces, engaging stakeholders, and prioritizing transparent communication, we deliver projects that enhance the quality of life for vibrant communities.",
    extendedDescription:
      "Under our master planning and design services, we emphasize a holistic approach to creating innovative and functional spaces.",
    subServices: [
      {
        title: "Comprehensive Site Analysis",
        description:
          "Understanding the physical and environmental characteristics of a site informs design choices and helps identify constraints or opportunities.",
      },
      {
        title: "Conceptual Design Development",
        description:
          "Crafting innovative design concepts that reflect the vision of stakeholders while considering functionality and aesthetic appeal.",
      },
      {
        title: "Land Use Planning",
        description:
          "Strategic land use planning optimizes the distribution of various functions within a development, promoting efficient use of space.",
      },
      {
        title: "Architectural Design Services",
        description:
          "Tailored architectural designs that meet functional requirements and resonate with desired brand identity and community character.",
      },
      {
        title: "Landscape Architecture and Design",
        description:
          "Thoughtfully designed landscapes enhance appeal, creating inviting outdoor spaces that promote community engagement.",
      },
      {
        title: "Environmental Impact Assessments",
        description:
          "Evaluating potential environmental impacts ensures projects are sustainable and compliant with environmental regulations.",
      },
      {
        title: "Infrastructure Planning and Design",
        description:
          "Planning for roads, utilities, and public amenities essential for supporting residents and businesses.",
      },
      {
        title: "Space Planning and Interior Design",
        description:
          "Effective space planning maximizes usability, ensuring interior spaces are comfortable and efficient for all occupants.",
      },
      {
        title: "Sustainability and Green Building",
        description:
          "Incorporating sustainable practices benefits the environment and leads to long-term cost savings for owners.",
      },
      {
        title: "Community Engagement",
        description:
          "Actively involving the community in the planning process fosters goodwill and aligns development with community needs.",
      },
    ],
    approachText:
      "During Master Planning and Design, our approach is centered around creating spaces that are not only functional but also inspiring. We conduct comprehensive site analyses to understand the unique characteristics of each location, which informs our design process.\n\nCollaborative workshops with stakeholders, including community members, ensure that diverse perspectives are integrated into the planning. Talented architects and designers craft innovative concepts that prioritize sustainability and aesthetic appeal. By balancing creativity with practicality, we create master plans that stand the test of time.\n\nContinuous feedback loops during the design process allow us to refine our plans and ensure they resonate with the intended audience.",
    benefitsTitle: "What makes our Master Planning and Design services different?",
    benefitPoints: [
      {
        title: "Optimized Land Use",
        description:
          "Thoughtful master planning maximizes the utility and appeal of the project, ensuring that space is used effectively to meet market demands.",
      },
      {
        title: "Aesthetic and Functional Design",
        description:
          "High-quality architectural and landscape design enhances the visual appeal and functionality of spaces, attracting potential buyers and guests.",
      },
      {
        title: "Sustainability Integration",
        description:
          "Incorporating sustainable practices into design not only benefits the environment but can also lead to reduced operating costs and increased marketability.",
      },
      {
        title: "Community Alignment",
        description:
          "Engaging with local communities during the planning process ensures that developments align with community needs and preferences, enhancing acceptance and support.",
      },
    ],
    faqs: [
      {
        question:
          "What is master planning, and how does it differ from regular planning?",
        answer:
          "Master planning is a comprehensive approach that encompasses the long-term vision for a development area, integrating elements like land use, infrastructure, and community needs. It differs from regular planning by focusing on holistic development and sustainability.",
      },
      {
        question: "Can you explain your design process?",
        answer:
          "Our design process begins with thorough site analysis, followed by collaborative workshops with stakeholders to gather input. We then develop conceptual designs that prioritize functionality, aesthetics, and sustainability.",
      },
      {
        question:
          "How do you incorporate sustainability into your designs?",
        answer:
          "We integrate sustainable practices by utilizing eco-friendly materials, implementing energy-efficient systems, and designing for minimal environmental impact. This approach not only benefits the planet but can also reduce operational costs.",
      },
      {
        question:
          "What is the importance of community engagement in master planning?",
        answer:
          "Community engagement is vital as it ensures that the development aligns with local needs and desires. Involving residents in the planning process fosters goodwill and increases the likelihood of project acceptance.",
      },
      {
        question:
          "How do you ensure your designs are practical and feasible?",
        answer:
          "We collaborate closely with engineering and construction teams throughout the design process to ensure that our concepts are practical and can be executed within budget and timeline constraints.",
      },
    ],
  },

  /* ══════════════════════════════════════════
     4. DEVELOPMENT MANAGEMENT
     ══════════════════════════════════════════ */
  {
    slug: "development-management",
    title: "Development Management",
    tagline: "Strategic oversight from concept to completion.",
    heroImage:
      "https://framerusercontent.com/images/TXnbmkR3VStDNbmD3QUcMBsP0EM.jpg",
    description:
      "By engaging our development management services, clients gain access to expert guidance throughout the project lifecycle. Our thorough feasibility assessments and proactive risk management strategies minimize financial uncertainties and ensure that projects align with your creative, financial and sustainability goals.",
    extendedDescription:
      "We offer the following Development Management services:",
    subServices: [
      {
        title: "Feasibility Studies",
        description:
          "These studies analyze various factors such as market conditions, financial viability, and regulatory requirements. By assessing these elements early on, clients can make informed decisions about whether to proceed with a project.",
      },
      {
        title: "Site Selection and Acquisition",
        description:
          "The right location can significantly affect a project\u2019s success. Our expertise helps clients identify sites that offer the best potential for growth and profitability, factoring in accessibility, demographics, and competition.",
      },
      {
        title: "Financial Modeling and Budgeting",
        description:
          "Creating detailed financial models enables developers to forecast cash flows, project returns, and identify funding requirements. Effective budgeting ensures that projects remain financially viable throughout their lifecycle.",
      },
      {
        title: "Project Scheduling and Timeline Development",
        description:
          "A well-structured timeline is essential for keeping projects on track. We develop detailed schedules that outline key milestones and deadlines, helping to coordinate various stakeholders efficiently.",
      },
      {
        title: "Risk Management and Mitigation Strategies",
        description:
          "Identifying potential risks\u2014be they financial, environmental, or operational\u2014is crucial. We help clients devise strategies to mitigate these risks, ensuring that unexpected challenges do not derail project progress.",
      },
      {
        title: "Stakeholder Engagement and Communication",
        description:
          "Establishing open lines of communication with stakeholders\u2014including investors, community members, and regulatory bodies\u2014builds trust and fosters collaboration, which is vital for project success.",
      },
      {
        title: "Contract Negotiation and Management",
        description:
          "Skilled negotiation ensures favorable terms and conditions in contracts with suppliers, contractors, and service providers, protecting the client\u2019s interests and enhancing project outcomes.",
      },
      {
        title: "Regulatory Compliance and Permitting",
        description:
          "Navigating the regulatory landscape can be daunting. Our expertise ensures that all necessary permits are obtained and that projects comply with local zoning laws and environmental regulations.",
      },
      {
        title: "Quality Assurance and Control",
        description:
          "Maintaining high-quality standards throughout the development process leads to better end results and enhances the project\u2019s reputation. We implement rigorous quality control measures to achieve this.",
      },
      {
        title: "Performance Monitoring and Reporting",
        description:
          "Continuous monitoring of project performance against established benchmarks allows for timely adjustments and ensures that projects stay within scope and budget.",
      },
    ],
    approachText:
      "Our approach to development management is characterized by a proactive and collaborative methodology that emphasizes thorough planning and strategic execution. We begin with in-depth feasibility studies and market analyses to identify opportunities and potential challenges.\n\nBy engaging stakeholders early and maintaining transparent communication, we create a shared vision that aligns with project goals. We meticulously oversee each phase, ensuring adherence to timelines and budgets while implementing risk mitigation strategies. This hands-on approach allows us to adapt to changing circumstances quickly, ensuring that the project progresses smoothly and efficiently.",
    benefitsTitle: "What makes our Development Management service different?",
    benefitPoints: [
      {
        title: "Streamlined Project Execution",
        description:
          "Owners, developers, and investors benefit from a structured approach that ensures projects are completed efficiently, minimizing delays and disruptions.",
      },
      {
        title: "Informed Decision-Making",
        description:
          "Comprehensive feasibility studies and market analyses provide valuable insights, enabling stakeholders to make informed decisions about project viability and potential returns.",
      },
      {
        title: "Risk Mitigation",
        description:
          "Proactive risk management strategies help identify and address potential challenges before they escalate, protecting investments and ensuring project stability.",
      },
      {
        title: "Enhanced Communication",
        description:
          "Effective stakeholder engagement fosters transparency and collaboration, keeping all parties informed and aligned throughout the project lifecycle.",
      },
    ],
    faqs: [
      {
        question:
          "What is development management, and why is it important?",
        answer:
          "Development management involves overseeing and coordinating all aspects of a real estate project from inception to completion. It is crucial as it ensures that projects are executed efficiently, on budget, and in alignment with strategic goals.",
      },
      {
        question: "How do you conduct feasibility studies?",
        answer:
          "We conduct feasibility studies by analyzing market conditions, financial projections, site characteristics, and regulatory requirements. This comprehensive analysis helps determine the viability of the project and guides decision-making.",
      },
      {
        question:
          "What role does stakeholder engagement play in development management?",
        answer:
          "Stakeholder engagement is essential for building trust and ensuring that all parties have a voice in the project. It fosters collaboration and helps align the project with community needs and expectations.",
      },
      {
        question:
          "How do you manage risks associated with development projects?",
        answer:
          "We identify potential risks early in the process and develop mitigation strategies. This proactive approach enables us to address challenges before they escalate, safeguarding the project\u2019s success.",
      },
      {
        question: "What tools do you use for project management?",
        answer:
          "We utilize advanced project management software to track progress, manage schedules, and oversee budgets. These tools enhance communication and facilitate efficient project execution.",
      },
    ],
  },

  /* ══════════════════════════════════════════
     5. PROJECT & CONSTRUCTION MANAGEMENT
     ══════════════════════════════════════════ */
  {
    slug: "project-management",
    title: "Project & Construction Management",
    tagline: "Hands-on management that keeps your project on track.",
    heroImage:
      "https://framerusercontent.com/images/6tc2k5oPDIhS5aqHzXzEtRYtiio.jpg",
    description:
      "Clients can expect timely project delivery and strict adherence to budget and quality standards, while our rigorous quality assurance methods and reporting protocols ensure that construction sites operate smoothly and efficiently. By managing key aspects of the project and construction process, we reduce the burden on clients and allow them to focus on their core business activities.",
    extendedDescription:
      "Our Project and Construction Management approach is built on a foundation of meticulous planning and rigorous oversight. We employ advanced project management tools to develop detailed schedules and resource allocation plans that ensure optimal efficiency on-site.",
    subServices: [
      {
        title: "Contractor Selection and Management",
        description:
          "Selecting the right contractors based on expertise, past performance, and alignment with project goals.",
      },
      {
        title: "Construction Budget Management",
        description:
          "Careful monitoring of construction costs to prevent budget overruns and ensure effective resource allocation.",
      },
      {
        title: "Scheduling and Resource Allocation",
        description:
          "Efficient scheduling and resource management to maintain momentum and avoid delays on site.",
      },
      {
        title: "Quality Control Inspections",
        description:
          "Regular inspections to identify issues early, allowing prompt resolution and maintaining high standards.",
      },
      {
        title: "Safety Management and Compliance",
        description:
          "Prioritizing safety to protect workers, minimize liability, and ensure compliance with industry standards.",
      },
      {
        title: "Change Order Management",
        description:
          "Managing changes carefully to minimize impact and ensure all modifications are documented and approved.",
      },
      {
        title: "Progress Reporting and Documentation",
        description:
          "Keeping stakeholders informed through regular updates that foster transparency and accountability.",
      },
      {
        title: "Coordination of Subcontractors",
        description:
          "Effective coordination among various trades and suppliers ensures smooth work and alignment with the project vision.",
      },
      {
        title: "Punch List and Final Inspection",
        description:
          "Addressing minor issues before completion ensures a polished final product that meets or exceeds expectations.",
      },
      {
        title: "Post-Construction Services",
        description:
          "Ongoing support after project completion to address any issues and ensure long-term client satisfaction.",
      },
    ],
    approachText:
      "Our Project and Construction Management approach is built on a foundation of meticulous planning and rigorous oversight. We employ advanced project management tools to develop detailed schedules and resource allocation plans that ensure optimal efficiency on-site.\n\nThe client retained team conducts regular quality control inspections and safety audits to maintain high standards throughout the construction process. We foster strong relationships with contractors and subcontractors, facilitating seamless communication and collaboration.\n\nBy managing the complexities of construction with a focus on delivering exceptional results, we ensure that projects are completed on time, within budget, and to the highest quality standards. Our commitment to transparency means that stakeholders are kept informed at every stage, fostering trust and confidence.",
    benefitPoints: [
      {
        title: "Cost Control",
        description:
          "Rigorous budget management and oversight help prevent cost overruns, ensuring that projects remain financially viable and within budget constraints.",
      },
      {
        title: "Quality Assurance",
        description:
          "Consistent quality control measures lead to superior construction outcomes, increasing the value of the development and enhancing client satisfaction.",
      },
      {
        title: "Timely Completion",
        description:
          "Effective scheduling and resource allocation ensure that projects are completed on time, allowing owners and investors to realize returns more quickly.",
      },
      {
        title: "Safety Compliance",
        description:
          "Prioritizing safety during construction not only protects workers but also minimizes liabilities and promotes a positive project reputation.",
      },
    ],
    faqs: [
      {
        question: "What does project management in construction entail?",
        answer:
          "Project management in construction involves planning, coordinating, and overseeing all activities related to building a project. This includes managing timelines, budgets, quality control, and communication among stakeholders.",
      },
      {
        question: "How do you select contractors for a project?",
        answer:
          "We select contractors based on their experience, past performance, and alignment with project goals. We conduct thorough evaluations and interviews to ensure they meet our quality standards.",
      },
      {
        question:
          "What measures do you take to ensure quality during construction?",
        answer:
          "We implement rigorous quality control inspections at various stages of construction, ensuring compliance with design specifications and industry standards. This proactive approach helps maintain high-quality outcomes.",
      },
      {
        question: "How do you manage safety on construction sites?",
        answer:
          "Safety management is prioritized through regular safety audits, training sessions, and adherence to regulatory requirements. We foster a safety-first culture to protect workers and minimize liabilities.",
      },
      {
        question: "What is a punch list, and why is it important?",
        answer:
          "A punch list is a document that outlines any remaining tasks or issues that need to be addressed before project completion. It is important as it ensures that all final details are resolved, leading to a polished final product.",
      },
    ],
  },

  /* ══════════════════════════════════════════
     6. NOT4SALE RESIDENTIAL ADVISORY
     ══════════════════════════════════════════ */
  {
    slug: "not4sale",
    title: "Not4Sale Residential Advisory",
    tagline: "Bespoke advisory for discerning homeowners and investors.",
    heroImage:
      "https://framerusercontent.com/images/b0DYbrINvCMLcftTfNf8QUD4W48.png",
    description:
      "Traditional methods often lead to misalignment, costly revisions, and homes that fail to capture the essence of how clients truly live. We outline the critical role of market analysis in guiding the design and development of luxury residences. Our approach highlights the importance of understanding both the client\u2019s personal preferences and the broader market context.",
    exploreText:
      "Explore the Not4Sale services led by the Luxury Residential Advisory team and the curated process that leads to spectacular and profitable residences that exceed your expectations:",
    subServices: [
      {
        title: "Luxury Residential Advisory",
        description:
          "Your trusted partner for independent and expert guidance and support.",
      },
      {
        title: "Know Your Client (LuxeBrief)",
        description:
          "A proven framework for designing luxury residences that fully cater to the unique tastes and lifestyles of discerning clients.",
      },
      {
        title: "Know Your Market",
        description:
          "Market analyses that empower clients in making informed decisions about their luxury residences.",
      },
      {
        title: "Find Your Inspiration (FYI)",
        description:
          "Curated inspiration sourcing to align design vision with personal lifestyle aspirations.",
      },
      {
        title: "VisionMatrix (VisualMatriX)",
        description:
          "Cost and budget predictability and alignment without compromising creative vision.",
      },
    ],
    mediaItems: [
      {
        title: "N4S Introduction",
        tagline:
          "Welcome to Not4Sale and a brief journey through the N4S ecosystem.",
        backgroundImage:
          "https://framerusercontent.com/images/izu8w3kpzS1ErudkzkvahEk1gJs.jpg",
        pdfUrl: "http://Do-Great.Work/PRESENTATIONS/NFS/INTRO NFS.pdf",
        videoUrl: "http://Do-Great.Work/PRESENTATIONS/NFS/INTRO NFS.mp4",
      },
      {
        title: "Luxury Residential Advisory",
        tagline:
          "Your trusted partner to independent and expert guidance and support.",
        backgroundImage:
          "https://framerusercontent.com/images/8McQNVSrWeMs60lTcam3JumM.jpg",
        pdfUrl: "http://Do-Great.Work/PRESENTATIONS/NFS/INTRO LRA.pdf",
        videoUrl: "http://Do-Great.Work/PRESENTATIONS/NFS/INTRO LRA.mp4",
      },
      {
        title: "Know Your Client (LuxeBrief)",
        tagline:
          "LuxeBrief offers a proven framework for designing luxury private residences that fully cater to the unique tastes and lifestyles of discerning clients.",
        backgroundImage:
          "https://framerusercontent.com/images/nZBgrX1Vy7AuMpOKrSOYlfoE.jpg",
        pdfUrl: "http://Do-Great.Work/PRESENTATIONS/NFS/KYC.pdf",
        videoUrl: "http://Do-Great.Work/PRESENTATIONS/NFS/KYC.mp4",
      },
      {
        title: "Find Your Inspiration (FYI)",
        tagline: "Find Your Inspiration",
        backgroundImage:
          "https://framerusercontent.com/images/A1qsQVY5shd73ej8pwn76m2vr0.jpg",
        pdfUrl: "http://Do-Great.Work/PRESENTATIONS/NFS/FYI v2.pdf",
        videoUrl: "http://Do-Great.Work/PRESENTATIONS/NFS/FYIv2.mp4",
      },
      {
        title: "Mansion Validation Program (MVP)",
        tagline:
          "Ensuring the spatial relationships in your home design protect what matters most.",
        backgroundImage:
          "https://framerusercontent.com/images/b0DYbrINvCMLcftTfNf8QUD4W48.png",
        pdfUrl: "http://Do-Great.Work/PRESENTATIONS/NFS/MVP.pdf",
        videoUrl: "http://Do-Great.Work/PRESENTATIONS/NFS/MVP.mp4",
      },
      {
        title: "Know Your Market",
        tagline:
          "Market analyses that empower clients in making informed decisions about their luxury residences.",
        backgroundImage:
          "https://framerusercontent.com/images/Wuu3q4WDIYmBu5M6uMwx3nA4D8.png",
        pdfUrl: "http://Do-Great.Work/PRESENTATIONS/NFS/KYM.pdf",
        videoUrl: "http://Do-Great.Work/PRESENTATIONS/NFS/KYM.mp4",
      },
      {
        title: "Creative Alignment + Matchmaking",
        tagline:
          "Connecting clients with architects and designers based on individual preferences and lifestyle needs.",
        backgroundImage:
          "https://framerusercontent.com/images/HQQ3EXqKXPndXhJYyIZeGS2PqM8.jpg",
        comingSoon: true,
      },
      {
        title: "VisionMatrix (VisualMatriX)",
        tagline:
          "VisualMatriX delivers cost and budget predictability and alignment without compromising creative vision.",
        backgroundImage:
          "https://framerusercontent.com/images/RkERQ0jrB7gAeh1FyqFzC2mJpbU.jpg",
        pdfUrl: "http://Do-Great.Work/PRESENTATIONS/NFS/VMX.pdf",
        videoUrl: "http://Do-Great.Work/PRESENTATIONS/NFS/VMX.mp4",
      },
    ],
    footerText:
      "Not4Sale is another example of how MLX Consulting continually strives to innovate while staying true to our core mission to add measurable value to every project with integrity, determination and a collaborative spirit that is engaging and supportive.",
    footerImage:
      "https://framerusercontent.com/images/97X06X8GOgIUOs4anfI76Ytbo.png",
  },

  /* ══════════════════════════════════════════
     7. THOUGHT LEADERSHIP
     ══════════════════════════════════════════ */
  {
    slug: "thought-leadership",
    title: "Thought Leadership",
    tagline: "Ask The Right Questions. Have a Story to Tell. Get it Done.",
    heroImage:
      "https://framerusercontent.com/images/o74z2PJXRCjmue7npGdeAb3c1sI.jpeg",
    description:
      "Our thought leadership addresses the tensions you navigate daily \u2014 balancing ROI targets against long-term capital appreciation, aligning developer and investor objectives with market conditions, and managing complex stakeholder workflows from Dallas to Dubai, Rome to Riyadh, and London to Abu Dhabi. We share the 360-degree insights that help you make confident decisions on deals worth $50M to $5B+.",
    extendedDescription:
      "Our Clients expect professionalism, discretion, and deep industry knowledge. By providing valuable, insightful content and original research, MLX positions itself as a reliable, authoritative source of information, encouraging trust and collaboration.",
    exploreText:
      "Thought Leadership is a critical additive for our real estate development services because it turns technical capability into market influence. By publishing forward-looking insights, case studies, and best practices, MLX demonstrates domain expertise and builds credibility with developers, investors, and public stakeholders.",
    subServices: [
      {
        title: "The Seven Pillars",
        description:
          "A comprehensive analysis of investment criteria models in the real world.",
      },
      {
        title: "The Alignment Imperative",
        description:
          "Aligning stakeholders is the central metric in successful developments.",
      },
      {
        title: "The Role of The EDO",
        description:
          "Looking for Execution Excellence? The EDO leads the way.",
      },
      {
        title: "A Vision For A New City",
        description:
          "Telosa seeks to redefine city living. A strategic vision of the future.",
      },
      {
        title: "Mind Robotics",
        description:
          "Rivian expands its reach with a new manufacturing robotics campus.",
      },
    ],
    mediaItems: [
      {
        title: "The Seven Pillars",
        tagline:
          "A comprehensive analysis of investment criteria models in the real world.",
        backgroundImage:
          "https://framerusercontent.com/images/26oTqylH8T8ejMAMEKrRBrmpIxM.jpeg",
        pdfUrl: "http://Do-Great.Work/PRESENTATIONS/THINK/7 PILLARS.pdf",
        videoUrl: "http://Do-Great.Work/PRESENTATIONS/THINK/7 PILLARS.mp4",
      },
      {
        title: "The Alignment Imperative",
        tagline:
          "Aligning Stakeholders is the central metric in successful developments.",
        backgroundImage:
          "https://framerusercontent.com/images/xilkcHK1bclo8a6p97cAqJFzwD8.jpeg",
        pdfUrl: "http://Do-Great.Work/PRESENTATIONS/THINK/Align.pdf",
        videoUrl: "http://Do-Great.Work/PRESENTATIONS/THINK/Align.mp4",
      },
      {
        title: "The Role of The EDO",
        tagline:
          "Looking for Execution Excellence? The EDO leads the way.",
        backgroundImage:
          "https://framerusercontent.com/images/Xdafu8WKasAiLUkF6rZCtBW67g.jpeg",
        pdfUrl: "http://do-great.work/PRESENTATIONS/D360/EDO.pdf",
        videoUrl: "http://do-great.work/PRESENTATIONS/D360/EDO.mp4",
      },
      {
        title: "A Vision For A New City (Telosa)",
        tagline:
          "Telosa seeks to redefine city living. A strategic vision of the future.",
        backgroundImage:
          "https://framerusercontent.com/images/hjKOTk9uSTWB8AhQdXlXrSq1zj4.jpeg",
        pdfUrl: "http://Do-Great.Work/PRESENTATIONS/THINK/Transform.pdf",
        videoUrl: "http://Do-Great.Work/PRESENTATIONS/THINK/Transform.mp4",
      },
      {
        title: "Mind Robotics (Rivian)",
        tagline:
          "Rivian expands its reach with a new manufacturing robotics campus.",
        backgroundImage:
          "https://framerusercontent.com/images/guSyXcb0xiQKlu5UQW4TDpKlwg.jpeg",
        pdfUrl: "http://Do-Great.Work/PRESENTATIONS/THINK/Mind.pdf",
      },
      {
        title: "The Future of Hospitality",
        tagline:
          "Disruption and Opportunity. Adapt. Or be left behind.",
        backgroundImage:
          "https://framerusercontent.com/images/p2nUEESIxWqJCgktt35OEmkLHro.jpeg",
        pdfUrl: "http://Do-Great.Work/PRESENTATIONS/THINK/The Future.pdf",
        videoUrl: "http://Not-4.sale/VMX.mp4",
      },
      {
        title: "Development & Integration",
        tagline:
          "Synthesis replaces Specialization as Developers navigate the changing landscape.",
        backgroundImage:
          "https://framerusercontent.com/images/m2SjhDn88S9ey03RWLHsJho2Pgc.jpg",
        pdfUrl: "http://Do-Great.Work/PRESENTATIONS/THINK/Integrate.pdf",
        videoUrl: "http://Do-Great.Work/PRESENTATIONS/THINK/Integrate.mp4",
      },
    ],
    footerText:
      "Thought Leadership drives innovation and profitability as MLX Consulting continually strives to consistently surpass developer\u2019s and investor\u2019s expectations while staying true to our core mission to add measurable value to every project with integrity, determination and a collaborative spirit that is engaging and supportive.",
    footerImage:
      "https://framerusercontent.com/images/qUrJY2ybbyw2f1tXL6mAlKm0k58.png",
  },

  /* ══════════════════════════════════════════
     8. CREATIVE AND BRANDING
     ══════════════════════════════════════════ */
  {
    slug: "creative-branding",
    title: "Creative and Branding",
    tagline: "Crafting distinctive identities for exceptional projects.",
    heroImage:
      "https://framerusercontent.com/images/ZvX0Mr8Wxmt5tcG0wHJ3zf9lxM.jpg",
    description:
      "Our creative and branding services focus on developing distinctive identities and narratives for projects, ensuring that each development resonates with its target audience. This includes brand strategy, visual identity design, marketing collateral, and digital presence, aimed at creating a cohesive and compelling brand experience.",
    extendedDescription:
      "In a competitive market, the projects that stand out are the ones with a clear, compelling identity. Our creative and branding team works alongside development, design, and sales teams to craft brand strategies that resonate with target audiences and differentiate your project in the marketplace.",
    subServices: [
      {
        title: "Brand Strategy Development",
        description:
          "Crafting comprehensive strategies that define the brand\u2019s vision, mission, values, and unique selling propositions.",
      },
      {
        title: "Visual Identity Design",
        description:
          "Creating logos, color schemes, typography, and other visual elements that establish a cohesive brand image.",
      },
      {
        title: "Marketing Collateral Creation",
        description:
          "Designing brochures, business cards, flyers, and other materials that effectively communicate the brand message.",
      },
      {
        title: "Website Design and Development",
        description:
          "Building user-friendly and visually appealing websites that reflect brand identity and engage visitors.",
      },
      {
        title: "Social Media Branding",
        description:
          "Developing tailored branding strategies for social media platforms, including profile design and engagement strategies.",
      },
      {
        title: "Content Creation",
        description:
          "Producing high-quality written, visual, and multimedia content that aligns with the brand\u2019s voice.",
      },
      {
        title: "Public Relations and Media Outreach",
        description:
          "Managing brand reputation through strategic communications, press releases, and media relationships.",
      },
      {
        title: "Photography and Videography",
        description:
          "Professional photography and videography to create compelling visual narratives that showcase the brand.",
      },
      {
        title: "Brand Guidelines Development",
        description:
          "Establishing detailed brand guidelines for consistent presentation across platforms and mediums.",
      },
      {
        title: "Event Branding and Promotion",
        description:
          "Designing branding strategies for events including signage, promotional materials, and overall aesthetics.",
      },
    ],
    benefitsText:
      "Utilizing our Creative and Branding services provides numerous benefits that can greatly enhance your brand\u2019s market presence. First and foremost, we help establish a strong brand identity that stands out, leading to increased recognition and recall among your target audience.\n\nOur services ensure consistent messaging across all platforms, building trust and credibility with stakeholders. By creating engaging content and visual elements, we encourage interaction and foster customer loyalty. Additionally, our high-quality branding materials project professionalism, elevating the brand.\n\nWe focus on targeted marketing strategies that address specific audience needs, enhancing your brand\u2019s position in a competitive landscape. Our compelling narratives and visuals evoke emotions, helping to build deeper connections with consumers and increasing brand loyalty.\n\nOur adaptable branding solutions evolve with market trends, ensuring relevance over time. We provide ongoing support to refine strategies and navigate market shifts while delivering measurable results that allow you to assess the impact of your branding efforts on growth and engagement.",
    faqs: [
      {
        question:
          "What types of branding and creative services do you offer?",
        answer:
          "We offer a comprehensive range of branding services, including brand strategy development, visual identity design, marketing collateral creation, website design, social media branding, content creation, public relations, photography, and event branding. Our goal is to provide tailored solutions that elevate your brand.",
      },
      {
        question:
          "How do you ensure brand consistency across different platforms?",
        answer:
          "We create detailed brand guidelines that outline how your brand should be represented across various platforms and materials. This includes specifications for logo usage, color palettes, typography, and messaging. By adhering to these guidelines, we ensure that your brand maintains a cohesive presence.",
      },
      {
        question:
          "How can your branding services help increase customer engagement?",
        answer:
          "Our branding services focus on developing compelling content and visuals that resonate with your target audience. By crafting emotionally engaging narratives and utilizing attractive designs, we encourage interaction and foster loyalty, ultimately leading to increased customer engagement.",
      },
      {
        question:
          "What is the typical timeline for a branding project?",
        answer:
          "The timeline for a branding project can vary depending on the scope and complexity of the services required. Generally, a comprehensive branding project may take anywhere from a few weeks to several months. We work closely with clients to establish a timeline that meets their needs.",
      },
      {
        question:
          "How do you measure the success of branding efforts?",
        answer:
          "We implement tracking and analytics tools to measure the effectiveness of our branding initiatives. Key performance indicators such as brand awareness, audience engagement, website traffic, and conversion rates are assessed. This data allows us to evaluate the impact of our branding efforts.",
      },
    ],
  },
];

/* ─── Static Params ─── */
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

/* ─── Metadata ─── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found | MLX Consulting" };

  return {
    title: `${service.title} | MLX Consulting`,
    description: service.description,
    openGraph: {
      title: `${service.title} | MLX Consulting`,
      description: service.description,
      type: "website",
    },
  };
}

/* ─── Page ─── */
export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const currentIndex = services.findIndex((s) => s.slug === slug);
  const nextService = services[(currentIndex + 1) % services.length];
  const prevService =
    services[(currentIndex - 1 + services.length) % services.length];

  return (
    <ServiceDetailClient
      service={service}
      nextService={{ title: nextService.title, slug: nextService.slug }}
      prevService={{ title: prevService.title, slug: prevService.slug }}
    />
  );
}
