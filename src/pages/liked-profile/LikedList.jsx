import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const LikedList = ({ user }) => {
  const [heart, setHeart] = useState(false);
  const { name, photoUrl } = user;

  const toggleHeart = () => {
    setHeart(!heart);
  };
  return (
    <div
      // key={repo.id}
      className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 mb-3"
    >
      <div className="experience-style-two aos-init aos-animate liked-profile">
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
          <div className="experience-center">
            <h4 className="experience-title">{name}</h4>
          </div>
        </div>
        <div className="experience-right">
          <div
            className="experience-footer p-3 cursor-pointer"
            onClick={toggleHeart}
          >
            {heart ? <FaRegHeart /> : <FaHeart color="#f9004d" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikedList;
