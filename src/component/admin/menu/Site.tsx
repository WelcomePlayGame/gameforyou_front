import words from "../../../wordsvariable/WORDS"
export const Site = ()=> {


    return (


      <div>
        <span className="menu_link">
        <a href={`${process.env.PUBLIC_URL}`} target="_blank" className="menu_link_a">{words.SITE}</a>
        </span>
      </div>
    )



}