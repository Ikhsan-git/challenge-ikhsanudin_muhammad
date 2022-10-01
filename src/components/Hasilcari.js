import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap'
import Select from 'react-select'

const Appss = () =>{

    const [datas, setDatas] = useState([]);
    const [query, setQuery] = useState ("");

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
    <div className="form">
        <input name='mobil' type="text" placeholder='Search...' className='search' onChange={(e) => setQuery(e.target.value)} />
        <Select name='mobil'placeholder='Masukan Kapasitas Mobil' className='form-category' options={category}></Select>
        <Select name='mobil'placeholder='Masukan Harga Sewa per Hari' className='form-price' options={price}></Select>
        <Select name='mobil' placeholder='Disewa' className='form-status' options={status}></Select>
        <Button name='mobil' variant="none"className='form-button' onClick= {(e) => {e.preventDefault(window.location.href='/hasilcari')}}>Cari</Button>
        </div>
    </div>
      <div>
        {datas.filter((data) => {
          if (!data || !data.name) {
            return false;
        }
            
            return data.name.toLowerCase().includes(query)
        }).map(data => (
          <div key={data.id}>
            <div>{data.name}</div>
          <img src={data.image} alt="gambar" />
          <div>{data.category}</div>
          <div>{data.price}</div>
          <button>test</button>
          </div>
      ))}
      </div>
    </div>
  );
}

export default Appss;