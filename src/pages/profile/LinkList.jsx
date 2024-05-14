import { Toaster } from "react-hot-toast";
import Linkcard from "./Linkcard";
import {
  FaGgCircle,
  FaGhost,
  FaGithubSquare,
  FaGlobe,
  FaLinkedin,
} from "react-icons/fa";
import LinkHead from "./LinkHead";

const LinkList = () => {
  const categories = ["coding", "professional", "social", "personal"];
  const linkCards = [
    {
      title: "Github",
      categorie: "social",
      icon: <FaGithubSquare />,
      colorClass: "github",
      desc: "Find out my projects",
    },
    {
      title: "LinkedIn",
      categorie: "social",
      icon: <FaLinkedin />,
      colorClass: "linkedin",
      desc: "Find out my projects",
    },
    {
      title: "Google",
      categorie: "social",
      icon: <FaGhost />,
      colorClass: "google",
      desc: "Find out my projects",
    },
    {
      title: "Website",
      categorie: "professional",
      icon: <FaGlobe />,
      colorClass: "google",
      desc: "My Portfolio",
    },
  ];

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {categories.map((cat, index) => {
        const filteredLinks = linkCards.filter(
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
