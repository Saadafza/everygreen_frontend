import { Route, Routes } from 'react-router-dom';
import './App.css';
import Mangement from './AdminComponents/Mangement';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/management' element={<Mangement/>}/>
      <Route path='/' element={<Mangement/>}/>

     </Routes>
    </div>
  );
}

export default App;
