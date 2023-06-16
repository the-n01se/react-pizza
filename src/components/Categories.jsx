import React, { useState } from "react";

function Categories() {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  const categoriesList = categories.map((n, index) => (
    <li
      onClick={() => onClickCategory(index)}
      className={activeIndex === index ? "active" : ""}
    >
      {n}
    </li>
  ));

  return (
    <div className="categories">
      <ul>
        {categoriesList}
      </ul>
    </div>
  );
}

export default Categories;
