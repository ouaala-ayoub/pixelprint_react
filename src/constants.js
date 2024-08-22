import { extendTheme } from "@chakra-ui/react";

// Define custom colors (equivalent to Colors in Flutter)
export const theme = extendTheme({
  colors: {
    background: {
      300: "#5c6bc0", // Approximate value of Colors.indigo.shade300
    },
  },
});

export const titleInfo = {
  image: "banner.jpg",
  title: "Pixelprint : L'Art de l'Impression et de la Publicité",
  content:
    "En combinant créativité et innovation, la publicité moderne a le pouvoir d'influencer les comportements, de renforcer les marques et de créer des connexions durables avec les consommateurs. Pixelprint et son equipe, spécialisée dans le design et la publicité industrielle, joue un rôle essentiel en aidant les entreprises à naviguer et à prospérer dans cet environnement dynamique.",
};

export const services = [
  {
    title: "Impression Offset",
    content: `
  Notre service d'impression offset garantit une qualité supérieure et des résultats précis pour tous vos projets d'impression. 
  Avec notre équipement de pointe, nous produisons des impressions nettes et professionnelles, idéales pour les magazines, 
  brochures, affiches et bien plus encore. Faites confiance à Pixelprint pour transformer vos idées en réalité avec une finition 
  impeccable et des couleurs éclatantes.
`,
    image: "BANNERPlan de travail 1-100.jpg",
  },
  {
    title: "Impression Grand Format",
    content: `
  Chez Pixelprint, nous offrons des services d'impression grand format pour tous vos besoins publicitaires. 
  Que ce soit pour des bannières, affiches, panneaux d'affichage ou tout autre support grand format, nous garantissons des 
  impressions de haute qualité avec des couleurs vibrantes et une précision exceptionnelle. Notre technologie avancée nous permet 
  de produire des visuels accrocheurs qui attirent l'attention et communiquent efficacement votre message.
`,
    image: "BANNERPlan de travail 2-100.jpg",
  },
  {
    title: "Impression Numérique",
    content: `
  Chez Pixelprint, nous proposons des services complets d'impression numérique pour répondre à tous vos besoins en matière de 
  communication visuelle. Grâce à notre technologie d'impression numérique avancée, nous produisons des impressions de haute 
  qualité avec des couleurs vives et des détails précis. Que ce soit pour des cartes de visite, des flyers, des brochures ou 
  tout autre support, nous garantissons des résultats rapides et professionnels. Confiez-nous vos projets et bénéficiez de notre 
  expertise en impression numérique.
`,
    image: "BANNERPlan de travail 3-100.jpg",
  },
  {
    title: "Graphic Design & Illustrations",
    content: `
  Chez Pixelprint, notre équipe de designers graphiques talentueux crée des visuels impressionnants et des illustrations captivantes 
  pour tous vos projets. Que vous ayez besoin de logos, d'illustrations personnalisées, de conceptions de produits ou de supports 
  marketing, nous transformons vos idées en œuvres d'art visuelles. Nos créations graphiques sont conçues pour attirer l'attention, 
  communiquer efficacement et renforcer l'identité de votre marque.
`,
    image: "BANNERPlan de travail 5-100.jpg",
  },
  {
    title: "Panneaux Publicitaires & Signalétique",
    content: `
  Chez Pixelprint, nous fabriquons des panneaux publicitaires et de signalétique de haute qualité pour toutes vos exigences de 
  communication visuelle. Que ce soit pour des enseignes extérieures, des panneaux directionnels, des affichages en magasin ou des 
  panneaux événementiels, nos solutions sont conçues pour être durables et accrocheuses. Nous utilisons des matériaux de première 
  qualité et des techniques de production avancées pour garantir que vos panneaux publicitaires et de signalétique attirent l'attention 
  et transmettent efficacement votre message.
`,
    image: "BANNERPlan de travail 7-100.jpg",
  },
  {
    title: "Décoration Intérieure & Murale",
    content: `
  À Pixelprint, nous repoussons les limites de la décoration intérieure et murale grâce à notre expertise unique en utilisation de machines 
  CNC et à notre créativité sans bornes. Chaque pièce devient une toile où la technologie rencontre l'art, transformant les espaces avec 
  précision et originalité. Que ce soit pour des motifs complexes, des reliefs élaborés ou des pièces sur mesure, nous sommes déterminés à 
  créer des environnements qui inspirent et captivent, surprenant toujours par notre attention aux détails et notre passion pour l'innovation.
`,
    image: "BANNERPlan de travail 6-100.jpg",
  },
];

// Equivalent of Flutter's `TextStyle` in Chakra UI
export const titleStyle = {
  fontSize: ["2xl", "3xl"], // Responsive font sizes
  fontWeight: "bold",
  color: "white",
};

// Equivalent of `Shadow` in Chakra UI (applied in the `Box` or `Text` component)
export const shadows = {
  base: "0 10px 10px rgba(0, 0, 0, 0.5)",
};

// Grid items
export const products = [
  {
    image: "PHOTO SEVICEPlan de travail 1-100",
    title: "CARTE VISITE",
    content: `
      Obtenez des cartes de visite professionnelles à partir de 50 exemplaires, sans limite maximale. 
      Nous offrons une impression de haute qualité avec des matériaux premium, pour une finition 
      impeccable qui impressionnera vos clients et partenaires.
    `,
  },
  {
    image: "PHOTO SEVICEPlan de travail 1 copie-100",
    title: "FLYERS",
    content: `
      Commandez des flyers en haute qualité à partir de 2500 exemplaires, sans limite maximale. 
      Idéals pour promouvoir vos événements, produits ou services, nos flyers sont imprimés sur 
      du papier premium pour un rendu professionnel.
    `,
  },
  {
    image: "PHOTO SEVICEPlan de travail 1 copie 2-100",
    title: "LIVRE",
    content: `
      Imprimez vos livres en haute qualité, quel que soit le tirage. Nous offrons des options 
      personnalisées pour la couverture, le format et la finition, assurant une présentation 
      professionnelle de vos œuvres littéraires ou techniques.
    `,
  },
  {
    image: "PHOTO SEVICEPlan de travail 1 copie 11-100",
    title: "ROOL UP",
    content: `
      Créez des roll-ups professionnels pour vos événements et présentations. Nos roll-ups de haute qualité 
      sont durables et facilement transportables, parfaits pour attirer l'attention et communiquer votre 
      message de manière percutante.
    `,
  },
  {
    image: "PHOTO SEVICEPlan de travail 1 copie 10-100",
    title: "CATALOGUE/BROCHURE",
    content: `
      Imprimez vos catalogues et brochures en haute qualité pour présenter vos produits et services de 
      manière élégante et professionnelle. Nous offrons des options personnalisées pour la taille, le 
      papier et la finition, garantissant un résultat qui reflète parfaitement votre image de marque.
    `,
  },
  {
    image: "PHOTO SEVICEPlan de travail 1 copie 6-100",
    title: "ETIQUETTES ADHÉSIVES",
    content: `
      Nous imprimons des étiquettes personnalisées de haute qualité pour vos besoins d'emballage et de 
      signalétique.
    `,
  },
  {
    image: "PHOTO SEVICEPlan de travail 1 copie 5-100",
    title: "CADEAUX ENTREPRISE",
    content: `
      Personnalisez vos cadeaux d'entreprise avec notre service d'impression sur mesure. Offrez des articles 
      uniques et de haute qualité qui renforcent votre marque et font une impression durable sur vos clients 
      et partenaires.
    `,
  },
  {
    image: "PHOTO SEVICEPlan de travail 1 copie 4-100",
    title: "PRODUITS PHOTOS",
    content: `
      Transformez vos souvenirs en œuvres d'art avec nos impressions photo de haute qualité.
    `,
  },
  {
    image: "PHOTO SEVICEPlan de travail 1 copie 3-100",
    title: "BLOC NOTE ET PLANNER",
    content: `
      Personnalisation de blocs-notes et planners pour une organisation optimale au quotidien.
    `,
  },
  {
    image: "PHOTO SEVICEPlan de travail 1 copie 8-100",
    title: "SUPPORT RIGIDE",
    content: `
      Profitez de notre service d'impression sur supports rigides pour des panneaux et affiches durables et 
      de haute qualité, parfaits pour les présentations professionnelles et la signalétique.
    `,
  },
  {
    image: "PHOTO SEVICEPlan de travail 1 copie 7-100",
    title: "SUPPORT SOUPLE",
    content: `
      Nous proposons sur bâche, vinyle, toile et adhésif, adaptées à une variété d'applications telles que la 
      signalétique extérieure, les affichages promotionnels.
    `,
  },
  {
    image: "PHOTO SEVICEPlan de travail 1 copie 9-100",
    title: "DECORATION INTERIEUR/MURALE",
    content: `
      Transformez votre espace avec notre service de décoration intérieure et murale personnalisé. Nous 
      offrons des solutions créatives pour embellir vos murs avec des impressions artistiques et des 
      décorations sur mesure.
    `,
  },
];

export const phoneNumber = "06"
