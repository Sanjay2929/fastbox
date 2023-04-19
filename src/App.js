import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Websites from './Components/Websites';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FastBoxWork from './Components/FastBoxWork';
import Network from './Components/Network';
import Ourspecialties from './components/Ourspecialties';
import Calculateprice from './components/Calculateprice';
import Gps from './components/Gps';


function App() {
  return (
    <div>

      <Header />
      <Websites />
      <FastBoxWork />
      <Network />
      <Ourspecialties/>
      <Calculateprice/>
      <Gps/>
    </div>
  );
}

export default App;
