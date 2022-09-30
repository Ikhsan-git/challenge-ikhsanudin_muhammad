import icon_facebook from "../assets/image/icon_facebook.png"
import icon_instagram from "../assets/image/icon_instagram.png"
import icon_mail from "../assets/image/icon_mail.png"
import icon_twitch from "../assets/image/icon_twitch.png"
import icon_twitter from "../assets/image/icon_twitter.png"

const Footer = () => {
    return(
        <footer>
            <div className="footer-data">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            <div className="footer-nav">
                <a href="#our">Our services</a>
                <a href="#why">Why Us</a>
                <a href="#tets">Testimonial</a>
                <a href="#faq">FAQ</a>
            </div>
            <div className="footer-sosmed">
                <p>Connect with us</p>
                <div className="footer-img">
                    <img src={icon_facebook} alt="sosmed" />
                    <img src={icon_instagram} alt="sosmed" />
                    <img src={icon_twitter} alt="sosmed" />
                    <img src={icon_mail} alt="sosmed" />
                    <img src={icon_twitch} alt="sosmed" />
                </div>
            </div>
            <div className="footer-brand">
                <p>Copyright Binar 2022</p>
                <div className="footer-logo"></div>
            </div>
        </footer>
    )
}

export default Footer