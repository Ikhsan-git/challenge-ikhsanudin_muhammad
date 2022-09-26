import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';


const Fax =() =>{
    return(
        <div className="fax">
            <div className="fax-left">
                <h1>Frequently Asked Question</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="fax-right">
                <Dropdown className='fax-dropdown-button' as={ButtonGroup}>
                    <Button className='fax-dropdown-buttons' variant="none">Split Button</Button>

                    <Dropdown.Toggle className='fax-dropdown-toogle' split variant="none" id="dropdown-split-basic" />

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className='fax-dropdown-button' as={ButtonGroup}>
                    <Button className='fax-dropdown-buttons' variant="none">Split Button</Button>

                    <Dropdown.Toggle className='fax-dropdown-toogle' split variant="none" id="dropdown-split-basic" />

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className='fax-dropdown-button' as={ButtonGroup}>
                    <Button className='fax-dropdown-buttons' variant="none">Split Button</Button>

                    <Dropdown.Toggle className='fax-dropdown-toogle' split variant="none" id="dropdown-split-basic" />

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className='fax-dropdown-button' as={ButtonGroup}>
                    <Button className='fax-dropdown-buttons' variant="none">Split Button</Button>

                    <Dropdown.Toggle className='fax-dropdown-toogle' split variant="none" id="dropdown-split-basic" />

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className='fax-dropdown-button' as={ButtonGroup}>
                    <Button className='fax-dropdown-buttons' variant="none">Split Button</Button>

                    <Dropdown.Toggle className='fax-dropdown-toogle' split variant="none" id="dropdown-split-basic" />

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

export default Fax