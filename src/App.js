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
import './style/navbar.css';
import './style/home.css';
import './style/ourservice.css';
import './style/whyus.css';
import './style/testimoni.css';
import './style/CTAbanner.css';
import './style/faq.css';
import './style/footer.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
        </div>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
