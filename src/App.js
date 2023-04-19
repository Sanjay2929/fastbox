import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Ourspecialties from './components/Ourspecialties';
import Calculateprice from './components/Calculateprice';
import Gps from './components/Gps';

function App() {
  return (
    <div className="App">
      <Ourspecialties/>
      <Calculateprice/>
      <Gps/>
    </div>
  );
}

export default App;
