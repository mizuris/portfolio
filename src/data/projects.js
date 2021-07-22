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
    shortDescription:
      "Virtual garage for your vehicles. App uses form validation to add and edit vehicles in your list.",
    detailedDescription: (
      <>
        <p>
          Virtual garage for your vehicles created with <em>ReactJS</em>. Styled
          applied with Bootstrap and SCSS. CarWallet allows you to add your own,
          or your dream vehicles to the list.
        </p>
        <p>
          CarWallet is using <em>Firebase</em> to store uploaded images of your
          cars. State of cars list is saved in your local storage, so it
          persists when you leave the app.
        </p>
        <p>
          You can freely add, edit and remove vehicles from the list. State
          between components is shared thanks to <em>Context API.</em>
        </p>
      </>
    ),
    image: carwallet,
    liveVersion: "https://mizuris.github.io/car-wallet-react/",
    repository: "https://github.com/mizuris/car-wallet-react",
    technologies: ["React", "JavaScript", "Firebase", "Bootstrap", "SCSS"],
  },
  {
    id: 2,
    name: "Cookbook App",
    shortDescription:
      "Online recipe book. Cookbook allows you to find your favorites recipes and add or remove them from favorites list. App uses external API.",
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
    shortDescription:
      "Simple app that generates random activities and their descriptions.",
    image: boredomApp,
    liveVersion: "https://admiring-hamilton-70feae.netlify.app/",
    repository: "https://github.com/mizuris/boredom-app",
    technologies: ["React", "JavaScript", "Framer-motion", "CSS"],
  },
  {
    id: 4,
    name: "QR Code center",
    shortDescription:
      "Lightweight app that allows you to scan and generate QR codes. Reader is avalible for all devices equiped with camera.",
    image: qrcodecenter,
    liveVersion: "https://mizuris.github.io/qr-code-generator/",
    repository: "https://github.com/mizuris/qr-code-generator",
    technologies: ["React", "TypeScript", "Bootstrap", "CSS"],
  },
  {
    id: 5,
    name: "Artpoż",
    shortDescription:
      "Local work and safety equipement dealer. Website is re-designed to look fresh and simple.",
    image: artpoz,
    liveVersion: "https://artpoz-bhp.pl/",
    repository: "https://github.com/mizuris/artpoz-bhp",
    technologies: ["Next.js", "Bootstrap", "Bootstrap"],
  },
  {
    id: 6,
    name: "Montage",
    shortDescription:
      "Official website for European building company. It provides crucial informations about jobs availible in this company, and runs simple mail sender.",
    image: montage,
    liveVersion: "https://montage-com.vercel.app/",
    repository: "https://github.com/mizuris/montage",
    technologies: ["Next.js", "Bootstrap"],
  },
];
