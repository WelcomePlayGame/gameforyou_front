type DateSelectStar = {
  setRating: (newRating: number) => void;
  rating: number;
};
export const SelectStar: React.FC<DateSelectStar> = ({ setRating, rating }) => {
  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <>
      <span className="rating-stars">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star, index) => (
          <span key={index} onClick={() => handleRatingChange(star)}>
            {star <= rating ? (
              <img
                src="../icons/star.svg"
                alt="star"
                className="star_img star"
              />
            ) : (
              <span className="star">
                <img src="../icons/star.svg" alt="star" className="star_img" />
              </span>
            )}
          </span>
        ))}
      </span>
    </>
  );
};
