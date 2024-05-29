import { Link } from "react-router-dom";

const RankList = ({ user }) => {
  const { name, photoUrl, bio, username, address } = user;

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
          {/* <h6 className="subtitle">{bio}</h6> */}
          {/* <h6 className="subtitle">{address}</h6> */}
        </div>
      </div>
      <div className="experience-right">
        <div className="experience-footer d-flex gap-5">
          <div className="my-3">
            {/* <span>Views: 24</span> */}
            {/* {" - "} */}
            <span>Likes: 8</span>
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
