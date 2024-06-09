import { FaEye, FaThumbsUp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const RankList = ({ user }) => {
  const { name, photoUrl, username, profileLikes, profileViews } = user;

  console.log(user);

  return (
    <div className="experience-style-two aos-init aos-animate">
      <div className="experience-left">
        <div className="experience-image">
          <img
            loading="lazy"
            decoding="async"
            width="50"
            height="50"
            src={photoUrl}
            className="attachment-full size-full wp-image-3519"
            alt={name}
          />
        </div>
        <div className="experience-center gap-2 d-flex  flex-column">
          <h4 className="experience-title">{name}</h4>
        </div>
      </div>
      <div className="experience-right">
        <div className="experience-footer d-flex gap-4">
          <div className="my-0 text-black d-flex gap-4 justify-content-center">
            <div
              className="rn-btn d-flex gap-3 py-3 px-4  rounded justify-content-center align-items-center"
              style={{ color: "#f9004d" }}
            >
              <FaEye />
              <span className="text-black">{" " + profileViews.length}</span>
            </div>

            <div
              className="rn-btn d-flex gap-3 py-3 px-4 rounded justify-content-center align-items-center"
              style={{ color: "#f9004d" }}
            >
              <FaThumbsUp />
              <span className="text-black">{" " + profileLikes.length}</span>
            </div>
          </div>
          <Link className="rn-btn" to={`/profile/${username}`}>
            <span>View Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RankList;
