import Loading from "../../../components/Loading";

const UserBanner = ({ signOutOnGithub, user }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="order-1 order-lg-2 col-lg-9 col-xl-7 mt--35">
          <div className="content">
            <div className="inner mb_sm--80">
              <h1 className="title">
                Hi, I’m
                <span> {user && user?.displayName} </span>
              </h1>
              <div>
                <p className="descriptions">
                  Share your social links and professional profiles with each
                  other in an extraordinary way.
                </p>
                <p className="descriptions">
                  with a single link you can show all of your social media,
                  professional and coding related profile links. {"It's"} very
                  easy to share profiles. Just type your profile usernames and
                  boom! 💥
                </p>
              </div>
            </div>
            <div className="row ">
              <div className="col-lg-12 col-xl-6 col-md-12 col-sm-12 col-12">
                <div className="social-share-inner-left">
                  <span className="title"></span>
                </div>
                {user?.displayName && (
                  <a
                    className="rn-btn cursor-pointer"
                    onClick={signOutOnGithub}
                  >
                    <span>Log Out</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 order-2">
          <div className="imagebanner">
            {user ? (
              <img
                src={user && user?.photoURL}
                alt={user && user?.displayName}
              />
            ) : (
              <Loading />
            )}
          </div>
          <div className="bg-color1"></div>
          <div className="bg-color2"></div>
          <div className="bg-color3"></div>
        </div>
      </div>
    </div>
  );
};

export default UserBanner;
