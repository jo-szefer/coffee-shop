import React from "react";

import { Slogan } from "./Slogan";
import { Slider } from "./Slider";
import { Shop } from "./Shop";
import { shopCategories } from "./shopCategories";

export const Home = () => (
  <>
    <Slogan />
    <Slider />
    <Shop shopCategories={shopCategories} />
  </>
);
