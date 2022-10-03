import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap'
import Select from 'react-select'

const Appss = () =>{

    const [datas, setDatas] = useState([]);
    const [query, setQuery] = useState ("");

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


    const getCars = async () => {
        const cars = await fetch("https://bootcamp-rent-car.herokuapp.com/admin/car")
        const value = await cars.json()
        
        setDatas(value)
        
      }

      useEffect (() =>{
        getCars()
    
      }, [])

    return (
    <div className="hasil">
        <div className="hasil-benner">
        </div>
        <div className='section-form'>
        
        <div className='align-hasil'>
        <div className="form">
          <p className='pencarian'>Pencarianmu</p>
        <div className='title-form'>
          <p>Nama Mobil</p>
          <p>Katagori</p>
          <p>Harga</p>
          <p>Status</p>
          <p className='clear'></p>
        </div>
        <div className='form-input'>
        <input name='mobil' type="text" placeholder='Search...' className='search' onChange={(e) => setQuery(e.target.value)}/>
        <Select name='mobil'placeholder='Masukan Kapasitas Mobil' className='form-category' options={category}></Select>
        <Select name='mobil'placeholder='Masukan Harga Sewa per Hari' className='form-price' options={price}></Select>
        <Select name='mobil' placeholder='Disewa' className='form-status' options={status}></Select>
        <Button name='mobil' variant="none"className='form-button2'>Edit</Button>
        </div>
        </div>
        </div>
    </div>
      <div className='hasil-cari'>
        {datas.filter((data) => {
          if (!data || !data.name) {
            return false;
        }
           
            return data.name.toLowerCase().includes(query)
        }).map(data => (
            <div className='card-hasil-mobil'>
            <div className='hasil-card' key={data.id}>
              <img className='gambar-mobil' src={data.image} alt="gambar" />
              <div className='nama-mobil'>{data.name}</div>
              <div className='category-mobil'>{data.category}</div>
              <div className='price-mobil'>Rp. {data.price} / Hari</div>
              <div className='deskripsi-mobil'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
              <Button name='mobil-hasil' variant="none" className='button-mobil' onClick= {(e) => {e.preventDefault(window.location.href='/detailpaket')}}>Pilih Mobil</Button>
            </div> 
            </div>
          
      ))} 
      </div>
    </div>
  );
}

export default Appss;