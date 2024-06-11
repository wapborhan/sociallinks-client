import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import MobileMenu from "./MobileMenu";
import PopupMenu from "./PopupMenu";
import { useState } from "react";

const Header = () => {
  const { user } = useAuth();
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <header className="rn-header haeder-default black-logo-version header--fixed header--sticky">
        <div className="header-wrapper m--0 rn-popup-mobile-menu row align-items-center d-none d-xl-flex d-lg-flex header-style-2 header-padding">
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
                  {user && (
                    <>
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
                    </>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <MobileMenu toggleMenu={toggleMenu} />
        <PopupMenu toggleMenu={toggleMenu} menu={menu} />
      </header>
    </>
  );
};

export default Header;
