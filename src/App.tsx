import React from 'react';
import './App.css';
import { Header } from './component/Header';
import { Body } from './pages/Body';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AdminMenu } from './component/admin/AdminMenu';
import { Admin } from './component/admin/Admin';

function App() {
  return (
    <div className="App">
  
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
