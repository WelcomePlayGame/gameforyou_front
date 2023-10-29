import { FC , useState } from "react"
import { FontSelector } from "./FontSelector"

type TextEditor = {
    description : string,
    setDescription: (des :string) => void
} 

export const  TextEditor : FC<TextEditor> = ({description, setDescription})=> {

    const [activeTab, setActiveTab] = useState("redactor")
    const [fontFamily, setFontFamily] = useState('');


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
                    <div>
                        <FontSelector fontFamily={fontFamily} setFontFamily={setFontFamily}/>
                    </div>
                    <textarea
                    value={description}
                    onChange={(e)=> setDescription(e.target.value)}   
                    className={fontFamily.toLowerCase().replace(/\s+/g, '-')}
                    placeholder="Можете писати ..."
                    />
                   </div>
                )
            }
            </div>
        </section>
    )
}