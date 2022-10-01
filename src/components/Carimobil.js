import { Button } from 'react-bootstrap'
import Select from 'react-select'
import img_car from "../assets/image/img_car.png"
const Carimobil = () =>{
    const category = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

      const price = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

      const status = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
    return(
    <div>
        <div className="hal-awal" id="home">
        <div className='left'>
            <div className="wrap-intro">
                <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <p className="deskripsi-home">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
                    untuk sewa mobil selama 24jam..
                </p>
            </div>
        </div>
        
        <div className='right'>
            <img src={img_car} alt="car"/>
        </div>
    </div>
    <div className='section-form'>
    <div className="form">
        <input name='mobil' type="text" placeholder='Search...' className='search'/>
        <Select name='mobil'placeholder='Masukan Kapasitas Mobil' className='form-category' options={category}></Select>
        <Select name='mobil'placeholder='Masukan Harga Sewa per Hari' className='form-price' options={price}></Select>
        <Select name='mobil' placeholder='Disewa' className='form-status' options={status}></Select>
        <Button name='mobil' variant="none"className='form-button' onClick= {(e) => {e.preventDefault(window.location.href='/hasilcari')}}>Cari</Button>
        </div>
    </div>
    </div>
    )
}

export default Carimobil