import { Link } from "react-router-dom";

const MobileMenu = ({ toggleMenu }) => {
  return (
    <div className="header-style-2 d-block d-lg-none d-xl-none sticky">
      <div className="row align-items-center">
        <div className="col-6">
          <div className="logo">
            <Link to="/">
              <div className="lazyload-wrapper ">
                <img src="/assets/images/logo.png" alt="logo" />
              </div>
            </Link>
          </div>
        </div>
        <div className="col-6">
          <div className="header-right text-end">
            <div className="hamberger-menu" onClick={toggleMenu}>
              <i id="menuBtn" className="feather-menu humberger-menu">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
