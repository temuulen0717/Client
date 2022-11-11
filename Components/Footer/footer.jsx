import React, { Component } from "react";
import Slider from "react-slick";
import "./footer.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Footer extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div>
        <h2 className="Text">Санал болгох газарууд</h2>
        <div className="Slick">
          <Slider {...settings}>
            <div className="item">
              <img
                src="https://imgs.search.brave.com/2XyZVueknfOJdpWLTaT4GV8hefofebiRdLEoGBfgaGA/rs:fit:717:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC56/c0VnUmVwUTZVaDVP/WWtraEp5bjJnSGFF/NSZwaWQ9QXBp"
                alt=""
                class="image"
              />
              <div className="overlay">
                <h3> GG bois</h3>
              </div>
            </div>
            <div>
              <img
                src="https://imgs.search.brave.com/2XyZVueknfOJdpWLTaT4GV8hefofebiRdLEoGBfgaGA/rs:fit:717:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC56/c0VnUmVwUTZVaDVP/WWtraEp5bjJnSGFF/NSZwaWQ9QXBp"
                alt=""
              />
              <div className="overlay">
                <h3> GG bois</h3>
              </div>
            </div>
            <div>
              <img
                src="https://imgs.search.brave.com/2XyZVueknfOJdpWLTaT4GV8hefofebiRdLEoGBfgaGA/rs:fit:717:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC56/c0VnUmVwUTZVaDVP/WWtraEp5bjJnSGFF/NSZwaWQ9QXBp"
                alt=""
              />
              <div className="overlay">
                {" "}
                <h3>GG bois</h3>
              </div>
            </div>
            <div>
              <img
                src="https://imgs.search.brave.com/2XyZVueknfOJdpWLTaT4GV8hefofebiRdLEoGBfgaGA/rs:fit:717:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC56/c0VnUmVwUTZVaDVP/WWtraEp5bjJnSGFF/NSZwaWQ9QXBp"
                alt=""
              />
              <div className="overlay">
                <h3> GG bois</h3>
              </div>
            </div>
            <div>
              <img
                src="https://imgs.search.brave.com/2XyZVueknfOJdpWLTaT4GV8hefofebiRdLEoGBfgaGA/rs:fit:717:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC56/c0VnUmVwUTZVaDVP/WWtraEp5bjJnSGFF/NSZwaWQ9QXBp"
                alt=""
              />
              <div className="overlay">
                <h3> GG bois</h3>
              </div>
            </div>
            <div>
              <img
                src="https://imgs.search.brave.com/2XyZVueknfOJdpWLTaT4GV8hefofebiRdLEoGBfgaGA/rs:fit:717:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC56/c0VnUmVwUTZVaDVP/WWtraEp5bjJnSGFF/NSZwaWQ9QXBp"
                alt=""
              />
              <div className="overlay">
                <h3> GG bois</h3>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
export default Footer;
