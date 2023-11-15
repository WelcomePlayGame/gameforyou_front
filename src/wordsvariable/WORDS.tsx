import {EN_WORDS} from './EN_WORDS'
import {RU_WORDS} from './RU_WORDS'
import {UA_WORDS} from './UA_WORDS'
import {PL_WORDS} from './PL_WORDS'
let words : any
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