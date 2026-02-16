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
  {
    slug: "hotels",
    label: "Hotels",
    description:
      "Hotel development is a unique endeavor that combines elements of architecture, finance, marketing, and hospitality management.",
    previewImages: [
      `${IMG}/BZmoEnQnsWedbSvZzjh67pABkpY.png`,
      `${IMG}/vXdgyyeG5a8WQ27kX4wtCx1DJ9E.png`,
      `${IMG}/NQ4nWQWtoTxwD8opYJKoaedj6DE.png`,
      `${IMG}/6Ke9MyMJeDJevwPAUGhqbb3VJYo.png`,
    ],
    projects: [
      { title: "W Hotel Times Square", url: "http://www.do-great.work/Flipbooks/STARWOOD/mobile/index.html", type: "flipbook", image: `${IMG}/BZmoEnQnsWedbSvZzjh67pABkpY.png` },
      { title: "Morgans Hotel Group Vol 3", url: "http://www.do-great.work/Flipbooks/MORGANS/MHGC3/mobile/index.html", type: "flipbook", image: `${IMG}/BZmoEnQnsWedbSvZzjh67pABkpY.png` },
      { title: "James Hotels Vol 2", url: "http://www.do-great.work/Flipbooks/JAMES/V2/mobile/index.html", type: "flipbook", image: `${IMG}/dZIJ0m6xbaEdx6DVYh48cBVRhK4.png` },
      { title: "Morgans Vol 2", url: "http://www.do-great.work/Flipbooks/MORGANS/MHGC2/mobile/index.html", type: "flipbook", image: `${IMG}/NQ4nWQWtoTxwD8opYJKoaedj6DE.png` },
      { title: "Morgans Portfolio 1", url: "http://www.do-great.work/Flipbooks/MORGANS/MHGC1/mobile/index.html", type: "flipbook", image: `${IMG}/6Ke9MyMJeDJevwPAUGhqbb3VJYo.png` },
      { title: "James Hotels Vol 1", url: "http://www.do-great.work/Flipbooks/JAMES/V1/mobile/index.html", type: "flipbook", image: `${IMG}/bpZgTi6yK4W7xCqSQMuboKudo.png` },
      { title: "One UN Plaza", url: "http://www.do-great.work/Flipbooks/Hardy/1UN/MHR%201UN%20Plaza.html", type: "flipbook", image: `${IMG}/vXdgyyeG5a8WQ27kX4wtCx1DJ9E.png` },
      { title: "New York Palace Portfolio 1", url: "http://www.do-great.work/Flipbooks/NEWYORKPALACE/NYP1/mobile/index.html", type: "flipbook", image: `${IMG}/JQZuW8e1FUkrw5AYRry1eqP3kvo.png` },
      { title: "M SOCIAL TSQ New York", url: "http://www.do-great.work/Flipbooks/Hardy/MSOC/MSOCIAL%20TSQ.html", type: "flipbook", image: `${IMG}/pFlisOwe0o6N8uTB7l4nzDaesE.png` },
      { title: "Edition NYC MEP", url: "http://www.do-great.work/Flipbooks/Hardy/Edition/Edition%20NYC.html", type: "flipbook", image: `${IMG}/66J9GzZJAjxcQHu10JCc3ODbA0.png` },
      { title: "Jabal Omar Development", url: "http://www.do-great.work/Flipbooks/JODC/JODC.html", type: "flipbook", image: `${IMG}/42UsiIiYiYmhekXv4YoNIi4HWo.png` },
      { title: "Kushner Portfolio 2", url: "http://www.do-great.work/Flipbooks/KUSHNER/KC2/mobile/index.html", type: "flipbook", image: `${IMG}/s24gZt46bKGYPrqcC774A9tMc8.png` },
      { title: "New York Palace Portfolio 2", url: "http://www.do-great.work/Flipbooks/NEWYORKPALACE/NYP2/mobile/index.html", type: "flipbook", image: `${IMG}/NuVDOO4ETXOKO14L791wo6BE7s.png` },
      { title: "Fairfield", url: "http://www.do-great.work/Flipbooks/FAIRFIELD/Fairfield.html", type: "flipbook", image: `${IMG}/UyquwTsXfv2tP8XU8HN4qAWwCT8.png` },
    ],
  },
  {
    slug: "restaurants-and-bars",
    label: "Restaurants and Bars",
    description:
      "Restaurants and bars are vibrant spaces where culinary artistry meets the joy of communal dining.",
    previewImages: [
      `${IMG}/FMO6oSRkYQpS1WyW3dtlTxe1RkA.png`,
      `${IMG}/My0fNFvfjOCeZUgavTD0e4C33dk.png`,
      `${IMG}/YLyVwLL9jk3vK5Jec6NU5Re0hoA.png`,
      `${IMG}/UFpJsGv1rzUftM4ml5KR5PDONw.png`,
    ],
    projects: [],
  },
  {
    slug: "residential",
    label: "Residential",
    description:
      "The development of luxury private residences represents the pinnacle of architectural and design excellence.",
    previewImages: [
      `${IMG}/4qgI4qS4srJCKkTpRVfUIXCmWGU.png`,
      `${IMG}/MIZ5d6AG4TZYSd6jI7wranqKyc.png`,
      `${IMG}/TDCVnuVtuNvo19hTUMPrUHPTzrM.png`,
      `${IMG}/ZrsXQfAMoVge3wFeighNj8FKTI.png`,
    ],
    projects: [
      { title: "Beijing Residence", url: "http://www.do-great.work/Flipbooks/BEIJING%20RESIDENCE/mobile/index.html", type: "flipbook", image: `${IMG}/4qgI4qS4srJCKkTpRVfUIXCmWGU.png` },
      { title: "Yanqi Lake", url: "http://www.do-great.work/Flipbooks/YANQI/mobile/index.html", type: "flipbook", image: `${IMG}/rq7ogKoAjezpuyvexJBaRLE.png` },
      { title: "Presidential Palace", url: "http://www.do-great.work/Flipbooks/PPP%20DM/mobile/index.html", type: "flipbook", image: `${IMG}/TDCVnuVtuNvo19hTUMPrUHPTzrM.png` },
      { title: "Project K - India", url: "http://www.do-great.work/Flipbooks/PROJECT%20K/mobile/index.html", type: "flipbook", image: `${IMG}/ZrsXQfAMoVge3wFeighNj8FKTI.png` },
      { title: "Private Residence Abu Dhabi", url: "http://www.do-great.work/Flipbooks/BOV/mobile/index.html", type: "flipbook", image: `${IMG}/pU76PfT6u8KhSooKouVVCMF0OhU.png` },
    ],
  },
  {
    slug: "mixed-use",
    label: "Mixed-Use",
    description:
      "In mixed-use developments, master planning ensures seamless integration of spaces, while design knowledge enhances functionality and aesthetics.",
    previewImages: [
      `${IMG}/7mCYQhe598QGk6lVKzMdICp8u8.png`,
      `${IMG}/6JvfXGBg51dV7lHu1F9UauQs3o.png`,
      `${IMG}/zdYSDfOsPOAgATh6QFp4pktHQ.png`,
      `${IMG}/VBz70dCryDXisgYDYOAK9XXM.png`,
    ],
    projects: [
      { title: "Half Moon Bay", url: "http://www.do-great.work/Flipbooks/HMB/HMB.html", type: "flipbook", image: `${IMG}/7mCYQhe598QGk6lVKzMdICp8u8.png` },
      { title: "Montpelier Estate Feasibility Study", url: "http://www.do-great.work/Flipbooks/PICO/MONTPELIER/mobile/index.html", type: "flipbook", image: `${IMG}/12kNFnQ9Q92Kmg1VW36unQ8bPE.png` },
      { title: "Montpelier Estate Feasibility Report", url: "http://www.do-great.work/Flipbooks/PICO/MONTPELIER/REPORT/mobile/index.html", type: "flipbook", image: `${IMG}/zdYSDfOsPOAgATh6QFp4pktHQ.png` },
      { title: "Space Planning PPP", url: "http://www.do-great.work/Flipbooks/OFFICES/mobile/index.html", type: "flipbook", image: `${IMG}/VBz70dCryDXisgYDYOAK9XXM.png` },
      { title: "KEO International Portfolio", url: "http://www.do-great.work/Flipbooks/KEO/mobile/index.html", type: "flipbook", image: `${IMG}/ExOtT3Lu3YFOqdWwtDA2fYyg.png` },
    ],
  },
  {
    slug: "destination-strategies",
    label: "Destination Strategies",
    description:
      "Developers face several challenges when creating a destination branding and development brief.",
    previewImages: [
      `${IMG}/aJOH4kRm0Rcl68uZKPY9PlXymW0.png`,
      `${IMG}/AFkJdXmNBcyoCQPbxoaT8w0tRo.png`,
      `${IMG}/LgbqjtO0NTitTTzvyMMiQ5Wvjw4.png`,
      `${IMG}/Raf7tjyf1LJIgQITZDZlSJ0oFw.png`,
    ],
    projects: [
      { title: "Antigua Sails Presentation", url: "http://www.do-great.work/Flipbooks/PICO/SAILS/mobile/index.html", type: "flipbook", image: `${IMG}/aJOH4kRm0Rcl68uZKPY9PlXymW0.png` },
      { title: "Sahara Brand Concept", url: "http://www.do-great.work/Flipbooks/SAHARA/mobile/index.html", type: "flipbook", image: `${IMG}/aJOH4kRm0Rcl68uZKPY9PlXymW0.png` },
      { title: "Spring 365 Presentation", url: "http://www.do-great.work/Flipbooks/MLX/SPRING365/mobile/index.html", type: "flipbook", image: `${IMG}/XnsVAFu5xKzcGX6ucQcJzRTxs.png` },
      { title: "Creative Minds Presentation", url: "http://www.do-great.work/Flipbooks/PICO/MGM/mobile/index.html", type: "flipbook", image: `${IMG}/LgbqjtO0NTitTTzvyMMiQ5Wvjw4.png` },
      { title: "BDNY 2012 High Tech High Touch", url: "http://www.do-great.work/Flipbooks/SPEAKING/mobile/index.html#p=1", type: "flipbook", image: `${IMG}/Raf7tjyf1LJIgQITZDZlSJ0oFw.png` },
      { title: "PRO Flag Presentation", url: "http://www.do-great.work/Flipbooks/PICO/FLAG/mobile/index.html", type: "flipbook", image: `${IMG}/Igs2YoRYzNnKAPjcvm2RWFlwR74.png` },
      { title: "ComiCon Pitch v1", url: "http://www.do-great.work/Flipbooks/MLX/COMICON/mobile/index.html", type: "flipbook", image: `${IMG}/AFkJdXmNBcyoCQPbxoaT8w0tRo.png` },
      { title: "Qu Concept Presentation", url: "http://www.do-great.work/Flipbooks/PICO/QUCONCEPT/mobile/index.html", type: "flipbook", image: `${IMG}/Qj8r525PfcBnzVxDIKt8GcdfZY.png` },
      { title: "Food Theatre Presentation", url: "http://www.do-great.work/Flipbooks/PICO/FOOD/mobile/index.html", type: "flipbook", image: `${IMG}/QPYvKv9bn6vyqzqzCwvOEOoJeaY.png` },
      { title: "Coleburn Distillery Hotel", url: "http://www.do-great.work/Flipbooks/PICO/COLEBURN/mobile/index.html", type: "flipbook", image: `${IMG}/hXDLPxGzOabpa6ci0O9Tw2uGv8M.png` },
      { title: "WET Design", url: "http://www.do-great.work/Flipbooks/WET/WET.html", type: "flipbook", image: `${IMG}/LgaZoZXkD8R1kUtlrcZIWnUDylE.png` },
      { title: "Pico PRO", url: "http://www.do-great.work/Flipbooks/PICO/mobile/index.html", type: "flipbook", image: `${IMG}/Hmk2F4sVqJhRjV9aCdOcvjyy4U.png` },
      { title: "Napoleon is Dead", url: "http://www.do-great.work/VIDEOS/Napoleon%20is%20Dead%20(Part1)%20720p.mp4", type: "video" },
      { title: "You Talkin' to Me", url: "http://www.do-great.work/VIDEOS/You%20Talkin'%20to%20Me.mp4", type: "video" },
    ],
  },
  {
    slug: "project-construction-management",
    label: "Project & Construction Management",
    description:
      "Managing project and construction management in real estate development presents a myriad of challenges.",
    previewImages: [
      `${IMG}/rMhiziRmiOcSgiNX3wSWtihBzE.png`,
      `${IMG}/HZquPR7t9Obv60o9fE4c3iDez4.png`,
      `${IMG}/KVsrJ11AUKytYMM497cXLgDqMDk.png`,
      `${IMG}/ctTlxSNisA6hCSiPLl6QaYkJNJg.png`,
    ],
    projects: [
      { title: "MHG Project Management Plan", url: "http://www.do-great.work/Flipbooks/MORGANS/MHGC4/mobile/index.html", type: "flipbook", image: `${IMG}/rMhiziRmiOcSgiNX3wSWtihBzE.png` },
      { title: "Hardy Design Management", url: "http://www.do-great.work/Flipbooks/HARDY/DM/HARDY%20DM.html", type: "flipbook", image: `${IMG}/rMhiziRmiOcSgiNX3wSWtihBzE.png` },
      { title: "Puck Building", url: "http://www.do-great.work/Flipbooks/PUCK%202/Puck.html", type: "flipbook", image: `${IMG}/eTT3ZATPmKZ4XPHkjpSkxbIoX0g.png` },
      { title: "Tavistock F&B Workshop", url: "http://www.do-great.work/Flipbooks/Tavistock/F&B/F&B%20Workshop.html", type: "flipbook", image: `${IMG}/KVsrJ11AUKytYMM497cXLgDqMDk.png` },
      { title: "b:spoke Presentation MLX", url: "http://www.do-great.work/Flipbooks/MLX/BSPOKE/mobile/index.html", type: "flipbook", image: `${IMG}/ctTlxSNisA6hCSiPLl6QaYkJNJg.png` },
      { title: "My Work Presentation", url: "http://www.do-great.work/Flipbooks/MY%20WORK/MW%20Presentation%20.html", type: "flipbook", image: `${IMG}/hkGSrerjzzs6eH5R5Cz3I83CQA.png` },
      { title: "VICI Owners Rep Services", url: "http://www.do-great.work/Flipbooks/HARDY/Vici/vici.html", type: "flipbook", image: `${IMG}/HZquPR7t9Obv60o9fE4c3iDez4.png` },
      { title: "Hardy ARS", url: "http://www.do-great.work/Flipbooks/Hardy/ARS/Index.html", type: "flipbook", image: `${IMG}/6NPfgNaN8TGsfX4WbnUuzgbWDcs.png` },
      { title: "Inn-Box", url: "http://www.do-great.work/Flipbooks/INN-BOX/Inn-Box.html", type: "flipbook", image: `${IMG}/pnZucMXOPyGyvMRFUOTI33yM0.png` },
      { title: "P-66 F&B Workshop", url: "http://www.do-great.work/Flipbooks/Tavistock/F&B/F&B%20Workshop.html", type: "flipbook", image: `${IMG}/ctTlxSNisA6hCSiPLl6QaYkJNJg.png` },
      { title: "MooMoo Video", url: "http://www.do-great.work/Flipbooks/MOOmoo/Moomoo.mp4", type: "video", image: `${IMG}/qLk1pSnZ3zGED3K4vO1Jke334VM.png` },
    ],
  },
  {
    slug: "architecture-design-management",
    label: "Architecture & Design Management",
    description:
      "Combining creativity, passion and practicality in the imagination, documentation and delivery of world-class architecture and interiors.",
    previewImages: [
      `${IMG}/kP6lDHoY2hh0tfGgG8MGVLRwczQ.png`,
      `${IMG}/uA6Hhti3ui2smnPkEyiSJpesrTY.png`,
      `${IMG}/RLjBTuqsZw20Bvr0VIt08pFeU.png`,
      `${IMG}/86APcVlkyMg6gC2OxeajciQNM.png`,
    ],
    projects: [
      { title: "Linczyc Oppenheim Portfolio", url: "http://www.do-great.work/Flipbooks/LINCZYC/mobile/index.html", type: "flipbook", image: `${IMG}/kP6lDHoY2hh0tfGgG8MGVLRwczQ.png` },
      { title: "AECOM Presentation April 2014", url: "http://www.do-great.work/Flipbooks/AECOM/mobile/index.html", type: "flipbook", image: `${IMG}/kP6lDHoY2hh0tfGgG8MGVLRwczQ.png` },
      { title: "SOM Portfolio", url: "http://www.do-great.work/Flipbooks/SOM/mobile/index.html", type: "flipbook", image: `${IMG}/c7QhAPiPJQwIhFT2diYBp6oDuvw.png` },
      { title: "Wilson Associates Portfolio", url: "http://www.do-great.work/Flipbooks/WA1/mobile/index.html", type: "flipbook", image: `${IMG}/RLjBTuqsZw20Bvr0VIt08pFeU.png` },
      { title: "Asahi Juken Portfolio", url: "http://www.do-great.work/Flipbooks/ASAHIJUKEN/mobile/index.html", type: "flipbook", image: `${IMG}/86APcVlkyMg6gC2OxeajciQNM.png` },
      { title: "GMW Portfolio", url: "http://www.do-great.work/Flipbooks/GMW/mobile/index.html", type: "flipbook", image: `${IMG}/5qKxoP1HExK4ttvmq4zivdNkMw.png` },
      { title: "ML Portfolio 1 @ Rockwell Group", url: "http://www.do-great.work/Flipbooks/ROCKWELL/RG1/mobile/index.html#p=1", type: "flipbook", image: `${IMG}/1XEk3gn2g6s67HIFLdaLrTkqJtM.png` },
      { title: "ML Portfolio 2 @ Rockwell Group", url: "http://www.do-great.work/Flipbooks/ROCKWELL/RG2/mobile/index.html#p=1", type: "flipbook", image: `${IMG}/PSZCTsHdlRE5rBJSjRBfw8c7Qe8.png` },
    ],
  },
  {
    slug: "trojena",
    label: "Trojena",
    description:
      "As Development Director responsible for developing 120 luxurious private residences ranging from 1,500 sqm mansions to 20,000 sqm palatial estates.",
    previewImages: [
      `${IMG}/NRUZk2CGjrJbVUMSGX9JFbE.png`,
      `${IMG}/MJGWwoAKiCkOuPpEEuD6fapOFY.png`,
      `${IMG}/kABdaLgGgDbWtLHG5qPOLP9L8.png`,
      `${IMG}/fa4hVjcl1ll0ODx4br71zqhLcRw.png`,
    ],
    projects: [],
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
