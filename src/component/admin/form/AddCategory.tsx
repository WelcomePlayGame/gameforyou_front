import {useState} from 'react'
import {Helmet} from 'react-helmet'
import { TextEditor } from '../../text_editor/TextEditor'
export const AddCategory = ()=> {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    return (
     <section className='addcategory'>
        <Helmet>
            <title>Додати категорію</title>
            <meta name='Сторнінка для додавання категорії' />
        </Helmet>
        <form>
        <div className="addCategory_box">
        <div className="addCategory_box_secton"></div>
        <div className="addCategory_box_secton">
            <div>
            <input type="text"
                name='title'
                placeholder='Написати назву категорії'
                id='title'
            />
            </div>
            <div>
                <TextEditor description={description} setDescription={setDescription}/>
            </div>
        </div>
        <div className="addCategory_box_secton"></div>
       </div>
        </form>
     </section>
    )
}