import './App.css';
import {Route, Routes} from 'react-router-dom'
import {TokenAvailble, TokenUnavailble} from './api/authenticate'
import { Sign } from './pages/Sign';

function App() {

  return (
    <>
      <Routes>
        <Route element={<TokenAvailble/>} >
          <Route path='/' element={<Sign/>} />
        </Route>
        <Route element={<TokenUnavailble/>} >
          <Route path='/home-page' element={<>home</>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
