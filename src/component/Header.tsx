import {useLocation} from 'react-router-dom'
import { useState } from 'react';
import words from '../wordsvariable/WORDS'
import { SelectLanguage } from '../selectLanguage/SelectLanguage';
import { Helmet } from 'react-helmet';
const languages: { [key: string]: string } = {
    en: `${process.env.PUBLIC_URL}/flags/en.png`,
    ru: `${process.env.PUBLIC_URL}/flags/ru.png`,
    ua: `${process.env.PUBLIC_URL}/flags/ua.png`,
    pl: `${process.env.PUBLIC_URL}/flags/pl.png`
  };
  

  export type LanguageCode = 'en' | 'ru' | 'ua' | 'pl';

export const Header = () => {
    const [isLanguage, setLanguage] = useState(false)
    const [currentLanguage, setCurrentLanguage]  = useState<LanguageCode>(process.env.REACT_APP_LANGUAGE?.toLowerCase() as LanguageCode || 'en')
    const location = useLocation()
    const isHeader = location.pathname.startsWith("/admin")
    const handleChangeLanguage = (newLanguageCode : string) => {
        window.location.href = `https://gameforyou.online/${newLanguageCode}`
      };
      
    return (
       <section>
        <Helmet>
            <title>{words.TITLE_SEO}</title>
            <meta name="description" content={words.DESCRIPTION_SEO} />
        </Helmet>
        {
            !isHeader && (
                <div className='wrapper_header'>
                <menu className='header_menu'>
                    <div className="header_menu_box ">
                    <a href={`${process.env.PUBLIC_URL}`}>
                    <img src={`${process.env.PUBLIC_URL}/icons/logo_for_site.png`} alt="GameForYou" className="header_logo" />
                    </a>
                    </div>
                    <div className="header_menu_box">
                        <ul className='header_menu_ul'>
                            <li className="header_menu_li">{words.NEWS}</li>
                            <li className="header_menu_li">{words.STREAM}</li>
                            <li className="header_menu_li">
                                <a href={`${process.env.PUBLIC_URL}/games`} className='header_menu_li_a'>
                                {words.GAMES_REVIEWS}
                                </a>
                            </li>
                            <li className="header_menu_li">{words.CHEATS}</li>
                            <li className="header_menu_li">{words.HELP}</li>
                        </ul>
                    </div>
                    <div className="header_menu_box">
                        <div className="header_other">
                            <div className='box_one'>
                                <span className='header_setting_img'>
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="100%" height="100%">
                                        <path d="M23,11H19.938a7.956,7.956,0,0,0-.575-2.129l2.655-1.546A1,1,0,0,0,21.012,5.6L18.354,7.145a8.1,8.1,0,0,0-1.507-1.5l1.541-2.648a1,1,0,0,0-1.729-1.006L15.12,4.633A7.971,7.971,0,0,0,13,4.062V1a1,1,0,0,0-2,0V4.062a7.965,7.965,0,0,0-2.108.566L7.355,1.986A1,1,0,1,0,5.627,2.992L7.163,5.633A8.046,8.046,0,0,0,5.651,7.139L3,5.6A1,1,0,0,0,2,7.325L4.64,8.865A7.955,7.955,0,0,0,4.062,11H1a1,1,0,0,0,0,2H4.062a7.957,7.957,0,0,0,.576,2.129L2,16.662A1,1,0,0,0,3.01,18.391l2.637-1.535a8.083,8.083,0,0,0,1.5,1.5L5.6,21A1,1,0,0,0,7.33,22.007l1.538-2.646A7.943,7.943,0,0,0,11,19.938V23a1,1,0,0,0,2,0V19.938a7.934,7.934,0,0,0,2.143-.582l1.543,2.651A1,1,0,0,0,18.414,21l-1.546-2.657a8.076,8.076,0,0,0,1.49-1.494l2.647,1.541a1,1,0,0,0,1.006-1.729l-2.646-1.54A7.941,7.941,0,0,0,19.938,13H23A1,1,0,0,0,23,11ZM12,18C4.356,17.906,3.792,6.32,12,6,19.929,6.252,19.928,17.749,12,18Zm1.455-2.229C7.889,17.5,5.64,9.3,11.361,8.051a4.393,4.393,0,0,1,1.683.068.544.544,0,0,1,.243.918,3.7,3.7,0,0,0,.319,5.793A.545.545,0,0,1,13.455,15.771Z" />
                                    </svg>
                                </span>
                            </div>
                        </div>
    
                        <div className="header_other">
                            <div className="box_one">
                                <div className="header_setting_img">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 64 64"><g transform="matrix(1.22423,0,0,1.12028,-37.1546,15.1698)"><path d="M61.354,14.031C60.89,7.593 55.964,2.526 49.954,2.526L43.42,2.526C40.387,2.526 37.478,3.843 35.333,6.187C33.188,8.531 31.983,11.71 31.983,15.025L31.983,25.735C31.983,26.721 32.715,27.52 33.617,27.52L49.185,27.52C50.087,27.52 50.819,26.72 50.819,25.735C50.819,24.749 50.087,23.949 49.185,23.949L35.251,23.949L35.251,15.025C35.251,12.657 36.111,10.386 37.643,8.712C39.175,7.037 41.253,6.097 43.42,6.097L49.954,6.097C54.246,6.097 57.765,9.714 58.097,14.311C58.167,15.293 58.955,16.028 59.853,15.951C60.752,15.873 61.425,15.013 61.354,14.031Z" /></g><g transform="matrix(-1,0,0,1,64.0872,17)"><path d="M35.963,10L52,10C53.104,10 54,10.896 54,12C54,13.104 53.104,14 52,14L35.963,14C34.859,14 33.963,13.104 33.963,12C33.963,10.896 34.859,10 35.963,10Z" /></g><g transform="matrix(-1,0,0,1,64,24)"><path d="M37.963,10L52,10C53.104,10 54,10.896 54,12C54,13.104 53.104,14 52,14L37.963,14C36.859,14 35.963,13.104 35.963,12C35.963,10.896 36.859,10 37.963,10Z" /></g><g><path d="M47.999,34C51.712,34 55.273,35.475 57.899,38.101C60.525,40.727 62,44.288 62,48.002L62,60C62,61.105 61.104,62 60,62L40,62C32.269,62 26.001,55.732 26.001,48C26.001,40.268 32.269,34 40,34L47.999,34ZM44.039,46C45.143,46 46.039,46.896 46.039,48C46.039,49.104 45.143,50 44.039,50C42.935,50 42.039,49.104 42.039,48C42.039,46.896 42.935,46 44.039,46ZM37.962,46C39.066,46 39.963,46.896 39.963,48C39.963,49.104 39.066,50 37.962,50C36.858,50 35.962,49.104 35.962,48C35.962,46.896 36.858,46 37.962,46ZM50,46C51.104,46 52,46.896 52,48C52,49.104 51.104,50 50,50C48.896,50 48,49.104 48,48C48,46.896 48.896,46 50,46Z" /></g><g><path d="M60,30L39.982,30C39.077,22.741 33.309,16.992 26.043,16.116C26.001,15.486 26.042,14.832 26.093,14.389C26.892,7.416 32.814,2 40,2L47.999,2C51.712,2 55.273,3.475 57.899,6.101C60.525,8.727 62,12.288 62,16.002L62,28C62,29.105 61.104,30 60,30ZM52.087,22C53.191,22 54.087,21.104 54.087,20C54.087,18.896 53.191,18 52.087,18L40.05,18C38.946,18 38.05,18.896 38.05,20C38.05,21.104 38.946,22 40.05,22L52.087,22ZM52,15C53.104,15 54,14.104 54,13C54,11.896 53.104,11 52,11L35.963,11C34.859,11 33.963,11.896 33.963,13C33.963,14.104 34.859,15 35.963,15L52,15Z" /></g></svg>
                                </div>
                            </div>
                        </div>
                        <div className="header_other">
                            <div className="box_one">
                                <div className="header_setting_img header_login">
                                    <svg id="레이어_1" viewBox="0 0 40 40"><path d="M37.1,5.22h-2v-2c0-0.5-0.4-0.9-0.9-0.9c-0.5,0-0.9,0.4-0.9,0.9v2h-2c-0.5,0-0.9,0.4-0.9,0.9c0,0.5,0.4,0.9,0.9,0.9h2v2  c0,0.5,0.4,0.9,0.9,0.9c0.5,0,0.9-0.4,0.9-0.9V7h2C37.6,7,38,6.6,38,6.1s-0.4-0.9-0.9-0.9l0,0V5.22z" /><path d="M28.76,20c2.92-2.28,3.44-6.5,1.16-9.42c-1.24-1.6-3.14-2.54-5.16-2.58c-1.64,0-3.22,0.62-4.42,1.74  C18.22,5.8,13.32,4.33,9.38,6.45S3.97,13.47,6.09,17.4c0.65,1.2,1.59,2.23,2.74,2.97C4.87,21.53,2,24.85,2,28.77v8  c0,0.5,0.4,0.9,0.9,0.9c0,0,0,0,0,0h20.88c0.5,0,0.9-0.4,0.9-0.9l0,0v-1.62h8.54c0.5,0,0.9-0.4,0.9-0.9v0V27.3  C34.08,23.97,31.92,21.04,28.76,20z M24.76,9.75c2.71-0.05,4.94,2.09,5,4.8c0.05,2.71-2.09,4.94-4.8,5  c-1.79,0.04-3.46-0.91-4.35-2.46l0.05-0.14c0.08-0.17,0.15-0.34,0.22-0.51s0.13-0.4,0.19-0.6s0.05-0.16,0.07-0.25  c0.17-0.64,0.26-1.29,0.26-1.95c0-0.43,0-0.84-0.06-1.26c-0.04-0.26-0.09-0.52-0.16-0.77c0,0,0-0.08,0-0.11  c0.89-1.1,2.22-1.74,3.63-1.75H24.76z M19.41,21c-0.52-0.24-1.05-0.44-1.6-0.59c0.68-0.45,1.29-1,1.8-1.64  c0.39,0.51,0.86,0.95,1.39,1.32c-0.54,0.24-1.04,0.56-1.49,0.93L19.41,21z M7,13.64c-0.01-3.47,2.81-6.29,6.28-6.3  c2.69,0,5.09,1.7,5.96,4.25c0.24,0.66,0.36,1.35,0.36,2.05c-0.01,0.68-0.12,1.36-0.34,2c-0.79,2.34-3.06,4.28-5.62,4.28  c0,0-0.74,0-0.74,0C9.59,19.71,7,16.96,7,13.64z M22.88,35.91H3.8c0,0,0-7.14,0-7.14c0-1.46,0.54-2.88,1.46-4.01  c0.97-1.19,2.31-2.05,3.77-2.53c0.89-0.29,1.83-0.41,2.76-0.45c0.96-0.04,1.95-0.1,2.91-0.02c0.5,0.04,1,0.14,1.49,0.24  c0.52,0.11,1.03,0.24,1.53,0.39c0.25,0.07,0.49,0.16,0.74,0.24c0.72,0.25,1.36,0.62,1.97,1.08c0.38,0.29,0.66,0.63,0.99,0.96  c0.27,0.27,0.48,0.67,0.64,1.01c0.26,0.53,0.38,1.11,0.51,1.68c0.22,0.99,0.32,1.99,0.32,3.01c0,0.68,0,1.36,0,2.04  c0,1.15,0,2.29,0,3.44c0,0.03,0,0.07,0,0.1L22.88,35.91z M32.32,33.35h-7.64v-4.58c0,0,0-0.06,0-0.09s0-0.18,0-0.28  c-0.1-1.57-0.61-3.09-1.47-4.4c-0.05-0.07-0.11-0.14-0.16-0.22c-0.18-0.24-0.37-0.48-0.57-0.7l-0.05-0.06  c-0.35-0.38-0.75-0.73-1.18-1.02c0.79-0.47,1.69-0.7,2.61-0.65h2.22c3.36-0.07,6.15,2.59,6.24,5.95V33.35z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className='header_other'>
                        <div className="box_one box_language">
                                <div className="header_setting_img header_language">
                                <span className='span_language' onClick={() => setLanguage(!isLanguage)}>
                                 <img src={languages[currentLanguage]} alt={languages[currentLanguage]} className='current_language' />
                                </span>

                                {
                                    isLanguage && (
                                        <div className='dropboxLanguage'>
                                            <SelectLanguage
                                            onSelect={handleChangeLanguage}
                                            currentLanguage = {currentLanguage}
                                            />
                                        </div>
                                    )
                                }

                                </div>
                            </div>
                        </div>
                    </div>
                </menu>
            </div>
            )
        }
       </section>
    )
}
