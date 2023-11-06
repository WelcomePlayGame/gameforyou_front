import axios from "axios"
import { toast } from 'react-toastify';
export type ResponseDataCategory = {
    id: number;
    title : string;
}

type DataGet <T> = (url : T) => Promise<ResponseDataCategory []> 

export const getAllCategory : DataGet <string>  = async (url)=> {

if( typeof url === 'string') {
    try {
        const response = await axios.get<ResponseDataCategory[]>(url)
        return response.data;
    } catch (error) {
        toast.error("Відсутнє підключення")
        return [];
    }
} else {
    throw Error("url повинно бути строкою")
}

}


export const getAllPostGame :DataGet<string> =  async (url) => {

if (typeof url === 'string') {
    try {
        const response = await axios.get<ResponseDataCategory []>(url)
        return response.data
    } catch (error) {
        toast.error("Відсутьє підключення")
        return [];
    }
} else {
    throw Error("url повинно бути строкою")
}
}