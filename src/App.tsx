import React from 'react';
import './App.css';
import { Header } from './component/Header';
import { Body } from './pages/Body';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AdminMenu } from './component/admin/menu/AdminMenu';
import { Admin } from './component/admin/Admin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NotFound } from './component/404/NotFound';
import { ListGame } from './list/ListGame';
import { Game } from './component/Game';
import { PageGame } from './pages/PageGame';

function App() {
  const basenameMap = {
    UA: '/ua',
    RU: '/ru',
    EN: '/en',
    PL: '/pl'
  };
  
const getBasename = (lang: string | undefined)=> {
    const defaultBasename = '';
    if (lang && Object.hasOwnProperty.call(basenameMap, lang)) {
      return basenameMap[lang as keyof typeof basenameMap];
    }
    return defaultBasename;
  }
  
  const basename = getBasename(process.env.REACT_APP_LANGUAGE);
  
  

  return (
    <div className="App">
  <ToastContainer/>
  <BrowserRouter basename={basename}>
      <Header />
      <AdminMenu/>
<Routes>
<Route path='/' element={<Body/>}/>
<Route path='/games' element={<ListGame/>}/>
<Route path='/admin/*' element={<Admin/>}/>
<Route path='*' element={<Navigate to="/404"/>} /> 
<Route path='/404' element={<NotFound/>}/>
<Route path='/game/:id' element={<PageGame/>}/>
</Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
