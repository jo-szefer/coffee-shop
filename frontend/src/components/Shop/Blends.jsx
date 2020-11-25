import React from "react";

import { Products } from "./shopStyles";
import { ShopItem } from "./ShopItem";

let productsInfo = [
  { name: "Guatemala", price: "10$", imgName: "blend1.jpg" },
  { name: "Hard Beans Salwador", price: "10$", imgName: "blend2.png" },
  { name: "Się Przelewa", price: "10$", imgName: "blend3.jpg" },
  { name: "Brazil", price: "10$", imgName: "blend5.png" },
  { name: "Baked Beans", price: "10$", imgName: "blend4.png" },
];

export const Blends = () => {
  return (
    <Products>
      {productsInfo.map((element) => (
        <ShopItem {...element} />
      ))}
    </Products>
  );
};
