import {FC} from 'react'

type BoltTypeSelect = {
    isBold : boolean;
    setIsBold : (bold : boolean) => void
}

export const BoltTypeSelect : FC<BoltTypeSelect> = ({isBold , setIsBold})  => {


    return (
        <div className="bold_selector">
            <button type='button' onClick={()=> setIsBold(!isBold)}>
            {
                isBold ? "Не Жир" : "Жир"
            }
            </button>
        </div>
    )
}