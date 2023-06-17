import React, { useEffect, useState } from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

function Home() {
  useEffect(() => {
    fetch("https://648c5ef48620b8bae7ecc990.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const pizzasItemsList = items.map((item) => (
    <PizzaBlock key={item.id} {...item} />
  ));

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : pizzasItemsList}
      </div>
    </>
  );
}

export default Home;
