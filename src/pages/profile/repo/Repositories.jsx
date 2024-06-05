/* eslint-disable react/prop-types */
import RepoList from "./RepoList";
import { useParams } from "react-router-dom";
import PlaceHolderCard from "../../../components/PlaceHolderCard";
import useGitRepoData from "../../../hooks/useGitRepoData";
import useMetaData from "../../../hooks/useMetaData";

const Repositories = () => {
  const { usernames } = useParams();
  const [gitRepoData, error, isError] = useGitRepoData(usernames);
  useMetaData("Repositories");
  console.log(error, isError);

  return (
    <div className="sr-content pt--30">
      <div className="container">
        <div className="sect-main">
          {/* <!-- Start Portfolio Area --> */}
          <div className="rn-portfolio-area " id="portfolio">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    data-aos-once="true"
                    className="section-title text-center"
                  >
                    <span className="subtitle">
                      Visit portfolio and keep your feedback
                    </span>
                    <h2 className="title"> Repositories</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="catt-title">
                    <h3>
                      Some <span className="txt-success">Projects</span>{" "}
                      {"I've "}
                      Build On
                    </h3>
                    <div className="text-right">
                      <a className="rn-btn btn-brd mr--30">
                        <span>Github</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
                {isError ? (
                  <div>Error: API rate limit exceeded.</div>
                ) : gitRepoData.length > 0 ? (
                  gitRepoData.map((repo) => (
                    <RepoList repos={repo} key={repo.id} />
                  ))
                ) : (
                  <>
                    <PlaceHolderCard />
                    <PlaceHolderCard />
                    <PlaceHolderCard />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repositories;
