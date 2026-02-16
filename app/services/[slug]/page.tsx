import { notFound } from "next/navigation";
import { Metadata } from "next";
import ServiceDetailClient from "./ServiceDetailClient";

/* ─── Service Data ─── */
export interface SubService {
  title: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  extendedDescription: string;
  heroImage: string;
  subServices: SubService[];
}

const services: ServiceData[] = [
  {
    slug: "d-velop360",
    title: "D-VELOP360",
    tagline: "End-to-end development oversight from vision to delivery.",
    heroImage: "/images/pier66-hero.jpg",
    description:
      "A comprehensive, end-to-end development oversight model that covers every phase of real estate development, from vision to delivery. D-VELOP360 ensures alignment across all disciplines, stakeholders, and timelines to maximize value and minimize risk.",
    extendedDescription:
      "D-VELOP360 is our flagship service model — a fully integrated approach to development management that places an Executive Development Officer (EDO) at the center of your project. The EDO acts as the single point of accountability, orchestrating every discipline from design and construction to branding and sales. Whether you\u2019re building a branded residence, a mixed-use destination, or a hospitality-driven development, D-VELOP360 provides the strategic framework to deliver on time, on budget, and beyond expectations.",
    subServices: [
      {
        title: "The Role of THE EDO",
        description:
          "An Executive Development Officer serves as the single point of accountability across all project disciplines, coordinating design, construction, branding, and operations to ensure seamless execution.",
      },
      {
        title: "Branded Residential",
        description:
          "Strategic advisory for branded residential developments, leveraging hotel brand partnerships to enhance value, marketability, and the resident experience.",
      },
      {
        title: "Condominium Developments",
        description:
          "Full-cycle condominium development oversight from feasibility and design through sales strategy, construction management, and unit delivery.",
      },
      {
        title: "Hospitality Mixed-Use",
        description:
          "Integrated planning for mixed-use developments that combine hotels, residences, retail, and dining into cohesive, market-leading destinations.",
      },
    ],
  },
  {
    slug: "consulting-services",
    title: "Consulting Services",
    tagline: "Expert guidance at every step of your project.",
    heroImage: "/images/consultation.jpg",
    description:
      "Expert guidance at every step. Whether you need a second opinion on building codes, a fresh eye on design concepts, or a detailed cost analysis, our consulting team brings decades of experience to the table.",
    extendedDescription:
      "Our consulting services are designed for developers, investors, and owners who need specialized expertise without the commitment of a full development management engagement. From early-stage feasibility analysis to mid-project design reviews, we provide the insight and oversight you need to make informed decisions and keep your project on track.",
    subServices: [
      {
        title: "Code Consultation",
        description:
          "Expert review of building codes, zoning regulations, and compliance requirements to identify potential challenges early and ensure a smooth approval process.",
      },
      {
        title: "Design & Concept Review",
        description:
          "Independent assessment of architectural and interior design concepts, providing constructive feedback to optimize functionality, aesthetics, and market positioning.",
      },
      {
        title: "Technical Advisory Services",
        description:
          "Specialized technical guidance on structural systems, MEP engineering, building envelope performance, and emerging construction technologies.",
      },
      {
        title: "Cost Estimation & Budgeting",
        description:
          "Detailed cost analysis and budget development at every project phase, from conceptual estimates through construction-level budgets and value engineering.",
      },
      {
        title: "Project Feasibility Consulting",
        description:
          "Comprehensive feasibility studies evaluating market demand, financial viability, site constraints, and development potential to inform go/no-go decisions.",
      },
    ],
  },
  {
    slug: "master-planning-design",
    title: "Master Planning & Design",
    tagline: "Creating cohesive visions that shape remarkable environments.",
    heroImage: "/images/concept-development.png",
    description:
      "From the big picture to the fine details, our master planning and design team creates cohesive visions that balance aesthetics, functionality, and sustainability to shape remarkable environments.",
    extendedDescription:
      "Great places don\u2019t happen by accident. Our master planning and design services bring together urban design, landscape architecture, interior planning, and sustainable strategies into a unified vision. We work at every scale \u2014 from entire districts and resort communities to individual buildings and public spaces \u2014 ensuring that each element contributes to a place that is vibrant, functional, and enduring.",
    subServices: [
      {
        title: "Conceptual Visualization Services",
        description:
          "High-impact visual storytelling through renderings, animations, and immersive presentations that bring your project vision to life for stakeholders and investors.",
      },
      {
        title: "Zoning and Land Use Analysis",
        description:
          "In-depth analysis of zoning codes, land use regulations, and entitlement pathways to maximize development potential and streamline the approval process.",
      },
      {
        title: "Sustainable Design Consulting",
        description:
          "Integrating sustainable principles \u2014 from LEED and WELL certification strategies to passive design and renewable energy systems \u2014 into every aspect of the project.",
      },
      {
        title: "Public Space Design",
        description:
          "Designing plazas, promenades, parks, and gathering spaces that create a sense of place and foster community engagement.",
      },
      {
        title: "Adaptive Reuse Strategies",
        description:
          "Reimagining existing structures for new purposes, preserving architectural heritage while creating modern, functional spaces that meet today\u2019s market demands.",
      },
      {
        title: "Landscape and Hardscape Design",
        description:
          "Comprehensive landscape architecture that integrates planting, water features, lighting, and hardscape elements into a cohesive outdoor environment.",
      },
      {
        title: "Interior Space Planning",
        description:
          "Strategic interior layouts that optimize flow, functionality, and user experience across residential, hospitality, and commercial spaces.",
      },
    ],
  },
  {
    slug: "development-management",
    title: "Development Management",
    tagline: "Strategic oversight from concept to completion.",
    heroImage: "/images/property.png",
    description:
      "We guide your project from concept to completion with strategic oversight, ensuring every decision aligns with your financial goals, timeline, and quality standards.",
    extendedDescription:
      "Development management is the backbone of any successful real estate project. Our team provides the strategic leadership and day-to-day oversight needed to navigate the complexities of development \u2014 from pre-development feasibility and site selection through financial structuring, design management, construction oversight, and post-completion analysis. We act as an extension of your team, protecting your investment at every stage.",
    subServices: [
      {
        title: "Pre-Development Feasibility",
        description:
          "Comprehensive analysis of market conditions, site potential, regulatory environment, and financial projections to validate your development concept before committing capital.",
      },
      {
        title: "Site Due Diligence",
        description:
          "Thorough investigation of site conditions including environmental assessments, geotechnical studies, utility infrastructure, and access considerations.",
      },
      {
        title: "Financial Structuring Strategies",
        description:
          "Advisory on capital structure, financing options, joint venture arrangements, and financial modeling to optimize returns and manage risk.",
      },
      {
        title: "Community Impact Studies",
        description:
          "Assessment of how your development will interact with the surrounding community, including traffic, environmental, economic, and social impact analyses.",
      },
      {
        title: "Development Timeline Optimization",
        description:
          "Strategic scheduling that identifies critical path activities, overlapping work streams, and acceleration opportunities to compress timelines without sacrificing quality.",
      },
      {
        title: "Value Engineering",
        description:
          "Systematic analysis of design and construction elements to reduce costs while maintaining or improving quality, performance, and aesthetic standards.",
      },
      {
        title: "Post-Completion Analysis",
        description:
          "Comprehensive review of project outcomes versus initial projections, documenting lessons learned and providing insights for future developments.",
      },
    ],
  },
  {
    slug: "project-management",
    title: "Project & Construction Management",
    tagline: "Hands-on management that keeps your project on track.",
    heroImage: "/images/designing.png",
    description:
      "Hands-on management that keeps your project on track, on budget, and built to the highest standards. From scheduling to commissioning, we oversee every detail so you don\u2019t have to.",
    extendedDescription:
      "When it\u2019s time to build, you need a team that can translate great design into flawless execution. Our project and construction management services provide the hands-on leadership, technical expertise, and rigorous oversight needed to deliver complex projects safely, efficiently, and to the highest standards of quality. We manage the process so you can focus on the big picture.",
    subServices: [
      {
        title: "Construction Scheduling & Phasing",
        description:
          "Detailed construction schedules with clear milestones, phasing strategies, and critical path analysis to keep the project moving forward efficiently.",
      },
      {
        title: "Procurement Management",
        description:
          "End-to-end procurement oversight including bid management, vendor qualification, contract negotiation, and supply chain coordination.",
      },
      {
        title: "Quality Assurance Programs",
        description:
          "Rigorous quality control frameworks with regular inspections, testing protocols, and documentation to ensure every element meets specification.",
      },
      {
        title: "Safety Training and Implementation",
        description:
          "Comprehensive safety programs including site-specific safety plans, regular training sessions, and compliance monitoring to protect workers and the public.",
      },
      {
        title: "Site Condition Monitoring",
        description:
          "Ongoing monitoring of site conditions, progress tracking, and issue identification to address challenges proactively before they impact the schedule or budget.",
      },
      {
        title: "Final Walkthrough and Commissioning",
        description:
          "Systematic commissioning and punch-list management to ensure every system is tested, every detail is right, and the project is ready for occupancy.",
      },
      {
        title: "Change Order Management",
        description:
          "Structured process for evaluating, negotiating, and processing change orders to protect the owner\u2019s interests while maintaining project momentum.",
      },
    ],
  },
  {
    slug: "not4sale",
    title: "Not4Sale Residential Advisory",
    tagline: "Bespoke advisory for discerning homeowners and investors.",
    heroImage: "/images/gallery-1.jpg",
    description:
      "A bespoke advisory service for discerning homeowners and investors seeking to acquire, renovate, or build luxury residences. We bring the same institutional-quality oversight to your private home as we do to large-scale developments.",
    extendedDescription:
      "Your home is your most personal investment. Not4Sale brings the discipline, expertise, and oversight of institutional-grade development management to the private residential sphere. Whether you\u2019re acquiring a new property, planning a major renovation, or building from the ground up, our team guides you through every decision \u2014 protecting your time, your budget, and your vision.",
    subServices: [
      {
        title: "Luxury Home Acquisition Strategy",
        description:
          "Strategic guidance on identifying, evaluating, and acquiring premium residential properties, including market analysis, property assessment, and negotiation support.",
      },
      {
        title: "Property Assessment & Valuation",
        description:
          "Independent evaluation of property condition, systems, and potential, providing a clear picture of what you\u2019re buying and what it will take to realize your vision.",
      },
      {
        title: "Design Visioning & Renovation Planning",
        description:
          "Collaborative design process to define the aesthetic, functional, and lifestyle goals for your home, translating them into a clear scope and actionable plan.",
      },
      {
        title: "Vendor & Contractor Coordination",
        description:
          "Identifying, qualifying, and managing the right architects, designers, contractors, and specialty vendors to bring your vision to life.",
      },
      {
        title: "Project Oversight for Private Residences",
        description:
          "Hands-on project management throughout construction and renovation, ensuring quality, timeline, and budget are maintained to the highest standards.",
      },
    ],
  },
  {
    slug: "thought-leadership",
    title: "Thought Leadership",
    tagline: "Sharing knowledge and shaping the future of the industry.",
    heroImage: "/images/model-buildings.png",
    description:
      "Sharing our knowledge and insights with the broader industry through speaking engagements, publications, and educational initiatives. We contribute to shaping the future of real estate development and design.",
    extendedDescription:
      "At MLX, we believe that advancing the industry advances everyone. Our thought leadership initiatives share the knowledge we\u2019ve accumulated over 25+ years of global development experience. Through keynote presentations, published research, market analysis, and educational programs, we contribute to meaningful conversations about the future of real estate, hospitality, and design.",
    subServices: [
      {
        title: "Industry Speaking Engagements",
        description:
          "Keynote presentations and panel discussions at leading industry conferences, sharing insights on development trends, innovation, and best practices.",
      },
      {
        title: "Published Research & White Papers",
        description:
          "Original research and thought pieces on market dynamics, development strategies, and emerging trends in real estate, hospitality, and design.",
      },
      {
        title: "Market Trend Analysis",
        description:
          "Data-driven analysis of market trends, investment patterns, and consumer preferences to inform strategic decision-making.",
      },
      {
        title: "Educational Workshops & Seminars",
        description:
          "Interactive learning sessions designed for industry professionals, investors, and emerging developers seeking to deepen their expertise.",
      },
      {
        title: "Strategic Industry Partnerships",
        description:
          "Collaborative relationships with industry organizations, academic institutions, and research groups to advance knowledge and innovation.",
      },
    ],
  },
  {
    slug: "creative-branding",
    title: "Creative and Branding",
    tagline: "Crafting distinctive identities for exceptional projects.",
    heroImage: "/images/gallery-2.jpg",
    description:
      "Every great project deserves a compelling story. Our creative and branding team crafts distinctive identities that capture the essence of your development and resonate with your target audience.",
    extendedDescription:
      "In a competitive market, the projects that stand out are the ones with a clear, compelling identity. Our creative and branding team works alongside development, design, and sales teams to craft brand strategies that resonate with target audiences and differentiate your project in the marketplace. From visual identity and marketing collateral to digital presence and storytelling, we ensure your project makes an unforgettable impression.",
    subServices: [
      {
        title: "Brand Strategy & Positioning",
        description:
          "Defining the unique value proposition, target audience, and competitive positioning for your development to guide all marketing and communication efforts.",
      },
      {
        title: "Visual Identity Development",
        description:
          "Creating logos, color palettes, typography systems, and design guidelines that establish a distinctive and cohesive visual presence.",
      },
      {
        title: "Marketing Collateral Design",
        description:
          "Designing brochures, presentations, sales materials, and signage that communicate your project\u2019s story with clarity and sophistication.",
      },
      {
        title: "Digital Presence & Web Design",
        description:
          "Building compelling websites and digital experiences that showcase your project to prospective buyers, investors, and partners.",
      },
      {
        title: "Storytelling & Content Creation",
        description:
          "Developing narrative content \u2014 from copywriting and photography to video production \u2014 that brings your project\u2019s story to life across all channels.",
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
