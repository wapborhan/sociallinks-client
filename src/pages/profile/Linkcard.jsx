/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import { FaGithubSquare, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Linkcard = ({ linkCard }) => {
  const { title, icon, desc, colorClass } = linkCard;

  const copyLink = () => {
    toast.success("Copied Link function cooming soon!");
  };
  return (
    <div
      // key={repo.id}
      className="col-lg-6 col-xl-4 col-md-6 col-12 mt--15 mt_md--30 mt_sm--30 mb-3"
    >
      <div className={`rn-portfolio w-100 p-4 ${colorClass}`}>
        <div className="inner">
          <div className="content p-0 d-flex justify-content-between align-items-center">
            <div className="head d-flex justify-content-start align-items-center gap-5">
              <div className="h3 m-0 text-dark">{icon}</div>
              <div className="  ">
                <h5 className="text-dark m-0"> {title}</h5>
                <span>{desc}</span>
              </div>
            </div>
            <div className="copys me-4">
              <span className="text-danger cursor-pointer" onClick={copyLink}>
                <FaLink />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Linkcard;
