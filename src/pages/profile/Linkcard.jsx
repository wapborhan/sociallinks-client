/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

const Linkcard = ({ linkCard, link }) => {
  const { title, icon, desc, LinkName } = linkCard;

  const linkValue = link[LinkName];

  // console.log(LinkName.toLowerCase());

  const getProfileLink = () => {
    switch (LinkName) {
      case "github":
        return `https://github.com/${linkValue}`;
      case "facebook":
        return `https://facebook.com/${linkValue}`;
      case "hackerRank":
        return `https://www.hackerrank.com/${linkValue}`;
      case "codeForces":
        return `https://codeforces.com/profile/${linkValue}`;
      case "linkedin":
        return `https://linkedin.com/in/${linkValue}`;
      case "twitter":
        return `https://twitter.com/${linkValue}`;
      case "instagram":
        return `https://instagram.com/${linkValue}`;
      case "telegram":
        return `https://t.me/${linkValue}`;
      case "discord":
        return `https://discord.com/users/${linkValue}`;
      case "whatsapp":
        return `https://wa.me/${linkValue}`;
      default:
        return linkValue;
    }
  };

  const profileLink = getProfileLink();

  const copyLink = () => {
    if (profileLink) {
      navigator.clipboard
        .writeText(profileLink)
        .then(() => {
          toast.success(`${title} link copied to clipboard!`);
        })
        .catch((err) => {
          toast.error(`${err} ${title} failed to copy link!`);
        });
    } else {
      toast.error("No link available to copy!");
    }
  };

  return (
    <div className="col-lg-6 col-xl-4 col-md-6 col-12 mt--15 mt_md--30 mt_sm--30 mb-3">
      <div className="rn-portfolio w-100 p-4">
        <div className="inner">
          <div className="content p-0 d-flex justify-content-between align-items-center gap-0">
            <Link to={profileLink} target="__BLANK">
              <div className="head d-flex justify-content-start align-items-center gap-5  pe-5">
                <div className="h3 m-0 text-dark">{icon}</div>
                <div>
                  <h5 className="text-dark m-0">{title}</h5>
                  <p
                    className="m-0"
                    style={{
                      color: "#888",
                    }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            </Link>
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

Linkcard.propTypes = {
  linkCard: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
  link: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Linkcard;
