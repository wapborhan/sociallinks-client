import useAllUsers from "../../hooks/useAllUsers";
import useMetaData from "../../hooks/useMetaData";
import RankList from "./RankList";

const Ranks = () => {
  useMetaData("Ranks");
  const [allUsers, isPending] = useAllUsers();

  console.log(allUsers?.profileViews);

  return (
    <div className="sr-content pt--30 mt--80">
      <div className="container">
        <div className="sect-main">
          {/* <!-- Start Portfolio Area --> */}
          <div className="rn-portfolio-area " id="portfolio">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center">
                    <span className="subtitle">
                      Visit portfolio and keep your feedback
                    </span>
                    <h2 className="title">Ranks</h2>
                  </div>
                </div>
              </div>
              {isPending ? (
                "Loading..."
              ) : allUsers.length > 0 ? (
                allUsers.map((user, idx) => <RankList key={idx} user={user} />)
              ) : (
                <div className="text-center mt-5">No User Found!</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranks;
