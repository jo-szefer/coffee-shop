import React from "react";
import { ShopItem } from "./ShopItem";
import "./products-styles.css";

let productsList = [
  { name: "Guatemala", price: "10$", imgName: "single1.png" },
  { name: "Nicaragua", price: "10$", imgName: "single2.jpg" },
  { name: "Peru", price: "10$", imgName: "single3.jpg" },
  { name: "Colombia", price: "10$", imgName: "single4.jpg" },
  { name: "Ethiopia", price: "10$", imgName: "single5.jpg" },
  { name: "Honduras", price: "10$", imgName: "single6.jpg" },
];

export const SingleOrigin = () => {
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
