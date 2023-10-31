import {FC} from 'react'

type ItalicTypeSelect = {
    isItalic : boolean;
    setIsItalic : (italic : boolean) => void
}

export const ItalicTypeSelect : FC<ItalicTypeSelect> = ({isItalic , setIsItalic})=> {





    return (
        <div className="italic_selector">
            <button type='button' onClick={()=>setIsItalic(!isItalic)}>
            {
                isItalic ? "Не Наклон" : " Наклон"
            }
            </button>
        </div>
    )
}