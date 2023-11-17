import URL_EN from "./URL_EN";
import URL_PL from "./URl_PL";
import URL_RU from "./URL_RU";
import URL_UA from "./URL_UA";

let url : any; 
if(process.env.REACT_APP_LANGUAGE === 'UA') {
    url = URL_UA
} else if (process.env.REACT_APP_LANGUAGE === 'RU') {
    url = URL_RU
} else if (process.env.REACT_APP_LANGUAGE === 'PL') {
    url = URL_PL
} else if (process.env.REACT_APP_LANGUAGE === 'EN') {
    url = URL_EN
}

export default URL;