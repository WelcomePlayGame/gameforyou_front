

import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
type DateSelectStar = {
    setRating: (newRating: number) => void;
    rating: number;
  };
export const SelectStar : React.FC<DateSelectStar> = ({setRating, rating})=> {



    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
    };


    return (
        <>
                        <span className="rating-stars">
                  {[1, 2, 3, 4, 5,6,7,8,9,10].map((star, index) => (
                <span
             key={index}
             onClick={() => handleRatingChange(star)}
                >
            {star <= rating ? (
                <FaStar className="star" />
            ) : star - 0.5 === rating ? (
                <FaStarHalfAlt className="star" />
            ) : (
                <FaRegStar className="star" />
                  )}
                    </span>
                  ))}
            </span>
        </>
    )
}