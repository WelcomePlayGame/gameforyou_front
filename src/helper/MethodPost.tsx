
import axios from 'axios';
import { toast } from 'react-toastify';
export type ResponseDataCategory = {
    title: string;
}

interface Base {
    title : string;
    des : string;
    seo_des : string;
    seo_title : string;
    mark : string;
}

 interface Article extends Base  {
    category : {
        id: string
    };
    gamePost : {
        id : string
    };
}
 interface GamePost extends Base {
    devoloper : {
        id : string
    }
    publisher : {
        id : string
    }
    platform : {
        id : string
    }
}

type DataPostCatagory<T, U> = (url: T, category: U) => Promise<ResponseDataCategory>;
export const addCategory: DataPostCatagory<string, ResponseDataCategory> = async (url, category) => {
    try {
        const response = await axios.post<ResponseDataCategory>(url, category, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.status !== 200) {
            throw new Error(`Server responded with status code ${response.status}`);
        }
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const submitArticle = async (article: Article | GamePost, posterPhoto: File[],  ids: number[], url: string, posterPhotoHorizontal?: File []) => {
    const formData = new FormData();
    formData.append('article', new Blob([JSON.stringify(article)], {type: "application/json"}));
    posterPhoto.forEach((file, index) => {
        formData.append('posterPhoto', file);
    });
    if (posterPhotoHorizontal) {
        posterPhotoHorizontal.forEach((file) => {
            formData.append('posterPhotoVertical', file);
        });
    }
    formData.append('ids', new Blob([JSON.stringify(ids)], {type: "application/json"}));
    try {
        const response = await axios.post(url, formData); // Без явного указания заголовка Content-Type
        if (response.status !== 200) {
            throw new Error(`Server responded with status code ${response.status}`);
        }
        for (let [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
          }
          
        return response.data;
    } catch (error) {
        console.log(formData)
        toast.error("Проблема з сервером");
    }
};
