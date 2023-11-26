import words from "../wordsvariable/WORDS"
import {getGameById} from '../helper/MethodGet'
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { URL_FOR_BACK } from "../helper/URL";
import { Helmet } from "react-helmet";
import { CommentGame } from "./comments/CommentGame";
import { ButtonComment } from "./comments/ButtonComment";

export const Game = ()=> {
    const [isClose, setIsClose] = useState(false)
  
    interface Game {
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
    const {id} = useParams<string>()
    const [game, setGame] = useState<Game | undefined>();
    const numeric = Number(id);

    useEffect(()=> {
        getGameById(URL_FOR_BACK.URL_BASE+URL_FOR_BACK.GAMEPOST+URL_FOR_BACK.COUNTRY, numeric)
        .then((data)=> setGame(data))
        .catch((error)=> {
          if(error.message === 'Not Found') {
          return  null
          } 
        })
        
    }, []);
 
    const createMarkup = (html : string) => ({ __html: html });

    const handleClose = ()=> {
      setIsClose(!isClose)
    }


    return (
      <>
              <section className="game_page">
          <Helmet>
            <title>{game?.seo_title}</title>
            <meta name="description" content={game?.seo_des} />
          </Helmet>
              <div className="game_box_page">
                <div className="game_box_header_img">
                    <picture>
                        <source
                        media="(min-width:1440px)"
                        srcSet={`${game?.posterHorizontal_uls?.poster_1440x900}`}
                        type="image/webp" 
                       
                        />
                        <source 
                        media="(min-width:991px)"
                        srcSet={`${game?.posterHorizontal_uls?.poster_1024x768}`} 
                        type="image/webp"
                    
                        />
                        <source
                        media="(max-width:767px)"
                        srcSet={`${game?.posterHorizontal_uls?.poster_480x320}`}
                        type="image/webp" 
                        />
                        <img
                        src={`${game?.posterHorizontal_uls?.poster_1024x768}`}
                        alt={game?.title} 
                        loading="lazy"
                        className="game_header_img"
                    />
                    </picture>
                   
                </div>
          
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
      </>
    )
}