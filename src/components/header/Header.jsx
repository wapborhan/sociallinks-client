const Header = () => {
  return (
    <header className="rn-header haeder-default black-logo-version header--fixed header--sticky">
      <div className="header-wrapper m--0 pl--105 pr--105 rn-popup-mobile-menu row align-items-center">
        <div className="col-lg-2 col-6">
          <div className="header-left">
            <div className="logo">
              <a href="index.html">
                <img src="assets/images/logo/logos-circle.png" alt="logo" />
              </a>
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
                  <a className="nav-link smoth-animation" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link smoth-animation" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link smoth-animation" href="#skill">
                    Rank
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link smoth-animation" href="#contacts">
                    Liked Profiles
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link smoth-animation" href="#contacts">
                    My Profile
                  </a>
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
