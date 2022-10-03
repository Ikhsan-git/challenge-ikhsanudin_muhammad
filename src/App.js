import './App.css';
import OffcanvasExample from './components/Navbar';
import Home from './components/Home';
import Ourservice from './components/ourservice';
import Whyus from './components/Whyus';
import Testimoni from './components/Testimoni';
import CTAbanner from './components/CTAbanner';
import Footer from './components/Footer';
import Faq from './components/Faq';
import Carimobil from './components/Carimobil';
import Hasilcari from './components/Hasilcari';
import Detailpaket from './components/Detailpaket';
import './style/navbar.css';
import './style/home.css';
import './style/ourservice.css';
import './style/whyus.css';
import './style/testimoni.css';
import './style/CTAbanner.css';
import './style/faq.css';
import './style/footer.css';
import './style/carimobil.css';
import './style/hasilcari.css';
import './style/detailpaket.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
        <OffcanvasExample />
          <Switch>
          <div className='home'>
            <Route path="/" exact component={Home} />
            <Route exact path="/carimobil" component={Carimobil} />
            <Route path="/" exact component={Ourservice} />
            <Route path="/" exact component={Whyus} />
            <Route path="/" exact component={Testimoni} />
            <Route path="/" exact component={CTAbanner} />
            <Route path="/" exact component={Faq} />
            <Route path="/hasilcari" exact component={Hasilcari} />
            <Route path="/detailpaket" exact component={Detailpaket} />
        </div>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
