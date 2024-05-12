/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import RepoList from "./RepoList";
import { AuthContex } from "../../provider/AuthProvider";
import axios from "axios";

const Repositories = () => {
  const [repos, setRepos] = useState();
  const { user } = useContext(AuthContex);
  const username = user?.reloadUserInfo?.screenName;

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/users/${username}/repos?page=1&per_page=99&clientId=${
          import.meta.env.VITE_clientID
        }&clientSecret=${import.meta.env.VITE_clientSecret}`,
        {
          auth: import.meta.env.VITE_GITHUB_USERNAME,
          password: import.meta.env.VITE_GITHUB_OLD_TOKEN,
        }
      )
      .then((response) => {
        setRepos(response.data);
      });
  }, [username]);
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
                      {"I've"}
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
                {repos
                  ? repos?.map((repo) => {
                      return <RepoList repos={repo} key={repo.id} />;
                    })
                  : "Loading"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repositories;
