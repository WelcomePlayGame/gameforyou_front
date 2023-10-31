
import { FC} from "react" 

type FontSelector = {
    fontFamily : string,
    setFontFamily : (font : string) => void
}

export const FontSelector: FC<FontSelector> = ({fontFamily , setFontFamily})=> {

    const fonts = ["Arial", "Verdana", "Times New Roman", "Georgia", "Courier New"];
  



    return (
        <div className="font_selector">
            <select
            value={fontFamily}
            onChange={(e)=>setFontFamily(e.target.value)}
            >
                {
                    fonts.map((font)=> (
                        <option key={font} value={font}>
                            {font}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}