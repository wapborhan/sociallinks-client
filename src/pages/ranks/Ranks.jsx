import useAllUsers from "../../hooks/useAllUsers";
import RankList from "./RankList";

const Ranks = () => {
  const [allUsers] = useAllUsers();

  console.log(allUsers);

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
              {allUsers.map((user, idx) => (
                <RankList key={idx} user={user} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranks;
