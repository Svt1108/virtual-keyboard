import "./css/normalize.css";
import "./css/keyboard.scss";
import VirtualKeyboard from "./js/keyboard";

const virtualKeyboard = new VirtualKeyboard();
const langSaved = localStorage.getItem("lang_saved");
let lang = "eng";
if (langSaved) {
  lang = langSaved;
}
virtualKeyboard.addKeyboard(lang);
virtualKeyboard.changeLanguageMouse();
virtualKeyboard.someKeys();
