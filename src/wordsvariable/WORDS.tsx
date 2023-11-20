import {EN_WORDS} from './EN_WORDS'
import {RU_WORDS} from './RU_WORDS'
import {UA_WORDS} from './UA_WORDS'
import {PL_WORDS} from './PL_WORDS'
export interface WORDS_Tem {
    PROFILE : string, 
    DEVOLOPER : string,
    SITE : string,
    CONTENT : string,
    PUBLISHER : string,
    GENRE : string,
    ADD_DEVOLOPER : string,
    LIST_DEVOLOPER : string, 
    ADD_PUBLISHER : string,
    LIST_PUBLISHER : string,
    ADD_GENRE : string,
    LIST_GENRE : string,
    PLATFORM : string,
    ADD_PLATFORM : string,
    LIST_PLATFORM : string,
    NEWS : string,
    STREAM : string,
    GAMES_REVIEWS : string,
    HELP : string,
    CHEATS : string,
    CATEGORY :  string,
    ADD_CATEGORY : string,
    LIST_CATEGORY : string,
    SAVE_ARTICLE : string,
    TITLE_ARTICLE : string,
    SELECT_CATEGORY : string,
    TITLE_SEO_ARTICLE : string,
    DES_SEO_ARTICLE : string,
    TITLE_GAME : string,
    CHOOSE_GENRES : string,
    CHOOSE_DEVELOPER : string,
    CHOOSE_PUBLISHER : string,
    CHOOSE_PLATFORMS : string,
    URL_PUBLISHER : string,
    OS : string, 
    MIN_CPU : string,
    MAX_CPU : string,
    MIN_RAM : string,
    MAX_RAM : string,
    DRIVERS : string,
    NETWORK : string,
    SPACE_DISK : string,
    ADD_HELMET_GAMEPOST : string,
    CREATE_CATEGORY : string,
    SAVE_CATEGORY :string,
    WRITE_NAME_CATEGORY : string,
    CREATE_DEVELOPER : string,
    SAVE_DEVELOPER : string,
    WRITE_NAME_DEVELOPER : string,
    CREATE_GENRE : string,
    SAVE_GENRE : string,
    WRITE_NAME_GENRE : string,
    CREATE_PUBLISHER : string,
    SAVE_PUBLISHER : string,
    WRITE_PUBLISHER : string,
    TITLE_SEO : string,
    DESCRIPTION_SEO: string,
    YOU_FIND_US : string,
    MORE : string,
    US_INTERESTING : string,
    LATEST_BLOGS : string,
    LatestGamingNews : string,
    
}

let words : WORDS_Tem
if( process.env.REACT_APP_LANGUAGE === 'UA') {
    words = UA_WORDS;
} else if (process.env.REACT_APP_LANGUAGE === 'EN') {
    words = EN_WORDS
} else if (process.env.REACT_APP_LANGUAGE === 'PL') {
    words = PL_WORDS
} else {
    words = RU_WORDS
}
  export default words;