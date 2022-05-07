import { keyEng, keyRus } from "./constants";

class VirtualKeyboard {
  constructor() {
    this.flagCaps = false;
    this.shiftKey = false;
    this.ctrlKey = false;
    this.copyboard = "";
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
    wrap.appendChild(this.textarea);

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
  }

  addKeyboard(langKeyboard) {
    this.lang = langKeyboard;
    let keyboardKey;
    if (langKeyboard === "eng") this.keyLang = keyEng;
    else this.keyLang = keyRus;
    Object.keys(this.keyLang).forEach((keyCode) => {
      keyboardKey = document.createElement("div");
      keyboardKey.setAttribute("id", `${keyCode}`);

      if (keyCode === "ArrowLeft") keyboardKey.innerHTML = `&larr;`;
      else if (keyCode === "ArrowRight") keyboardKey.innerHTML = `&rarr;`;
      else if (keyCode === "ArrowUp") keyboardKey.innerHTML = `&uarr;`;
      else if (keyCode === "ArrowDown") keyboardKey.innerHTML = `&darr;`;
      else if (keyCode.includes("Control")) keyboardKey.innerHTML = `Ctrl`;
      else if (keyCode.includes("Meta")) keyboardKey.innerHTML = `Win`;
      else if (keyCode === "Delete") keyboardKey.innerHTML = `Del`;
      else if (keyCode.includes("Alt")) keyboardKey.innerHTML = `Alt`;
      else keyboardKey.innerHTML = `${this.keyLang[keyCode].value}`;

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
    if (!this.flagCaps) {
      for (let k = 0; k < this.keyboard.children.length; k += 1)
        if (this.keyboard.children[k].classList.contains("key_letter"))
          this.keyboard.children[k].textContent =
            this.keyboard.children[k].textContent.toUpperCase();
    } else {
      keyDown.classList.remove("keyActive");
      for (let k = 0; k < this.keyboard.children.length; k += 1)
        if (this.keyboard.children[k].classList.contains("key_letter"))
          this.keyboard.children[k].textContent =
            this.keyboard.children[k].textContent.toLowerCase();
    }
    this.flagCaps = !this.flagCaps;
  }

  handleTab() {
    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;
    const newSymbol = "    ";
    const finText =
      this.textarea.value.substring(0, start) +
      newSymbol +
      this.textarea.value.substring(end);
    this.textarea.value = finText;
    this.textarea.focus();
    this.textarea.selectionEnd = start === end ? end + newSymbol.length : end;
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
    if (this.shiftKey === true) this.textarea.selectionStart = start - 1;
    else {
      this.textarea.selectionEnd = start - 1;
      this.textarea.selectionStart = start - 1;
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
      /* ----------------------ArrowUp----------------------------- */
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

        if (shiftKey === true) {
          if (curStrLength >= prevStrLength)
            this.textarea.selectionStart = NPos;
          else this.textarea.selectionStart = start - prevStrLength;
        } else if (curStrLength >= prevStrLength) {
          this.textarea.selectionEnd = NPos;
          this.textarea.selectionStart = NPos;
        } else {
          this.textarea.selectionEnd = start - prevStrLength;
          this.textarea.selectionStart = start - prevStrLength;
        }
      }
    } else if (keyCode === "ArrowDown") {
      /* ----------------------ArrowDown----------------------------- */
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

        if (shiftKey === true) {
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
    } else if (keyCode === "Backspace") {
      /* ----------------------Backspace----------------------------- */
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
    } else if (ctrlKey === true && keyCode === "KeyA") {
    /* ----------------------Text and digit ----------------------------- */
    /* ----------------------------Ctrl+C, Ctrl+V, Ctrl+X  -------------------*/
      const finText = this.textarea.value;
      this.setText(finText);
      this.textarea.selectionStart = 0;
      this.textarea.selectionEnd = this.textarea.value.length;
    } else if (ctrlKey === true && keyCode === "KeyC") {
      this.copyboard = this.textarea.value.substring(start, end);
      const finText = this.textarea.value;
      this.setText(finText);
      this.textarea.selectionEnd = end;
      // start === end ? end + newSymbol.length : end;
    } else if (ctrlKey === true && keyCode === "KeyX") {
      this.copyboard = this.textarea.value.substring(start, end);
      const finText =
        this.textarea.value.substring(0, start) +
        this.textarea.value.substring(end);
      this.setText(finText);
      this.textarea.selectionEnd = start;
      this.textarea.selectionStart = start;
    } else if (ctrlKey === true && keyCode === "KeyV") {
      const finText =
        this.textarea.value.substring(0, start) +
        this.textarea.value.substring(start, end) +
        this.copyboard +
        this.textarea.value.substring(end);
      this.setText(finText);
      this.textarea.selectionEnd =
        start === end ? end + this.copyboard.length : end;
    } else if (
      !keyCode.includes("Shift") &&
      !keyCode.includes("Control") &&
      !keyCode.includes("Alt") &&
      !keyCode.includes("Meta")
    ) {
      /* ----------------------------Common symbols--------------------------*/

      const inputSymbol = !this.flagCaps ? value : value.toUpperCase();

      const newSymbol = shiftKey === true ? valueShift : inputSymbol;

      const finText =
        this.textarea.value.substring(0, start) +
        newSymbol +
        this.textarea.value.substring(end);
      this.setText(finText);
      this.textarea.selectionEnd = start === end ? end + newSymbol.length : end;
    }
  }

  /* ------------- обработка нажатия клавиши (на клавиатуре) ------------------*/

  keyboardEvent() {
    document.onkeydown = (event) => {
      const keyDown = document.getElementById(event.code);

      if (!event.code.includes("Shift") && event.shiftKey) this.shiftKey = true;
      if (!event.code.includes("Control") && event.ctrlKey) this.ctrlKey = true;

      if (keyDown != null) {
        event.preventDefault();
        this.keyHandle(keyDown);
      }
    };
  }

  keyboardEventCancel() {
    document.onkeyup = (event) => {
      const keyUp = document.getElementById(event.code);
      const keyShiftLeft = document.getElementById("ShiftLeft");
      const keyShiftRight = document.getElementById("ShiftRight");
      const keyControlLeft = document.getElementById("ControlLeft");
      const keyControlRight = document.getElementById("ControlRight");
      if (event.code.includes("Shift")) {
        this.shiftKey = false;
        keyShiftLeft.classList.remove("keyActive");
        keyShiftRight.classList.remove("keyActive");
      }
      if (event.code.includes("Control")) {
        this.ctrlKey = false;
        keyControlLeft.classList.remove("keyActive");
        keyControlRight.classList.remove("keyActive");
      }
      if (keyUp != null && event.code !== "CapsLock") {
        keyUp.classList.remove("keyActive");
      }
    };
  }

  /* ------------------ обработка нажатия клавиши (мышкой) --------------------------- */

  mouseEvent() {
    this.keyboard.onclick = (event) => {
      event.stopImmediatePropagation();
      event.preventDefault();

      const keyShiftLeft = document.getElementById("ShiftLeft");
      const keyShiftRight = document.getElementById("ShiftRight");
      const keyControlLeft = document.getElementById("ControlLeft");
      const keyControlRight = document.getElementById("ControlRight");

      const keyCode = event.target.getAttribute("id");

      if (keyCode) {
        if (keyCode.includes("Shift")) {
          if (
            keyShiftLeft.classList.contains("keyActive") ||
            keyShiftRight.classList.contains("keyActive")
          ) {
            this.shiftKey = false;
            keyShiftLeft.classList.remove("keyActive");
            keyShiftRight.classList.remove("keyActive");
          } else this.shiftKey = true;
        }

        if (keyCode.includes("Control")) {
          if (
            keyControlLeft.classList.contains("keyActive") ||
            keyControlRight.classList.contains("keyActive")
          ) {
            this.ctrlKey = false;
            keyControlLeft.classList.remove("keyActive");
            keyControlRight.classList.remove("keyActive");
          } else this.ctrlKey = true;
        }

        this.keyHandle(event.target);
        if (
          keyCode !== "CapsLock" &&
          !keyCode.includes("Shift") &&
          !keyCode.includes("Control")
        )
          event.target.classList.remove("keyActive");
        if (keyCode.includes("Shift") && !this.shiftKey)
          event.target.classList.remove("keyActive");

        if (keyCode.includes("Control") && !this.ctrlKey)
          event.target.classList.remove("keyActive");
      }
    };
  }

  /* ---------------смена языка по клику мыши --------------------- */

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
    const pressed = new Set();

    document.addEventListener("keydown", (event) => {
      event.preventDefault();
      pressed.add(event.code);

      if (pressed.has("ShiftLeft") && pressed.has("AltLeft")) {
        pressed.clear();
        this.changeLanguage();
      }
    });

    document.addEventListener("keyup", (event) => {
      pressed.delete(event.code);
    });
  }

  removeKeyboard() {
    this.keyboard.innerHTML = "";
  }
}

export default VirtualKeyboard;
