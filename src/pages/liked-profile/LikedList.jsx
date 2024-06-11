const LikedList = ({ user }) => {
  const { name, photoUrl } = user;

  return (
    <div
      // key={repo.id}
      className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 mb-3"
    >
      <div className="experience-style-two aos-init aos-animate liked-profile">
        <div className="experience-lefts">
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
        </div>
        <div className="experience-center">
          <h4 className="experience-title">{name}</h4>
        </div>
        {/* <div className="experience-right">s</div> */}
      </div>
    </div>
  );
};

export default LikedList;
