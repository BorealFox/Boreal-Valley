import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import  Avaleht  from "./pages/Avaleht";
import  LisaToode  from "./pages/LisaToode";
import  Ostukorv  from "./pages/Ostukorv";


function App() {
  return (
    <div className="App">

      <Link to="/">
      <img className="chad" src="https://i.pinimg.com/originals/40/71/d6/4071d667fae30cd0e003c165f9dc757e.png" alt=""/>
      </Link>

      <Link to="/lisa-toode">
      <button className="nupp">Lisa toode</button>
      </Link>


      <Link to="/ostukorv">
      <button className="nupp">Ostukorvi</button>
      </Link>

      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
      </Routes>
    </div>
  );
}

export default App;







// kahte liiki vead
// 1. kompileermise vead (koodi kokkupakkimnine/ülevaatus)
// ' neid on näha cmd-s (npm start)
// ' leht läheb tumeda taustaga ja tuleb selgitus, mis on valesti
// 2. run-time (vead brauseris)
// ' neid on näha brauseris parem click -> inspect -> console
// ' need on väga hästi guugeldatavad (Stack OverFlow)
// ' leht on valge ja mitte midagi pole näga