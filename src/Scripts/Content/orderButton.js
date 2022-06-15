//Add event listener to add a customer's order

import { addCustomerOrder } from "../Data/data.js";

document.addEventListener("click", (event) => {
  if (event.target.id === "orderSubmitBtn") {
    //submit the customer's order
    addCustomerOrder();
  }
});

export const OrderButton = () =>
  `<button id="orderSubmitBtn">Submit Order</button>`;
