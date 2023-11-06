import React, { ChangeEvent, useEffect, useState } from "react"
import {getAllPostGame, ResponseDataCategory} from '../../helper/MethodGet'
import {BASE_URL, GAMEPOST} from '../../helper/conf'

export const SelectGame = ({onChange} : {onChange : (event : ChangeEvent<HTMLSelectElement>) => void})=> {

    const [games, setGames] = useState<ResponseDataCategory []>([]);

    useEffect(() => {
        getAllPostGame(BASE_URL+GAMEPOST)
        .then((data) => setGames(data) )
    }, [])
 



    return (
       
    <section className="selectGame_container">
         <>
        <select onChange={onChange} className='selectGame_select'>
            {
                 games.map((game) => (
                    <option key={game.id} value={game.title}>
                        {game.title}
                    </option>
                    ))
            }
        </select>
        </>
    </section>
    )
}