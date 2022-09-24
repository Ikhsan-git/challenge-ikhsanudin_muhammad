import './App.css';
// import ColorSchemesExample from './components/Navbar';
import Home from './components/Home';
import Ourservice from './components/ourservice';
import Whyus from './components/Whyus';
import Testimoni from './components/Testimoni';
import './style/navbar.css';
import './style/home.css';
import './style/ourservice.css';
import './style/whyus.css';
import './style/testimoni.css';

function App() {
  return (
    <div>
      <div className='home'>
        {/* <ColorSchemesExample /> */}
        <Home />
      </div>
        <Ourservice />
        <Whyus />
        <Testimoni />
      </div>
  );
}

export default App;
