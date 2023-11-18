import React, { ChangeEvent, useEffect, useState } from "react"
import {getAllPostGame, ResponseDataCategory} from '../../helper/MethodGet'
import { URL_FOR_BACK } from "../../helper/URL"
export const SelectGame = ({onChange} : {onChange : (event : ChangeEvent<HTMLSelectElement>) => void})=> {

    const [games, setGames] = useState<ResponseDataCategory []>([]);

    useEffect(() => {
        getAllPostGame(URL_FOR_BACK.URL_BASE+URL_FOR_BACK.GAMEPOST+URL_FOR_BACK.COUNTRY)
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