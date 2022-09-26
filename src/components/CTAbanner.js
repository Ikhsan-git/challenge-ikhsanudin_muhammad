import { Card, Button } from "react-bootstrap"

const banner = () => {
    return(
        <div className="banner">
            <Card className="banner-cards">
                <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
                <p className="banner-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <Button className="bg-success banner-button">Mulai Sewa Mobil</Button>
            </Card>
        </div>
    )
}

export default banner