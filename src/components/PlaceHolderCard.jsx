import { FaEye, FaRegCheckCircle, FaRegStar } from "react-icons/fa";
import { VscRepoForked } from "react-icons/vsc";

const PlaceHolderCard = () => {
  return (
    <div
      // key={repo.id}
      className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 mb-3"
    >
      <div className="rn-portfolio w-100 placeholder-glow">
        <div className="inner">
          <div className="thumbnail">
            <div className="owner d-flex align-items-end">
              <img
                width={300}
                height={300}
                className="img-fluid w-100 rounded-circle placeholder "
                alt="Profile"
              />
            </div>
          </div>

          <div className="content">
            <div className="head d-flex justify-content-between">
              <h4 className="title text-uppercase mb-5">
                <a className="d-flex">
                  <span style={{ color: "red", marginRight: "10px" }}>
                    <FaRegCheckCircle />
                  </span>
                  <span className="placeholder  rounded">Repo Name</span>
                  <i></i>
                </a>
              </h4>
              <div className="live">
                <span title="Live" className="btn card-btn ">
                  <span className="placeholder rounded">BTN</span>
                </span>
              </div>
            </div>
            <div className="category-info p-0">
              <div className="category-list">
                <div className="p-1  fw-bolder text-uppercase lang-btns  placeholder rounded">
                  Button
                </div>
              </div>
              <div className="meta">
                <div className="card-btn-container d-flex">
                  <div>
                    <a className="btn card-btn placeholder" title="Star">
                      <FaRegStar />
                    </a>
                  </div>
                  <div>
                    <a className="btn card-btn placeholder" title="Watch">
                      <FaEye />
                    </a>
                  </div>
                  <div>
                    <a className="btn card-btn placeholder" title="Fork">
                      <VscRepoForked />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceHolderCard;
