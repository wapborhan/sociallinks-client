import { Toaster } from "react-hot-toast";
import Linkcard from "./Linkcard";
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
import LinkHead from "./LinkHead";
import { useEffect, useState } from "react";

const LinkList = () => {
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
      title: "Hacker Rank",
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

  const userData = [
    {
      _id: "6648ca50d4aec032369de298",
      username: "wapborhan",
      email: "borhaninfos@gmail.com",
      name: "Borhan Uddin",
      photo: "links",
      location: "Bheramara, kushtia",
      bio: "Front-End Developer",
      links: {
        github: "wapborhan",
        linkedin: "wapborhan",
        facebook: "wapborhan",
        twitter: "wapborhan",
      },
    },
  ];

  const [allUser, setAllUser] = useState();
  const [filteredLinkCards, setFilteredLinkCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/users")
      .then((res) => res.json())
      .then((data) => setAllUser(data));
  }, []);

  useEffect(() => {
    if (allUser && allUser.length > 0) {
      const userLinks = allUser[0].links;
      const filteredCards = linkCards.filter(
        (card) => userLinks[card.title.toLowerCase()]
      );
      setFilteredLinkCards(filteredCards);
    }
  }, [allUser]);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {categories.map((cat, index) => {
        const filteredLinks = filteredLinkCards.filter(
          (item) => item.categorie === cat
        );
        return (
          <div key={index}>
            {filteredLinks.length > 0 ? <LinkHead cattTitle={cat} /> : ""}
            <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
              {filteredLinks.length > 0
                ? filteredLinks.map((linkCard, idx) => (
                    <Linkcard key={idx} linkCard={linkCard} />
                  ))
                : ""}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default LinkList;
