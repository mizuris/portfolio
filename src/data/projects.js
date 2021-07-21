import carwallet from "../assets/images/carwallet2.png";
import montage from "../assets/images/montage1.png";
import cookbook from "../assets/images/cookbook.png";
import boredomApp from "../assets/images/boredom1.png";
import artpoz from "../assets/images/artpoz1.png";
import qrcodecenter from "../assets/images/qrcodecenter.png";

export const projects = [
  {
    id: 1,
    name: "CarWallet",
    shortDescription: "Virtual garage for your vehicles.",
    image: carwallet,
    liveVersion: "https://mizuris.github.io/car-wallet-react/",
    repository: "https://github.com/mizuris/car-wallet-react",
    technologies: ["React", "JavaScript", "Firebase", "Bootstrap", "SCSS"],
  },
  {
    id: 2,
    name: "Cookbook App",
    shortDescription: "Recipe finder with descriptions and favorites list.",
    image: cookbook,
    liveVersion: "https://mizuris.github.io/cookbook-app/",
    repository: "https://github.com/mizuris/cookbook-app",
    technologies: [
      "React",
      "JavaScript",
      "Redux",
      "Material-UI",
      "Framer-motion",
    ],
  },
  {
    id: 3,
    name: "Boredom App",
    shortDescription: "Random activity generator.",
    image: boredomApp,
    liveVersion: "https://admiring-hamilton-70feae.netlify.app/",
    repository: "https://github.com/mizuris/boredom-app",
    technologies: ["React", "JavaScript", "Framer-motion", "CSS"],
  },
  {
    id: 4,
    name: "QR Code center",
    shortDescription: "QR Code scanner and reader for all devices.",
    image: qrcodecenter,
    liveVersion: "https://mizuris.github.io/qr-code-generator/",
    repository: "https://github.com/mizuris/qr-code-generator",
    technologies: ["React", "TypeScript", "Bootstrap", "CSS"],
  },
  {
    id: 5,
    name: "Artpoż",
    shortDescription: "Work safety equipement dealer.",
    image: artpoz,
    liveVersion: "https://artpoz-bhp.pl/",
    repository: "https://github.com/mizuris/artpoz-bhp",
    technologies: ["Next.js", "Bootstrap", "Bootstrap"],
  },
  {
    id: 6,
    name: "Montage Sp. z o.o.",
    shortDescription: "European building company.",
    image: montage,
    liveVersion: "https://montage-com.vercel.app/",
    repository: "https://github.com/mizuris/montage",
    technologies: ["Next.js", "Bootstrap"],
  },
];
