import { Toaster } from "react-hot-toast";
import Linkcard from "./Linkcard";

import LinkHead from "./LinkHead";
import { useEffect, useState } from "react";
import useLinkscardData from "../../hooks/useLinkscardData";

const LinkList = () => {
  const [allUser, setAllUser] = useState();
  const [filteredLinkCards, setFilteredLinkCards] = useState([]);
  const { linkCards, categories } = useLinkscardData();

  useEffect(() => {
    fetch("http://localhost:3300/users")
      .then((res) => res.json())
      .then((data) => setAllUser(data));
  }, []);

  useEffect(() => {
    if (allUser && allUser.length > 0) {
      const userLinks = allUser[0].links.map((link) =>
        link.title.toLowerCase()
      );
      const filteredCards = linkCards.filter((card) =>
        userLinks.includes(card.title.toLowerCase())
      );
      setFilteredLinkCards(filteredCards);
    }
  }, [allUser]);

  console.log(allUser);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {/* {categories.map((cat, index) => {
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
      })} */}

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
