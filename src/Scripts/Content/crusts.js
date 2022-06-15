//all crusts here!
import { getCrusts, setcrusts } from "../Data/data.js";

document.addEventListener("change", (event) => {
  if (event.target.name === "crust") {
    const [, crustId] = event.target.value.split("--");
    //create order set functions
    setcrusts(parseInt(crustId));
  }
});

const crusts = getCrusts();

export const Crusts = () => {
  let htmlCrusts = "<ul>";
  for (const crust of crusts) {
    htmlCrusts += `<li id="crust--${crust.id}"> 
    <input name="crust" type="radio" value="crust--${crust.id}">${crust.type} costs $${crust.price}
    </li>`;
  }
  htmlCrusts += "</ul>";
  return htmlCrusts;
};
