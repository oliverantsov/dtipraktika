import './App.css';
import {Routes, Route} from "react-router-dom";
import Eesmark from './pages/Eesmark';
import Personaalandmed from './pages/Personaalandmed';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Routes>
      <Route path='/personaalandmed' element={<Personaalandmed />} />
      <Route path='/eesmark' element={<Eesmark />} />
    </Routes>
    </>
  );
}

export default App;
