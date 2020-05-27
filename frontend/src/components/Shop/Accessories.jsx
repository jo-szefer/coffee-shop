import React from "react";
import { ShopItem } from "./ShopItem";
import "./products-styles.css";

let productsList = [
  { name: "Aeropress", price: "10$", imgName: "aeropress.jpg" },
  { name: "Aeropress Filters", price: "10$", imgName: "filters_aeropress.jpg" },
  { name: "Chemex", price: "10$", imgName: "chemex.png" },
  { name: "Chemex Filters", price: "10$", imgName: "filters_chemex.jpg" },
  { name: "Another Filters", price: "10$", imgName: "filters_drip.jpg" },
  { name: "And Filters Again", price: "10$", imgName: "more_filters.jpg" },
];

export const Accessories = () => {
  return (
    <div>
      <section className="products">
        {productsList.map((element) => (
          <ShopItem {...element} />
        ))}
      </section>
    </div>
  );
};
