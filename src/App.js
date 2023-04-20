import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './Components/Header';
import Websites from './Components/Websites';
import FastBoxWork from './Components/FastBoxWork';
import Network from './Components/Network';
import Ourspecialties from './components/Ourspecialties';
import Calculateprice from './components/Calculateprice';
import Gps from './components/Gps';
import Clients from './components/Clients';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      < Header/>
      <Websites/>
      <FastBoxWork/>
      <Network/>
      <Ourspecialties/>
      <Calculateprice/>
      <Gps/>
      <Clients/>
      <Footer/>
    </div>
  );
}

export default App;
