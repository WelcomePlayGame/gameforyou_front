
import {Routes, Route} from 'react-router-dom'
import { AddCategory } from './form/AddCategory'
import { Category } from './category/Category'

export const Admin = ()=> {




    return (
        <>
        <Routes>
        <Route path='/addcategory' element={<AddCategory/>}/>
        <Route path='/listcategory' element={<Category/>}/>
        </Routes>
        </>
    )
}