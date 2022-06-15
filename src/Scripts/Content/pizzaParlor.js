// all html will be routed through here
import { Toppings } from "./toppings.js";
import { Crusts } from "./crusts.js";
import { Sizes } from "./sizes.js";
import { updateOrder } from "./order.js";
import { OrderButton } from "./orderButton.js";

export const PizzaParlor = () => {
  return `<h1> Pizza Poppa always gets his dough</h1>
<h3>here are all our toppings</h3>
    ${Toppings()}
    <h3>here are all our crusts</h3>
    ${Crusts()}
    <h3>here are all our sizes</h3>
    ${Sizes()}
    <h3>Complete Order</h3>
    ${OrderButton()}

    <h3>here is your current order</h3>
      
  
  `;
};
