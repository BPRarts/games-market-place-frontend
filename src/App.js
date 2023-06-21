import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import MainHome from './components/MainHome';
import XboxHome from './components/XboxHome';
import Nav from './components/Nav';
import SwitchHome from './components/SwitchHome';
import PsHome from './components/PsHome';
import OneGame from './components/OneGame';
import EditGame from './components/EditGame';
import CreateGame from './components/CreateGame';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path = '/' element = {<MainHome/>}/>
          <Route path = '/XboxHome' element ={<XboxHome/>}/>
          <Route path = '/SwitchHome' element = {<SwitchHome/>}/>
          <Route path = '/oneGame/:id' element = {<OneGame/>}/>
          <Route path = '/updateGame/:id' element = {<EditGame/>}/>
          <Route path = '/createGame/form' element = {<CreateGame/>}/>
          <Route path = '/PlaystationHome' element = {<PsHome/>}/>
          
        </Routes>


      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
