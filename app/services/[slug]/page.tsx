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
  },

  /* ══════════════════════════════════════════
     4. DEVELOPMENT MANAGEMENT
     ══════════════════════════════════════════ */
  {
    slug: "development-management",
    title: "Development Management",
    tagline: "Strategic oversight from concept to completion.",
    heroImage: "/images/property.png",
    description:
      "We guide your project from concept to completion with strategic oversight, ensuring every decision aligns with your financial goals, timeline, and quality standards.",
    extendedDescription:
      "Development management is the backbone of any successful real estate project. Our team provides the strategic leadership and day-to-day oversight needed to navigate the complexities of development \u2014 from pre-development feasibility and site selection through financial structuring, design management, construction oversight, and post-completion analysis.",
    subServices: [
      {
        title: "Pre-Development Feasibility",
        description:
          "Comprehensive analysis of market conditions, site potential, regulatory environment, and financial projections to validate your development concept.",
      },
      {
        title: "Site Due Diligence",
        description:
          "Thorough investigation of site conditions including environmental assessments, geotechnical studies, utility infrastructure, and access.",
      },
      {
        title: "Financial Structuring Strategies",
        description:
          "Advisory on capital structure, financing options, joint venture arrangements, and financial modeling to optimize returns.",
      },
      {
        title: "Community Impact Studies",
        description:
          "Assessment of how your development will interact with the surrounding community, including traffic, environmental, and social impact analyses.",
      },
      {
        title: "Development Timeline Optimization",
        description:
          "Strategic scheduling that identifies critical path activities and acceleration opportunities to compress timelines without sacrificing quality.",
      },
      {
        title: "Value Engineering",
        description:
          "Systematic analysis of design and construction elements to reduce costs while maintaining quality, performance, and aesthetics.",
      },
      {
        title: "Post-Completion Analysis",
        description:
          "Comprehensive review of project outcomes versus initial projections, documenting lessons learned for future developments.",
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
