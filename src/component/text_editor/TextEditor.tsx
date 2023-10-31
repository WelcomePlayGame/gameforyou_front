import { FC , useState } from "react"
import { FontSelector } from "./FontSelector"
import { FontSizeSelector } from "./FontSizeSelector"
import { BoltTypeSelect } from "./BoltTypeSelect"
import { ItalicTypeSelect } from "./ItalicTypeSelect"

type TextEditor = {
    description : string,
    setDescription: (des :string) => void
} 

export const  TextEditor : FC<TextEditor> = ({description, setDescription})=> {

    const [activeTab, setActiveTab] = useState("redactor")
    const [fontFamily, setFontFamily] = useState('arial');
    const [fontSize, setFontSize] = useState('12px')
    const [cursorPosition, setCursorPosition] = useState({start : 0, end : 0})
    const [isBold , setIsBold] = useState(false)
    const [isItalic, setIsItalic] = useState(false)
    const handleFontChange = (font : string)=> {
        setFontFamily(font);
        const textAreaElement = document.querySelector('textarea');
        if(textAreaElement) {
            textAreaElement.selectionStart = cursorPosition.start;
            textAreaElement.selectionEnd = cursorPosition.end;
        }
    }
    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
        setCursorPosition({ start: e.target.selectionStart, end: e.target.selectionEnd });
    };

    const handleChangeTab = (tabName:string)=> {
        setActiveTab(tabName)
    }
    return (
        <section className="text_editor_container">
            <div className="tab_buttons" >
            <button className={`activeTab`} onClick={()=> handleChangeTab("redactor")} type="button">
                <h3>Редактор</h3>
            </button>
            <button className={`noActive`} onClick={()=> handleChangeTab("preview")} type="button">
                <h3>Перегляд</h3>
            </button>
            </div>
            <div className="tab_content">
            {
                activeTab === 'preview' && (
                    <div>
                        {description}
                    </div>
                )
            }
            {
                activeTab === `redactor` && (
                   
                   <div>
                    <div className="text-editor_panel">
                        <div><FontSelector fontFamily={fontFamily} setFontFamily={handleFontChange}/></div>
                        <div><FontSizeSelector fontSize={fontSize} setFontSize={setFontSize} /></div>
                        <div><BoltTypeSelect isBold={isBold} setIsBold={setIsBold} /></div>
                        <div><ItalicTypeSelect isItalic={isItalic} setIsItalic={setIsItalic} /></div>
                    </div>
                    <textarea
                    value={description}
                    onChange={handleTextareaChange}
                    className={`${fontFamily.toLowerCase().replace(/\s+/g, '-')} fs_${fontSize} ${isBold ? 'bold' : ''} ${isItalic ? "italic" : ""}`}
                    placeholder="Можете писати ..."
                    />
                   </div>
                )
            }
            </div>
        </section>
    )
}