//all sizes here!
import { getSizes, setsizes } from "../Data/data.js";

const sizes = getSizes();

document.addEventListener("change", (event) => {
  if (event.target.name === "size") {
    const [, sizeId] = event.target.value.split("--");
    //create order set functions
    setsizes(parseInt(sizeId));
  }
});

export const Sizes = () => {
  let htmlSizes = "<ul>";
  for (const size of sizes) {
    htmlSizes += `<li id="size--${size.id}">  
    <input name="size" type="radio" value="size--${size.id}">${size.circumference} costs $${size.price}
    </li>`;
  }
  htmlSizes += "</ul>";
  return htmlSizes;
};
