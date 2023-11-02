import axios from "axios"

export type ResponseDataCategory = {
    id: number;
    title : string;
}

type DataGet <T> = (url : T) => Promise<ResponseDataCategory []>;

export const getAllCategory : DataGet <string>  = async (url)=> {

    try {
        const response = await axios.get<ResponseDataCategory[]>(url)
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error(error)
        throw error;
    }

}