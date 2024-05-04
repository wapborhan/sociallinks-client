import React from "react";

const Banner = () => {
  return (
    <div id="home" className="rn-slider-area">
      <div className="slide slider-style-4 bg_image bg_image--1">
        <div className="container">
          <div className="row">
            <div className="order-2 order-lg-1 col-lg-9 col-xl-7">
              <div className="content">
                <div className="inner mb_sm--80">
                  <h1 className="title">
                    Hi, I’m <span>Guest</span>
                  </h1>
                  <div>
                    <p className="descriptions">
                      Share your social links and professional profiles with
                      each other in an extraordinary way.
                    </p>
                    <p className="descriptions">
                      with a single link you can show all of your social media,
                      professional and coding related profile links. {"It's"}{" "}
                      very easy to share profiles. Just type your profile
                      usernames and boom! 💥
                    </p>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-lg-12 col-xl-6 col-md-12 col-sm-12 col-12">
                    <div className="social-share-inner-left">
                      <span className="title"></span>
                    </div>
                    <a
                      class="rn-btn"
                      target="_blank"
                      href="https://themeforest.net/checkout/from_item/33188244?license=regular"
                    >
                      <span>Join With Github</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
