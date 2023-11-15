import React from 'react';
import './App.css';
import { Header } from './component/Header';
import { Body } from './pages/Body';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AdminMenu } from './component/admin/menu/AdminMenu';
import { Admin } from './component/admin/Admin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
  <ToastContainer/>
  <BrowserRouter>
      <Header />
      <AdminMenu/>
<Routes>
<Route path='/' element={<Body/>}/>
<Route path='/admin/*' element={<Admin/>}/>
<Route path='*' element={<Navigate to="/404"/>} /> 
</Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
