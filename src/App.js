
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import User from './components/User/User';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
       <Route  path='/' element={<Dashboard/>}/>
       <Route path="/user" element={<User/>}/>
       <Route path='/home' element={<Home/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
