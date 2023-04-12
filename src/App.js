import './App.css';
import {Routes, Route} from "react-router-dom";
import Avakuva from './pages/Avakuva';
import Eesmark from './pages/Eesmark';
import Personaalandmed from './pages/Personaalandmed';
import Uurimisküsimus from './pages/Uurimisküsimus';
import Uurimismeetod from './pages/Uurimismeetod';
import Sisend from './pages/Sisend';
import Tegevused from './pages/Tegevused';
import Väljundid from './pages/Väljundid';
import Mõju from './pages/Mõju';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Avakuva />} />
      <Route path='/personaalandmed' element={<Personaalandmed />} />
      <Route path='/eesmark' element={<Eesmark />} />
      <Route path='/uurimiskysimus' element={<Uurimisküsimus />} />
      <Route path='/uurimismeetod' element={<Uurimismeetod />} />
      <Route path='/sisend' element={<Sisend />} />
      <Route path='/tegevused' element={<Tegevused />} />
      <Route path='/valjundid' element={<Väljundid />} />
      <Route path='/moju' element={<Mõju />} />
    </Routes>
    </>
  );
}

export default App;
