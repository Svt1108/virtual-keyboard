import { keyEng, keyRus } from "./constants";

//localStorage.clear();

let flagCaps = false;
let lang = "eng";

class VirtualKeyboard {
  addContent() {
    const main = document.createElement("div");
    main.classList.add("main");
    document.body.appendChild(main);

    const wrap = document.createElement("div");
    wrap.classList.add("wrap");
    main.appendChild(wrap);

    const h1 = document.createElement("h1");
    h1.innerHTML = `Virtual keyboard`;
    wrap.appendChild(h1);

    const textarea = document.createElement("textarea");
    textarea.classList.add("textarea");
    textarea.setAttribute("id", `textarea`);
    wrap.appendChild(textarea);

    this.keyboard = document.createElement("div");
    this.keyboard.classList.add("keyboard");
    wrap.appendChild(this.keyboard);

    const addition = document.createElement("div");
    addition.classList.add("addition");
    wrap.appendChild(addition);

    const windows = document.createElement("p");
    windows.innerHTML = `The keyboard was created in Windows`;
    windows.classList.add("windows");
    addition.appendChild(windows);

    const change = document.createElement("div");
    change.classList.add("change");
    addition.appendChild(change);

    const changeText = document.createElement("p");
    changeText.innerHTML = `Press <span>left Shift+Alt</span> to change language or`;
    changeText.classList.add("change__text");
    change.appendChild(changeText);

    const changeButton = document.createElement("div");
    changeButton.innerHTML = `Change language`;
    changeButton.classList.add("change__button");
    change.appendChild(changeButton);
  }

  addKeyboard(lang) {
    let keyLang;
    let keyboardKey;
    if (lang === "eng") keyLang = keyEng;
    else keyLang = keyRus;
    keyLang.forEach((element) => {
      keyboardKey = document.createElement("div");
      keyboardKey.setAttribute("id", `${element.code}`);
      keyboardKey.setAttribute("value", `${element.value}`);

      const keyCode = element.code;

      if (keyCode === "ArrowLeft") keyboardKey.innerHTML = `&larr;`;
      else if (keyCode === "ArrowRight") keyboardKey.innerHTML = `&rarr;`;
      else if (keyCode === "ArrowUp") keyboardKey.innerHTML = `&uarr;`;
      else if (keyCode === "ArrowDown") keyboardKey.innerHTML = `&darr;`;
      else if (keyCode.includes("Control")) keyboardKey.innerHTML = `Ctrl`;
      else if (keyCode.includes("Meta")) keyboardKey.innerHTML = `Win`;
      else if (keyCode === "Delete") keyboardKey.innerHTML = `Del`;
      else if (keyCode.includes("Alt")) keyboardKey.innerHTML = `Alt`;
      else keyboardKey.innerHTML = `${element.value}`;

      keyboardKey.classList.add("keyboard__key");

      if (
        keyCode.includes("Key") ||
        keyCode === "BracketLeft" ||
        keyCode === "BracketRight" ||
        keyCode === "Semicolon" ||
        keyCode === "Quote" ||
        keyCode === "Backquote" ||
        keyCode === "Comma" ||
        keyCode === "Period"
      )
        keyboardKey.classList.add("key_letter");
      if (keyCode === "Backspace") keyboardKey.classList.add("key_backspace");
      if (keyCode === "Tab" || keyCode === "Delete")
        keyboardKey.classList.add("key_tabdel");
      if (keyCode.includes("Digit")) keyboardKey.classList.add("key_digit");
      if (keyCode === "CapsLock") keyboardKey.classList.add("key_caps");
      if (keyCode === "Enter") keyboardKey.classList.add("key_enter");
      if (keyCode.includes("Control") || keyCode.includes("Alt"))
        keyboardKey.classList.add("key_ctrlalt");
      if (keyCode === "Space") keyboardKey.classList.add("key_space");
      if (keyCode.includes("Arrow")) keyboardKey.classList.add("key_arrow");
      if (keyCode === "ShiftLeft") keyboardKey.classList.add("key_shiftleft");
      if (keyCode === "ShiftRight") keyboardKey.classList.add("key_shiftright");

      if (
        keyCode === "Backquote" ||
        keyCode === "Backspace" ||
        keyCode === "Tab" ||
        keyCode === "Delete" ||
        keyCode === "CapsLock" ||
        keyCode === "Enter" ||
        keyCode === "MetaLeft" ||
        keyCode.includes("Control") ||
        keyCode.includes("Alt") ||
        keyCode.includes("Shift") ||
        keyCode.includes("Arrow")
      )
        keyboardKey.classList.add("key_dark");

      this.keyboard.appendChild(keyboardKey);

      if (
        keyCode === "Backspace" ||
        keyCode === "Delete" ||
        keyCode === "Enter" ||
        keyCode === "ShiftRight"
      ) {
        const breakrow = document.createElement("div");
        breakrow.classList.add("breakrow");
        this.keyboard.appendChild(breakrow);
      }
    });
  }

  removeKeyboard() {
    this.keyboard.innerHTML = "";
  }
}

const virtualKeyboard = new VirtualKeyboard();
virtualKeyboard.addContent();
if (localStorage.getItem("lang_saved"))
  lang = localStorage.getItem("lang_saved");
virtualKeyboard.addKeyboard(lang);

const textarea = document.getElementById("textarea");
const keyboard = document.querySelector(".keyboard");
const change = document.querySelector(".change__button");

/* обработка нажатия клавиши (мышкой или на клавиатуре) */

function keyHandle(keyDown, shiftKey) {
  const value = keyDown.getAttribute("value");
  const keyCode = keyDown.getAttribute("id");
  let start = textarea.selectionStart;
  let end = textarea.selectionEnd;
  keyDown.classList.add("keyActive");
  textarea.focus();

  /*----------------------Enter----------------------------- */

  if (keyCode === "Enter") {
    let finText =
      textarea.value.substring(0, start) + "\n" + textarea.value.substring(end);
    textarea.value = finText;
    textarea.focus();
    let newEnd = textarea.selectionEnd;
    textarea.selectionEnd = textarea.selectionStart =
      newEnd - textarea.value.substring(end).length + 1;
  } else if (keyCode === "CapsLock") {
    /*----------------------CapsLock----------------------------- */
    const keys = document.querySelectorAll(".key_letter");
    if (!flagCaps) {
      for (let i = 0; i < keys.length; i++) {
        keys[i].textContent = keys[i].textContent.toUpperCase();
      }
    } else {
      keyDown.classList.remove("keyActive");
      for (let i = 0; i < keys.length; i++) {
        keys[i].textContent = keys[i].textContent.toLowerCase();
      }
    }
    flagCaps = !flagCaps;
  } else if (keyCode === "Tab") {
    /*----------------------Tab----------------------------- */
    let newSymbol = "    ";
    let finText =
      textarea.value.substring(0, start) +
      newSymbol +
      textarea.value.substring(end);
    textarea.value = finText;
    textarea.focus();
    textarea.selectionEnd = start == end ? end + newSymbol.length : end;
  } else if (keyCode === "Delete") {
    /*----------------------Delete----------------------------- */
    let finText =
      textarea.value.substring(0, start) + textarea.value.substring(end + 1);
    textarea.value = finText;
    textarea.focus();
    textarea.selectionEnd = textarea.selectionStart = start;
  } else if (keyCode === "ArrowLeft") {
    /*----------------------ArrowLeft----------------------------- */
    textarea.selectionEnd = textarea.selectionStart = start - 1;
  } else if (keyCode === "ArrowRight") {
    /*----------------------ArrowRight----------------------------- */
    textarea.selectionEnd = textarea.selectionStart = start + 1;
  } else if (keyCode === "Backspace") {
    /*----------------------Backspace----------------------------- */
    let finText =
      textarea.value.substring(0, start - 1) + textarea.value.substring(end);
    textarea.value = finText;
    textarea.focus();
    textarea.selectionEnd = textarea.selectionStart = start - 1;
  } else if (
    !keyCode.includes("Shift") &&
    !keyCode.includes("Control") &&
    !keyCode.includes("Alt") &&
    !keyCode.includes("Meta")
  ) {
    /*----------------------Text and digit ----------------------------- */
    let newSymbol;
    if (!flagCaps) {
      newSymbol = value;
    } else {
      newSymbol = value.toUpperCase();
    }

    if (shiftKey === true) newSymbol = value.toUpperCase();

    let finText =
      textarea.value.substring(0, start) +
      newSymbol +
      textarea.value.substring(end);
    textarea.value = finText;
    textarea.focus();
    textarea.selectionEnd = start == end ? end + newSymbol.length : end;
  }
}

document.onkeydown = function (event) {
  const keyDown = document.getElementById(event.code);

  let shiftKey = false;
  if (event.shiftKey) shiftKey = true;

  if (keyDown != null) {
    event.preventDefault();
    keyHandle(keyDown, shiftKey);
  }
};

document.onkeyup = function (event) {
  const keyUp = document.getElementById(event.code);
  if (keyUp != null && event.code !== "CapsLock")
    keyUp.classList.remove("keyActive");
};

keyboard.onmousedown = function (event) {
  event.stopImmediatePropagation();
  event.preventDefault();
  // console.log(event.currentTarget);
  const keyCode = event.target.getAttribute("id");
  let shiftKey = false;
  if (keyCode.includes("Shift")) shiftKey = true;

  // event.stopPropagation();
  if (keyCode) keyHandle(event.target, shiftKey);
  if (keyCode !== "CapsLock") event.target.classList.remove("keyActive");
};

/* ---------------смена языка по клику мыши --------------------- */
change.onclick = function (event) {
  changeLanguage();
};

/* ---------------смена языка по нажатию клавиш --------------------- */

function someKeys(func, ...codes) {
  let pressed = new Set();

  document.addEventListener("keydown", function (event) {
    event.preventDefault();
    pressed.add(event.code);

    for (let code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }
    pressed.clear();
    func();
  });

  document.addEventListener("keyup", function (event) {
    pressed.delete(event.code);
  });
}

someKeys(changeLanguage, "ShiftLeft", "AltLeft");

function changeLanguage() {
  if (lang === "eng") {
    lang = "rus";
  } else lang = "eng";
  localStorage.clear();
  localStorage.setItem("lang_saved", lang);
  virtualKeyboard.removeKeyboard();
  virtualKeyboard.addKeyboard(lang);
}
