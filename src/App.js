import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Ourspecialties from './components/Ourspecialties';
import Calculateprice from './components/Calculateprice';
import Gps from './components/Gps';
import Clients from './components/Clients';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Ourspecialties/>
      <Calculateprice/>
      <Gps/>
      <Clients/>
      <Footer/>      
    </div>
  );
}

export default App;
