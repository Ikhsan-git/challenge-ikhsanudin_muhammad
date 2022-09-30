import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';


const Faq =() =>{
    return(
        <div className="faq">
            <div className="faq-left">
                <h1>Frequently Asked Question</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="faq-right">
                <Dropdown className='faq-dropdown-button' as={ButtonGroup}>
                    <Button className='faq-dropdown-buttons' variant="none">Apa saja syarat yang dibutuhkan?</Button>

                    <Dropdown.Toggle className='faq-dropdown-toogle' split variant="none" id="dropdown-split-basic" />

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className='faq-dropdown-button' as={ButtonGroup}>
                    <Button className='faq-dropdown-buttons' variant="none">Berapa hari minimal sewa mobil lepas kunci?</Button>

                    <Dropdown.Toggle className='faq-dropdown-toogle' split variant="none" id="dropdown-split-basic" />

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className='faq-dropdown-button' as={ButtonGroup}>
                    <Button className='faq-dropdown-buttons' variant="none">Berapa hari sebelumnya sabaiknya booking sewa mobil?</Button>

                    <Dropdown.Toggle className='faq-dropdown-toogle' split variant="none" id="dropdown-split-basic" />

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className='faq-dropdown-button' as={ButtonGroup}>
                    <Button className='faq-dropdown-buttons' variant="none">Apakah Ada biaya antar-jemput?</Button>

                    <Dropdown.Toggle className='faq-dropdown-toogle' split variant="none" id="dropdown-split-basic" />

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className='faq-dropdown-button' as={ButtonGroup}>
                    <Button className='faq-dropdown-buttons' variant="none">Bagaimana jika terjadi kecelakaan</Button>

                    <Dropdown.Toggle className='faq-dropdown-toogle' split variant="none" id="dropdown-split-basic" />

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}

export default Faq