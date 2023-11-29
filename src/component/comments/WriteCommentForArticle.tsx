import words from "../../wordsvariable/WORDS"

export const WriteCommentForArticle = ()=> {





    return (
        <section className="box_comment_for_article">
            <form className="add_comment_for_article">
                <textarea className="add_comment_for_article_textarea"></textarea>
                <button type="submit" className="add_comment_for_article_btn">{words.SEND_COMMENT}</button>
            </form>
        </section>
    )
}