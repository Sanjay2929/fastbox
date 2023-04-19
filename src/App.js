import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Websites from './Components/Websites';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FastBoxWork from './Components/FastBoxWork';
import Network from './Components/Network';



function App() {
  return (
    <div>

      <Header />
      <Websites />
      <FastBoxWork />
      <Network />
      
    </div>
  );
}

export default App;
