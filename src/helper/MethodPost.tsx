
import axios from 'axios';
import { toast } from 'react-toastify';
export type ResponseDataCategory = {
    title: string;
}

export interface Article {
    title : string;
    des : string;
    seo_des : string;
    seo_title : string;
    mark : string;
    category : string;
}

type DataPost<T, U> = (url: T, category: U) => Promise<ResponseDataCategory>;

export const addCategory: DataPost<string, ResponseDataCategory> = async (url, category) => {
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

export const submitArticle = async (article: Article, posterPhoto: File[], ids: number[], url : string) => {
    const formData = new FormData();
    formData.append('article', JSON.stringify(article));
    posterPhoto.forEach((file, index) => {
        formData.append('posterPhoto', file, `poster_${index}.jpg`)
    })
     ids.forEach((id)=> {
        formData.append(`id`, `${id}`);
     })

     try {
        const response  = await axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        })
        if (response.status !== 200) {
            throw new Error(`Server responded with status code ${response.status}`);
        }
        return response.data;
     } catch (error) {
        toast.error("Проблема з сервером")
     }

    return formData;
  };
  