var normal = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";



function applyCharMap(map, text) {
  let out = "";
  for (let c of text.split("")) {
    if (map[c] !== undefined) out += map[c];
    else if (map[c.toLowerCase()] !== undefined) out += map[c.toLowerCase()];
    else out += c;
  }
  return out;
}

function italicCharMapFun(text) {
  return applyCharMap(italicCharMap, text);
}
function boldItalicCharMapFun(text) {
  return applyCharMap(boldItalicCharMap, text);
}

var luni = new Lunicode();
luni.tools.creepify.options.maxHeight = 10;

function crazyWithFlourishOrSymbols(text) {
  if (Math.random() < 0.7) return wrapInSymbols(crazifyText(text), 2);
  else return wrapInFlourish(crazifyText(text), 2);
}
function Change(intext, id) {

  var text = "";

  var intext = intext;
  if (intext.length == 0) return;

  for (i = 0; i < intext.length; i++) {
      var c = intext.charAt(i),
          loc = normal.indexOf(c) +1;
      if( c == ' '){
        text += ' ';
      }else if( !loc ){
        text += c;
      }else{
        text += newtext[id][loc];
      }

  }
  return text;
}


/* eslint-disable */
const boldItalicCharMap = { "0": "0", "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", "a": "𝙖", "b": "𝙗", "c": "𝙘", "d": "𝙙", "e": "𝙚", "f": "𝙛", "g": "𝙜", "h": "𝙝", "i": "𝙞", "j": "𝙟", "k": "𝙠", "l": "𝙡", "m": "𝙢", "n": "𝙣", "o": "𝙤", "p": "𝙥", "q": "𝙦", "r": "𝙧", "s": "𝙨", "t": "𝙩", "u": "𝙪", "v": "𝙫", "w": "𝙬", "x": "𝙭", "y": "𝙮", "z": "𝙯", "A": "𝘼", "B": "𝘽", "C": "𝘾", "D": "𝘿", "E": "𝙀", "F": "𝙁", "G": "𝙂", "H": "𝙃", "I": "𝙄", "J": "𝙅", "K": "𝙆", "L": "𝙇", "M": "𝙈", "N": "𝙉", "O": "𝙊", "P": "𝙋", "Q": "𝙌", "R": "𝙍", "S": "𝙎", "T": "𝙏", "U": "𝙐", "V": "𝙑", "W": "𝙒", "X": "𝙓", "Y": "𝙔", "Z": "𝙕" };
const boldCharMap = { "0": "𝟎", "1": "𝟏", "2": "𝟐", "3": "𝟑", "4": "𝟒", "5": "𝟓", "6": "𝟔", "7": "𝟕", "8": "𝟖", "9": "𝟗", "a": "𝐚", "b": "𝐛", "c": "𝐜", "d": "𝐝", "e": "𝐞", "f": "𝐟", "g": "𝐠", "h": "𝐡", "i": "𝐢", "j": "𝐣", "k": "𝐤", "l": "𝐥", "m": "𝐦", "n": "𝐧", "o": "𝐨", "p": "𝐩", "q": "𝐪", "r": "𝐫", "s": "𝐬", "t": "𝐭", "u": "𝐮", "v": "𝐯", "w": "𝐰", "x": "𝐱", "y": "𝐲", "z": "𝐳", "A": "𝐀", "B": "𝐁", "C": "𝐂", "D": "𝐃", "E": "𝐄", "F": "𝐅", "G": "𝐆", "H": "𝐇", "I": "𝐈", "J": "𝐉", "K": "𝐊", "L": "𝐋", "M": "𝐌", "N": "𝐍", "O": "𝐎", "P": "𝐏", "Q": "𝐐", "R": "𝐑", "S": "𝐒", "T": "𝐓", "U": "𝐔", "V": "𝐕", "W": "𝐖", "X": "𝐗", "Y": "𝐘", "Z": "𝐙" };
const italicCharMap = { "0": "0", "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", "a": "𝘢", "b": "𝘣", "c": "𝘤", "d": "𝘥", "e": "𝘦", "f": "𝘧", "g": "𝘨", "h": "𝘩", "i": "𝘪", "j": "𝘫", "k": "𝘬", "l": "𝘭", "m": "𝘮", "n": "𝘯", "o": "𝘰", "p": "𝘱", "q": "𝘲", "r": "𝘳", "s": "𝘴", "t": "𝘵", "u": "𝘶", "v": "𝘷", "w": "𝘸", "x": "𝘹", "y": "𝘺", "z": "𝘻", "A": "𝘈", "B": "𝘉", "C": "𝘊", "D": "𝘋", "E": "𝘌", "F": "𝘍", "G": "𝘎", "H": "𝘏", "I": "𝘐", "J": "𝘑", "K": "𝘒", "L": "𝘓", "M": "𝘔", "N": "𝘕", "O": "𝘖", "P": "𝘗", "Q": "𝘘", "R": "𝘙", "S": "𝘚", "T": "𝘛", "U": "𝘜", "V": "𝘝", "W": "𝘞", "X": "𝘟", "Y": "𝘠", "Z": "𝘡" };
// Lunicode.js
// from lunicode.com
// on GitHub: https://github.com/combatwombat/Lunicode.js
// Copyright © 2012 Robert Gerlach - robsite.net
function Lunicode() { this.tools = { flip: { init: function () { for (i in this.map) this.map[this.map[i]] = i }, encode: function (i) { for (var r, t = [], o = 0, h = i.length; h > o; o++)r = i.charAt(o), o > 0 && ("̤" == r || "̗" == r || "̖" == r || "̮" == r) ? (r = this.map[i.charAt(o - 1) + r], t.pop()) : (r = this.map[r], "undefined" == typeof r && (r = i.charAt(o))), t.push(r); return t.reverse().join("") }, decode: function (i) { for (var r, t = [], o = 0, h = i.length; h > o; o++)r = i.charAt(o), o > 0 && ("̤" == r || "̗" == r || "̖" == r || "̮" == r) ? (r = this.map[i.charAt(o - 1) + r], t.pop()) : (r = this.map[r], "undefined" == typeof r && (r = i.charAt(o))), t.push(r); return t.reverse().join("") }, map: { a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ɓ", h: "ɥ", i: "ı", j: "ɾ", k: "ʞ", l: "l", m: "ɯ", n: "u", r: "ɹ", t: "ʇ", v: "ʌ", w: "ʍ", y: "ʎ", A: "∀", B: "ᙠ", C: "Ɔ", D: "ᗡ", E: "Ǝ", F: "Ⅎ", G: "⅁", J: "ſ", K: "⋊", L: "˥", M: "W", P: "Ԁ", Q: "Ό", R: "ᴚ", T: "⊥", U: "∩", V: "Λ", Y: "⅄", 1: "⇂", 2: "ᄅ", 3: "Ɛ", 4: "ㄣ", 5: "ގ", 6: "9", 7: "ㄥ", "&": "⅋", ".": "˙", '"': "„", ";": "؛", "[": "]", "(": ")", "{": "}", "?": "¿", "!": "¡", "'": ",", "<": ">", "‾": "_", "¯": "_", "‿": "⁀", "⁅": "⁆", "∴": "∵", "\r": "\n", "ß": "ᙠ", "̈": "̤", "ä": "ɐ̤", "ö": "o̤", "ü": "n̤", "Ä": "∀̤", "Ö": "O̤", "Ü": "∩̤", "´": " ̗", "é": "ǝ̗", "á": "ɐ̗", "ó": "o̗", "ú": "n̗", "É": "Ǝ̗", "Á": "∀̗", "Ó": "O̗", "Ú": "∩̗", "`": " ̖", "è": "ǝ̖", "à": "ɐ̖", "ò": "o̖", "ù": "n̖", "È": "Ǝ̖", "À": "∀̖", "Ò": "O̖", "Ù": "∩̖", "^": " ̮", "ê": "ǝ̮", "â": "ɐ̮", "ô": "o̮", "û": "n̮", "Ê": "Ǝ̮", "Â": "∀̮", "Ô": "O̮", "Û": "∩̮" } }, mirror: { init: function () { for (i in this.map) this.map[this.map[i]] = i }, encode: function (i) { for (var r, t = [], o = [], h = 0, n = i.length; n > h; h++)r = i.charAt(h), h > 0 && ("̈" == r || "̀" == r || "́" == r || "̂" == r) ? (r = this.map[i.charAt(h - 1) + r], t.pop()) : (r = this.map[r], "undefined" == typeof r && (r = i.charAt(h))), "\n" == r ? (o.push(t.reverse().join("")), t = []) : t.push(r); return o.push(t.reverse().join("")), o.join("\n") }, decode: function (i) { for (var r, t = [], o = [], h = 0, n = i.length; n > h; h++)r = i.charAt(h), h > 0 && ("̈" == r || "̀" == r || "́" == r || "̂" == r) ? (r = this.map[i.charAt(h - 1) + r], t.pop()) : (r = this.map[r], "undefined" == typeof r && (r = i.charAt(h))), "\n" == r ? (o.push(t.reverse().join("")), t = []) : t.push(r); return o.push(t.reverse().join("")), o.join("\n") }, map: { a: "ɒ", b: "d", c: "ɔ", e: "ɘ", f: "Ꮈ", g: "ǫ", h: "ʜ", j: "ꞁ", k: "ʞ", l: "|", n: "ᴎ", p: "q", r: "ɿ", s: "ꙅ", t: "ƚ", y: "ʏ", z: "ƹ", B: "ᙠ", C: "Ɔ", D: "ᗡ", E: "Ǝ", F: "ꟻ", G: "Ꭾ", J: "Ⴑ", K: "⋊", L: "⅃", N: "Ͷ", P: "ꟼ", Q: "Ọ", R: "Я", S: "Ꙅ", Z: "Ƹ", 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", "&": "", ";": "", "[": "]", "(": ")", "{": "}", "?": "⸮", "<": ">", "ä": "ɒ̈", "ß": "ᙠ", "´": "`", "é": "ɘ̀", "á": "ɒ̀", "ó": "ò", "ú": "ù", "É": "Ǝ̀", "Á": "À", "Ó": "Ò", "Ú": "Ù", "`": "´", "è": "ɘ́", "à": "ɒ́", "È": "Ǝ́", "ê": "ɘ̂", "â": "ɒ̂", "Ê": "Ǝ̂", "Ø": "ᴓ", "ø": "ᴓ" } }, creepify: { init: function () { for (var i = 768; 789 >= i; i++)this.diacriticsTop.push(String.fromCharCode(i)); for (var i = 790; 819 >= i; i++)794 != i && 795 != i && this.diacriticsBottom.push(String.fromCharCode(i)); this.diacriticsTop.push(String.fromCharCode(794)), this.diacriticsTop.push(String.fromCharCode(795)); for (var i = 820; 824 >= i; i++)this.diacriticsMiddle.push(String.fromCharCode(i)); for (var i = 825; 828 >= i; i++)this.diacriticsBottom.push(String.fromCharCode(i)); for (var i = 829; 836 >= i; i++)this.diacriticsTop.push(String.fromCharCode(i)); this.diacriticsTop.push(String.fromCharCode(836)), this.diacriticsBottom.push(String.fromCharCode(837)), this.diacriticsTop.push(String.fromCharCode(838)), this.diacriticsBottom.push(String.fromCharCode(839)), this.diacriticsBottom.push(String.fromCharCode(840)), this.diacriticsBottom.push(String.fromCharCode(841)), this.diacriticsTop.push(String.fromCharCode(842)), this.diacriticsTop.push(String.fromCharCode(843)), this.diacriticsTop.push(String.fromCharCode(844)), this.diacriticsBottom.push(String.fromCharCode(845)), this.diacriticsBottom.push(String.fromCharCode(846)), this.diacriticsTop.push(String.fromCharCode(848)), this.diacriticsTop.push(String.fromCharCode(849)), this.diacriticsTop.push(String.fromCharCode(850)), this.diacriticsBottom.push(String.fromCharCode(851)), this.diacriticsBottom.push(String.fromCharCode(852)), this.diacriticsBottom.push(String.fromCharCode(853)), this.diacriticsBottom.push(String.fromCharCode(854)), this.diacriticsTop.push(String.fromCharCode(855)), this.diacriticsTop.push(String.fromCharCode(856)), this.diacriticsBottom.push(String.fromCharCode(857)), this.diacriticsBottom.push(String.fromCharCode(858)), this.diacriticsTop.push(String.fromCharCode(859)), this.diacriticsBottom.push(String.fromCharCode(860)), this.diacriticsTop.push(String.fromCharCode(861)), this.diacriticsTop.push(String.fromCharCode(861)), this.diacriticsBottom.push(String.fromCharCode(863)), this.diacriticsTop.push(String.fromCharCode(864)), this.diacriticsTop.push(String.fromCharCode(865)) }, encode: function (r) { var t, o = ""; for (i in r) { if (t = r[i], this.options.middle && (t += this.diacriticsMiddle[Math.floor(Math.random() * this.diacriticsMiddle.length)]), this.options.top) for (var h = this.diacriticsTop.length - 1, n = 0, a = this.options.maxHeight - Math.random() * (this.options.randomization / 100 * this.options.maxHeight); a > n; n++)t += this.diacriticsTop[Math.floor(Math.random() * h)]; if (this.options.bottom) for (var s = this.diacriticsBottom.length - 1, n = 0, a = this.options.maxHeight - Math.random() * (this.options.randomization / 100 * this.options.maxHeight); a > n; n++)t += this.diacriticsBottom[Math.floor(Math.random() * s)]; o += t } return o }, decode: function (r) { var t, o = ""; for (i in r) t = r[i].charCodeAt(0), (768 > t || t > 865) && (o += r[i]); return o }, diacriticsTop: [], diacriticsMiddle: [], diacriticsBottom: [], options: { top: !0, middle: !0, bottom: !0, maxHeight: 15, randomization: 100 } }, bubbles: { init: function () { for (var i = 49; 57 >= i; i++)this.map[String.fromCharCode(i)] = String.fromCharCode(i + 9263); this.map[0] = "⓪"; for (var i = 65; 90 >= i; i++)this.map[String.fromCharCode(i)] = String.fromCharCode(i + 9333); for (var i = 97; 122 >= i; i++)this.map[String.fromCharCode(i)] = String.fromCharCode(i + 9327); for (i in this.map) this.mapInverse[this.map[i]] = i }, encode: function (r) { var t, o = "", h = !0; for (i in r) t = this.map[r[i]], "undefined" == typeof t && (r[i].charCodeAt(0) >= 33 ? (t = r[i] + String.fromCharCode(8413), h || (t = String.fromCharCode(8239) + String.fromCharCode(160) + String.fromCharCode(160) + String.fromCharCode(8239) + t)) : t = r[i]), o += t, h = "\n" == t; return o }, decode: function (r) { var t, o = "", h = ""; for (i in r) t = this.mapInverse[r[i]], o += "undefined" == typeof t ? r[i] : t; for (i in o) t = o[i].charCodeAt(0), 160 != t && 8239 != t && 8413 != t && (h += o[i]); return h }, map: {}, mapInverse: {} }, squares: { init: function () { }, encode: function (r) { var t, o = "", h = !0; for (i in r) r[i].charCodeAt(0) >= 33 ? (t = r[i] + String.fromCharCode(8414), h || (t = String.fromCharCode(8239) + String.fromCharCode(160) + String.fromCharCode(160) + String.fromCharCode(8239) + t)) : t = r[i], o += t, h = "\n" == t; return o }, decode: function (r) { var t, o = ""; for (i in r) t = r[i].charCodeAt(0), 160 != t && 8239 != t && 8414 != t && (o += r[i]); return o } }, roundsquares: { init: function () { }, encode: function (r) { var t, o = "", h = !0; for (i in r) r[i].charCodeAt(0) >= 33 ? (t = r[i] + String.fromCharCode(8419), h || (t = String.fromCharCode(160) + String.fromCharCode(160) + String.fromCharCode(160) + t)) : t = r[i], o += t, h = "\n" == t; return o }, decode: function (r) { var t, o = ""; for (i in r) t = r[i].charCodeAt(0), 160 != t && 8239 != t && 8419 != t && (o += r[i]); return o } }, bent: { init: function () { for (i in this.map) this.map[this.map[i]] = i }, encode: function (i) { for (var r, t = "", o = 0, h = i.length; h > o; o++)r = this.map[i.charAt(o)], "undefined" == typeof r && (r = i.charAt(o)), t += r; return t }, decode: function (i) { for (var r, t = "", o = 0, h = i.length; h > o; o++)r = this.map[i.charAt(o)], "undefined" == typeof r && (r = i.charAt(o)), t += r; return t }, map: { a: "ą", b: "ҍ", c: "ç", d: "ժ", e: "ҽ", f: "ƒ", g: "ց", h: "հ", i: "ì", j: "ʝ", k: "ҟ", l: "Ӏ", m: "ʍ", n: "ղ", o: "օ", p: "ք", q: "զ", r: "ɾ", s: "ʂ", t: "է", u: "մ", v: "ѵ", w: "ա", x: "×", y: "վ", z: "Հ", A: "Ⱥ", B: "β", C: "↻", D: "Ꭰ", E: "Ɛ", F: "Ƒ", G: "Ɠ", H: "Ƕ", I: "į", J: "ل", K: "Ҡ", L: "Ꝉ", M: "Ɱ", N: "ហ", O: "ට", P: "φ", Q: "Ҩ", R: "འ", S: "Ϛ", T: "Ͳ", U: "Ա", V: "Ỽ", W: "చ", X: "ჯ", Y: "Ӌ", Z: "ɀ", 0: "⊘", 1: "������", 2: "ϩ", 3: "Ӡ", 4: "५", 5: "Ƽ", 6: "Ϭ", 7: "7", 8: "������", 9: "९", "&": "⅋", "(": "{", ")": "}", "{": "(", "}": ")", "ä": "ą̈", "ö": "օ̈", "ü": "մ̈", "Ä": "Ⱥ̈", "Ö": "ට̈", "Ü": "Ա̈", "é": "ҽ́", "á": "ą́", "ó": "օ́", "ú": "մ́", "É": "Ɛ́", "Á": "Ⱥ́", "Ó": "ට́", "Ú": "Ա́", "è": "ҽ̀", "à": "ą̀", "ò": "օ̀", "ù": "մ̀", "È": "Ɛ̀", "À": "Ⱥ̀", "Ò": "ට̀", "Ù": "Ա̀", "ê": "ҽ̂", "â": "ą̂", "ô": "օ̂", "û": "մ̂", "Ê": "Ɛ̂", "Â": "Ⱥ̂", "Ô": "ට̂", "Û": "Ա̂" } }, tiny: { init: function () { for (i in this.map) this.map[this.map[i]] = i }, encode: function (i) { var r, t = ""; i = i.toUpperCase(); for (var o = 0, h = i.length; h > o; o++)r = this.map[i.charAt(o)], "undefined" == typeof r && (r = i.charAt(o)), t += r; return t }, decode: function (i) { for (var r, t = "", o = 0, h = i.length; h > o; o++)r = this.map[i.charAt(o)], "undefined" == typeof r && (r = i.charAt(o)), t += r; return t }, map: { A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ", K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "Q", R: "ʀ", S: "ꜱ", T: "ᴛ", U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ" } } }; for (i in this.tools) this.tools[i].init(); this.getHTML = function (i) { for (var r, t = "", o = !0, h = 0, n = 0, a = 0, s = i.length; s > a; a++)r = i.charCodeAt(a), 10 == r || 13 == r ? (t += "<br>\n", o = !0) : 32 == r ? o ? (t += " ", o = !1) : (t += " ", o = !0) : (r >= 55296 && 56319 >= r ? (h = r, n = 0) : h > 0 ? (r >= 56320 && 57343 >= r && (n = 1024 * (h - 55296) + (r - 56320) + 65536), h = 0) : n = r, 0 != n && (t += "&#x" + n.toString(16) + ";", o = !0)); return t } }

function scriptify(text) {
  var map = { "0": "𝟢", "1": "𝟣", "2": "𝟤", "3": "𝟥", "4": "𝟦", "5": "𝟧", "6": "𝟨", "7": "𝟩", "8": "𝟪", "9": "𝟫", "a": "𝒶", "b": "𝒷", "c": "𝒸", "d": "𝒹", "e": "𝑒", "f": "𝒻", "g": "𝑔", "h": "𝒽", "i": "𝒾", "j": "𝒿", "k": "𝓀", "l": "𝓁", "m": "𝓂", "n": "𝓃", "o": "𝑜", "p": "𝓅", "q": "𝓆", "r": "𝓇", "s": "𝓈", "t": "𝓉", "u": "𝓊", "v": "𝓋", "w": "𝓌", "x": "𝓍", "y": "𝓎", "z": "𝓏", "A": "𝒜", "B": "𝐵", "C": "𝒞", "D": "𝒟", "E": "𝐸", "F": "𝐹", "G": "𝒢", "H": "𝐻", "I": "𝐼", "J": "𝒥", "K": "𝒦", "L": "𝐿", "M": "𝑀", "N": "𝒩", "O": "𝒪", "P": "𝒫", "Q": "𝒬", "R": "𝑅", "S": "𝒮", "T": "𝒯", "U": "𝒰", "V": "𝒱", "W": "𝒲", "X": "𝒳", "Y": "𝒴", "Z": "𝒵" };
  var charArray = text.split("");
  for (var i = 0; i < charArray.length; i++) {
    if (map[charArray[i].toLowerCase()]) {
      charArray[i] = map[charArray[i]];
    }
  }
  text = charArray.join("");
  return text;
}
function shuffleArray(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
function randomElement(a) {
  return a[Math.floor(Math.random() * a.length)];
}
//https://github.com/mathiasbynens/esrever
!function (e) { var o = "object" == typeof exports && exports, r = "object" == typeof module && module && module.exports == o && module, n = "object" == typeof global && global; (n.global === n || n.window === n) && (e = n); var t = /(<%= allExceptCombiningMarks %>)(<%= combiningMarks %>+)/g, i = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g, f = function (e) { e = e.replace(t, function (e, o, r) { return f(r) + o }).replace(i, "$2$1"); for (var o = "", r = e.length; r--;)o += e.charAt(r); return o }, l = { version: "<%= version %>", reverse: f }; if ("function" == typeof define && "object" == typeof define.amd && define.amd) define(function () { return l }); else if (o && !o.nodeType) if (r) r.exports = l; else for (var a in l) l.hasOwnProperty(a) && (o[a] = l[a]); else e.esrever = l }(this);

$(document).ready(function () {

  $("<style> // Font Generator by The Nitesh Arya: hackersaitand@gmail.com </style>").insertBefore("body");



  $("#fontSize").on("input change", function () {
    $("<style> .aryafonts p{font-size:" + $(this).val() + "px} </style>").insertBefore("body");

  });

 

  $('.Text').on("input", function (e) {
    var text = $('#Text').val();
    gen(text);
  });

  var url = window.location.href;
  var params = url.split('?=');
  urltext = params[1];
  if (urltext) {
    urltext = decodeURIComponent(urltext);
    $('#Text').val(urltext);
    gen(urltext);
  }


  $(document).on("click", ".aryafontslist .aryafonts", function () {

    $(".aryafontsrecentlist").prepend('<div class="aryafonts"><span>Recently Used</span><p onclick="copyit(this)" data-clipboard-target=".' + $(this).find("p").attr('class') + '" class="' + $(this).find("p").attr('class') + '">' + $(this).find("p").text() + '</p></div>');

    if ($('.aryafontsrecentlist .aryafonts').length > 3) {
      $('.aryafontsrecentlist .aryafonts').last().remove();
    }

  });


  function gen(text) {

    text = text.trim();

    $('.italicCharMap').html(applyCharMap(italicCharMap, text));
    $('.boldItalicCharMap').html(applyCharMap(boldItalicCharMap, text));
    
  };


  $(".clear").click(function () {
    $('#Text').val('');
  });

  $(".aryafonts p").click(function () {

    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(this).text()).select();
    document.execCommand("copy");
    $temp.remove();
    $('body').append('<p class="copied"><input class="text" value="' + $(this).text() + '" /><span class="copybtn">✔ Copied !</span></p>');
    setTimeout(function () { $('.copied').remove(); }, 1000);
  });
  
});