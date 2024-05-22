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
    LinkName: "github",
    desc: "Find out my projects",
  },
  {
    title: "Hacker Rank ",
    categorie: "coding",
    icon: <FaHackerrank />,
    LinkName: "hacker-rank",
    desc: "Find out my projects",
  },
  {
    title: "Code Forces",
    categorie: "coding",
    icon: <SiCodeforces />,
    LinkName: "code-forces",
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
    title: "Blog",
    categorie: "personal",
    icon: <FaSquareInstagram />,
    LinkName: "google",
    desc: "My Portfolio",
  },
  {
    title: "Whatsapp",
    categorie: "instant-messaging",
    icon: <FaSquareWhatsapp />,
    LinkName: "google",
    desc: "My Portfolio",
  },
  {
    title: "Telegram",
    categorie: "instant-messaging",
    icon: <FaTelegram />,
    LinkName: "google",
    desc: "My Portfolio",
  },
  {
    title: "Slack",
    categorie: "instant-messaging",
    icon: <FaSlack />,
    LinkName: "google",
    desc: "My Portfolio",
  },
  {
    title: "Discord",
    categorie: "instant-messaging",
    icon: <FaDiscord />,
    LinkName: "google",
    desc: "My Portfolio",
  },
];

const useLinkscardData = () => {
  return { linkCards, categories };
};

export default useLinkscardData;
