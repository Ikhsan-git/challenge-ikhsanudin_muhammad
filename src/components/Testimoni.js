import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import { Card, Image} from "react-bootstrap"
import img_photo from "../assets/image/img_photo.png";
import img_photo2 from "../assets/image/img_photo (1).png";
import rate from "../assets/image/Rate.png";


export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
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
      <div className="testimoni">
        <h2> Testimonial </h2>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h5>
        <Slider className="kartu" {...settings}>
          <div>
            <div className="lebar">
            <Card.Body className="dsp">
                    <Image className="gambar" src={img_photo} alt="complete"/>
                    <div className="kel">
                    <Card.Subtitle className="mb-2"><Image className="bintang" src={rate} alt="rate" /></Card.Subtitle>
                    <Card.Text className="textcard">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eveniet numquam ab alias doloribus ipsum, sint cumque dolorum rerum dolor modi? Beatae ex praesentium officiis qui necessitatibus? Reiciendis quidem porro consequuntur praesentium ab doloremque!
                    </Card.Text>
                    <Card.Text className="date">John Dee 32, Bromo</Card.Text>
                    </div>
                </Card.Body>
            </div>
          </div>

          <div>
            <div className="lebar">
            <Card.Body className="dsp">
                    <Image className="gambar" src={img_photo2} alt="complete"/>
                    <div className="kel">
                    <Card.Subtitle className="mb-2"><Image className="bintang" src={rate} alt="" /></Card.Subtitle>
                    <Card.Text className="textcard">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eveniet numquam ab alias doloribus ipsum, sint cumque dolorum rerum dolor modi? Beatae ex praesentium officiis qui necessitatibus? Reiciendis quidem porro consequuntur praesentium ab doloremque!
                    </Card.Text>
                    <Card.Text className="date">John Dee 32, Bromo</Card.Text>
                    </div>
                </Card.Body>
            </div>
          </div>

          <div>
            <div className="lebar">
            <Card.Body className="dsp">
                    <Image className="gambar" src={img_photo} alt="complete"/>
                    <div className="kel">
                    <Card.Subtitle className="mb-2"><Image className="bintang" src={rate} alt="" /></Card.Subtitle>
                    <Card.Text className="textcard">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eveniet numquam ab alias doloribus ipsum, sint cumque dolorum rerum dolor modi? Beatae ex praesentium officiis qui necessitatibus? Reiciendis quidem porro consequuntur praesentium ab doloremque!
                    </Card.Text>
                    <Card.Text className="date">John Dee 32, Bromo</Card.Text>
                    </div>
                </Card.Body>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}