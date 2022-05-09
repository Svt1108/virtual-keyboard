import { keyEng, keyRus } from "./constants";

class VirtualKeyboard {
  constructor() {
    this.flagCaps = false;
    this.shiftKey = false;
    this.ctrlKey = false;
    this.copyboard = "";
    this.colsNumber = 94;
    this.addContent();
  }

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

    this.textarea = document.createElement("textarea");
    this.textarea.classList.add("textarea");
    this.textarea.setAttribute("id", `textarea`);
    this.textarea.setAttribute("cols", `${this.colsNumber}`);
    wrap.appendChild(this.textarea);

    this.keyboard = document.createElement("div");
    this.keyboard.classList.add("keyboard");
    wrap.appendChild(this.keyboard);
    this.keyboard.onclick = (event) => {
      this.mouseEvent(event);
    };

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
    changeText.innerHTML = `Press <span>left Shift + Alt</span> to change language or`;
    changeText.classList.add("change__text");
    change.appendChild(changeText);

    this.changeButton = document.createElement("div");
    this.changeButton.innerHTML = `Change language`;
    this.changeButton.classList.add("change__button");
    change.appendChild(this.changeButton);

    const hotKeys = document.createElement("p");
    hotKeys.innerHTML = `<br/> Hot keys: <span>Ctrl + C</span> - copy, <span>Ctrl + V</span> - paste, <span>Ctrl + X</span> - cut, <span>Ctrl + A</span> - highlight all, <span>Shift + &larr;&uarr;&rarr;&darr;</span> - highlight`;
    hotKeys.classList.add("hotkeys");
    addition.appendChild(hotKeys);

    document.onkeydown = (event) => {
      this.keyboardEvent(event);
    };
    document.onkeyup = (event) => {
      this.keyboardEventCancel(event);
    };
  }

  addKeyboard(langKeyboard) {
    this.lang = langKeyboard;
    if (langKeyboard === "eng") this.keyLang = keyEng;
    else this.keyLang = keyRus;
    Object.keys(this.keyLang).forEach((keyCode) => {
      this[keyCode] = document.createElement("div");
      this[keyCode].setAttribute("id", `${keyCode}`);

      if (keyCode.includes("Control")) this[keyCode].innerHTML = `Ctrl`;
      else if (keyCode.includes("Meta")) this[keyCode].innerHTML = `Win`;
      else if (keyCode === "Delete") this[keyCode].innerHTML = `Del`;
      else if (keyCode.includes("Alt")) this[keyCode].innerHTML = `Alt`;
      else this[keyCode].innerHTML = `${this.keyLang[keyCode].value}`;

      this[keyCode].classList.add("keyboard__key");

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
        this[keyCode].classList.add("key_letter");
      if (keyCode === "Backspace") this[keyCode].classList.add("key_backspace");
      if (keyCode === "Tab" || keyCode === "Delete")
        this[keyCode].classList.add("key_tabdel");
      if (keyCode.includes("Digit")) this[keyCode].classList.add("key_digit");
      if (keyCode === "CapsLock") this[keyCode].classList.add("key_caps");
      if (keyCode === "Enter") this[keyCode].classList.add("key_enter");
      if (keyCode.includes("Control") || keyCode.includes("Alt"))
        this[keyCode].classList.add("key_ctrlalt");
      if (keyCode === "Space") this[keyCode].classList.add("key_space");
      if (keyCode.includes("Arrow")) this[keyCode].classList.add("key_arrow");
      if (keyCode === "ShiftLeft") this[keyCode].classList.add("key_shiftleft");
      if (keyCode === "ShiftRight")
        this[keyCode].classList.add("key_shiftright");

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
        this[keyCode].classList.add("key_dark");

      this.keyboard.appendChild(this[keyCode]);

      if (
        keyCode.includes("Digit") ||
        keyCode === "Minus" ||
        keyCode === "Equal"
      ) {
        const keyboardShift = document.createElement("div");
        keyboardShift.innerHTML = `${this.keyLang[keyCode].valueShift}`;
        keyboardShift.classList.add("keyboard__key__shift");
        this[keyCode].appendChild(keyboardShift);
      }

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

  addNewStringSymbolToTextarea() {
    this.textarea.value = this.textarea.value.replace(
      /([^\n]{94})([^\n]{1})/gi,
      "$1\n$2"
    );
  }

  handleEnter() {
    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;
    const finText = `${this.textarea.value.substring(
      0,
      start
    )}\n${this.textarea.value.substring(end)}`;
    this.textarea.value = finText;
    this.textarea.focus();
    const newEnd = this.textarea.selectionEnd;
    this.textarea.selectionEnd =
      newEnd - this.textarea.value.substring(end).length + 1;
    this.textarea.selectionStart =
      newEnd - this.textarea.value.substring(end).length + 1;
  }

  handleCapsLock(keyDown) {
    if (this.flagCaps === false) {
      for (let k = 0; k < this.keyboard.children.length; k += 1) {
        const key = this.keyboard.children[k];
        if (key.classList.contains("key_letter"))
          key.textContent = key.textContent.toUpperCase();
      }
    } else {
      keyDown.classList.remove("keyActive");
      for (let k = 0; k < this.keyboard.children.length; k += 1) {
        const key = this.keyboard.children[k];
        if (key.classList.contains("key_letter"))
          key.textContent = key.textContent.toLowerCase();
      }
    }
    this.flagCaps = !this.flagCaps;
  }

  handleTab() {
    const initLength = this.textarea.value.length;
    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;
    const newSymbol = "    ";
    const finText =
      this.textarea.value.substring(0, start) +
      newSymbol +
      this.textarea.value.substring(end);
    this.textarea.value = finText;
    this.textarea.focus();
    this.addNewStringSymbolToTextarea();
    this.textarea.selectionEnd = start === end ? end + newSymbol.length : end;
    if (initLength + newSymbol.length < this.textarea.value.length) {
      this.textarea.selectionEnd += 1;
      this.textarea.selectionStart += 1;
    }
  }

  handleDelete() {
    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;
    const finText =
      start === end
        ? this.textarea.value.substring(0, start) +
          this.textarea.value.substring(end + 1)
        : this.textarea.value.substring(0, start) +
          this.textarea.value.substring(end);

    this.textarea.value = finText;
    this.textarea.focus();
    this.textarea.selectionEnd = start;
    this.textarea.selectionStart = start;
  }

  handleArrowLeft() {
    const start = this.textarea.selectionStart;
    if (start !== 0) {
      if (this.shiftKey === true) this.textarea.selectionStart = start - 1;
      else {
        this.textarea.selectionEnd = start - 1;
        this.textarea.selectionStart = start - 1;
      }
    }
  }

  handleArrowRight() {
    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;
    if (this.shiftKey === true) this.textarea.selectionEnd = end + 1;
    else {
      this.textarea.selectionEnd = start + 1;
      this.textarea.selectionStart = start + 1;
    }
  }

  handleArrowUp() {
    const start = this.textarea.selectionStart;
    let NPos;
    if (this.textarea.value[start] === "\n")
      NPos = this.textarea.value.lastIndexOf("\n", start - 1);
    else NPos = this.textarea.value.lastIndexOf("\n", start);
    if (NPos !== -1) {
      const curStrLength = start - NPos;
      const prevNPos = this.textarea.value.lastIndexOf("\n", NPos - 1);
      let prevStrLength;
      if (prevNPos !== -1) prevStrLength = NPos - prevNPos;
      else prevStrLength = start - curStrLength + 1;

      if (this.shiftKey === true) {
        if (curStrLength >= prevStrLength) this.textarea.selectionStart = NPos;
        else this.textarea.selectionStart = start - prevStrLength;
      } else if (curStrLength >= prevStrLength) {
        this.textarea.selectionEnd = NPos;
        this.textarea.selectionStart = NPos;
      } else {
        this.textarea.selectionEnd = start - prevStrLength;
        this.textarea.selectionStart = start - prevStrLength;
      }
    }
  }

  handleArrowDown() {
    const end = this.textarea.selectionEnd;
    let NPos;
    if (this.textarea.value[end] === "\n")
      NPos = this.textarea.value.lastIndexOf("\n", end - 1);
    else NPos = this.textarea.value.lastIndexOf("\n", end);
    let curStrLength;
    let nextStrLength;
    if (NPos !== -1) curStrLength = end - NPos;
    else curStrLength = end + 1;

    const endCurStrPos = this.textarea.value.indexOf("\n", end);
    if (endCurStrPos !== -1) {
      let nextNPos = this.textarea.value.indexOf("\n", endCurStrPos + 1);
      if (nextNPos === -1) {
        nextNPos = this.textarea.value.length;
      }

      nextStrLength = nextNPos - endCurStrPos;

      if (this.shiftKey === true) {
        if (curStrLength >= nextStrLength)
          this.textarea.selectionEnd = nextNPos;
        else this.textarea.selectionEnd = endCurStrPos + curStrLength;
      } else if (curStrLength >= nextStrLength) {
        this.textarea.selectionEnd = nextNPos;
        this.textarea.selectionStart = nextNPos;
      } else {
        this.textarea.selectionEnd = endCurStrPos + curStrLength;
        this.textarea.selectionStart = endCurStrPos + curStrLength;
      }
    }
  }

  handleBackspace() {
    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;
    if (start !== 0) {
      const finText =
        start === end
          ? this.textarea.value.substring(0, start - 1) +
            this.textarea.value.substring(end)
          : this.textarea.value.substring(0, start) +
            this.textarea.value.substring(end);
      this.textarea.value = finText;
      this.textarea.focus();
      if (start === end) {
        this.textarea.selectionEnd = start - 1;
        this.textarea.selectionStart = start - 1;
      } else {
        this.textarea.selectionEnd = start - 1;
        this.textarea.selectionStart = start - 1;
      }
    }
  }

  setText(finText) {
    this.textarea.value = finText;
    this.textarea.focus();
  }

  keyHandle(keyDown) {
    const { shiftKey } = this;
    const { ctrlKey } = this;
    const keyCode = keyDown.getAttribute("id");
    const { value } = this.keyLang[keyCode];
    const { valueShift } = this.keyLang[keyCode];
    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;
    keyDown.classList.add("keyActive");
    this.textarea.focus();

    if (keyCode === "Enter") {
      this.handleEnter();
    } else if (keyCode === "CapsLock") {
      this.handleCapsLock(keyDown);
    } else if (keyCode === "Tab") {
      this.handleTab();
    } else if (keyCode === "Delete") {
      this.handleDelete();
    } else if (keyCode === "ArrowLeft") {
      this.handleArrowLeft();
    } else if (keyCode === "ArrowRight") {
      this.handleArrowRight();
    } else if (keyCode === "ArrowUp") {
      this.handleArrowUp();
    } else if (keyCode === "ArrowDown") {
      this.handleArrowDown();
    } else if (keyCode === "Backspace") {
      this.handleBackspace();
    } else if (ctrlKey === true && keyCode === "KeyA") {
      /* ----------------Ctrl+C, Ctrl+V, Ctrl+X, Shift+AltLeft  -------------------*/
      const finText = this.textarea.value;
      this.setText(finText);
      this.textarea.selectionStart = 0;
      this.textarea.selectionEnd = this.textarea.value.length;
    } else if (ctrlKey === true && keyCode === "KeyC") {
      this.copyboard = this.textarea.value.substring(start, end);
      const finText = this.textarea.value;
      this.setText(finText);
      this.textarea.selectionEnd = end;
    } else if (ctrlKey === true && keyCode === "KeyX") {
      this.copyboard = this.textarea.value.substring(start, end);
      const finText =
        this.textarea.value.substring(0, start) +
        this.textarea.value.substring(end);
      this.setText(finText);
      this.textarea.selectionEnd = start;
      this.textarea.selectionStart = start;
    } else if (ctrlKey === true && keyCode === "KeyV") {
      const initLength = this.textarea.value.length;
      const finText =
        this.textarea.value.substring(0, start) +
        this.textarea.value.substring(start, end) +
        this.copyboard +
        this.textarea.value.substring(end);
      this.setText(finText);
      this.addNewStringSymbolToTextarea();
      this.textarea.selectionEnd =
        start === end ? end + this.copyboard.length : end;
      if (initLength + this.copyboard.length < this.textarea.value.length) {
        this.textarea.selectionEnd += 1;
        this.textarea.selectionStart += 1;
      }
    }
    // else if (shiftKey === true && keyCode === "AltLeft") {
    //   this.changeLanguage();
    //   this.shiftKey = "false";
    //   this.ShiftLeft.classList.remove("keyActive");
    //   this.ShiftRight.classList.remove("keyActive");
    // }
    else if (
      !keyCode.includes("Shift") &&
      !keyCode.includes("Control") &&
      !keyCode.includes("Alt") &&
      !keyCode.includes("Meta")
    ) {
      /* ----------------------------Common symbols--------------------------*/

      let newSymbol = "";
      const initLength = this.textarea.value.length;

      if (this.flagCaps === true && shiftKey === true)
        newSymbol = valueShift.toLowerCase();
      else if (this.flagCaps === false && shiftKey === true)
        newSymbol = valueShift;
      else if (this.flagCaps === true && shiftKey === false)
        newSymbol = value.toUpperCase();
      else if (this.flagCaps === false && shiftKey === false) newSymbol = value;

      const finText =
        this.textarea.value.substring(0, start) +
        newSymbol +
        this.textarea.value.substring(end);
      this.setText(finText);
      this.addNewStringSymbolToTextarea();
      this.textarea.selectionEnd = start === end ? end + newSymbol.length : end;
      if (initLength + newSymbol.length < this.textarea.value.length) {
        this.textarea.selectionEnd += 1;
        this.textarea.selectionStart += 1;
      }
    }
  }

  /* ------------- обработка нажатия клавиши (на клавиатуре) ------------------*/

  keyboardEvent(event) {
    const keyDown = this[event.code];

    if (event.shiftKey) {
      this.shiftKey = true;
      Object.keys(this.keyLang).forEach((key) => {
        this[key].innerHTML = `${this.keyLang[key].valueShift}`;
        if (key.includes("Digit") || key === "Minus" || key === "Equal") {
          const keyboardShift = document.createElement("div");
          keyboardShift.innerHTML = `${this.keyLang[key].value}`;
          keyboardShift.classList.add("keyboard__key__shift");
          this[key].appendChild(keyboardShift);
        }
      });
      // if (this.pressed.has("AltLeft")) {
      //   this.pressed.clear();
      //   this.changeLanguage();
      // }
    }
    if (event.ctrlKey) this.ctrlKey = true;

    if (keyDown != null) {
      event.preventDefault();
      this.keyHandle(keyDown);
    }
  }

  keyboardEventCancel(event) {
    const keyUp = this[event.code];
    if (event.code.includes("Shift")) {
      this.shiftKey = false;
      Object.keys(this.keyLang).forEach((key) => {
        this[key].innerHTML = `${this.keyLang[key].value}`;
        if (key.includes("Digit") || key === "Minus" || key === "Equal") {
          const keyboardShift = document.createElement("div");
          keyboardShift.innerHTML = `${this.keyLang[key].valueShift}`;
          keyboardShift.classList.add("keyboard__key__shift");
          this[key].appendChild(keyboardShift);
        }
      });
      this.ShiftLeft.classList.remove("keyActive");
      this.ShiftRight.classList.remove("keyActive");
    } else if (event.code.includes("Control")) {
      this.ctrlKey = false;
      this.ControlLeft.classList.remove("keyActive");
      this.ControlRight.classList.remove("keyActive");
    } else if (keyUp != null && event.code !== "CapsLock") {
      keyUp.classList.remove("keyActive");
    }
  }

  /* ------------------ обработка нажатия клавиши (мышкой) --------------------------- */

  mouseEvent(event) {
    event.stopImmediatePropagation();
    event.preventDefault();

    const eventTarget = event.target.classList.contains("keyboard__key__shift")
      ? event.target.parentElement
      : event.target;

    const keyCode = eventTarget.getAttribute("id");

    if (!keyCode) return null;

    if (keyCode.includes("Shift")) {
      if (
        this.ShiftLeft.classList.contains("keyActive") ||
        this.ShiftRight.classList.contains("keyActive")
      ) {
        this.shiftKey = false;
        Object.keys(this.keyLang).forEach((key) => {
          this[key].innerHTML = `${this.keyLang[key].value}`;
          if (key.includes("Digit") || key === "Minus" || key === "Equal") {
            const keyboardShift = document.createElement("div");
            keyboardShift.innerHTML = `${this.keyLang[key].valueShift}`;
            keyboardShift.classList.add("keyboard__key__shift");
            this[key].appendChild(keyboardShift);
          }
        });
        this.ShiftLeft.classList.remove("keyActive");
        this.ShiftRight.classList.remove("keyActive");
      } else {
        this.shiftKey = true;
        Object.keys(this.keyLang).forEach((key) => {
          this[key].innerHTML = `${this.keyLang[key].valueShift}`;
          if (key.includes("Digit") || key === "Minus" || key === "Equal") {
            const keyboardShift = document.createElement("div");
            keyboardShift.innerHTML = `${this.keyLang[key].value}`;
            keyboardShift.classList.add("keyboard__key__shift");
            this[key].appendChild(keyboardShift);
          }
        });
      }
    }

    if (keyCode.includes("Control")) {
      if (
        this.ControlLeft.classList.contains("keyActive") ||
        this.ControlRight.classList.contains("keyActive")
      ) {
        this.ctrlKey = false;
        this.ControlLeft.classList.remove("keyActive");
        this.ControlRight.classList.remove("keyActive");
      } else this.ctrlKey = true;
    }

    if (this.shiftKey === true && keyCode === "AltLeft") {
      this.changeLanguage();
      this.shiftKey = "false";
      this.ShiftLeft.classList.remove("keyActive");
      this.ShiftRight.classList.remove("keyActive");
    }

    this.keyHandle(eventTarget);

    if (
      keyCode !== "CapsLock" &&
      !keyCode.includes("Shift") &&
      !keyCode.includes("Control")
    ) {
      eventTarget.classList.remove("keyActive");
    }

    if (keyCode.includes("Shift") && !this.shiftKey) {
      eventTarget.classList.remove("keyActive");
    }

    if (keyCode.includes("Control") && !this.ctrlKey) {
      eventTarget.classList.remove("keyActive");
    }

    return null;
  }

  /* --------------------  смена языка  --------------------- */

  changeLanguage() {
    if (this.lang === "eng") {
      this.lang = "rus";
    } else this.lang = "eng";
    localStorage.clear();
    localStorage.setItem("lang_saved", this.lang);
    this.removeKeyboard();
    this.addKeyboard(this.lang);
  }

  changeLanguageMouse() {
    this.changeButton.onclick = () => {
      this.changeLanguage();
    };
  }

  /* ---------------смена языка по нажатию клавиш --------------------- */

  someKeys() {
    this.pressed = new Set();

    document.addEventListener("keydown", (event) => {
      event.preventDefault();
      if (event.code === "ShiftLeft" || event.code === "AltLeft")
        this.pressed.add(event.code);

      if (this.pressed.has("ShiftLeft") && this.pressed.has("AltLeft")) {
        //       this.pressed.clear();
        this.changeLanguage();
      }
    });

    document.addEventListener("keyup", (event) => {
      event.preventDefault();
      this.pressed.delete(event.code);
    });
  }

  removeKeyboard() {
    this.keyboard.innerHTML = "";
  }
}

export default VirtualKeyboard;
