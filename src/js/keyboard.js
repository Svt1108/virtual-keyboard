import { keyEng, keyRus } from "./constants";

class VirtualKeyboard {
  //   constructor() {

  // }

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

    const textarea = document.createElement("div");
    textarea.classList.add("textarea");
    textarea.setAttribute("contenteditable", "true");
    wrap.appendChild(textarea);

    const textareaP = document.createElement("p");
    textareaP.classList.add("textarea__p");
    textarea.appendChild(textareaP);

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
    changeText.innerHTML = `Press <span>Shift+Alt</span> to change language or`;
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

      if (element.code === "ArrowLeft") keyboardKey.innerHTML = `&larr;`;
      else if (element.code === "ArrowRight") keyboardKey.innerHTML = `&rarr;`;
      else if (element.code === "ArrowUp") keyboardKey.innerHTML = `&uarr;`;
      else if (element.code === "ArrowDown") keyboardKey.innerHTML = `&darr;`;
      else if (element.code.includes("Control")) keyboardKey.innerHTML = `Ctrl`;
      else if (element.code.includes("Meta")) keyboardKey.innerHTML = `Win`;
      else if (element.code.includes("Delete")) keyboardKey.innerHTML = `Del`;
      else keyboardKey.innerHTML = `${element.value}`;

      keyboardKey.classList.add("keyboard__key");

      const keyCode = element.code;
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
      //      this.keyboard.appendChild(document.createElement("br"));

      //     console.log(element.code);
    });
    //   console.log(`test ${keyEng}`);
  }
}

const virtualKeyboard = new VirtualKeyboard();
virtualKeyboard.addContent();
virtualKeyboard.addKeyboard("eng");
