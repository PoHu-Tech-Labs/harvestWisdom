import React from "react";
import "./Offers.css";
import harvestWisdomLogo from "../../assets/harvestWisdomLogo.png";
import harvestWisdomShop from "../../assets/harvestWisdomShop.jpg";

export default function Offers() {
  return (
    <>
      <div className="offer-main-div">
        <img
          src={harvestWisdomLogo}
          alt="harvest wisdom"
          className="harvest-logo-img"
        />
        <img className="offer-image" src={harvestWisdomShop} alt="Logo" />
        <p className="heading-style">Store Opening on 24th Feb !</p>

        {/* //////////////////////////////////////////////////////// */}

        <div className="Offer-div">
          <div className="Offer-content-div">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="serviceBox">
                    <div className="service-icon">
                      <span>
                        <i className="fa fa-globe"></i>
                      </span>
                    </div>
                    <h3 className="title">Offer on Rs.500/-</h3>
                    <p className="description">
                      On Purchase of Rs.500/- or above & get a Watermelon
                      absolutely free !
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="serviceBox red">
                    <div className="service-icon">
                      <span>
                        <i className="fa fa-rocket"></i>
                      </span>
                    </div>
                    <h3 className="title">Offer on Rs.1000/-</h3>
                    <p className="description">
                      On Purchase of Rs.1000/- or above & get Pure Cow Ghee
                      worth Rs.100/- absolutely free !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* //////////////////////////////////////////////////////// */}

        <div className="Offer-div">
          <div className="Offer-content-div">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="serviceBox">
                    <div className="service-icon">
                      <span>
                        <i className="fa fa-globe"></i>
                      </span>
                    </div>
                    <h3 className="title">Offer on Rs.1500/-</h3>
                    <p className="description">
                      On Purchase of Rs.1500/- or above & get Turmeric(250 gm)
                      worth Rs.150/- absolutely free !
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="serviceBox red">
                    <div className="service-icon">
                      <span>
                        <i className="fa fa-rocket"></i>
                      </span>
                    </div>
                    <h3 className="title">Offer on Rs.2000/-</h3>
                    <p className="description">
                      On Purchase of Rs.1500/- or above & get Cashew(100gm)
                      worth Rs.200/- absolutely free !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="callus-div">Call us to Order on +91-9985972276</div>

        <a href={"https://goo.gl/maps/Bn2dagoT7nqKuytUA"}>
          <button className="visitus">Visit us </button>
        </a>

        {/* //////////////////////////////////////////////////////// */}
      </div>
    </>
  );
}