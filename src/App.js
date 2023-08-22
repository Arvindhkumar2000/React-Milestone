
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Register } from './components/regform/regform';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Registration } from './components/regform/registration';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path ='/' element={[<Register/>]}></Route>
    <Route path ='/registration' element={[<Registration/>]}></Route>
 
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
