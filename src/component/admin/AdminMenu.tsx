import { useState } from 'react';
import {useLocation, Link} from 'react-router-dom'

export const AdminMenu = ()=> {
const location = useLocation();
const isAdminMenu = location.pathname.startsWith("/admin")
const [isDrop, setDrop] = useState(true);
const [isCategoryDrop, setIsCategoryDrop] = useState(true)

const hideMenu = ()=> {
    setDrop(true)
}

const showpMenu = ()=> {
    setDrop(false)
}

const showCategoryMenu = ()=> {
    setIsCategoryDrop(false)
}

const hideCategoryMenu = ()=> {
    setIsCategoryDrop(true)
}

    return (

        <>
        
        
             {
                 isAdminMenu && (
                     <header className='admin_box'>
                         <menu>
                             <ul className="admin_ul">
                                 <li className="admin_li">
                                 <a href='/' className='admin_li_a' target='_blank' title='Головна'>
                                    Головна
                                 </a>
                                 </li>
                                 <li className="admin_li">
                                    <div className='admin_drop_menu'
                                    onMouseOver={showpMenu}
                                    onMouseOut={hideMenu}
                                    >
                                    Контент
                                    <ul className={`admin_drop_list ${!isDrop ? "" : "dropdown"}`}>
                                        <li className="admin_drop_li">
                                            <div className='admin_drop_menu_li'
                                            onMouseOver={showCategoryMenu}
                                            onMouseOut={hideCategoryMenu}
                                            >
                                            Категорія
                                            <ul className={`admin_drop_category_list ${!isCategoryDrop ? "" : "dropdown"}`}>
                                                <li className="admin_drop_category_li">
                                                    <a href='/admin/listcategory' title='Додати категорію' className='admin_drop_category_li_a'>
                                                    Список Категорії
                                                    </a>
                                                    </li>
                                                <li className="admin_drop_category_li"> 
                                                <a href='/admin/addcategory' title='Додати категорію' className='admin_drop_category_li_a' >
                                                Добавити Категорію
                                                </a>
                                                </li>
                                            </ul>
                                            </div>
                                        </li>
                                        <li className="admin_drop_li">Новина</li>
                                        <li className="admin_drop_li">Блог</li>
                                        <li className="admin_drop_li">Ігра</li>
                                    </ul>
                                    </div>
                                    </li>
                                 <li className="admin_li">...</li>
                                 <li className="admin_li">...</li>
                                 <li className="admin_li">Профіль</li>
                             </ul>
                         </menu>
                     </header>
                 )
             }
        
        </>
    )
}