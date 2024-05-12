import { FaGithubSquare } from "react-icons/fa";
// import { Link } from "react-router-dom";

const Linkcard = () => {
  return (
    <div
      // key={repo.id}
      className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 mb-3"
    >
      <div className="rn-portfolio w-100 p-4">
        <div className="inner">
          <div className="content p-0">
            <div className="head d-flex justify-content-start align-items-center gap-4">
              <div className="h2 m-0 text-dark">
                <FaGithubSquare />
              </div>
              <div className="mt-3">
                <h5 className="text-dark m-0"> Github</h5>
                <span>Find out my projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Linkcard;
