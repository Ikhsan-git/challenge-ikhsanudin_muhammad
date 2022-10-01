import img_car from "../assets/image/img_car.png"
import { Button } from "react-bootstrap"

const Home = () =>{
    return(
        <div className="hal-awal" id="home">
            <div className='left'>
                <div className="wrap-intro">
                    <h1>Sewa 8 Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                    <p className="deskripsi-home">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
                        untuk sewa mobil selama 24jam.
                    </p>
                    <Button className="bg-success btnsewa" onClick= {(e) => {e.preventDefault(window.location.href='/carimobil')}}
> Mulai Sewa Mobil </Button>
                </div>
            </div>
            <div className='right'>
                <img src={img_car} alt="car"/>
            </div>
        </div>
    )
}

export default Home