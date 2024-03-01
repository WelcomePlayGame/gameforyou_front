import React, { ChangeEvent } from "react";

const SelectReviewsAdmin = ({
  onChange,
}: {
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}) => {
  const reviews: string[] = ["angry", "good", "super_good"];
  return (
    <section className="selectCategory_container">
      <select
        onChange={onChange}
        multiple
        className="selectCategory_select"
        required
      >
        {reviews.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
    </section>
  );
};

export default SelectReviewsAdmin;
