import React from "react";

function Categories({ value, onChangeCategory }) {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const categoriesList = categories.map((categoryName, i) => (
    <li
      key={i}
      onClick={() => onChangeCategory(i)}
      className={value === i ? "active" : ""}
    >
      {categoryName}
    </li>
  ));

  return (
    <div className="categories">
      <ul>{categoriesList}</ul>
    </div>
  );
}

export default Categories;
