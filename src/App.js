import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserTabel from './Component/UserTabel';
import UserForm from './Component/UserForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserTabel />}></Route>
          <Route path='/userForm/:id?' element={<UserForm/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
