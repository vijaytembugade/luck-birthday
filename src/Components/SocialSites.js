import React from "react";

const SocialSites = () => {
  return (
    <div>
      <div className="social-main">
        <div>
          <a href="https://github.com/vijaytembugade?tab=repositories">
            <img
              alt="github"
              src="https://img.icons8.com/material-outlined/96/000000/github.png"
            />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/vijay_tembugade">
            <img
              alt="socialsites"
              src="https://img.icons8.com/ios-glyphs/90/000000/twitter--v1.png"
            />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/vijay.tembugade">
            <img
              alt="socialsites"
              src="https://img.icons8.com/ios-glyphs/90/000000/facebook.png"
            />
          </a>
        </div>
        <div className="line-break">
          <a href="https://www.linkedin.com/in/vijaytembugade/">
            <img
              alt="socialsites"
              src="https://img.icons8.com/material-rounded/96/000000/linkedin--v1.png"
            />
          </a>
        </div>
      </div>
      <div className="ending">© 2021 | Vijay Tembugade | Privacy Policy</div>
    </div>
  );
};

export default SocialSites;
