import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="cardslide">
        <h2> Responsive </h2>
        <Slider className="slider" {...settings}>
        <div className="pd">
          <div className="testi card">
            <h3>1</h3>
          </div>
        </div>

        <div className="pd">
          <div className="testi card">
            <h3>1</h3>
          </div>
        </div>

        <div className="pd">
          <div className="testi card">
            <h3>1</h3>
          </div>
        </div>

        <div className="pd">
          <div className="testi card">
            <h3>1</h3>
          </div>
        </div>

        <div className="pd">
          <div className="testi card">
            <h3>1</h3>
          </div>
        </div>

        <div className="pd">
          <div className="testi card">
            <h3>1</h3>
          </div>
        </div>

        <div className="pd">
          <div className="testi card">
            <h3>1</h3>
          </div>
        </div>
          
        </Slider>
      </div>
    );
  }
}