
import { useState, useEffect} from 'react';
import {getAllCategory, ResponseDataCategory} from '../helper/MethodGet'
import { URL_FOR_BACK } from '../helper/URL';
import words from '../wordsvariable/WORDS';
export const ListGame = ()=> {

    interface Game {
        id : number,
        title : string,
        posterVertical_urs ?: {id : number,poster_300x300 : string } 
    }

    const [games, setGames] = useState<ResponseDataCategory []>([])


    useEffect(()=> {
        getAllCategory(URL_FOR_BACK.URL_BASE+URL_FOR_BACK.GAMEPOST+URL_FOR_BACK.COUNTRY+"/")
        .then((data)=> setGames(data))
    }, [])



    return (
        <section className='games_list'>
            {
                games.map((game : Game)=> (
                    <div key={game.id}>
                        <div className='box_game'>
                        <img src={game.posterVertical_urs?.poster_300x300} alt={game.title} className='box_game_img' />
                        {game.title}
                        <a href={`${process.env.PUBLIC_URL}/game/${game.id}`}>{words.DETAILS}</a>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}