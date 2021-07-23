import carwallet from "../assets/images/carwallet2.png";
import cwss1 from "../assets/images/carwallet_ss1.png";
import cwss2 from "../assets/images/carwallet_ss2.png";
import cwss3 from "../assets/images/carwallet_ss3.png";

import cookbook from "../assets/images/cookbook.png";
import ckss1 from "../assets/images/cookbook_ss1.png";
import ckss2 from "../assets/images/cookbook_ss2.png";
import ckss3 from "../assets/images/cookbook_ss3.png";

import montage from "../assets/images/montage1.png";
import montagess1 from "../assets/images/montage_ss1.png";
import montagess2 from "../assets/images/montage_ss2.png";
import montagess3 from "../assets/images/montage_ss3.png";

import boredomApp from "../assets/images/boredom1.png";
import boredomss1 from "../assets/images/boredom_ss1.png";
import boredomss2 from "../assets/images/boredom_ss2.png";
import boredomss3 from "../assets/images/boredom_ss3.png";

import artpoz from "../assets/images/artpoz1.png";
import artpozss1 from "../assets/images/artpoz_ss1.png";
import artpozss2 from "../assets/images/artpoz_ss2.png";
import artpozss3 from "../assets/images/artpoz_ss3.png";

import qrcodecenter from "../assets/images/qrcodecenter.png";
import qrss1 from "../assets/images/qr_ss1.png";
import qrss2 from "../assets/images/qr_ss2.png";
import qrss3 from "../assets/images/qr_ss3.png";

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
    screenshots: [cwss1, cwss2, cwss3],
    liveVersion: "https://mizuris.github.io/car-wallet-react/",
    repository: "https://github.com/mizuris/car-wallet-react",
    technologies: [
      "React",
      "React-router-DOM",
      "Firebase",
      "Bootstrap",
      "SCSS",
    ],
  },
  {
    id: 2,
    name: "Cookbook App",
    shortDescription:
      "Online recipe book. Cookbook allows you to find your favorites recipes and add or remove them from favorites list. App uses external API.",
    detailedDescription: (
      <>
        <p>
          Hungry? Cookbook App is here to help you quickly find your favorite
          recipes! This app uses{" "}
          <em>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://spoonacular.com/food-api"
            >
              SPOONACULAR API
            </a>
          </em>{" "}
          to display results.
        </p>
        <p>
          Recipes you find in results may be added to favorites list. You can
          delete and add as many recipes as you want!
        </p>
        <p>
          Cookbook uses <em>Redux</em> to manage the state. I'm aware of Redux's
          weight and that there are easier ways to manage state in small
          applications. However, it is all about showing my skills.
        </p>
      </>
    ),
    image: cookbook,
    screenshots: [ckss1, ckss2, ckss3],
    liveVersion: "https://mizuris.github.io/cookbook-app/",
    repository: "https://github.com/mizuris/cookbook-app",
    technologies: ["React", "Redux", "Material-UI", "Framer-motion"],
  },
  {
    id: 3,
    name: "Boredom App",
    shortDescription:
      "Simple app that generates random activities and their descriptions.",
    detailedDescription: (
      <>
        <p>
          Very simple and lightweight app created in <em>React</em>. There is
          one interactivity - the generator button. Clicking it shows you random
          activites to do in free time.
        </p>
        <p>
          App uses{" "}
          <em>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.boredapi.com/"
            >
              Bored API
            </a>
          </em>{" "}
          to generate random activities. In case you don't know meaning of
          icons, there is an explanation too!
        </p>
      </>
    ),
    image: boredomApp,
    screenshots: [boredomss1, boredomss2, boredomss3],
    liveVersion: "https://admiring-hamilton-70feae.netlify.app/",
    repository: "https://github.com/mizuris/boredom-app",
    technologies: ["React", "JavaScript", "Framer-motion", "CSS"],
  },
  {
    id: 4,
    name: "QR Code center",
    shortDescription:
      "Lightweight app that allows you to scan and generate QR codes. Reader is avalible for all devices equiped with camera.",
    detailedDescription: (
      <>
        <p>
          QR Code Center consists of two parts - <em>Reader</em> &amp;{" "}
          <em>Generator</em>. App created with <em>React</em> and{" "}
          <em>TypeScript</em>.
        </p>
        <p>
          Generator is simple component, converting text or URL to QR Code. You
          can <em>download</em> the code by clicking on it.
        </p>
        <p>
          Reader is avalible for all devices equipped with camera - laptop,
          smartphone, tablet etc. You have to allow QR Code Center to access
          your camera if you want to use it's full potential.
        </p>
        <p>
          App runs thanks to{" "}
          <em>
            <a
              href="https://www.npmjs.com/package/qrcode"
              target="_blank"
              rel="noreferrer"
            >
              QR CODE
            </a>
          </em>{" "}
          and{" "}
          <em>
            <a
              href="https://www.npmjs.com/package/react-qr-reader"
              target="_blank"
              rel="noreferrer"
            >
              REACT-QR-READER
            </a>
          </em>
        </p>
      </>
    ),
    image: qrcodecenter,
    screenshots: [qrss1, qrss2, qrss3],
    liveVersion: "https://mizuris.github.io/qr-code-generator/",
    repository: "https://github.com/mizuris/qr-code-generator",
    technologies: ["React", "TypeScript", "Bootstrap", "CSS"],
  },
  {
    id: 5,
    name: "Artpoż",
    shortDescription:
      "Local work and safety equipement dealer. Website is re-designed to look fresh and simple.",
    detailedDescription: (
      <>
        <p>
          SSR Website - thanks to <em>Next.js</em> of local work and safety
          equipement dealer.
        </p>
        <p>
          First <em>freelance</em> project. Main purpose was to create clean,
          simple and good looking informative page. Previous version of this
          website was created by me with use of <em>plain JavaScript</em>, HTML
          and CSS. After a while I refactored the code, added new features and
          created new layout.
        </p>
      </>
    ),
    image: artpoz,
    screenshots: [artpozss1, artpozss2, artpozss3],
    liveVersion: "https://artpoz-bhp.pl/",
    repository: "https://github.com/mizuris/artpoz-bhp",
    technologies: ["Next.js", "Bootstrap", "Google-Maps", "CSS-modules"],
  },
  {
    id: 6,
    name: "Montage",
    shortDescription:
      "Official website for European building company. It provides crucial informations about jobs availible in this company, and runs simple mail sender.",
    detailedDescription: (
      <>
        <p>
          Another <em>freelance project</em> for a building company. Website is
          built with <em>Next.js</em> for <em>SEO</em> purposes.
        </p>
        <p>
          Client wanted this website to be informative, and to contain data
          about jobs he is offering.
        </p>
        <p>
          User can contact the owner directly from 'Contact' page thanks to
          simple mail-sender.
        </p>
        <p>
          <em>
            <b>NOTE</b>
          </em>
          : website is not yet release, since one of pages is not finnished. All
          other pages, though, are fully working. On <em>release</em> website
          will have it's domain changed.
        </p>
      </>
    ),
    image: montage,
    screenshots: [montagess1, montagess2, montagess3],
    liveVersion: "https://montage-com.vercel.app/",
    repository: "https://github.com/mizuris/montage",
    technologies: ["Next.js", "Bootstrap", "CSS-modules"],
  },
];
