import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {getGameById, Game} from '../helper/MethodGet'
import { URL_FOR_BACK } from "../helper/URL";
import { Helmet } from "react-helmet";
import words from "../wordsvariable/WORDS";
import { ButtonComment} from '../component/comments/ButtonComment'
import { CommentGame } from "../component/comments/CommentGame";
export const HeaderGame = ()=> {
    const [isClose, setIsClose] = useState(false)
    const {url_post} = useParams<string>()
    const [game, setGame] = useState<Game>();
    useEffect(()=> {
        getGameById(URL_FOR_BACK.URL_BASE+URL_FOR_BACK.GAMEPOST+URL_FOR_BACK.COUNTRY, url_post!)
        .then((data)=> {
            setGame(data)
        })
    }, [])

    const handleClose = ()=> {
        setIsClose(!isClose)
      }
  
    const createMarkup = (html : string) => ({ __html: html });
    return (
      
     <section className="game_page">
        <Helmet>
            <title>{game?.seo_title}</title>
            <meta name="description" content={game?.seo_des} />
        </Helmet>
        <div className="game_box_page">
        <div className="game_box_header_img"  style={{ background: `url(${game && game.posterHorizontal_uls && game.posterHorizontal_uls.poster_1024x768})` }}> </div>
        <ul className="header_game_ul">
            <li>
            <Link className="header_game_a" to={`/game/${game?.url_post}`}>{words.HOME}</Link>
            </li>
            <li>
            <Link className="header_game_a" to={`/game/${game?.url_post}/news`}>{words.NEWS}</Link>
            </li>
            <li><Link className="header_game_a" to={`/game/${game?.url_post}/comments`}>{words.COMMENTS}</Link></li>
            <li><Link className="header_game_a" to={`/game/${game?.url_post}/blogs`}>{words.BLOGS}</Link></li>
        </ul>
        <div className="game_box_body">
              <div className="game_box_body_left_general">
              <div className="game_box_body_left">
                      <img src={`${game?.posterVertical_urs?.poster_300x300}`} alt={game?.title} className="game_box_body_left_img"/>
                    </div>
                  <div className="game_box_body_right">
                      <span className="game_box_body_right_title">{`${game?.title}`}</span>
                      <div className="game_box_body_right_var">
                      <span className="game_box_body_right_text">{`${words.DATA_RELASE} - ${game?.datatime ? new Date(game.datatime).toLocaleDateString() : 'N/A'}`}</span>
                      <span className="game_box_body_right_text">{`${words.SITE_GAME} - `}<a href={game?.url_game} target="_blank">{game?.url_game}</a></span>
                      <span className="game_box_body_right_text">{`${words.DEVOLOPER} - ${game?.developer.title}`}</span>
                      <span className="game_box_body_right_text">{`${words.PUBLISHER} - ${game?.publisher.title}`}</span>
                      <span className="game_box_body_right_text">
                      {`${words.GENRE} - `} {game?.genresSet ? (
                       game.genresSet.map((genre, index) => (
                     <span key={index}>{genre.title}</span>
                      ))
                       ) : (
                       <span>No genres available</span>
                        )}
                        </span>

                      </div>
                  </div>
                  <div className="game_box_body_left_rating">
                  <div className="game_left_rating">
                    <div>
                      <span>{words.USER_RATING}</span>
                    </div>
                  </div>
                  <div></div>
                  </div>
              </div>
              <div className="game_box_body_des">
                <hr className="hr_game"/>
                <div className="game_box_comment">
                <span className="game_box_body_right_text write_comment" onClick={handleClose}>{words.WRITE_A_REVIEW}</span>
                {
                  isClose && (
                    <ButtonComment setIsClose={setIsClose} title={game?.title} poster={game?.posterVertical_urs} id={game?.id}/>
                  )
                }
                <CommentGame/>
                </div>
                <div dangerouslySetInnerHTML={game?.des ? createMarkup(game.des) : undefined} className="game_box_body_right_text des"></div>
                </div>
                </div>

        </div>
     </section>
      
    )
}