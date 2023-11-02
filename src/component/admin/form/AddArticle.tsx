import {useState} from 'react'
import {Helmet} from 'react-helmet'
import {QuilEditor} from '../../QuilEditor/QuilEditor'
import { SelectCategory } from '../Category/SelectCategory'
import { toast } from 'react-toastify';

export const AddArticle = ()=> {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [poster_480x320, setPoster_480x320] = useState(0)
    const [poster_1024x768, setPoster_1024x768] = useState(0)
    const [poster_1440x900, setPoster_1440x900] = useState<File | null>(null);

    const [category, setCategory] = useState('')
    return (
     <section className='addcategory'>
        <Helmet>
            <title>Додати категорію</title>
            <meta name='Сторнінка для додавання категорії' />
        </Helmet>
        <form className='addArticle'>
        <div className="addArticle_box">
        <div className="addArticle_box_secton">
        <input
    type="file"
    accept=".jpeg,.jpg,.png,.webp"
    name="poster_1440x900"
    onChange={(e) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const fileSize = file.size / (1024 * 1024); // размер файла в мегабайтах

            if (fileSize <= 1) { // проверка размера файла
                const img = new Image();
                img.onload = (ev: Event) => {
                    if (img.width === 1440 && img.height === 900) {
                        setPoster_1440x900(file);
                    } else {
                        toast.error('Будь-ласка, завантажте постер розміром 1440*900 пікселів');
                    }
                }
                img.onerror = function() {
                    toast.error('краххх...помилка при читанні файла.');
                }
                img.src = URL.createObjectURL(file);
            } else {
                toast.error('Файл занадто великий. Будь ласка, завантажте файл не більше 1 МБ.');
            }
        }
    }}
/>


        </div>
        <div className="addArticle_box_secton">
            <div>
            <input
                type="text"
                name='title'
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                placeholder='Назва посту'
                id='title'
                className='addArticle_box_input'
                min={5}
                maxLength={75}
                required
            />
            </div>
            <div>
                <QuilEditor description={description} setDescription={setDescription}  />
            </div>
        </div>
        <div className="addCategory_box_secton">
            <SelectCategory
            onChange={(e)=> setCategory(e.target.value)}
            />
        </div>
       </div>
        </form>
     </section>
    )
}