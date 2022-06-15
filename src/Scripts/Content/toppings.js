//all toppings here!
import { getToppings, setToppings } from "../Data/data.js";
import { updateOrder } from "./order.js";

const toppings = getToppings();

document.addEventListener("change", (event) => {
  if (event.target.name === "topping") {
    const [, toppingId] = event.target.value.split("--");
    //create order set functions
    setToppings(parseInt(toppingId));
    //updateOrder();
  }
});

export const Toppings = () => {
  let htmlTopping = "";
  htmlTopping = "<ul class='topping'>";
  for (const topping of toppings) {
    htmlTopping += `<li id="topping--${topping.id}"> 
    <input name="topping" type="radio" value="topping--${topping.id}">${topping.name} costs $${topping.price}
    
    
    </li>`;
  }
  htmlTopping += "</ul>";
  return htmlTopping;
};
