import React, { useState } from 'react';
import words from "../../wordsvariable/WORDS";
import {addComment, IComment} from '../../helper/MethodPost'
import { URL_FOR_BACK } from '../../helper/URL';
import { SelectStar } from './SelectStar';

interface CLose {
    id: number | undefined,
    title: string | undefined;
    poster?: { id: number, poster_300x300: string }
    setIsClose: (code: boolean) => void;
}

export const ButtonComment: React.FC<CLose> = ({ setIsClose, title, poster, id }) => {
    const [title_comment, setTitle_comment] = useState<string>('');
    const [des_comment, setDes_comment] = useState<string>('');
    const [positiveInputs, setPositiveInputs] = useState<string[]>(['']);
    const [negativeInputs, setNegativeInputs] = useState<string []>([''])
    const [rating, setRating] = useState<number>(0)

    const comment : IComment = {
        title_comment : title_comment,
        des_comment : des_comment,
        positiveInputs : positiveInputs,
        negativeInputs : negativeInputs,
        rating : rating,
        id_post : id as number,
    }
    const handleClose = () => {
        setIsClose(false);
    };

    const handlePositiveChange = (index: number, value: string) => {
        const newPositiveInputs = [...positiveInputs];
        newPositiveInputs[index] = value;
        setPositiveInputs(newPositiveInputs);

        if (value.length >= 20 && index === newPositiveInputs.length - 1 && newPositiveInputs.length < 5) {
            setPositiveInputs([...newPositiveInputs, '']);
        } 
    };

    const handleNegativeChange = (index: number, value: string) => {
        const newNegativeInputs = [...negativeInputs];
        newNegativeInputs[index] = value;
    
        if (value.length >= 20 && index === newNegativeInputs.length - 1 && newNegativeInputs.length < 5) {
            setNegativeInputs([...newNegativeInputs, '']);
        } else {
            setNegativeInputs(newNegativeInputs);
        }
    };
    

    const handleSubmit = (e : React.FormEvent)=> {
        e.preventDefault();
        addComment(URL_FOR_BACK.URL_BASE+URL_FOR_BACK.COMMENT+URL_FOR_BACK.COUNTRY+URL_FOR_BACK.ADD, comment )
    }
    return (
        <section className="pop_comment">
            <div className="box_btn_close">
                <span>
                    <img src="../icons/close.png" alt={"close"} onClick={handleClose} className="btn_close" />
                </span>
            </div>
            <div className="min_comment_box ">
                <span><img src={poster?.poster_300x300} alt={title} className="min_poster_img" /></span>
                <span className="min_poster_title">{title}</span>
            </div>
            <hr />
            <div className="my_rating_box">
                <span className="my_rating_box_text">{words.MY_RATING}</span>
                <SelectStar setRating={setRating} rating={rating}/>
            </div>
            <div className="comment_box_form">
                <form className="box_form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={title_comment}
                        onChange={(e) => setTitle_comment(e.target.value)}
                        placeholder={words.TITLE_OPTIONAL}
                        className="box_form_input_form"
                    />
                    <textarea
                        value={des_comment}
                        onChange={(e) => setDes_comment(e.target.value)}
                        placeholder={words.DES_OPTIONAL}
                        className="box_form_input_form_text_area"
                    />
                    {positiveInputs.map((positive, index) => (
                        <div className="form_opinion" key={index}>
                            <img src="../icons/pos.png" alt={title} className="form_opinion_img" />
                            <input
                                value={positive}
                                onChange={(e) => handlePositiveChange(index, e.target.value)}
                                placeholder={words.POSITIVE_TITLE}
                                className="form_opinion_input"
                                minLength={10}
                                required
                            />
                        </div>
                    ))}
                    {negativeInputs.map((negative, index) => (
                        <div className="form_opinion" key={index}>
                            <img src="../icons/negative.png" alt={title} className="form_opinion_img" />
                            <input
                                value={negative}
                                onChange={(e) => handleNegativeChange(index, e.target.value)}
                                placeholder={words.NEGATIVE_TITLE}
                                className="form_opinion_input"
                                minLength={10}
                                required
                            />
                        </div>
                    ))}
                    <button type="submit" className="comment_send_btn">{words.SEND_COMMENT}</button>
                </form>
            </div>
        </section>
    );
};
