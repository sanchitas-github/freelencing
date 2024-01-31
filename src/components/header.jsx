import React from "react";
import Connect from "./Connect";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                {/* <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a> */}
								<div className="-custom md-4 pd-2 btn-lg page-scroll">
									<Connect/>
								</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
