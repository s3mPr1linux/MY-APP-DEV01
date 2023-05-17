import CardGame from "./components/CardGame";
import "./styles/settings/colors.css";
import "./styles/generics/generics.css";
import "./styles/elements/base.css";

const $root = document.querySelector("#root");//API DO DOM
const $htmlCardGame = CardGame() ;


$root.insertAdjacentHTML("beforeend", $htmlCardGame);