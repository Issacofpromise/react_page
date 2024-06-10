//import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Ho from './page/home';
import Eb from './page/about';
import Cb from './page/counter';
import Cb2 from './page/input';
import Cb3 from './page/input2';
import Cb4 from './page/list';

function App() {
  return (
    <div className="App">
     <Link to="/">Home</Link> | <Link to="/about">About</Link> |
     &nbsp;<Link to="/coun">Counter</Link> | <Link to="/inp">Input</Link> 
     &nbsp; | <Link to="/inp2">Input2</Link> | <Link to="/list">List</Link>
     <Routes>
     //<Route path="/" element={<Ho/>}/>
      <Route path="/about" element={<Eb/>}/>
      <Route path="/coun" element={<Cb/>}/>
<Route path="/inp" element={<Cb2/>}/>
      <Route path="/inp2" element={<Cb3/>}/> 
      <Route path="/list" element={<Cb4/>}/>
     </Routes>     
    </div>
  );
}

export default App;
