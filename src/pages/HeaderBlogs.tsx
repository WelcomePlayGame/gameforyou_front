
import { useParams, Link } from "react-router-dom";
import {getGameById, Game} from '../helper/MethodGet'
import { useState, useEffect } from "react";
import { URL_FOR_BACK } from "../helper/URL";
export const HeaderBlogs = ()=> {
    const {url_post} = useParams<string>()
    const [game, setGame] = useState<Game>();
    useEffect(()=> {
        getGameById(URL_FOR_BACK.URL_BASE+URL_FOR_BACK.GAMEPOST+URL_FOR_BACK.COUNTRY, url_post!)
        .then((data)=> {
            setGame(data)
        })
    }, [])




    return (
        <section className="game_page">
        {/* <Helmet>
            <title>{game?.seo_title}</title>
            <meta name="description" content={game?.seo_des} />
        </Helmet> */}
        <div className="game_box_page">
        <div className="game_box_header_img"  style={{ background: `url(${game && game.posterHorizontal_uls && game.posterHorizontal_uls.poster_1024x768})` }}> </div>
        <ul className="header_game_ul">
            <li>
            <Link className="header_game_a" to={`/game/${game?.url_post}`}>Home</Link>
            </li>
            <li>
            <Link className="header_game_a" to={`/game/${game?.url_post}/news`}>News</Link>
            </li>
            <li><Link className="header_game_a" to={`/game/${game?.url_post}/comments`}>Comment(s)</Link></li>
            <li><Link className="header_game_a" to={`/game/${game?.url_post}/blogs`}>Blog(s)</Link></li>
        </ul>
        <div className="game_box_body">
              
        </div>
                

        </div>
     </section>
    )
}