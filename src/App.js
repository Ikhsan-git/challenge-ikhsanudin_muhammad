import './App.css';
import OffcanvasExample from './components/Navbar';
import Home from './components/Home';
import Ourservice from './components/ourservice';
import Whyus from './components/Whyus';
import Testimoni from './components/Testimoni';
import CTAbanner from './components/CTAbanner';
import Footer from './components/Footer';
import Fax from './components/Fax';
import './style/navbar.css';
import './style/home.css';
import './style/ourservice.css';
import './style/whyus.css';
import './style/testimoni.css';
import './style/CTAbanner.css';
import './style/fax.css';

function App() {
  return (
    <div>
      <div className='home'>
        <OffcanvasExample />
        <Home />
      </div>
        <Ourservice />
        <Whyus />
        <Testimoni />
        <CTAbanner />
        <Fax />
        <Footer />
      </div>
  );
}

export default App;
