import { Card, Image} from "react-bootstrap"
import complete from "../assets/image/icon_complete.png";
import hrs from "../assets/image/icon_24hrs.png";
import price from "../assets/image/icon_price.png";
import profesional from "../assets/image/icon_professional.png";

const Whyus = () =>{
    return(
        <div className="whyus">
            <div className="title-whyus">
            <h1>Why Us?</h1>
            <h6>Mengapa harus pilih Binar Car Rental?</h6>
            </div>
            <div className="card-whyus">
            <Card className="card">
                <Card.Body>
                    <Image className="mb-3" width={30} src={complete} alt="complete"/>
                    <Card.Subtitle className="mb-2">Mobil Lengkap</Card.Subtitle>
                    <Card.Text>
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Image className="mb-3" width={30} src={price} alt="complete"/>
                    <Card.Subtitle className="mb-2">Harga Murah</Card.Subtitle>
                    <Card.Text>
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Image className="mb-3" width={30} src={hrs} alt="complete"/>
                    <Card.Subtitle className="mb-2">Layanan 24 Jam</Card.Subtitle>
                    <Card.Text>
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Image className="mb-3" width={30} src={profesional} alt="complete"/>
                    <Card.Subtitle className="mb-2">Sopir profesional</Card.Subtitle>
                    <Card.Text>
                    Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default Whyus