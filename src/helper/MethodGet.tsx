import axios from "axios";
import { toast } from "react-toastify";

export type ResponseDataCategory = {
  series_games: string;
  id: number;
  title: string;
  des: string;
  seo_title?: string;
  seo_des?: string;
  url_game?: string;
  mark?: string;
  datatime?: Date;
  os?: string;
  minProcessor?: string;
  maxProcessor?: string;
  minRam?: string;
  maxRam?: string;
  directX?: string;
  lan?: string;
  memory?: string;
  posterHorizontal_uls?: {
    id: number;
    poster_1440x900: string;
    poster_1024x768: string;
    poster_480x320: string;
  };
  posterVertical_urs?: { id: number; poster_300x300: string };
  url_post: string;
  developer: {
    id: number;
    title: string;
  };
  publisher: {
    id: number;
    title: string;
  };
  platformsSet: {
    id: number;
    title: string;
  }[];
  genresSet: {
    id: number;
    title: string;
  }[];
};
export interface Game {
  id: number;
  title: string;
  des: string;
  seo_title?: string;
  seo_des?: string;
  url_game?: string;
  mark?: string;
  datatime?: Date;
  os?: string;
  minProcessor?: string;
  maxProcessor?: string;
  minRam?: string;
  maxRam?: string;
  directX?: string;
  lan?: string;
  memory?: string;
  url_post?: string;
  posterHorizontal_uls?: {
    id: number;
    poster_1440x900: string;
    poster_1024x768: string;
    poster_480x320: string;
  };
  posterVertical_urs?: { id: number; poster_300x300: string };
  developer: {
    id: number;
    title: string;
  };
  publisher: {
    id: number;
    title: string;
  };
  platformsSet: {
    id: number;
    title: string;
  }[];
  genresSet: {
    id: number;
    title: string;
  }[];
  articleSet: {
    id: number;
    title: string;
    url_post: string;
    atCreate: Date;
    posterUrls: {
      posterUrl480x320: string;
      posterUrl1024x768: string;
    };
    tagSet: {
      id: number;
      title: string;
    }[];
  }[];
  commentSet: {
    id: number;
    title_comment: string;
    des_comment: string;
    rating: string;
    id_post: number;
    negativeInputs: string[];
    positiveInputs: string[];
  }[];
  blogSet: {
    id: number;
    title: string;
  }[];
  series_games: string;
}

type DataGet<T> = (url: T) => Promise<ResponseDataCategory[]>;

export const getAllCategory: DataGet<string> = async (url) => {
  if (typeof url === "string") {
    try {
      const response = await axios.get<ResponseDataCategory[]>(url);
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        // window.location.href = `${process.env.PUBLIC_URL}/404`
        throw Error("Not Found");
      } else {
        toast.error("No Connect");
        return [];
      }
    }
  } else {
    throw Error("url повинно бути строкою");
  }
};

export const getAllPostGame: DataGet<string> = async (url) => {
  if (typeof url === "string") {
    try {
      const response = await axios.get<ResponseDataCategory[]>(url);
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        window.location.href = `${process.env.PUBLIC_URL}/404`;
        throw Error("Not Found");
      } else {
        toast.error("No Connect");
        return [];
      }
    }
  } else {
    throw Error("url повинно бути строкою");
  }
};

type DataForGame<T, U> = (url: T, id: U) => Promise<Game>;
export const getGameById: DataForGame<string, string> = async (
  url,
  url_post
) => {
  if (typeof url === "string") {
    try {
      const response = await axios.get<Game>(`${url}/${url_post}`);
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        window.location.href = `${process.env.PUBLIC_URL}/404`;
        throw Error("Not Found");
      } else {
        toast.error("No Connect");
        return null as unknown as Game;
      }
    }
  } else {
    throw new Error("url should be string");
  }
};
export interface ResponseArticle {
  id: string;
  title: string;
  des: string;
  seo_des: string;
  seo_title: string;
  mark: string;
  atCreate: string;
  url_post: string;
  posterUrls: {
    posterUrl480x320: string;
    posterUrl1024x768: string;
  };
  tagSet: {
    id: number;
    title: string;
  }[];
  gamePost: {
    id: string;
    title: string;
    datatime: string;
    url_post: string;
    posterVertical_urs: {
      id: number;
      poster_300x300: string;
    };
    platformsSet: {
      id: string;
      title: string;
    }[];
    genresSet: {
      id: number;
      title: string;
    }[];
  };
  statistics: {
    id: number;
    action: number;
    more15: number;
    more30: number;
    more45: number;
  };
  commentSet: {
    id: number;
    title_comment: string;
  }[];
}

type DateArticle<T> = (url: T) => Promise<ResponseArticle[]>;
type DateArticleById<T, U> = (url: T, id: U) => Promise<ResponseArticle>;
export const getArticle: DateArticle<string> = async (url) => {
  try {
    const response = await axios.get<ResponseArticle[]>(url);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      toast.info("Noе data");
      throw Error("Not Found");
    } else {
      toast.error("No Connect");
      return [];
    }
  }
};

export const getArticleById: DateArticleById<string, string> = async (
  url,
  id
) => {
  try {
    const response = await axios.get<ResponseArticle>(`${url}/${id}`);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      // window.location.href = `${process.env.PUBLIC_URL}/404`;
      throw Error("Not Found");
    } else {
      toast.error("No Connect");
      return null as unknown as ResponseArticle;
    }
  }
};
export interface ResponseTag {
  id: number;
  title: string;
}
type DateTag<T> = (url: T) => Promise<ResponseTag[]>;
export const getAllTag: DateTag<string> = async (url) => {
  try {
    const response = await axios.get<ResponseTag[]>(`${url}`);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      window.location.href = `${process.env.PUBLIC_URL}/404`;
      throw Error("Not Found");
    } else {
      toast.error("No Connect");
      return [];
    }
  }
};
interface ResponseComment {
  id: number;
  title: string;
  des: string;
  rating: number;
}
type DateComment<U> = (url: U) => Promise<ResponseComment[]>;
export const getAllComment: DateComment<string> = async (url) => {
  try {
    const response = await axios.get<ResponseComment[]>(url);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      throw Error("Not Found");
    } else {
      toast.error("No Connect");
      return [];
    }
  }
};

type DateCommentById<T, U> = (url: T, id: U) => Promise<ResponseComment>;
export const getCommnetById: DateCommentById<string, string> = async (
  url,
  id
) => {
  try {
    const response = await axios.get<ResponseComment>(`${url}${id}`);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      throw Error("Not Found");
    } else {
      toast.error("No Connect");
      return null as unknown as ResponseComment;
    }
  }
};

export interface IGeneral {
  id: number;
  title: string;
}
type TGeneral<U> = (url: U) => Promise<IGeneral[]>;
export const getAllGeneral: TGeneral<string> = async (url) => {
  try {
    const response = await axios.get<IGeneral[]>(url);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      throw Error("Not Found");
    } else {
      toast.error("No Connect");
      return [];
    }
  }
};

export const getSiteMap = async (url: string) => {
  try {
    const response = await axios.get<string[]>(url);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      throw Error("Not Found");
    } else {
      toast.error("No Connect");
      return [];
    }
  }
};
