import img_service from "../assets/image/img_service.png";
import Ellipse from "../assets/image/Group 53.png";

const Ourservice = () =>{
    return(
        <div className="our" id="our">
            <img className="img-service" src={img_service} alt="service" />

            <div className="right-service">

                <h1 className="h1-service">Best Car Rental for any kind of trip in (Lokasimu)!</h1>

                <p className="deskripsi-service">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>

                    <div className="group-service">
                        <img className="ceklis-service" src={Ellipse} alt="ceklis" />
                        <h1>Sewa Mobil Dengan Supir di Bali 12 Jam</h1>
                    </div>
                    <div className="group-service">
                        <img className="ceklis-service" src={Ellipse} alt="ceklis" />
                        <h1>Sewa Mobil Lepas Kunci di Bali 24 Jam</h1>
                    </div>
                    <div className="group-service">
                        <img className="ceklis-service" src={Ellipse} alt="ceklis" />
                        <h1>Sewa Mobil Jangka Panjang Bulanan</h1>
                    </div>
                    <div className="group-service">
                        <img className="ceklis-service" src={Ellipse} alt="ceklis" />
                        <h1>Gratis Antar - Jemput Mobil di Bandara</h1>
                    </div>
                    <div className="group-service">
                        <img className="ceklis-service" src={Ellipse} alt="ceklis" />
                        <h1>Layanan Airport Transfer / Drop In Out</h1>
                    </div>

            </div>

        </div>
    )
}

export default Ourservice