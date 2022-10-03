import { Button } from 'react-bootstrap'
import Select from 'react-select'
import img_car from "../assets/image/img_car.png"
const Carimobil = () =>{
    const category = [
        { value: '2 - 4 Orang', label: '2 - 4 Orang' },
        { value: '4 - 6 Orang', label: '4 - 6 Orang' },
        { value: '6 - 8 Orang', label: '6 - 8 Orang' }
      ]

      const price = [
        { value: '< Rp. 400.000', label: '< Rp. 400.000' },
        { value: 'Rp. 400.000 - Rp. 600.000', label: 'Rp. 400.000 - Rp. 600.000' },
        { value: '< Rp. 400.000', label: '< Rp. 400.000' }
      ]

      const status = [
        { value: 'Sewa', label: 'Sewa' },
        { value: 'Disewakan', label: 'Disewakan' },
        
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
        
        <div className='align'>
        <div className="form">
        <div className='title-form'>
          <p>Nama Mobil</p>
          <p>Katagori</p>
          <p>Harga</p>
          <p>Status</p>
          <p className='clear'></p>
        </div>
        <div className='form-input'>
        <input name='mobil' type="text" placeholder='Search...' className='search'/>
        <Select name='mobil'placeholder='Masukan Kapasitas Mobil' className='form-category' options={category}></Select>
        <Select name='mobil'placeholder='Masukan Harga Sewa per Hari' className='form-price' options={price}></Select>
        <Select name='mobil' placeholder='Disewa' className='form-status' options={status}></Select>
        <Button name='mobil' variant="none"className='form-button' onClick= {(e) => {e.preventDefault(window.location.href='/hasilcari')}}>Cari</Button>
        </div>
        </div>
        </div>
    </div>
    </div>
    )
}

export default Carimobil