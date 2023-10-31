
import {FC} from 'react'

type FontSize = {
    fontSize : string,
    setFontSize : (size : string) => void
}

export const FontSizeSelector : FC<FontSize> = ({fontSize, setFontSize} ) => {

    const sizes = ["12px", "14px", "16px", "18px", "20px", "22px"]


    return (
        <div className='size_selector'>
            <select
            value={fontSize}
            onChange={(e)=> setFontSize(e.target.value)}
            >
                {
                    sizes.map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}