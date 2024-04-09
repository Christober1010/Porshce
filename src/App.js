import { BrowserRouter , Routes ,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Models from './Components/Models';
import Model911 from './Components/Model911';
import ModelCayenne from './Components/ModelCayenne';
import Model718 from './Components/Model718';
import Machan from './Components/Machan';
import Panamera from './Components/Panamera';
import Taycan from './Components/Taycan';



function App() {
  
  return (
    <div className="">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/models' element={<Models/>}></Route>
          <Route path='/911' element={<Model911/>}></Route>
          <Route path='/cayenne' element={<ModelCayenne/>}></Route>
          <Route path='/718' element={<Model718/>}></Route>
          <Route path='/macan' element={<Machan/>}></Route>
          <Route path='/panamera' element={<Panamera/>}></Route>
          <Route path='/taycan' element={<Taycan/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
