import axios from "axios";
import { toast } from "react-toastify";
import { formDate } from "./FormData";
export type ResponseDataCategory = {
  title: string;
};

interface Base {
  title: string;
  des: string;
  seo_des: string;
  seo_title: string;
  mark: string;
}

interface Article extends Base {
  category: {
    id: string;
  };
  gamePost: {
    id: string;
  };
}
interface GamePost extends Base {
  url_game: string;
  datatime: string;
  os: string;
  minProcessor: string;
  maxProcessor: string;
  minRam: string;
  maxRam: string;
  directX: string;
  lan: string;
  memory: string;
  developer: {
    id: string;
  };
  publisher: {
    id: string;
  };
  series_games: string;
}

type DataPostCatagory<T, U> = (
  url: T,
  category: U
) => Promise<ResponseDataCategory>;
export const addCategory: DataPostCatagory<
  string,
  ResponseDataCategory
> = async (url, category) => {
  try {
    const response = await axios.post<ResponseDataCategory>(url, category, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status !== 200) {
      throw new Error(`Server responded with status code ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const submitGamePost = async (
  article: GamePost,
  posterPhoto: File[],
  ids: number[],
  url: string,
  posterPhotoVertical?: File,
  genresSet?: string[],
  platformsSet?: string[]
) => {
  const formData = new FormData();
  formData.append(
    "article",
    new Blob([JSON.stringify(article)], { type: "application/json" })
  );
  posterPhoto.forEach((file) => {
    formData.append("posterPhoto", file);
  });
  if (posterPhotoVertical) {
    formData.append("posterPhotoVertical", posterPhotoVertical);
  }
  formData.append(
    "ids",
    new Blob([JSON.stringify(ids)], { type: "application/json" })
  );
  formData.append(
    "genresSet",
    new Blob([JSON.stringify(genresSet)], { type: "application/json" })
  );
  formData.append(
    "platformsSet",
    new Blob([JSON.stringify(platformsSet)], { type: "application/json" })
  );
  try {
    const response = await axios.post(url, formData);
    if (response.status !== 200) {
      throw new Error(`Server responded with status code ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.log(formData);
    toast.error("Проблема з сервером");
  }
};

export const submitArticle = async (
  article: Article,
  posterPhoto: File[],
  ids: number[],
  url: string,
  tagSet?: string[]
) => {
  const formData = new FormData();
  formData.append(
    "article",
    new Blob([JSON.stringify(article)], { type: "application/json" })
  );
  posterPhoto.forEach((file) => {
    formData.append("posterPhoto", file);
  });
  formData.append(
    "ids",
    new Blob([JSON.stringify(ids)], { type: "application/json" })
  );
  formData.append(
    "tagSet",
    new Blob([JSON.stringify(tagSet)], { type: "application/json" })
  );
  try {
    const response = await axios.post(url, formData);
    if (response.status !== 200) {
      throw new Error(`Server responded with status code ${response.status}`);
    }
    return response.data;
  } catch (error) {
    toast.error("Problem with server");
  }
};

export interface IComment {
  title_comment: string;
  des_comment: string;
  positiveInputs: string[];
  negativeInputs: string[];
  rating: number;
  id_post: number;
}

type TComment = (url: string, comment: IComment) => Promise<IComment>;
export const addComment: TComment = async (url, comment) => {
  try {
    const response = await axios.post<IComment>(url, comment, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status !== 200) {
      throw new Error(`Server responded with status code ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
export interface IStatistics {
  id: number;
  action?: number;
  more15?: number;
  more30?: number;
  more45?: number;
}

type TStatistics = (url: string, statistics: IStatistics) => void;
export const addStatistics: TStatistics = async (url, statistics) => {
  try {
    const response = await axios.post<IStatistics>(url, statistics, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status !== 200) {
      throw new Error(`Server responded with status code ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const updateStatistics: TStatistics = async (url, statistics) => {
  try {
    const response = await axios.put<IStatistics>(url, statistics, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status !== 200) {
      throw new Error(`Server responded with status code ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const updatetArticle = async (
  article: Article,
  posterPhoto: File[],
  ids: number[],
  url: string,
  tagSet?: string[]
) => {
  const formData = new FormData();
  formData.append(
    "article",
    new Blob([JSON.stringify(article)], { type: "application/json" })
  );
  posterPhoto.forEach((file) => {
    formData.append("posterPhoto", file);
  });
  formData.append(
    "ids",
    new Blob([JSON.stringify(ids)], { type: "application/json" })
  );
  formData.append(
    "tagSet",
    new Blob([JSON.stringify(tagSet)], { type: "application/json" })
  );
  try {
    const response = await axios.put(url, formData);
    if (response.status !== 200) {
      throw new Error(`Server responded with status code ${response.status}`);
    }
    return response.data;
  } catch (error) {
    toast.error("Problem with server");
  }
};
export const updateGamePost = async (
  article: GamePost,
  posterPhoto: File[],
  ids: number[],
  url: string,
  posterPhotoVertical?: File,
  genresSet?: string[],
  platformsSet?: string[]
) => {
  const formData = new FormData();
  formData.append(
    "article",
    new Blob([JSON.stringify(article)], { type: "application/json" })
  );
  posterPhoto.forEach((file) => {
    formData.append("posterPhoto", file);
  });
  if (posterPhotoVertical) {
    formData.append("posterPhotoVertical", posterPhotoVertical);
  }
  formData.append(
    "ids",
    new Blob([JSON.stringify(ids)], { type: "application/json" })
  );
  formData.append(
    "genresSet",
    new Blob([JSON.stringify(genresSet)], { type: "application/json" })
  );
  formData.append(
    "platformsSet",
    new Blob([JSON.stringify(platformsSet)], { type: "application/json" })
  );
  try {
    const response = await axios.put(url, formData);
    if (response.status !== 200) {
      throw new Error(`Server responded with status code ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.log(formData);
    toast.error("Проблема з сервером");
  }
};

export const deleteArticle = async (url: string, id: number) => {
  const response = await axios.delete(`${url}/${id}`);
  if (response.status !== 204) {
    toast.error("Can not delete");
  } else {
    toast.info("Game post was deleted");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }
};
