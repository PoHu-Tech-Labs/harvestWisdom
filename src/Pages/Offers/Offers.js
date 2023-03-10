import React from "react";
import "./Offers.css";
import harvestWisdomLogo from "../../assets/harvestWisdomLogo.png";
import harvestWisdomShop from "../../assets/harvestWisdomShop.jpg";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import WhatsAppImage from "../../assets/whatsapp.png";
import WhatsAppImage from "../../assets/whatsapp.gif";
// import googlemaps from "../../assets/googlemaps.png";
import googlemaps from "../../assets/googlemaps.gif";
import call from "../../assets/call.gif";

export default function Offers() {
  return (
    <>
      <a href={"https://wa.me/919140657258?text="} target="_blank">
        <img className="whatsapp" src={WhatsAppImage} alt="Logo" />
      </a>

      <a href={"https://goo.gl/maps/Bn2dagoT7nqKuytUA"} target="_blank">
        <div>
          <img className="googlemaps" src={googlemaps} alt="Logo" />
        </div>
      </a>
      <a href="tel:+919985972276" target="_blank">
        <img className="call" src={call} alt="Logo" />
        <p className="ordernow">Call us to Order Now !</p>
      </a>
      <div className="offer-main-div">
        <img
          src={harvestWisdomLogo}
          alt="harvest wisdom"
          className="harvest-logo-img"
        />
        <img className="offer-image" src={harvestWisdomShop} alt="Logo" />
        <p className="heading-style">Grand opening on 24 Feb !</p>
        <p className="heading-style2">Kakatiya Hills Avenue 2, Rd no 6</p>

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
                      Get a Watermelon absolutely free !
                    </p>
                  </div>
                </div>
                {/* ////////////////////////////////////////////////// */}
                <div className="col-md-3 col-sm-6">
                  <div className="serviceBox red">
                    <div className="service-icon">
                      <span>
                        <i className="fa fa-rocket"></i>
                      </span>
                    </div>
                    <h3 className="title">Offer on Rs.1000/-</h3>
                    <p className="description">
                      Get Pooja Cow Ghee worth Rs.100/- absolutely free !
                    </p>
                  </div>
                </div>
                {/* ////////////////////////////////////////////////// */}
                <div className="col-md-3 col-sm-6">
                  <div className="serviceBox">
                    <div className="service-icon">
                      <span>
                        <i className="fa fa-globe"></i>
                      </span>
                    </div>
                    <h3 className="title">Offer on Rs.1500/-</h3>
                    <p className="description">
                      Free Turmeric worth Rs.150/- + Free Master slice
                      service(cut fruits+veggies) !
                    </p>
                  </div>
                </div>
                {/* ////////////////////////////////////////////////// */}
                <div className="col-md-3 col-sm-6">
                  <div className="serviceBox red">
                    <div className="service-icon">
                      <span>
                        <i className="fa fa-rocket"></i>
                      </span>
                    </div>
                    <h3 className="title">Offer on Rs.2000/-</h3>
                    <p className="description">
                      Free Cashew worth Rs.150/- + Free Master slice service(cut
                      fruits+veggies) !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* //////////////////////////////////////////////////////// */}

        {/* <div className="Offer-div">
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
                      On Purchase of Rs.2000/- or above & get Cashew(100gm)
                      worth Rs.200/- absolutely free !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="callus-div">Call us to Order on +91-9985972276</div> */}

        {/* //////////////////////////////////////////////////////// */}
      </div>
    </>
  );
}
