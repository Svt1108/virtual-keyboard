/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/keyboard.scss":
/*!*******************************!*\
  !*** ./src/css/keyboard.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/css/keyboard.scss?");

/***/ }),

/***/ "./src/css/normalize.css":
/*!*******************************!*\
  !*** ./src/css/normalize.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/css/normalize.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/normalize.css */ \"./src/css/normalize.css\");\n/* harmony import */ var _css_keyboard_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/keyboard.scss */ \"./src/css/keyboard.scss\");\n/* harmony import */ var _js_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/keyboard */ \"./src/js/keyboard.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/index.js?");

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"keyEng\": () => (/* binding */ keyEng),\n/* harmony export */   \"keyRus\": () => (/* binding */ keyRus),\n/* harmony export */   \"keys\": () => (/* binding */ keys)\n/* harmony export */ });\nconst keys = [\r\n  \"Backquote\",\r\n  \"Digit1\",\r\n  \"Digit2\",\r\n  \"Digit3\",\r\n  \"Digit4\",\r\n  \"Digit5\",\r\n  \"Digit6\",\r\n  \"Digit7\",\r\n  \"Digit8\",\r\n  \"Digit9\",\r\n  \"Digit0\",\r\n  \"Minus\",\r\n  \"Equal\",\r\n  \"Backspace\",\r\n  \"Tab\",\r\n  \"KeyQ\",\r\n  \"KeyW\",\r\n  \"KeyE\",\r\n  \"KeyR\",\r\n  \"KeyT\",\r\n  \"KeyY\",\r\n  \"KeyU\",\r\n  \"KeyI\",\r\n  \"KeyO\",\r\n  \"KeyP\",\r\n  \"BracketLeft\",\r\n  \"BracketRight\",\r\n  \"Backslash\",\r\n  \"Delete\",\r\n  \"CapsLock\",\r\n  \"KeyA\",\r\n  \"KeyS\",\r\n  \"KeyD\",\r\n  \"KeyF\",\r\n  \"KeyG\",\r\n  \"KeyH\",\r\n  \"KeyJ\",\r\n  \"KeyK\",\r\n  \"KeyL\",\r\n  \"Semicolon\",\r\n  \"Quote\",\r\n  \"Enter\",\r\n  \"ShiftLeft\",\r\n  \"KeyZ\",\r\n  \"KeyX\",\r\n  \"KeyC\",\r\n  \"KeyV\",\r\n  \"KeyB\",\r\n  \"KeyN\",\r\n  \"KeyM\",\r\n  \"Comma\",\r\n  \"Period\",\r\n  \"Slash\",\r\n  \"ArrowUp\",\r\n  \"ShiftRight\",\r\n  \"ControlLeft\",\r\n  \"MetaLeft\",\r\n  \"AltLeft\",\r\n  \"Space\",\r\n  \"AltRight\",\r\n  \"ArrowLeft\",\r\n  \"ArrowDown\",\r\n  \"ArrowRight\",\r\n  \"ControlRight\",\r\n];\r\n\r\nconst keyEng = {\r\n  Backquote: { value: \"`\", valueShift: \"~\" },\r\n  Digit1: { value: \"1\", valueShift: \"!\" },\r\n  Digit2: { value: \"2\", valueShift: \"@\" },\r\n  Digit3: { value: \"3\", valueShift: \"#\" },\r\n  Digit4: { value: \"4\", valueShift: \"$\" },\r\n  Digit5: { value: \"5\", valueShift: \"%\" },\r\n  Digit6: { value: \"6\", valueShift: \"^\" },\r\n  Digit7: { value: \"7\", valueShift: \"&\" },\r\n  Digit8: { value: \"8\", valueShift: \"*\" },\r\n  Digit9: { value: \"9\", valueShift: \"(\" },\r\n  Digit0: { value: \"0\", valueShift: \")\" },\r\n  Minus: { value: \"-\", valueShift: \"_\" },\r\n  Equal: { value: \"=\", valueShift: \"+\" },\r\n  Backspace: { value: \"Backspace\", valueShift: \"Backspace\" },\r\n  Tab: { value: \"Tab\", valueShift: \"Tab\" },\r\n  KeyQ: { value: \"q\", valueShift: \"Q\" },\r\n  KeyW: { value: \"w\", valueShift: \"W\" },\r\n  KeyE: { value: \"e\", valueShift: \"E\" },\r\n  KeyR: { value: \"r\", valueShift: \"R\" },\r\n  KeyT: { value: \"t\", valueShift: \"T\" },\r\n  KeyY: { value: \"y\", valueShift: \"Y\" },\r\n  KeyU: { value: \"u\", valueShift: \"U\" },\r\n  KeyI: { value: \"i\", valueShift: \"I\" },\r\n  KeyO: { value: \"o\", valueShift: \"O\" },\r\n  KeyP: { value: \"p\", valueShift: \"P\" },\r\n  BracketLeft: { value: \"[\", valueShift: \"{\" },\r\n  BracketRight: { value: \"]\", valueShift: \"}\" },\r\n  Backslash: { value: \"\\\\\", valueShift: \"|\" },\r\n  Delete: { value: \"Delete\", valueShift: \"Delete\" },\r\n  CapsLock: { value: \"CapsLock\", valueShift: \"CapsLock\" },\r\n  KeyA: { value: \"a\", valueShift: \"A\" },\r\n  KeyS: { value: \"s\", valueShift: \"S\" },\r\n  KeyD: { value: \"d\", valueShift: \"D\" },\r\n  KeyF: { value: \"f\", valueShift: \"F\" },\r\n  KeyG: { value: \"g\", valueShift: \"G\" },\r\n  KeyH: { value: \"h\", valueShift: \"H\" },\r\n  KeyJ: { value: \"j\", valueShift: \"J\" },\r\n  KeyK: { value: \"k\", valueShift: \"K\" },\r\n  KeyL: { value: \"l\", valueShift: \"L\" },\r\n  Semicolon: { value: \";\", valueShift: \":\" },\r\n  Quote: { value: `'`, valueShift: '\"' },\r\n  Enter: { value: \"Enter\", valueShift: \"Enter\" },\r\n  ShiftLeft: { value: \"Shift\", valueShift: \"Shift\" },\r\n  KeyZ: { value: \"z\", valueShift: \"Z\" },\r\n  KeyX: { value: \"x\", valueShift: \"X\" },\r\n  KeyC: { value: \"c\", valueShift: \"C\" },\r\n  KeyV: { value: \"v\", valueShift: \"V\" },\r\n  KeyB: { value: \"b\", valueShift: \"B\" },\r\n  KeyN: { value: \"n\", valueShift: \"N\" },\r\n  KeyM: { value: \"m\", valueShift: \"M\" },\r\n  Comma: { value: \",\", valueShift: \"<\" },\r\n  Period: { value: \".\", valueShift: \">\" },\r\n  Slash: { value: \"/\", valueShift: \"?\" },\r\n  ArrowUp: { value: \"ArrowUp\", valueShift: \"ArrowUp\" },\r\n  ShiftRight: { value: \"Shift\", valueShift: \"Shift\" },\r\n  ControlLeft: { value: \"Control\", valueShift: \"Control\" },\r\n  MetaLeft: { value: \"Meta\", valueShift: \"Meta\" },\r\n  AltLeft: { value: \"Alt\", valueShift: \"Alt\" },\r\n  Space: { value: \" \", valueShift: \" \" },\r\n  AltRight: { value: \"Alt\", valueShift: \"Alt\" },\r\n  ArrowLeft: { value: \"ArrowLeft\", valueShift: \"ArrowLeft\" },\r\n  ArrowDown: { value: \"ArrowDown\", valueShift: \"ArrowDown\" },\r\n  ArrowRight: { value: \"ArrowRight\", valueShift: \"ArrowRight\" },\r\n  ControlRight: { value: \"Control\", valueShift: \"Control\" },\r\n};\r\n\r\nconst keyRus = {\r\n  Backquote: { value: \"ё\", valueShift: \"Ё\" },\r\n  Digit1: { value: \"1\", valueShift: \"!\" },\r\n  Digit2: { value: \"2\", valueShift: '\"' },\r\n  Digit3: { value: \"3\", valueShift: \"№\" },\r\n  Digit4: { value: \"4\", valueShift: \";\" },\r\n  Digit5: { value: \"5\", valueShift: \"%\" },\r\n  Digit6: { value: \"6\", valueShift: \":\" },\r\n  Digit7: { value: \"7\", valueShift: \"?\" },\r\n  Digit8: { value: \"8\", valueShift: \"*\" },\r\n  Digit9: { value: \"9\", valueShift: \"(\" },\r\n  Digit0: { value: \"0\", valueShift: \")\" },\r\n  Minus: { value: \"-\", valueShift: \"_\" },\r\n  Equal: { value: \"=\", valueShift: \"+\" },\r\n  Backspace: { value: \"Backspace\", valueShift: \"Backspace\" },\r\n  Tab: { value: \"Tab\", valueShift: \"Tab\" },\r\n  KeyQ: { value: \"й\", valueShift: \"Й\" },\r\n  KeyW: { value: \"ц\", valueShift: \"Ц\" },\r\n  KeyE: { value: \"у\", valueShift: \"У\" },\r\n  KeyR: { value: \"к\", valueShift: \"К\" },\r\n  KeyT: { value: \"е\", valueShift: \"Е\" },\r\n  KeyY: { value: \"н\", valueShift: \"Н\" },\r\n  KeyU: { value: \"г\", valueShift: \"Г\" },\r\n  KeyI: { value: \"ш\", valueShift: \"Ш\" },\r\n  KeyO: { value: \"щ\", valueShift: \"Щ\" },\r\n  KeyP: { value: \"з\", valueShift: \"З\" },\r\n  BracketLeft: { value: \"х\", valueShift: \"Х\" },\r\n  BracketRight: { value: \"ъ\", valueShift: \"Ъ\" },\r\n  Backslash: { value: \"\\\\\", valueShift: \"/\" },\r\n  Delete: { value: \"Delete\", valueShift: \"Delete\" },\r\n  CapsLock: { value: \"CapsLock\", valueShift: \"CapsLock\" },\r\n  KeyA: { value: \"ф\", valueShift: \"Ф\" },\r\n  KeyS: { value: \"ы\", valueShift: \"Ы\" },\r\n  KeyD: { value: \"в\", valueShift: \"В\" },\r\n  KeyF: { value: \"а\", valueShift: \"А\" },\r\n  KeyG: { value: \"п\", valueShift: \"П\" },\r\n  KeyH: { value: \"р\", valueShift: \"Р\" },\r\n  KeyJ: { value: \"о\", valueShift: \"О\" },\r\n  KeyK: { value: \"л\", valueShift: \"Л\" },\r\n  KeyL: { value: \"д\", valueShift: \"Д\" },\r\n  Semicolon: { value: \"ж\", valueShift: \"Ж\" },\r\n  Quote: { value: `э`, valueShift: \"Э\" },\r\n  Enter: { value: \"Enter\", valueShift: \"Enter\" },\r\n  ShiftLeft: { value: \"Shift\", valueShift: \"Shift\" },\r\n  KeyZ: { value: \"я\", valueShift: \"Я\" },\r\n  KeyX: { value: \"ч\", valueShift: \"Ч\" },\r\n  KeyC: { value: \"с\", valueShift: \"С\" },\r\n  KeyV: { value: \"м\", valueShift: \"М\" },\r\n  KeyB: { value: \"и\", valueShift: \"И\" },\r\n  KeyN: { value: \"т\", valueShift: \"Т\" },\r\n  KeyM: { value: \"ь\", valueShift: \"Ь\" },\r\n  Comma: { value: \"б\", valueShift: \"Б\" },\r\n  Period: { value: \"ю\", valueShift: \"Ю\" },\r\n  Slash: { value: \".\", valueShift: \",\" },\r\n  ArrowUp: { value: \"ArrowUp\", valueShift: \"ArrowUp\" },\r\n  ShiftRight: { value: \"Shift\", valueShift: \"Shift\" },\r\n  ControlLeft: { value: \"Control\", valueShift: \"Control\" },\r\n  MetaLeft: { value: \"Meta\", valueShift: \"Meta\" },\r\n  AltLeft: { value: \"Alt\", valueShift: \"Alt\" },\r\n  Space: { value: \" \", valueShift: \" \" },\r\n  AltRight: { value: \"Alt\", valueShift: \"Alt\" },\r\n  ArrowLeft: { value: \"ArrowLeft\", valueShift: \"ArrowLeft\" },\r\n  ArrowDown: { value: \"ArrowDown\", valueShift: \"ArrowDown\" },\r\n  ArrowRight: { value: \"ArrowRight\", valueShift: \"ArrowRight\" },\r\n  ControlRight: { value: \"Control\", valueShift: \"Control\" },\r\n};\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/constants.js?");

/***/ }),

/***/ "./src/js/keyboard.js":
/*!****************************!*\
  !*** ./src/js/keyboard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n\r\n\r\nlet lang = \"eng\";\r\n\r\nclass VirtualKeyboard {\r\n  constructor() {\r\n    this.flagCaps = false;\r\n    this.shiftKey = false;\r\n    this.ctrlKey = false;\r\n    this.copyboard = \"\";\r\n  }\r\n\r\n  addContent() {\r\n    const main = document.createElement(\"div\");\r\n    main.classList.add(\"main\");\r\n    document.body.appendChild(main);\r\n\r\n    const wrap = document.createElement(\"div\");\r\n    wrap.classList.add(\"wrap\");\r\n    main.appendChild(wrap);\r\n\r\n    const h1 = document.createElement(\"h1\");\r\n    h1.innerHTML = `Virtual keyboard`;\r\n    wrap.appendChild(h1);\r\n\r\n    this.textarea = document.createElement(\"textarea\");\r\n    this.textarea.classList.add(\"textarea\");\r\n    this.textarea.setAttribute(\"id\", `textarea`);\r\n    wrap.appendChild(this.textarea);\r\n\r\n    this.keyboard = document.createElement(\"div\");\r\n    this.keyboard.classList.add(\"keyboard\");\r\n    wrap.appendChild(this.keyboard);\r\n\r\n    const addition = document.createElement(\"div\");\r\n    addition.classList.add(\"addition\");\r\n    wrap.appendChild(addition);\r\n\r\n    const windows = document.createElement(\"p\");\r\n    windows.innerHTML = `The keyboard was created in Windows`;\r\n    windows.classList.add(\"windows\");\r\n    addition.appendChild(windows);\r\n\r\n    const change = document.createElement(\"div\");\r\n    change.classList.add(\"change\");\r\n    addition.appendChild(change);\r\n\r\n    const changeText = document.createElement(\"p\");\r\n    changeText.innerHTML = `Press <span>left Shift + Alt</span> to change language or`;\r\n    changeText.classList.add(\"change__text\");\r\n    change.appendChild(changeText);\r\n\r\n    this.changeButton = document.createElement(\"div\");\r\n    this.changeButton.innerHTML = `Change language`;\r\n    this.changeButton.classList.add(\"change__button\");\r\n    change.appendChild(this.changeButton);\r\n\r\n    const hotKeys = document.createElement(\"p\");\r\n    hotKeys.innerHTML = `<br/> Hot keys: <span>Ctrl + C</span> - copy, <span>Ctrl + V</span> - paste, <span>Ctrl + X</span> - cut, <span>Ctrl + A</span> - highlight all, <span>Shift + &larr;&uarr;&rarr;&darr;</span> - highlight`;\r\n    hotKeys.classList.add(\"hotkeys\");\r\n    addition.appendChild(hotKeys);\r\n  }\r\n\r\n  addKeyboard(langKeyboard) {\r\n    let keyboardKey;\r\n    if (langKeyboard === \"eng\") this.keyLang = _constants__WEBPACK_IMPORTED_MODULE_0__.keyEng;\r\n    else this.keyLang = _constants__WEBPACK_IMPORTED_MODULE_0__.keyRus;\r\n    Object.keys(this.keyLang).forEach((keyCode) => {\r\n      keyboardKey = document.createElement(\"div\");\r\n      keyboardKey.setAttribute(\"id\", `${keyCode}`);\r\n\r\n      if (keyCode === \"ArrowLeft\") keyboardKey.innerHTML = `&larr;`;\r\n      else if (keyCode === \"ArrowRight\") keyboardKey.innerHTML = `&rarr;`;\r\n      else if (keyCode === \"ArrowUp\") keyboardKey.innerHTML = `&uarr;`;\r\n      else if (keyCode === \"ArrowDown\") keyboardKey.innerHTML = `&darr;`;\r\n      else if (keyCode.includes(\"Control\")) keyboardKey.innerHTML = `Ctrl`;\r\n      else if (keyCode.includes(\"Meta\")) keyboardKey.innerHTML = `Win`;\r\n      else if (keyCode === \"Delete\") keyboardKey.innerHTML = `Del`;\r\n      else if (keyCode.includes(\"Alt\")) keyboardKey.innerHTML = `Alt`;\r\n      else keyboardKey.innerHTML = `${this.keyLang[keyCode].value}`;\r\n\r\n      keyboardKey.classList.add(\"keyboard__key\");\r\n\r\n      if (\r\n        keyCode.includes(\"Key\") ||\r\n        keyCode === \"BracketLeft\" ||\r\n        keyCode === \"BracketRight\" ||\r\n        keyCode === \"Semicolon\" ||\r\n        keyCode === \"Quote\" ||\r\n        keyCode === \"Backquote\" ||\r\n        keyCode === \"Comma\" ||\r\n        keyCode === \"Period\"\r\n      )\r\n        keyboardKey.classList.add(\"key_letter\");\r\n      if (keyCode === \"Backspace\") keyboardKey.classList.add(\"key_backspace\");\r\n      if (keyCode === \"Tab\" || keyCode === \"Delete\")\r\n        keyboardKey.classList.add(\"key_tabdel\");\r\n      if (keyCode.includes(\"Digit\")) keyboardKey.classList.add(\"key_digit\");\r\n      if (keyCode === \"CapsLock\") keyboardKey.classList.add(\"key_caps\");\r\n      if (keyCode === \"Enter\") keyboardKey.classList.add(\"key_enter\");\r\n      if (keyCode.includes(\"Control\") || keyCode.includes(\"Alt\"))\r\n        keyboardKey.classList.add(\"key_ctrlalt\");\r\n      if (keyCode === \"Space\") keyboardKey.classList.add(\"key_space\");\r\n      if (keyCode.includes(\"Arrow\")) keyboardKey.classList.add(\"key_arrow\");\r\n      if (keyCode === \"ShiftLeft\") keyboardKey.classList.add(\"key_shiftleft\");\r\n      if (keyCode === \"ShiftRight\") keyboardKey.classList.add(\"key_shiftright\");\r\n\r\n      if (\r\n        keyCode === \"Backquote\" ||\r\n        keyCode === \"Backspace\" ||\r\n        keyCode === \"Tab\" ||\r\n        keyCode === \"Delete\" ||\r\n        keyCode === \"CapsLock\" ||\r\n        keyCode === \"Enter\" ||\r\n        keyCode === \"MetaLeft\" ||\r\n        keyCode.includes(\"Control\") ||\r\n        keyCode.includes(\"Alt\") ||\r\n        keyCode.includes(\"Shift\") ||\r\n        keyCode.includes(\"Arrow\")\r\n      )\r\n        keyboardKey.classList.add(\"key_dark\");\r\n\r\n      this.keyboard.appendChild(keyboardKey);\r\n\r\n      if (\r\n        keyCode === \"Backspace\" ||\r\n        keyCode === \"Delete\" ||\r\n        keyCode === \"Enter\" ||\r\n        keyCode === \"ShiftRight\"\r\n      ) {\r\n        const breakrow = document.createElement(\"div\");\r\n        breakrow.classList.add(\"breakrow\");\r\n        this.keyboard.appendChild(breakrow);\r\n      }\r\n    });\r\n  }\r\n\r\n  keyHandle(keyDown) {\r\n    const { shiftKey } = this;\r\n    const { ctrlKey } = this;\r\n    const keyCode = keyDown.getAttribute(\"id\");\r\n    const { value } = this.keyLang[keyCode];\r\n    const { valueShift } = this.keyLang[keyCode];\r\n    let newSymbol = \"\";\r\n    let finText = \"\";\r\n\r\n    const start = this.textarea.selectionStart;\r\n    const end = this.textarea.selectionEnd;\r\n    keyDown.classList.add(\"keyActive\");\r\n    this.textarea.focus();\r\n\r\n    /* ----------------------Enter----------------------------- */\r\n\r\n    if (keyCode === \"Enter\") {\r\n      finText = `${this.textarea.value.substring(\r\n        0,\r\n        start\r\n      )}\\n${this.textarea.value.substring(end)}`;\r\n      this.textarea.value = finText;\r\n      this.textarea.focus();\r\n      const newEnd = this.textarea.selectionEnd;\r\n      this.textarea.selectionEnd =\r\n        newEnd - this.textarea.value.substring(end).length + 1;\r\n      this.textarea.selectionStart =\r\n        newEnd - this.textarea.value.substring(end).length + 1;\r\n    } else if (keyCode === \"CapsLock\") {\r\n      /* ----------------------CapsLock----------------------------- */\r\n\r\n      if (!this.flagCaps) {\r\n        for (let k = 0; k < this.keyboard.children.length; k += 1)\r\n          if (this.keyboard.children[k].classList.contains(\"key_letter\"))\r\n            this.keyboard.children[k].textContent =\r\n              this.keyboard.children[k].textContent.toUpperCase();\r\n      } else {\r\n        keyDown.classList.remove(\"keyActive\");\r\n        for (let k = 0; k < this.keyboard.children.length; k += 1)\r\n          if (this.keyboard.children[k].classList.contains(\"key_letter\"))\r\n            this.keyboard.children[k].textContent =\r\n              this.keyboard.children[k].textContent.toLowerCase();\r\n      }\r\n      this.flagCaps = !this.flagCaps;\r\n    } else if (keyCode === \"Tab\") {\r\n      /* ----------------------------Tab----------------------------- */\r\n\r\n      newSymbol = \"    \";\r\n      finText =\r\n        this.textarea.value.substring(0, start) +\r\n        newSymbol +\r\n        this.textarea.value.substring(end);\r\n      this.textarea.value = finText;\r\n      this.textarea.focus();\r\n      this.textarea.selectionEnd = start === end ? end + newSymbol.length : end;\r\n    } else if (keyCode === \"Delete\") {\r\n      /* ----------------------Delete----------------------------- */\r\n      if (start === end)\r\n        finText =\r\n          this.textarea.value.substring(0, start) +\r\n          this.textarea.value.substring(end + 1);\r\n      else\r\n        finText =\r\n          this.textarea.value.substring(0, start) +\r\n          this.textarea.value.substring(end);\r\n      this.textarea.value = finText;\r\n      this.textarea.focus();\r\n      this.textarea.selectionEnd = start;\r\n      this.textarea.selectionStart = start;\r\n    } else if (keyCode === \"ArrowLeft\") {\r\n      /* ----------------------ArrowLeft----------------------------- */\r\n      if (shiftKey === true) this.textarea.selectionStart = start - 1;\r\n      else {\r\n        this.textarea.selectionEnd = start - 1;\r\n        this.textarea.selectionStart = start - 1;\r\n      }\r\n    } else if (keyCode === \"ArrowRight\") {\r\n      /* ----------------------ArrowRight----------------------------- */\r\n\r\n      if (shiftKey === true) this.textarea.selectionEnd = end + 1;\r\n      else {\r\n        this.textarea.selectionEnd = start + 1;\r\n        this.textarea.selectionStart = start + 1;\r\n      }\r\n    } else if (keyCode === \"ArrowUp\") {\r\n      /* ----------------------ArrowUp----------------------------- */\r\n      let NPos;\r\n      if (this.textarea.value[start] === \"\\n\")\r\n        NPos = this.textarea.value.lastIndexOf(\"\\n\", start - 1);\r\n      else NPos = this.textarea.value.lastIndexOf(\"\\n\", start);\r\n      if (NPos !== -1) {\r\n        const curStrLength = start - NPos;\r\n        const prevNPos = this.textarea.value.lastIndexOf(\"\\n\", NPos - 1);\r\n        let prevStrLength;\r\n        if (prevNPos !== -1) prevStrLength = NPos - prevNPos;\r\n        else prevStrLength = start - curStrLength + 1;\r\n\r\n        if (shiftKey === true) {\r\n          if (curStrLength >= prevStrLength)\r\n            this.textarea.selectionStart = NPos;\r\n          else this.textarea.selectionStart = start - prevStrLength;\r\n        } else if (curStrLength >= prevStrLength) {\r\n          this.textarea.selectionEnd = NPos;\r\n          this.textarea.selectionStart = NPos;\r\n        } else {\r\n          this.textarea.selectionEnd = start - prevStrLength;\r\n          this.textarea.selectionStart = start - prevStrLength;\r\n        }\r\n      }\r\n    } else if (keyCode === \"ArrowDown\") {\r\n      /* ----------------------ArrowDown----------------------------- */\r\n      let NPos;\r\n      if (this.textarea.value[end] === \"\\n\")\r\n        NPos = this.textarea.value.lastIndexOf(\"\\n\", end - 1);\r\n      else NPos = this.textarea.value.lastIndexOf(\"\\n\", end);\r\n      let curStrLength;\r\n      let nextStrLength;\r\n      if (NPos !== -1) curStrLength = end - NPos;\r\n      else curStrLength = end + 1;\r\n\r\n      const endCurStrPos = this.textarea.value.indexOf(\"\\n\", end);\r\n      if (endCurStrPos !== -1) {\r\n        let nextNPos = this.textarea.value.indexOf(\"\\n\", endCurStrPos + 1);\r\n        if (nextNPos === -1) {\r\n          nextNPos = this.textarea.value.length;\r\n        }\r\n\r\n        nextStrLength = nextNPos - endCurStrPos;\r\n\r\n        if (shiftKey === true) {\r\n          if (curStrLength >= nextStrLength)\r\n            this.textarea.selectionEnd = nextNPos;\r\n          else this.textarea.selectionEnd = endCurStrPos + curStrLength;\r\n        } else if (curStrLength >= nextStrLength) {\r\n          this.textarea.selectionEnd = nextNPos;\r\n          this.textarea.selectionStart = nextNPos;\r\n        } else {\r\n          this.textarea.selectionEnd = endCurStrPos + curStrLength;\r\n          this.textarea.selectionStart = endCurStrPos + curStrLength;\r\n        }\r\n      }\r\n    } else if (keyCode === \"Backspace\") {\r\n      /* ----------------------Backspace----------------------------- */\r\n      if (start !== 0) {\r\n        if (start === end)\r\n          finText =\r\n            this.textarea.value.substring(0, start - 1) +\r\n            this.textarea.value.substring(end);\r\n        else\r\n          finText =\r\n            this.textarea.value.substring(0, start) +\r\n            this.textarea.value.substring(end);\r\n        this.textarea.value = finText;\r\n        this.textarea.focus();\r\n        if (start === end) {\r\n          this.textarea.selectionEnd = start - 1;\r\n          this.textarea.selectionStart = start - 1;\r\n        } else {\r\n          this.textarea.selectionEnd = start - 1;\r\n          this.textarea.selectionStart = start - 1;\r\n        }\r\n      }\r\n    } else if (\r\n      !keyCode.includes(\"Shift\") &&\r\n      !keyCode.includes(\"Control\") &&\r\n      !keyCode.includes(\"Alt\") &&\r\n      !keyCode.includes(\"Meta\")\r\n    ) {\r\n      /* ----------------------Text and digit ----------------------------- */\r\n      /* ----------------------------Ctrl+C, Ctrl+V, Ctrl+X  -------------------*/\r\n      if (ctrlKey === true && keyCode === \"KeyA\") {\r\n        finText = this.textarea.value;\r\n      } else if (ctrlKey === true && keyCode === \"KeyC\") {\r\n        this.copyboard = this.textarea.value.substring(start, end);\r\n        finText = this.textarea.value;\r\n      } else if (ctrlKey === true && keyCode === \"KeyX\") {\r\n        this.copyboard = this.textarea.value.substring(start, end);\r\n        finText =\r\n          this.textarea.value.substring(0, start) +\r\n          this.textarea.value.substring(end);\r\n      } else if (ctrlKey === true && keyCode === \"KeyV\") {\r\n        newSymbol = this.copyboard;\r\n        finText =\r\n          this.textarea.value.substring(0, start) +\r\n          this.textarea.value.substring(start, end) +\r\n          newSymbol +\r\n          this.textarea.value.substring(end);\r\n      } else {\r\n        /* ----------------------------Common symbols--------------------------*/\r\n        if (!this.flagCaps) {\r\n          newSymbol = value;\r\n        } else {\r\n          newSymbol = value.toUpperCase();\r\n        }\r\n\r\n        if (shiftKey === true) newSymbol = valueShift;\r\n\r\n        finText =\r\n          this.textarea.value.substring(0, start) +\r\n          newSymbol +\r\n          this.textarea.value.substring(end);\r\n      }\r\n      this.textarea.value = finText;\r\n      this.textarea.focus();\r\n      if (ctrlKey === true && keyCode === \"KeyX\") {\r\n        this.textarea.selectionEnd = start;\r\n        this.textarea.selectionStart = start;\r\n      } else if (ctrlKey === true && keyCode === \"KeyA\") {\r\n        this.textarea.selectionStart = 0;\r\n        this.textarea.selectionEnd = this.textarea.value.length;\r\n      } else\r\n        this.textarea.selectionEnd =\r\n          start === end ? end + newSymbol.length : end;\r\n    }\r\n  }\r\n\r\n  /* ------------- обработка нажатия клавиши (на клавиатуре) ------------------*/\r\n\r\n  keyboardEvent() {\r\n    document.onkeydown = (event) => {\r\n      const keyDown = document.getElementById(event.code);\r\n\r\n      if (!event.code.includes(\"Shift\") && event.shiftKey) this.shiftKey = true;\r\n      if (!event.code.includes(\"Control\") && event.ctrlKey) this.ctrlKey = true;\r\n\r\n      if (keyDown != null) {\r\n        event.preventDefault();\r\n        this.keyHandle(keyDown);\r\n      }\r\n    };\r\n  }\r\n\r\n  keyboardEventCancel() {\r\n    document.onkeyup = (event) => {\r\n      const keyUp = document.getElementById(event.code);\r\n      const keyShiftLeft = document.getElementById(\"ShiftLeft\");\r\n      const keyShiftRight = document.getElementById(\"ShiftRight\");\r\n      const keyControlLeft = document.getElementById(\"ControlLeft\");\r\n      const keyControlRight = document.getElementById(\"ControlRight\");\r\n      if (event.code.includes(\"Shift\")) {\r\n        this.shiftKey = false;\r\n        keyShiftLeft.classList.remove(\"keyActive\");\r\n        keyShiftRight.classList.remove(\"keyActive\");\r\n      }\r\n      if (event.code.includes(\"Control\")) {\r\n        this.ctrlKey = false;\r\n        keyControlLeft.classList.remove(\"keyActive\");\r\n        keyControlRight.classList.remove(\"keyActive\");\r\n      }\r\n      if (keyUp != null && event.code !== \"CapsLock\") {\r\n        keyUp.classList.remove(\"keyActive\");\r\n      }\r\n    };\r\n  }\r\n\r\n  /* ------------------ обработка нажатия клавиши (мышкой) --------------------------- */\r\n\r\n  mouseEvent() {\r\n    this.keyboard.onclick = (event) => {\r\n      event.stopImmediatePropagation();\r\n      event.preventDefault();\r\n\r\n      const keyShiftLeft = document.getElementById(\"ShiftLeft\");\r\n      const keyShiftRight = document.getElementById(\"ShiftRight\");\r\n      const keyControlLeft = document.getElementById(\"ControlLeft\");\r\n      const keyControlRight = document.getElementById(\"ControlRight\");\r\n\r\n      const keyCode = event.target.getAttribute(\"id\");\r\n\r\n      if (keyCode) {\r\n        if (keyCode.includes(\"Shift\")) {\r\n          if (\r\n            keyShiftLeft.classList.contains(\"keyActive\") ||\r\n            keyShiftRight.classList.contains(\"keyActive\")\r\n          ) {\r\n            this.shiftKey = false;\r\n            keyShiftLeft.classList.remove(\"keyActive\");\r\n            keyShiftRight.classList.remove(\"keyActive\");\r\n          } else this.shiftKey = true;\r\n        }\r\n\r\n        if (keyCode.includes(\"Control\")) {\r\n          if (\r\n            keyControlLeft.classList.contains(\"keyActive\") ||\r\n            keyControlRight.classList.contains(\"keyActive\")\r\n          ) {\r\n            this.ctrlKey = false;\r\n            keyControlLeft.classList.remove(\"keyActive\");\r\n            keyControlRight.classList.remove(\"keyActive\");\r\n          } else this.ctrlKey = true;\r\n        }\r\n\r\n        this.keyHandle(event.target);\r\n        if (\r\n          keyCode !== \"CapsLock\" &&\r\n          !keyCode.includes(\"Shift\") &&\r\n          !keyCode.includes(\"Control\")\r\n        )\r\n          event.target.classList.remove(\"keyActive\");\r\n        if (keyCode.includes(\"Shift\") && !this.shiftKey)\r\n          event.target.classList.remove(\"keyActive\");\r\n\r\n        if (keyCode.includes(\"Control\") && !this.ctrlKey)\r\n          event.target.classList.remove(\"keyActive\");\r\n      }\r\n    };\r\n  }\r\n\r\n  /* ---------------смена языка по клику мыши --------------------- */\r\n\r\n  changeLanguage() {\r\n    if (lang === \"eng\") {\r\n      lang = \"rus\";\r\n    } else lang = \"eng\";\r\n    localStorage.clear();\r\n    localStorage.setItem(\"lang_saved\", lang);\r\n    this.removeKeyboard();\r\n    this.addKeyboard(lang);\r\n  }\r\n\r\n  changeLanguageMouse() {\r\n    this.changeButton.onclick = () => {\r\n      this.changeLanguage();\r\n    };\r\n  }\r\n\r\n  /* ---------------смена языка по нажатию клавиш --------------------- */\r\n\r\n  someKeys() {\r\n    const pressed = new Set();\r\n\r\n    document.addEventListener(\"keydown\", (event) => {\r\n      event.preventDefault();\r\n      pressed.add(event.code);\r\n\r\n      if (pressed.has(\"ShiftLeft\") && pressed.has(\"AltLeft\")) {\r\n        pressed.clear();\r\n        this.changeLanguage();\r\n      }\r\n    });\r\n\r\n    document.addEventListener(\"keyup\", (event) => {\r\n      pressed.delete(event.code);\r\n    });\r\n  }\r\n\r\n  removeKeyboard() {\r\n    this.keyboard.innerHTML = \"\";\r\n  }\r\n}\r\n\r\nconst virtualKeyboard = new VirtualKeyboard();\r\nvirtualKeyboard.addContent();\r\nif (localStorage.getItem(\"lang_saved\"))\r\n  lang = localStorage.getItem(\"lang_saved\");\r\nvirtualKeyboard.addKeyboard(lang);\r\nvirtualKeyboard.keyboardEvent();\r\nvirtualKeyboard.keyboardEventCancel();\r\nvirtualKeyboard.mouseEvent();\r\nvirtualKeyboard.changeLanguageMouse();\r\nvirtualKeyboard.someKeys();\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/keyboard.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;