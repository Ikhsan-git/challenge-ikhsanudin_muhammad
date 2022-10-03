import { Button } from 'react-bootstrap'
import Select from 'react-select'
import { useState } from 'react';
const Detailpaket = () => {

    const [setQuery] = useState ("");


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
        <div className='detail-paket'>
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
        <div className='form-input' disabled>
        <input name='mobil' type="text" placeholder='Search...' className='search' onChange={(e) => setQuery(e.target.value)} disabled/>
        <Select name='mobil'placeholder='Masukan Kapasitas Mobil' className='form-category' options={category} disabled ></Select>
        <Select name='mobil'placeholder='Masukan Harga Sewa per Hari' className='form-price' options={price} disabled ></Select>
        <Select name='mobil' placeholder='Disewa' className='form-status'  options={status} disabled></Select>
        <Button name='mobil' variant="none"className='form-button2' disabled>Edit</Button>
        </div>
        </div>
        </div>
        </div>

        <div className='detail-card'>
            <div className='detail-card-kiri'>
                <p>Tentang Paket</p>
                <p>Include</p>
                <ul>
                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                    <li>Sudah termasuk bensin selama 12 jam</li>
                    <li>Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                </ul>
                <p>Exclude</p>
                <ul>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
                <p>Refund, Reschedule, Overtime</p>
                <ul>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    
                </ul>
            </div>
            <div className='detail-card-kanan'>
                <div className='detail-card-mobil'>
                    <img className='detail-mobil' alt="detail mobil"/>
                    <div className='detail-nama-mobil'>nama mobil</div>
                    <div className='detail-katagori-mobil'>kategori</div>
                    <div className='detail-harga-mobil'>
                        <div className='total'>Total</div>
                        <div className='total-price'>Rp. 0</div>
                    </div>

                </div>
            </div>
        </div>
        </div>
    )
}

export default Detailpaket