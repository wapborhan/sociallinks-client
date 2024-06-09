import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Linkcard from "./Linkcard";
import LinkHead from "../../components/LinkHead";
import useLinkscardData from "../../hooks/useLinkscardData";
import useSingleUser from "../../hooks/useSingleUser";
import Loading from "../../components/Loading";

const LinkList = () => {
  const [filteredLinkCards, setFilteredLinkCards] = useState([]);
  const { linkCards, categories } = useLinkscardData();
  const { usernames } = useParams();
  const [singleUser] = useSingleUser(usernames);

  useEffect(() => {
    if (singleUser && singleUser.links) {
      const filteredLinkCards = linkCards.filter(
        (card) => singleUser.links[card.LinkName]
      );
      setFilteredLinkCards(filteredLinkCards);
    }
  }, [linkCards, singleUser]);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {categories.map((cat, index) => {
        const filteredLinks = filteredLinkCards.filter(
          (item) => item.categorie === cat
        );
        return (
          <div key={index}>
            {singleUser && singleUser?.links ? (
              <LinkHead cattTitle={cat} />
            ) : (
              ""
            )}
            <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
              {singleUser?.links?.length < 0 ? (
                <Loading />
              ) : filteredLinks.length > 0 ? (
                filteredLinks.map((linkCard, idx) => (
                  <Linkcard
                    key={idx}
                    linkCard={linkCard}
                    link={singleUser.links}
                  />
                ))
              ) : (
                "No Links Available"
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default LinkList;
