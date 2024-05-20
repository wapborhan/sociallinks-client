import {
  FaGithubSquare,
  FaGlobe,
  FaHackerrank,
  FaLinkedin,
} from "react-icons/fa";
import {
  FaDiscord,
  FaFilePdf,
  FaSlack,
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareTwitter,
  FaSquareWhatsapp,
  FaTelegram,
} from "react-icons/fa6";
import { SiCodeforces } from "react-icons/si";

const categories = [
  "coding",
  "professional",
  "social",
  "instant-messaging",
  "personal",
];

const linkCards = [
  {
    title: "Github",
    categorie: "coding",
    icon: <FaGithubSquare />,
    colorClass: "github",
    desc: "Find out my projects",
  },
  {
    title: "Hacker Rank ",
    categorie: "coding",
    icon: <FaHackerrank />,
    colorClass: "github",
    desc: "Find out my projects",
  },
  {
    title: "Code Forces",
    categorie: "coding",
    icon: <SiCodeforces />,
    colorClass: "github",
    desc: "Find out my projects",
  },
  {
    title: "LinkedIn",
    categorie: "professional",
    icon: <FaLinkedin />,
    colorClass: "linkedin",
    desc: "Find out my projects",
  },
  {
    title: "Resume",
    categorie: "professional",
    icon: <FaFilePdf />,
    colorClass: "linkedin",
    desc: "Find out my projects",
  },
  {
    title: "Website",
    categorie: "professional",
    icon: <FaGlobe />,
    colorClass: "google",
    desc: "My Portfolio",
  },
  {
    title: "Facebook",
    categorie: "social",
    icon: <FaSquareFacebook />,
    colorClass: "google",
    desc: "My Portfolio",
  },
  {
    title: "Twitter",
    categorie: "social",
    icon: <FaSquareTwitter />,
    colorClass: "google",
    desc: "My Portfolio",
  },
  {
    title: "Instagram",
    categorie: "social",
    icon: <FaSquareInstagram />,
    colorClass: "google",
    desc: "My Portfolio",
  },
  {
    title: "Blog",
    categorie: "personal",
    icon: <FaSquareInstagram />,
    colorClass: "google",
    desc: "My Portfolio",
  },
  {
    title: "Whatsapp",
    categorie: "instant-messaging",
    icon: <FaSquareWhatsapp />,
    colorClass: "google",
    desc: "My Portfolio",
  },
  {
    title: "Telegram",
    categorie: "instant-messaging",
    icon: <FaTelegram />,
    colorClass: "google",
    desc: "My Portfolio",
  },
  {
    title: "Slack",
    categorie: "instant-messaging",
    icon: <FaSlack />,
    colorClass: "google",
    desc: "My Portfolio",
  },
  {
    title: "Discord",
    categorie: "instant-messaging",
    icon: <FaDiscord />,
    colorClass: "google",
    desc: "My Portfolio",
  },
];

const useLinkscardData = () => {
  return { linkCards, categories };
};

export default useLinkscardData;
