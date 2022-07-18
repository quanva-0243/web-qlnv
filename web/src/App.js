import './App.css';
import {Route, Routes} from 'react-router-dom'
import {TokenAvailble, TokenUnavailble} from './api/authenticate'
import { Sign } from './pages/HomePage/Sign';
import { NotFound } from './pages/404';
import { Login } from './components/signForm/Login';
import { Register } from './components/signForm/Register';
import { HomePage } from './pages/HomePage/HomePage';

function App() {

  return (
    <div>
      <Routes>
        <Route element={<TokenAvailble/>} >
          <Route path='/' element={<Sign/>}>
            <Route path='/' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
          </Route>
        </Route>
        <Route element={<TokenUnavailble/>} >
          <Route path='/home-page' element={<HomePage/>} />
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
