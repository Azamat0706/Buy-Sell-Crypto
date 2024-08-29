import './App.css';
import {Routes, Route} from 'react-router-dom'
// import Login from './routes/login/Login'
import SignUp from './routes/signup/SignUp'
import Contact from './routes/contact/Contact'
// import Checkout from './routes/checkout/Checkout'
import Home from './routes/home/Home';
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path='/signup' element={<SignUp />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/checkout' element={<Checkout />} /> */}
        <Route path='/Home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
