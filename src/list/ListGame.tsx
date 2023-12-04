
import { useState, useEffect} from 'react';
import {getAllCategory, ResponseDataCategory} from '../helper/MethodGet'
import { URL_FOR_BACK } from '../helper/URL';
import words from '../wordsvariable/WORDS';
import { Link } from 'react-router-dom'
export const ListGame = ()=> {
    interface Game {
        id : number,
        title : string,
        url_post : string,
        posterVertical_urs ?: {id : number,poster_300x300 : string },
    }

    const [games, setGames] = useState<ResponseDataCategory []>([])


    useEffect(()=> {
        getAllCategory(URL_FOR_BACK.URL_BASE+URL_FOR_BACK.GAMEPOST+URL_FOR_BACK.COUNTRY+"/")
        .then((data)=> setGames(data))
    }, [])

      
      return (
        <section className='games_list'>
          {games.map((game: Game) => (
            <div key={game.id}>
              <div className='box_game'>
                <img src={game.posterVertical_urs?.poster_300x300} alt={game.title} className='box_game_img' />
                {game.title}
                <Link to={`/game/${game.url_post}`}>
                  {words.DETAILS}
                </Link>
              </div>
            </div>
          ))}
        </section>
    )
}