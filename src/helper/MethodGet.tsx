import axios from "axios"
import { type } from "os";
import { toast } from 'react-toastify';

export type ResponseDataCategory = {
    id: number;
    title : string,
    des : string,
    seo_title ?: string,
    seo_des ?: string,
    url_game ?: string,
    mark ?: string,
    datatime ?: Date,
    os ?: string,
    minProcessor?: string,
    maxProcessor?: string,
    minRam?: string,
    maxRam?: string,
    directX?: string,
    lan?: string,
    memory?: string,
    posterHorizontal_uls ?: {id : number, poster_1440x900 : string, poster_1024x768 :string, poster_480x320 : string }
    posterVertical_urs ?: {id : number,poster_300x300 : string } 
    developer: {
        id: number,
        title: string
      },
      publisher: {
        id: number,
        title: string
      },
      platformsSet: 
        {
          id: number,
          title: string
        } []
      ,
      genresSet:
        {
          id: number,
          title: string
        } [],

    
}

type DataGet <T> = (url : T) => Promise<ResponseDataCategory [] > 


type DataGame<T, U> = (url: T, id: U) => Promise<ResponseDataCategory>;
export const getAllCategory : DataGet <string>  = async (url)=> {

if( typeof url === 'string') {
    try {
        const response = await axios.get<ResponseDataCategory[] >(url)
        return response.data;
    } catch (error  : any) {
        if (error.response && error.response.status === 404) {
            window.location.href = `${process.env.PUBLIC_URL}/404`
            throw Error('Not Found')
        } else {
            toast.error("No Connect");
            return [];
        }
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
    } catch (error  : any) {
        if (error.response && error.response.status === 404) {
            window.location.href = `${process.env.PUBLIC_URL}/404`
            throw Error('Not Found')
        } else {
            toast.error("No Connect");
            return [];
        }
    }
} else {
    throw Error("url повинно бути строкою")
}
}


export const getGameById: DataGame<string, number> = async (url, id) => {
    if (typeof url === 'string') {
        try {
            const response = await axios.get<ResponseDataCategory >(`${url}/${id}`);
            return response.data;
        } catch (error  : any) {
            if (error.response && error.response.status === 404) {
                window.location.href = `${process.env.PUBLIC_URL}/404`
                throw Error('Not Found')
            } else {
                toast.error("No Connect");
                return null as unknown as ResponseDataCategory;
            }
        }
    } else {
        throw new Error("url should be string");
    }
};
export interface ResponseArticle {
    id : string,
    title : string,
    des : string,
    seo_des : string,
    seo_title : string,
    mark : string,
    atCreate : string,
    posterUrls : {
        posterUrl480x320 : string,
        posterUrl1024x768 : string,
        posterUrl1440x900 : string,
    }
    tagSet : [ {
        id : number,
        title : string,
    }],

}

type DateArticle <T> = (url : T) => Promise<ResponseArticle []>
type DateArticleById <T, U> = (url : T, id: U) => Promise<ResponseArticle>
export const getArticle : DateArticle<string> = async (url) =>  {
    try {
        const response = await axios.get<ResponseArticle []>(url)
        return response.data
    } catch (error : any) {
        if (error.response && error.response.status === 404) {
            window.location.href = `${process.env.PUBLIC_URL}/404`
            throw Error('Not Found')
        } else {
            toast.error("No Connect");
            return [];
        }
    }
}

export const getArticleById : DateArticleById<string, number> = async  (url, id)=> {
    try {
        const response = await axios.get<ResponseArticle>(`${url}/${id}`)
        return response.data;
    } catch (error  : any) {
        if (error.response && error.response.status === 404) {
            window.location.href = `${process.env.PUBLIC_URL}/404`
            throw Error('Not Found')
        } else {
            toast.error("No Connect");
            return null as unknown as ResponseArticle;
        }
    }
}
export interface ResponseTag {
    id : number,
    title : string,
}
type DateTag <T>= (url : T) => Promise<ResponseTag []> 
export const getAllTag : DateTag<string> = async (url)=> {
    try {
        const response = await axios.get<ResponseTag []>(`${url}`)
        return response.data;
    } catch (error  : any) {
        if (error.response && error.response.status === 404) {
            window.location.href = `${process.env.PUBLIC_URL}/404`
            throw Error('Not Found')
        } else {
            toast.error("No Connect");
            return [];
        }
    }
}
