import URL_EN from "./URL_EN";
import URL_PL from "./URl_PL";
import URL_RU from "./URL_RU";
import URL_UA from "./URL_UA";

export interface URL_Tem {
    URL_BASE :  string,
    CATEGORY : string, 
    ARTICLE : string,
    BLOG : string,
    COMMENT : string,
    DEVELOPER : string,
    GAMEPOST : string,
    POST_DES_URL : string,
    GENRES : string,
    PLATFORM : string,
    PUBLISHER : string,
    TAG : string,
    COUNTRY : string,
    ADD : string,
    DELETE : string,
    ARTICLE_DES_URL : string
}

let url : URL_Tem; 
if(process.env.REACT_APP_LANGUAGE === 'UA') {
    url = URL_UA
} else if (process.env.REACT_APP_LANGUAGE === 'RU') {
    url = URL_RU
} else if (process.env.REACT_APP_LANGUAGE === 'PL') {
    url = URL_PL
} else  {
    url = URL_EN
}

export {url as URL_FOR_BACK};