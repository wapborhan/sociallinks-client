import {
  FaGithubSquare,
  FaGlobe,
  FaHackerrank,
  FaLinkedin,
} from "react-icons/fa";
import {
  FaDiscord,
  FaFilePdf,
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareTwitter,
  FaSquareWhatsapp,
  FaTelegram,
} from "react-icons/fa6";
import { PiTextBFill } from "react-icons/pi";
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
    LinkName: "github",
    desc: "Find out my projects",
  },
  {
    title: "Hacker Rank ",
    categorie: "coding",
    icon: <FaHackerrank />,
    LinkName: "hackerRank",
    desc: "Find out my projects",
  },
  {
    title: "Code Forces",
    categorie: "coding",
    icon: <SiCodeforces />,
    LinkName: "codeForces",
    desc: "Find out my projects",
  },
  {
    title: "LinkedIn",
    categorie: "professional",
    icon: <FaLinkedin />,
    LinkName: "linkedin",
    desc: "Find out my projects",
  },
  {
    title: "Resume",
    categorie: "professional",
    icon: <FaFilePdf />,
    LinkName: "resume",
    desc: "Find out my projects",
  },
  {
    title: "Website",
    categorie: "professional",
    icon: <FaGlobe />,
    LinkName: "portfolio",
    desc: "My Portfolio",
  },
  {
    title: "Facebook",
    categorie: "social",
    icon: <FaSquareFacebook />,
    LinkName: "facebook",
    desc: "My Portfolio",
  },
  {
    title: "Twitter",
    categorie: "social",
    icon: <FaSquareTwitter />,
    LinkName: "twitter",
    desc: "My Portfolio",
  },
  {
    title: "Instagram",
    categorie: "social",
    icon: <FaSquareInstagram />,
    LinkName: "instagram",
    desc: "My Portfolio",
  },

  {
    title: "Whatsapp",
    categorie: "instant-messaging",
    icon: <FaSquareWhatsapp />,
    LinkName: "whatsapp",
    desc: "My Portfolio",
  },
  {
    title: "Telegram",
    categorie: "instant-messaging",
    icon: <FaTelegram />,
    LinkName: "telegram",
    desc: "My Portfolio",
  },
  {
    title: "Discord",
    categorie: "instant-messaging",
    icon: <FaDiscord />,
    LinkName: "discord",
    desc: "My Portfolio",
  },
  {
    title: "Blog",
    categorie: "personal",
    icon: <PiTextBFill />,
    LinkName: "blog",
    desc: "My Portfolio",
  },
];

const useLinkscardData = () => {
  return { linkCards, categories };
};

export default useLinkscardData;
