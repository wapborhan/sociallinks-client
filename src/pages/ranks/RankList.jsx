import { Link } from "react-router-dom";

const RankList = ({ user }) => {
  const { name, photoUrl, bio, username } = user;

  return (
    <div>
      <div className="experience-style-two aos-init aos-animate">
        <div className="experience-left">
          <div className="experience-image">
            <img
              loading="lazy"
              decoding="async"
              width="150"
              height="150"
              src={photoUrl}
              className="attachment-full size-full wp-image-3519"
              alt={name}
            />
          </div>
          <div className="experience-center">
            <h4 className="experience-title">{name}</h4>
            <h6 className="subtitle">{bio}</h6>
          </div>
        </div>
        <div className="experience-right">
          <div className="experience-footer">
            <Link className="rn-btn" to={`/profile/${username}`}>
              <span>View Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankList;
