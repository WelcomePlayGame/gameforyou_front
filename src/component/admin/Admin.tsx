
import {Routes, Route} from 'react-router-dom'
import { AddArticle} from './form/AddArticle'
import { Article } from './article/Article'
import { Category } from './Category/Category'
import { AddCategory } from './form/AddCategory'
import { AddGamePost } from './form/AddGamePost'
import { AddGenres } from './form/AddGenres'
import { AddPlatform } from './form/AddPlatform'
import { AddPublisher } from './form/AddPublisher'
import { AddDevoloper } from './form/AddDevoloper'
import { AddTag } from './form/AddTag'

export const Admin = ()=> {




    return (
        <>
        <Routes>
        <Route path='/addcategory' element={<AddCategory/>}/>
        <Route path='/listarticle' element={<Article/>}/>
        <Route path='/addarticle' element={<AddArticle/>}/>
        <Route path='/listcategory' element={<Category/>} />
        <Route path='/addgamepost' element={<AddGamePost/>}/>
        <Route path='/addgenre' element={<AddGenres/>}/>
        <Route path='/addplatform' element={<AddPlatform/>}/>
        <Route path='/addpublisher' element={<AddPublisher/>}/>
        <Route path='/adddeveloper' element={<AddDevoloper/>}/>
        <Route path='/addtag' element={<AddTag/>}/>
        </Routes>
        </>
    )
}