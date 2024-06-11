import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const PopupMenu = ({ menu, toggleMenu }) => {
  const { user } = useAuth();

  return (
    <div
      className={menu ? `popup-mobile-menu  menu-open` : "popup-mobile-menu"}
    >
      <div className="inner">
        <div className="menu-top">
          <div className="menu-header">
            <Link className="logo" to="/">
              <img src="/assets/images/logo.png" className="w-75" alt="logo" />
            </Link>
            <div className="close-button" onClick={toggleMenu}>
              <button className="close-menu-activation close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="content">
          <ul className="primary-menu nav nav-pills onepagenav">
            <li className="nav-item current" onClick={toggleMenu}>
              <Link className="nav-link smoth-animation" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item" onClick={toggleMenu}>
              <Link className="nav-link smoth-animation" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item" onClick={toggleMenu}>
              <Link className="nav-link smoth-animation" to="/ranks">
                Rank
              </Link>
            </li>
            {user && (
              <>
                <li className="nav-item" onClick={toggleMenu}>
                  <Link
                    className="nav-link smoth-animation"
                    to="/profile/liked"
                  >
                    Liked Profiles
                  </Link>
                </li>
                <li className="nav-item" onClick={toggleMenu}>
                  <Link
                    className="nav-link smoth-animation"
                    to={`/profile/update/${user?.reloadUserInfo?.screenName}`}
                  >
                    Update Profiles
                  </Link>
                </li>
                <li className="nav-item" onClick={toggleMenu}>
                  <Link
                    className="nav-link smoth-animation"
                    to={`/profile/${user?.reloadUserInfo?.screenName}`}
                  >
                    My Profile
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PopupMenu;
