
import axios from 'axios';

export type ResponseDataCategory = {
    title: string;
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
