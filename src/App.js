import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './components/AddUser';
import LoginUser from './components/LoginUser';
import AddBus from './components/AddBus';
import SearchBus from './components/SearchBus';
import ViewallBus from './components/ViewallBus';
import Dashboard from './components/DashBoard';

function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
      <Route path='/reg' element={<AddUser/>}/>
      <Route path='/' element={<LoginUser/>}/>
      <Route path='/add' element={<AddBus/>}/>
      <Route path='/search' element={<SearchBus/>}/>
      <Route path='/view' element={<ViewallBus/>}/>
      <Route path='/dash' element={<Dashboard/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
