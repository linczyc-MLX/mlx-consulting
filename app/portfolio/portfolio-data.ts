/* ─── Portfolio Data ─── */

const IMG = "https://framerusercontent.com/images";

export type PortfolioProject = {
  title: string;
  url: string;
  type: "flipbook" | "video";
  image?: string;
};

export type PortfolioCategory = {
  slug: string;
  label: string;
  description: string;
  previewImages: string[];
  projects: PortfolioProject[];
};

export const categories: PortfolioCategory[] = [
  /* ══════════════════════════════════════════
     HOTELS — 14 flipbooks
     ══════════════════════════════════════════ */
  {
    slug: "hotels",
    label: "Hotels",
    description:
      "Hotel development is a unique endeavor that combines elements of architecture, finance, marketing, and hospitality management. Unlike other real estate projects, hotels are intricate ecosystems that must cater to guest experiences while also being financially viable. This requires a deep understanding of market trends, consumer preferences, and operational efficiencies.",
    previewImages: [
      `${IMG}/BZmoEnQnsWedbSvZzjh67pABkpY.png`,
      `${IMG}/vXdgyyeG5a8WQ27kX4wtCx1DJ9E.png`,
      `${IMG}/NQ4nWQWtoTxwD8opYJKoaedj6DE.png`,
      `${IMG}/6Ke9MyMJeDJevwPAUGhqbb3VJYo.png`,
    ],
    projects: [
      { title: "W Hotel Times Square", url: "http://www.do-great.work/Flipbooks/STARWOOD/mobile/index.html", type: "flipbook", image: `${IMG}/BZmoEnQnsWedbSvZzjh67pABkpY.png` },
      { title: "Morgans Hotel Group Vol 3", url: "http://www.do-great.work/Flipbooks/MORGANS/MHGC3/mobile/index.html", type: "flipbook", image: `${IMG}/dZIJ0m6xbaEdx6DVYh48cBVRhK4.png` },
      { title: "James Hotels Vol 2", url: "http://www.do-great.work/Flipbooks/JAMES/V2/mobile/index.html", type: "flipbook", image: `${IMG}/NQ4nWQWtoTxwD8opYJKoaedj6DE.png` },
      { title: "Morgans Vol 2", url: "http://www.do-great.work/Flipbooks/MORGANS/MHGC2/mobile/index.html", type: "flipbook", image: `${IMG}/6Ke9MyMJeDJevwPAUGhqbb3VJYo.png` },
      { title: "Morgans Portfolio 1", url: "http://www.do-great.work/Flipbooks/MORGANS/MHGC1/mobile/index.html", type: "flipbook", image: `${IMG}/bpZgTi6yK4W7xCqSQMuboKudo.png` },
      { title: "James Hotels Vol 1", url: "http://www.do-great.work/Flipbooks/JAMES/V1/mobile/index.html", type: "flipbook", image: `${IMG}/vXdgyyeG5a8WQ27kX4wtCx1DJ9E.png` },
      { title: "One UN Plaza", url: "http://www.do-great.work/Flipbooks/Hardy/1UN/MHR%201UN%20Plaza.html", type: "flipbook", image: `${IMG}/JQZuW8e1FUkrw5AYRry1eqP3kvo.png` },
      { title: "New York Palace Portfolio 1", url: "http://www.do-great.work/Flipbooks/NEWYORKPALACE/NYP1/mobile/index.html", type: "flipbook", image: `${IMG}/pFlisOwe0o6N8uTB7l4nzDaesE.png` },
      { title: "M SOCIAL TSQ New York", url: "http://www.do-great.work/Flipbooks/Hardy/MSOC/MSOCIAL%20TSQ.html", type: "flipbook", image: `${IMG}/66J9GzZJAjxcQHu10JCc3ODbA0.png` },
      { title: "Edition NYC MEP", url: "http://www.do-great.work/Flipbooks/Hardy/Edition/Edition%20NYC.html", type: "flipbook", image: `${IMG}/42UsiIiYiYmhekXv4YoNIi4HWo.png` },
      { title: "Jabal Omar Development", url: "http://www.do-great.work/Flipbooks/JODC/JODC.html", type: "flipbook", image: `${IMG}/s24gZt46bKGYPrqcC774A9tMc8.png` },
      { title: "Kushner Portfolio 2", url: "http://www.do-great.work/Flipbooks/KUSHNER/KC2/mobile/index.html", type: "flipbook", image: `${IMG}/NuVDOO4ETXOKO14L791wo6BE7s.png` },
      { title: "New York Palace Portfolio 2", url: "http://www.do-great.work/Flipbooks/NEWYORKPALACE/NYP2/mobile/index.html", type: "flipbook", image: `${IMG}/UyquwTsXfv2tP8XU8HN4qAWwCT8.png` },
      { title: "Fairfield", url: "http://www.do-great.work/Flipbooks/FAIRFIELD/Fairfield.html", type: "flipbook", image: `${IMG}/ZcqQ1gxJ8j8YGaAzXwovBDxwrY.png` },
    ],
  },

  /* ══════════════════════════════════════════
     RESTAURANTS AND BARS — 8 flipbooks
     ══════════════════════════════════════════ */
  {
    slug: "restaurants-bars",
    label: "Restaurants and Bars",
    description:
      "Restaurants and bars are vibrant spaces where culinary artistry meets the joy of communal dining. They serve as cultural hubs that bring people together, offering an array of flavors and experiences that reflect the diversity of our world. Each venue tells a unique story through its menu, ambiance, and service, creating an atmosphere that invites guests to savor but also create memories.",
    previewImages: [
      `${IMG}/FMO6oSRkYQpS1WyW3dtlTxe1RkA.png`,
      `${IMG}/My0fNFvfjOCeZUgavTD0e4C33dk.png`,
      `${IMG}/YLyVwLL9jk3vK5Jec6NU5Re0hoA.png`,
      `${IMG}/UFpJsGv1rzUftM4ml5KR5PDONw.png`,
    ],
    projects: [
      { title: "New York Palace Portfolio 3", url: "http://www.do-great.work/Flipbooks/NEWYORKPALACE/NYP3/mobile/index.html", type: "flipbook", image: `${IMG}/FMO6oSRkYQpS1WyW3dtlTxe1RkA.png` },
      { title: "Presidential Club Beijing", url: "http://www.do-great.work/Flipbooks/PClub%20Beijing/PC%20Beijing.html", type: "flipbook", image: `${IMG}/37ML52QYnQCFbPAYTXcD8zPGGgo.png` },
      { title: "Mondrian South Beach", url: "http://www.do-great.work/Flipbooks/Mondrian%20South%20Beach/Mondrian%20South%20Beach.html", type: "flipbook", image: `${IMG}/YLyVwLL9jk3vK5Jec6NU5Re0hoA.png` },
      { title: "BR Guest Restaurants", url: "http://www.do-great.work/Flipbooks/BR%20Guest/BR%20Guest.html", type: "flipbook", image: `${IMG}/UFpJsGv1rzUftM4ml5KR5PDONw.png` },
      { title: "Steak n Shake", url: "http://www.do-great.work/Flipbooks/BIGLARI/Steak%20n%20Shake.html", type: "flipbook", image: `${IMG}/rMyd6bkEMJ7uGGX2KKvXkekd5E.png` },
      { title: "Asia de Cuba AZ", url: "http://www.do-great.work/Flipbooks/Asia/Asia.html", type: "flipbook", image: `${IMG}/My0fNFvfjOCeZUgavTD0e4C33dk.png` },
      { title: "Striphouse NJ", url: "http://www.do-great.work/Flipbooks/Striphouse%20NJ/Striphouse%20NJ.html", type: "flipbook", image: `${IMG}/tVCpKzmSgKw1aOYuPhxqw15cnY.png` },
      { title: "F&B Trends and Disruptions", url: "http://www.do-great.work/Flipbooks/ROBOTS/Robots.html", type: "flipbook", image: `${IMG}/fjAEKCB4QMJvdDSF2POzCxJgX4.png` },
    ],
  },

  /* ══════════════════════════════════════════
     RESIDENTIAL — 5 flipbooks
     ══════════════════════════════════════════ */
  {
    slug: "residential",
    label: "Residential",
    description:
      "The development of luxury private residences represents the pinnacle of architectural and design excellence, it's about creating sanctuaries that embody lifestyle aspirations and elevate everyday living. The expertise required to bring such visions to life -- balancing functionality, design, and luxury -- makes this sector a truly unique and rewarding field within real estate development.",
    previewImages: [
      `${IMG}/4qgI4qS4srJCKkTpRVfUIXCmWGU.png`,
      `${IMG}/MIZ5d6AG4TZYSd6jI7wranqKyc.png`,
      `${IMG}/TDCVnuVtuNvo19hTUMPrUHPTzrM.png`,
      `${IMG}/ZrsXQfAMoVge3wFeighNj8FKTI.png`,
    ],
    projects: [
      { title: "Beijing Residence", url: "http://www.do-great.work/Flipbooks/BEIJING%20RESIDENCE/mobile/index.html", type: "flipbook", image: `${IMG}/4qgI4qS4srJCKkTpRVfUIXCmWGU.png` },
      { title: "Yanqi Lake", url: "http://www.do-great.work/Flipbooks/YANQI/mobile/index.html", type: "flipbook", image: `${IMG}/TDCVnuVtuNvo19hTUMPrUHPTzrM.png` },
      { title: "Presidential Palace", url: "http://www.do-great.work/Flipbooks/PPP%20DM/mobile/index.html", type: "flipbook", image: `${IMG}/ZrsXQfAMoVge3wFeighNj8FKTI.png` },
      { title: "Project K - India", url: "http://www.do-great.work/Flipbooks/PROJECT%20K/mobile/index.html", type: "flipbook", image: `${IMG}/pU76PfT6u8KhSooKouVVCMF0OhU.png` },
      { title: "Private Residence Abu Dhabi", url: "http://www.do-great.work/Flipbooks/BOV/mobile/index.html", type: "flipbook", image: `${IMG}/MIZ5d6AG4TZYSd6jI7wranqKyc.png` },
    ],
  },

  /* ══════════════════════════════════════════
     MIXED-USE — 6 flipbooks
     ══════════════════════════════════════════ */
  {
    slug: "mixed-use",
    label: "Mixed-Use",
    description:
      "In mixed-use developments, master planning ensures seamless integration of spaces, while design knowledge enhances functionality and aesthetics. Financial acumen is vital for securing investments, and a focus on sustainability promotes eco-friendly practices. Engagement and a compelling brand story set the project apart. Together, these elements drive community enrichment and economic growth.",
    previewImages: [
      `${IMG}/7mCYQhe598QGk6lVKzMdICp8u8.png`,
      `${IMG}/6JvfXGBg51dV7lHu1F9UauQs3o.png`,
      `${IMG}/zdYSDfOsPOAgATh6QFp4pktHQ.png`,
      `${IMG}/VBz70dCryDXisgYDYOAK9XXM.png`,
    ],
    projects: [
      { title: "Pier Sixty-Six FULL Presentation", url: "http://do-great.work/Flipbooks/TAVISTOCK/P66%20Public/FULL/mobile/index.html", type: "flipbook", image: `${IMG}/7mCYQhe598QGk6lVKzMdICp8u8.png` },
      { title: "Half Moon Bay", url: "http://www.do-great.work/Flipbooks/HMB/HMB.html", type: "flipbook", image: `${IMG}/12kNFnQ9Q92Kmg1VW36unQ8bPE.png` },
      { title: "Montpelier Estate Feasibility Study", url: "http://www.do-great.work/Flipbooks/PICO/MONTPELIER/mobile/index.html", type: "flipbook", image: `${IMG}/zdYSDfOsPOAgATh6QFp4pktHQ.png` },
      { title: "Montpelier Estate Feasibility Report", url: "http://www.do-great.work/Flipbooks/PICO/MONTPELIER/REPORT/mobile/index.html", type: "flipbook", image: `${IMG}/VBz70dCryDXisgYDYOAK9XXM.png` },
      { title: "Space Planning PPP", url: "http://www.do-great.work/Flipbooks/OFFICES/mobile/index.html", type: "flipbook", image: `${IMG}/ExOtT3Lu3YFOqdWwtDA2fYyg.png` },
      { title: "KEO International Portfolio", url: "http://www.do-great.work/Flipbooks/KEO/mobile/index.html", type: "flipbook", image: `${IMG}/6JvfXGBg51dV7lHu1F9UauQs3o.png` },
    ],
  },

  /* ══════════════════════════════════════════
     DESTINATION STRATEGIES — 12 flipbooks + 2 videos
     ══════════════════════════════════════════ */
  {
    slug: "destination-strategies",
    label: "Destination Strategies",
    description:
      "Developers face several challenges when creating a destination branding and development brief. One major hurdle is understanding the unique identity and needs of the target market, which requires extensive research and community engagement. Navigating these dynamics demands a strategic approach that aligns stakeholder interests and fosters collaboration to ensure a successful development.",
    previewImages: [
      `${IMG}/aJOH4kRm0Rcl68uZKPY9PlXymW0.png`,
      `${IMG}/AFkJdXmNBcyoCQPbxoaT8w0tRo.png`,
      `${IMG}/LgbqjtO0NTitTTzvyMMiQ5Wvjw4.png`,
      `${IMG}/Raf7tjyf1LJIgQITZDZlSJ0oFw.png`,
    ],
    projects: [
      { title: "Antigua Sails Presentation", url: "http://www.do-great.work/Flipbooks/PICO/SAILS/mobile/index.html", type: "flipbook", image: `${IMG}/aJOH4kRm0Rcl68uZKPY9PlXymW0.png` },
      { title: "Sahara Brand Concept", url: "http://www.do-great.work/Flipbooks/SAHARA/mobile/index.html", type: "flipbook", image: `${IMG}/XnsVAFu5xKzcGX6ucQcJzRTxs.png` },
      { title: "Spring 365 Presentation", url: "http://www.do-great.work/Flipbooks/MLX/SPRING365/mobile/index.html", type: "flipbook", image: `${IMG}/LgbqjtO0NTitTTzvyMMiQ5Wvjw4.png` },
      { title: "Creative Minds Presentation", url: "http://www.do-great.work/Flipbooks/PICO/MGM/mobile/index.html", type: "flipbook", image: `${IMG}/Raf7tjyf1LJIgQITZDZlSJ0oFw.png` },
      { title: "BDNY 2012 High Tech High Touch", url: "http://www.do-great.work/Flipbooks/SPEAKING/mobile/index.html#p=1", type: "flipbook", image: `${IMG}/Igs2YoRYzNnKAPjcvm2RWFlwR74.png` },
      { title: "PRO Flag Presentation", url: "http://www.do-great.work/Flipbooks/PICO/FLAG/mobile/index.html", type: "flipbook", image: `${IMG}/AFkJdXmNBcyoCQPbxoaT8w0tRo.png` },
      { title: "ComiCon Pitch v1", url: "http://www.do-great.work/Flipbooks/MLX/COMICON/mobile/index.html", type: "flipbook", image: `${IMG}/Qj8r525PfcBnzVxDIKt8GcdfZY.png` },
      { title: "Qu Concept Presentation", url: "http://www.do-great.work/Flipbooks/PICO/QUCONCEPT/mobile/index.html", type: "flipbook", image: `${IMG}/QPYvKv9bn6vyqzqzCwvOEOoJeaY.png` },
      { title: "Food Theatre Presentation", url: "http://www.do-great.work/Flipbooks/PICO/FOOD/mobile/index.html", type: "flipbook", image: `${IMG}/hXDLPxGzOabpa6ci0O9Tw2uGv8M.png` },
      { title: "Coleburn Distillery Hotel", url: "http://www.do-great.work/Flipbooks/PICO/COLEBURN/mobile/index.html", type: "flipbook", image: `${IMG}/LgaZoZXkD8R1kUtlrcZIWnUDylE.png` },
      { title: "WET Design", url: "http://www.do-great.work/Flipbooks/WET/WET.html", type: "flipbook", image: `${IMG}/Hmk2F4sVqJhRjV9aCdOcvjyy4U.png` },
      { title: "Pico PRO", url: "http://www.do-great.work/Flipbooks/PICO/mobile/index.html", type: "flipbook", image: `${IMG}/Nv73Pf4CnrFf7OnzdZGN5gHkzs.png` },
      { title: "Napoleon is Dead", url: "http://www.do-great.work/VIDEOS/Napoleon%20is%20Dead%20(Part1)%20720p.mp4", type: "video", image: `${IMG}/QUgxZ3dktyTbGEgI35Qe6jpTNk.png` },
      { title: "You Talkin' to Me", url: "http://www.do-great.work/VIDEOS/You%20Talkin'%20to%20Me.mp4", type: "video", image: `${IMG}/5ah5t2fRw06od6iPG4dBJ7TUhG0.png` },
    ],
  },

  /* ══════════════════════════════════════════
     PROJECT & CONSTRUCTION MANAGEMENT — 9 flipbooks + 1 video (link-lock)
     ══════════════════════════════════════════ */
  {
    slug: "project-construction-management",
    label: "Project & Construction Management",
    description:
      "Managing project and construction management in real estate development presents a myriad of challenges that require adept navigation and demands effective communication and collaboration to ensure that everyone is aligned with project goals. Success hinges on the ability to anticipate issues, adapt strategies, and maintain a clear focus on delivering value to stakeholders.",
    previewImages: [
      `${IMG}/rMhiziRmiOcSgiNX3wSWtihBzE.png`,
      `${IMG}/HZquPR7t9Obv60o9fE4c3iDez4.png`,
      `${IMG}/KVsrJ11AUKytYMM497cXLgDqMDk.png`,
      `${IMG}/ctTlxSNisA6hCSiPLl6QaYkJNJg.png`,
    ],
    projects: [
      { title: "MHG Project Management Plan", url: "http://www.do-great.work/Flipbooks/MORGANS/MHGC4/mobile/index.html", type: "flipbook", image: `${IMG}/rMhiziRmiOcSgiNX3wSWtihBzE.png` },
      { title: "Hardy Development Management", url: "http://www.do-great.work/Flipbooks/HARDY/DM/HARDY%20DM.html", type: "flipbook", image: `${IMG}/eTT3ZATPmKZ4XPHkjpSkxbIoX0g.png` },
      { title: "Puck Hotel Underwriting", url: "http://www.do-great.work/Flipbooks/PUCK%202/Puck.html", type: "flipbook", image: `${IMG}/KVsrJ11AUKytYMM497cXLgDqMDk.png` },
      { title: "P-66 F&B Workshop", url: "http://www.do-great.work/Flipbooks/Tavistock/F&B/F&B%20Workshop.html", type: "flipbook", image: `${IMG}/ctTlxSNisA6hCSiPLl6QaYkJNJg.png` },
      { title: "b:spoke Presentation MLX", url: "http://www.do-great.work/Flipbooks/MLX/BSPOKE/mobile/index.html", type: "flipbook", image: `${IMG}/hkGSrerjzzs6eH5R5Cz3I83CQA.png` },
      { title: "My Work Presentation", url: "http://www.do-great.work/Flipbooks/MY%20WORK/MW%20Presentation%20.html", type: "flipbook", image: `${IMG}/HZquPR7t9Obv60o9fE4c3iDez4.png` },
      { title: "VICI Owners Rep Services", url: "http://www.do-great.work/Flipbooks/HARDY/Vici/vici.html", type: "flipbook", image: `${IMG}/6NPfgNaN8TGsfX4WbnUuzgbWDcs.png` },
      { title: "Hardy ARS", url: "http://www.do-great.work/Flipbooks/Hardy/ARS/Index.html", type: "flipbook", image: `${IMG}/pnZucMXOPyGyvMRFUOTI33yM0.png` },
      { title: "Inn-Box", url: "http://www.do-great.work/Flipbooks/INN-BOX/Inn-Box.html", type: "flipbook", image: `${IMG}/0sqmzcKXF3yRkkUwpYsy0sg3WUs.png` },
      { title: "MooMoo Video", url: "http://www.do-great.work/Flipbooks/MOOmoo/Moomoo.mp4", type: "video", image: `${IMG}/qLk1pSnZ3zGED3K4vO1Jke334VM.png` },
    ],
  },

  /* ══════════════════════════════════════════
     ARCHITECTURE & DESIGN MANAGEMENT — 9 flipbooks
     ══════════════════════════════════════════ */
  {
    slug: "architecture-design-management",
    label: "Architecture & Design Management",
    description:
      "Combining creativity, passion and practicality in the imagination, documentation and delivery of world-class architecture and interiors requires a diverse range of skills, capabilities and networks of professionals, artists, artisans and specialist consultants. Above all, it is the interaction of amazing talented and dedicated people that creates wonder at the intersection of art and commerce.",
    previewImages: [
      `${IMG}/kP6lDHoY2hh0tfGgG8MGVLRwczQ.png`,
      `${IMG}/uA6Hhti3ui2smnPkEyiSJpesrTY.png`,
      `${IMG}/RLjBTuqsZw20Bvr0VIt08pFeU.png`,
      `${IMG}/86APcVlkyMg6gC2OxeajciQNM.png`,
    ],
    projects: [
      { title: "Linczyc Oppenheim Portfolio", url: "http://www.do-great.work/Flipbooks/LINCZYC/mobile/index.html", type: "flipbook", image: `${IMG}/kP6lDHoY2hh0tfGgG8MGVLRwczQ.png` },
      { title: "AECOM Presentation April 2014", url: "http://www.do-great.work/Flipbooks/AECOM/mobile/index.html", type: "flipbook", image: `${IMG}/c7QhAPiPJQwIhFT2diYBp6oDuvw.png` },
      { title: "SOM Portfolio", url: "http://www.do-great.work/Flipbooks/SOM/mobile/index.html", type: "flipbook", image: `${IMG}/RLjBTuqsZw20Bvr0VIt08pFeU.png` },
      { title: "Wilson Associates Portfolio", url: "http://www.do-great.work/Flipbooks/WA1/mobile/index.html", type: "flipbook", image: `${IMG}/86APcVlkyMg6gC2OxeajciQNM.png` },
      { title: "Asahi Juken Portfolio", url: "http://www.do-great.work/Flipbooks/ASAHIJUKEN/mobile/index.html", type: "flipbook", image: `${IMG}/5qKxoP1HExK4ttvmq4zivdNkMw.png` },
      { title: "GMW Portfolio", url: "http://www.do-great.work/Flipbooks/GMW/mobile/index.html", type: "flipbook", image: `${IMG}/uA6Hhti3ui2smnPkEyiSJpesrTY.png` },
      { title: "MHG Design LV", url: "http://do-great.work/Flipbooks/MORGANS/MHGC3/DESIGN/mobile/index.html#p=1", type: "flipbook", image: `${IMG}/1XEk3gn2g6s67HIFLdaLrTkqJtM.png` },
      { title: "ML Portfolio 1 @ Rockwell Group", url: "http://www.do-great.work/Flipbooks/ROCKWELL/RG1/mobile/index.html#p=1", type: "flipbook", image: `${IMG}/PSZCTsHdlRE5rBJSjRBfw8c7Qe8.png` },
      { title: "ML Portfolio 2 @ Rockwell Group", url: "http://www.do-great.work/Flipbooks/ROCKWELL/RG2/mobile/index.html#p=1", type: "flipbook", image: `${IMG}/pzj7vzv6s8ktTqi8L4T3oYukCZg.png` },
    ],
  },

  /* ══════════════════════════════════════════
     TROJENA — 13 link-lock protected projects
     ══════════════════════════════════════════ */
  {
    slug: "trojena",
    label: "Trojena",
    description:
      "As Development Director responsible for developing 120 luxurious private residences ranging from 1,500 sqm mansions to 20,000 sqm palatial estates, I built a team of 20 diverse talented designers and project managers from scratch and created a detailed workflow that took our VVIP clients through the complex process of turning their sophisticated visions and lifestyle aspirations into reality.",
    previewImages: [
      `${IMG}/NRUZk2CGjrJbVUMSGX9JFbE.png`,
      `${IMG}/MJGWwoAKiCkOuPpEEuD6fapOFY.png`,
      `${IMG}/kABdaLgGgDbWtLHG5qPOLP9L8.png`,
      `${IMG}/fa4hVjcl1ll0ODx4br71zqhLcRw.png`,
    ],
    projects: [
      { title: "Trojena Residences 1", url: "https://jstrieb.github.io/link-lock/#eyJ2IjoiMC4wLjEiLCJlIjoiamJnaCtVcmFmTWdCVDAxcEtjVW9LT21OYmE4U0JKY0hlQk9uNHBHTWdrYmROL0JZVUJqeXozZXZadlA5YWU0NW42SkMrWXVYYlY1K25tdm5Ic0VOckN5YzRyVm9lcHJtTjdvb0hETnRod0tBeDNrYlJrUUMiLCJzIjoicVRUWTZYcEFpbjN1RHVvMlQ4dFVqZz09IiwiaSI6Imp3ZUluRHVMZGRRTHdQbmcifQ==", type: "flipbook", image: `${IMG}/29OrgVpiqPMmV5NwbyGnkP7XA.png` },
      { title: "Trojena Residences 2", url: "https://jstrieb.github.io/link-lock/#eyJ2IjoiMC4wLjEiLCJlIjoiR0NhNlc3cmtleVFqU0txUjVSTnl0NEk2WVZkK0NURFhqWmt3RVRlRHF0dVYrTW5wTlpGdzBvc1J1THhETktISitKUXZOQlZjODF5UVpkbC9GQTNjUVR3ajdMcWhzNUE9IiwicyI6Im9kb1duRkFNTjhGUENZWWFYR21lb3c9PSIsImkiOiJLVUVqSk1HeTA4QmkxaDdYIn0=", type: "flipbook", image: `${IMG}/kABdaLgGgDbWtLHG5qPOLP9L8.png` },
      { title: "Trojena Residences 3", url: "https://jstrieb.github.io/link-lock/#eyJ2IjoiMC4wLjEiLCJlIjoiWW40bGVsZDVIdUFsVFZrdkVMRFQ4MXNmcGFYOWtoZjllV21qQWdLMHVZOHVrdzVYSUVRczF3SnNqM25uY3B0aU15Z3RqdkdpNjN5NCtjS3p5MXhrVFFtbzN2SFA2bnEzUDRaU0paVT0iLCJzIjoiOUZXYlY1U1hGU2E0bWZDYVBXdVVEUT09IiwiaSI6ImsyWFBaUjFjY1JsZUhLb0oifQ==", type: "flipbook", image: `${IMG}/fa4hVjcl1ll0ODx4br71zqhLcRw.png` },
      { title: "Trojena Residences 4", url: "https://jstrieb.github.io/link-lock/#eyJ2IjoiMC4wLjEiLCJlIjoiQTI4VTd1SFMzcFRGSXU1WTRsNG1mdVZWN1cvemhUdGVDMlBoRGJGWnRKQ2U5YWxjT25Yc2RPNE5Zd3YzT05hMTJLSXR2OUhycEpEd1MydzhXWU1uRFpRclRLbTQxSTBwSCtHVlFpVT0iLCJzIjoidS84cHNyam82ZkwxTWF2amFxSHkvdz09IiwiaSI6ImZDb2RZKzBhZDdhS28vRDgifQ==", type: "flipbook", image: `${IMG}/aG8L8VzpN6VhdPzrbsQthaIZ1g.png` },
      { title: "Trojena Residences 5", url: "https://jstrieb.github.io/link-lock/#eyJ2IjoiMC4wLjEiLCJlIjoiakZlYjVPOWVpRE5xaFZLOUJaNzF1ZXpjNkFjVXZZV1F5Uks4d3hrZFpjRTlqRG82RkNERzlDZktoWjVMQk5ZTFY5d1Y5MFdueXJqRkVHNmpLNWZtN0ZqWk9PL0d2MW91dVZMT1BqbVJleDlwUVVLWXR2SUZ3WGM9IiwicyI6IlFsM1d0bllwUnJNQ3BzTnQ4cUswaVE9PSIsImkiOiJVeWNKYVZpbnp0WU4rc2pwIn0=", type: "flipbook", image: `${IMG}/MJGWwoAKiCkOuPpEEuD6fapOFY.png` },
      { title: "Trojena Residences 6", url: "https://jstrieb.github.io/link-lock/#eyJ2IjoiMC4wLjEiLCJlIjoiZks2dE12QTY0SXIrMEtxT21PU1ZycnlObGswZlVKRitxSC83YTRwME9JL3E0b2JmOEFhZzE1T1NrQU51OXlVc0tVUWxnOWFGbDRlUUVlQmN4bDdDeThCUGJoWmpISGgzYlVUS25acnRuMlpEMHF0Vi9nPT0iLCJzIjoiOGNLdlgrbjhubXhkbVRZVnBON3JuQT09IiwiaSI6IkJqVExOckFYV0c2S1NibmMifQ==", type: "flipbook", image: `${IMG}/HzPvmXTgANE3uGTPGOCj6gi1OU.png` },
      { title: "Trojena Residences 7", url: "https://jstrieb.github.io/link-lock/#eyJ2IjoiMC4wLjEiLCJlIjoiaXMybEpLYXJpWUhhb1BVU1oxNGJkRFlmMzhOZkwrWnZkUVA3M3NFdHlIQWp5bDRtQWpXYWNsR0NvNkt2eUlxWVdvRzRzNTQyQzRnbzlaYzQyQ2VuMkU1S1VueXlCUU5MU0E9PSIsInMiOiJUampZNWZacTg1RFVNVVFvTVJkSWRnPT0iLCJpIjoidTF3bU5Ha3dYOW5iUjBUaCJ9", type: "flipbook", image: `${IMG}/9ItpG5teAmD3Y5YFXFYH7BgUHh4.png` },
      { title: "Trojena Residences 8", url: "https://jstrieb.github.io/link-lock/#eyJ2IjoiMC4wLjEiLCJlIjoiTEkzNE5YcGxvZUd2RisvRFVqTzdzdyt4b3R5VXlYL0l4K0ZBSC9JVjNGNGJSQ2pYaHRxSE1neDJNY3R6d2pHZVprZTZzVU5FUUMycExBd2xWdUJUbUQwRHd4QjRmcjBMbmhJVmJpWmZrQUpPL0FrRERjMGhadz09IiwicyI6IjVVU3pCQnJZNHkvMHB2R0xBU1YrNHc9PSIsImkiOiJseTRHSkFwU2Y4L0drNWdSIn0=", type: "flipbook", image: `${IMG}/5Z9N6wgv7R2vjeFqqvIgZx58YAc.png` },
      { title: "Trojena Residences 9", url: "https://jstrieb.github.io/link-lock/#eyJ2IjoiMC4wLjEiLCJlIjoiNVplem9JQ0ZWYlFPSHpGZnIyRi9ydms0UGoyZVp3UmxXNEtMMDdNZnh1UGVXRkQ5T3JjZ3J5MGROaFI3YkdvVnovTXBtbWlyYkM4cHNybEY3djEwWnBCRGpPb2FTSml6Wm4rR2VQcENlU0d4OHBPcXNPZVl1Z24rN1J1VCIsInMiOiJyMnRvSC9HQmtvZDRJZXRVV1lCenNnPT0iLCJpIjoibUVIdmxNWmdRNjB3ak4rSiJ9", type: "flipbook", image: `${IMG}/ZnOGUl8AkT7ueXATM19B22W9fHc.png` },
      { title: "Trojena Residences 10", url: "https://jstrieb.github.io/link-lock/#eyJ2IjoiMC4wLjEiLCJlIjoiZ1oxZXVwcll5MjZDVnJ2eWdhV2JDcmYwRHhjdmcxVG93TjBFdTNIRncvbUVWK0dTNzVQL3U1NVUrWFg5aUxjWTRaZW14TkhhazNZUmdpRitVN3ZUeTkzU0pnb1ZTMEkzOGpRejl4QWkrNE5sIiwicyI6IjQyVlgxSnJzWlFONTZTMU8rSlVYY3c9PSIsImkiOiJLQkhpc09lc08wekxWZm9zIn0=", type: "flipbook", image: `${IMG}/LaEqoPlcVcGLbd2P8lZioMPoc.png` },
      { title: "Trojena Residences 11", url: "https://jstrieb.github.io/link-lock/#eyJ2IjoiMC4wLjEiLCJlIjoiY2JWZ1BWMHZkYUtxeVAwYlVsMUxrZ1NCMUJ3cWtIT2gzbUN2UHZiVUcxdlpYczJqY2tnMnM3Tk1oclNRTEZmdW9CSXdzVmtEdXdaNVloL3Q1WDZ1MmxzNWRwZC9yL0wrNXlXbXI2a0FjeVZObDU0Nm1yQ2IiLCJzIjoiQkJRRzkyazFZWkVzUFMwSDRFM3FJQT09IiwiaSI6IlIwV2R4cWF1M1c1MXU5MnoifQ==", type: "flipbook", image: `${IMG}/OZ9UpfbvnRgMsP8XBKxAiCb9fGs.png` },
      { title: "Trojena Residences 12", url: "https://jstrieb.github.io/link-lock/#eyJ2IjoiMC4wLjEiLCJlIjoieFQrdnB6Mm1Bam5lUHYvWnJYUVdQOWxmdDBvdzRKWUc0SlN4NVIxRDhwd0ZWMWhNak8ra0YrejVEMlJHVStvRFY0V1R5aml1TFhpNnpCd2R5RkxXMGpLYnc0RjNhZ04zUkY2eSIsInMiOiJxaTc5eTk1NXoxcDVORHRhdW9XcmJBPT0iLCJpIjoibEhrR2FFNHd2M29tR0tTeCJ9", type: "flipbook", image: `${IMG}/rej0Vhvrlfmjw5Ez2BPf4G8JPJo.png` },
      { title: "Trojena Residences 13", url: "https://jstrieb.github.io/link-lock/#eyJ2IjoiMC4wLjEiLCJlIjoiVGNUNHRFTXI5a09xSHM3cGN3MGJsd0ZCUnA3a1Y2RWVKQXJQaTV5ZmJQdUc1OXRJUGRPS0FlanR0L1pBbW4waVk4Y3RkUWdweFZ6R1RlNnhTWExtdzNtZml1QVNteE1rdlE9PSIsInMiOiJsS1E2TkpXVVRhMFZFcE1PbERlSWdBPT0iLCJpIjoiQlBmd3F3anY1bFVSSlZpOCJ9", type: "flipbook", image: `${IMG}/EfkwdlR2m2z1xaLRtPSbbr5ADw8.png` },
    ],
  },
];

/* Portfolio-specific video embeds (shown on main portfolio page) */
export const portfolioVideos = [
  {
    title: "QE2 Interiors Reimagined",
    embedUrl: "https://www.youtube.com/embed/rTWB-zofvgc",
  },
  {
    title: "Portfolio Showreel",
    embedUrl: "https://www.youtube.com/embed/Y856rKGJ9BI",
  },
  {
    title: "Design Highlights",
    embedUrl: "https://www.youtube.com/embed/6bLRHo3QPN8",
  },
];
