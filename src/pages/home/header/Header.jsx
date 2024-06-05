import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../../provider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContex);

  return (
    <header className="rn-header haeder-default black-logo-version header--fixed header--sticky">
      <div className="header-wrapper m--0 pl--105 pr--105 rn-popup-mobile-menu row align-items-center">
        <div className="col-lg-2 col-6">
          <div className="header-left">
            <div className="logo">
              <Link to="/">
                <img src="/assets/images/logo.png" alt="logo" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-10 col-6">
          <div className="header-center">
            <nav
              id="sideNavs"
              className="mainmenu-nav navbar-example2 onepagenav"
            >
              <ul className="primary-menu nav nav-pills">
                <li className="nav-item current">
                  <Link className="nav-link smoth-animation" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link smoth-animation" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link smoth-animation" to="/ranks">
                    Rank
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link smoth-animation"
                    to="/profile/liked"
                  >
                    Liked Profiles
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link smoth-animation"
                    to={`/profile/update/${user?.reloadUserInfo?.screenName}`}
                  >
                    Update Profiles
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link smoth-animation"
                    to={`/profile/${user?.reloadUserInfo?.screenName}`}
                  >
                    My Profile
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
