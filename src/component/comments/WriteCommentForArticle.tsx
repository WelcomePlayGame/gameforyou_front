import words from "../../wordsvariable/WORDS"
import {addComment, IComment} from '../../helper/MethodPost'
import { useState } from "react";
import { URL_FOR_BACK } from "../../helper/URL";
export const WriteCommentForArticle = ({article} : {article : {id : number}})=> {

    const [des_comment , setDes_comment] = useState<string>("")

    const comment : IComment = {
        des_comment : des_comment,
        title_comment : '',
        positiveInputs : [''],
        negativeInputs : [''],
        rating :  0,
        id_post : article.id
    }

   const handleAddCommit = (e : React.FormEvent)=> {
    e.preventDefault();
    addComment(`${URL_FOR_BACK.URL_BASE}${URL_FOR_BACK.COMMENT}${URL_FOR_BACK.COUNTRY}`,comment )
    }

    return (
        <section className="box_comment_for_article">
            <form className="add_comment_for_article" onSubmit={handleAddCommit}>
                <textarea
                value={des_comment}
                onChange={(e)=> setDes_comment(e.target.value)}
                className="add_comment_for_article_textarea"
                />
                <button type="submit" className="add_comment_for_article_btn">{words.SEND_COMMENT}</button>
            </form>
        </section>
    )
}