import "../Styles/styles.css";
import { PizzaParlor } from "./Content/pizzaParlor.js";

document.getElementById("app").innerHTML = PizzaParlor();

const render = () => (document.getElementById("app").innerHTML = PizzaParlor());

// intially display the app data as HTML ( on page load )
render();

document.addEventListener("dbStateChanged", () => render());
