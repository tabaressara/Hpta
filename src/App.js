import './App.css';
import {Route, Routes} from 'react-router-dom';

import Principal from './pages/Principal/Principal';
import Aprende from './pages/Aprende/Aprende';
import Reglamento from './pages/Reglamento/Reglamento';
import Recomendaciones from './pages/Recomendaciones/Recomendaciones';
import Partidos from './pages/Partidos/Partidos';


function App() {
    return (
      <div className = "App">
        <Routes>
          <Route exact path = '/' element = {<Principal/>} />
          <Route exact path = '/Aprende' element = {<Aprende/>} />
          <Route exact path = '/Reglamento' element = {<Reglamento/>} />
          <Route exact path = '/Recomendaciones' element = {<Recomendaciones/>} />
          <Route exact path = '/Partidos' element = {<Partidos/>} />
        </Routes>
      </div>
    );
}

export default App;

