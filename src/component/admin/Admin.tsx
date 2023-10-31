
import {Routes, Route} from 'react-router-dom'
import { AddArticle} from './form/AddArticle'
import { Article } from './article/Article'
import { Category } from './Category/Category'
import { AddCategory } from './form/AddCategory'

export const Admin = ()=> {




    return (
        <>
        <Routes>
        <Route path='/addcategory' element={<AddCategory/>}/>
        <Route path='/listarticle' element={<Article/>}/>
        <Route path='/addarticle' element={<AddArticle/>}/>
        <Route path='/listcategory' element={<Category/>} />
        </Routes>
        </>
    )
}