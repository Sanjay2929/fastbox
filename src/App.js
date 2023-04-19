import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Websites from './Components/Websites';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FastBoxWork from './Components/FastBoxWork';
import Network from './Components/Network';
import Calculateprice from './Components/Calculateprice'
import Gps from './Components/Gps'
// import Ourspecialties from './components/Ourspecialties';


function App() {
  return (
    <div>

      <Header />
      <Websites />
      <FastBoxWork />
      <Network />
      {/* <Ourspecialties/> */}
      <Calculateprice />
      <Gps />


      
    </div>
  );
}

export default App;
