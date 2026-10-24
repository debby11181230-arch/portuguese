/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
// @ts-nocheck
import React, * as y from "react";
import marioBannerImg from "./assets/mario_game_banner.png";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import {
  ArrowLeft as Lt,
  Award as tp,
  BookOpen as Bx,
  BrainCircuit as np,
  Check as ip,
  CheckCircle2 as Gx,
  CheckCircle as Fo,
  CircleHelp as up,
  Compass as fp,
  Crown as mp,
  Delete as hp,
  DoorClosed as gp,
  EyeOff as yp,
  Eye as Np,
  Heart as kp,
  Key as _p,
  Layers as Cp,
  Link2 as Ep,
  Magnet as Tx,
  Play as Mp,
  RefreshCw as jt,
  Search as Zo,
  Sparkles as Vx,
  Star as Es,
  AlertTriangle as Bp,
  Trophy as Bl,
  Users as Yp,
  Utensils as Fp,
  Volume2 as Xp,
  VolumeX as Kp,
  Zap as Yx,
} from "lucide-react";

const n = {
  jsx: _jsx,
  jsxs: _jsxs,
  Fragment: _Fragment,
};

let tl = false;
function $p() {
  return tl = !tl, tl;
}
function Wp() {
  return tl;
}
function ut() {
  if (!tl) try {
    const f = window.AudioContext || window.webkitAudioContext;
    if (!f) return;
    const h = new f(), d = h.currentTime, o = h.createOscillator(), T = h.createGain();
    o.type = "sine", o.frequency.setValueAtTime(587.33, d), o.frequency.exponentialRampToValueAtTime(880, d + 0.1), T.gain.setValueAtTime(0, d), T.gain.linearRampToValueAtTime(0.15, d + 0.02), T.gain.exponentialRampToValueAtTime(1e-3, d + 0.35), o.connect(T), T.connect(h.destination), o.start(d), o.stop(d + 0.36);
    const N = h.createOscillator(), B = h.createGain();
    N.type = "triangle", N.frequency.setValueAtTime(880, d + 0.08), N.frequency.exponentialRampToValueAtTime(1318.51, d + 0.22), B.gain.setValueAtTime(0, d + 0.08), B.gain.linearRampToValueAtTime(0.12, d + 0.1), B.gain.exponentialRampToValueAtTime(1e-3, d + 0.45), N.connect(B), B.connect(h.destination), N.start(d + 0.08), N.stop(d + 0.46);
  } catch (f) {
    console.error("Failed to play sound:", f);
  }
}
function lt() {
  if (!tl) try {
    const f = window.AudioContext || window.webkitAudioContext;
    if (!f) return;
    const h = new f(), d = h.currentTime, o = h.createOscillator(), T = h.createGain();
    o.type = "sawtooth", o.frequency.setValueAtTime(261.63, d), o.frequency.linearRampToValueAtTime(110, d + 0.3);
    const N = h.createBiquadFilter();
    N.type = "lowpass", N.frequency.setValueAtTime(500, d), N.frequency.linearRampToValueAtTime(150, d + 0.3), T.gain.setValueAtTime(0, d), T.gain.linearRampToValueAtTime(0.15, d + 0.05), T.gain.exponentialRampToValueAtTime(1e-3, d + 0.35), o.connect(N), N.connect(T), T.connect(h.destination), o.start(d), o.stop(d + 0.36);
  } catch (f) {
    console.error("Failed to play sound:", f);
  }
}
function Ex() {
  if (!tl) try {
    const f = window.AudioContext || window.webkitAudioContext;
    if (!f) return;
    const h = new f(), d = h.currentTime, o = h.createOscillator(), T = h.createGain();
    o.type = "sawtooth", o.frequency.setValueAtTime(140, d), o.frequency.setValueAtTime(120, d + 0.15), T.gain.setValueAtTime(0.2, d), T.gain.exponentialRampToValueAtTime(0.01, d + 0.35), o.connect(T), T.connect(h.destination), o.start(d), o.stop(d + 0.36);
  } catch {
  }
}
function Ip() {
  if (!tl) try {
    const f = window.AudioContext || window.webkitAudioContext;
    if (!f) return;
    const h = new f(), d = h.currentTime, o = h.createOscillator(), T = h.createGain();
    o.type = "sine", o.frequency.setValueAtTime(1200, d), o.frequency.exponentialRampToValueAtTime(2400, d + 0.05), T.gain.setValueAtTime(0.25, d), T.gain.exponentialRampToValueAtTime(1e-3, d + 0.1), o.connect(T), T.connect(h.destination), o.start(d), o.stop(d + 0.1);
  } catch {
  }
}
function Pp() {
  if (!tl) try {
    const f = window.AudioContext || window.webkitAudioContext;
    if (!f) return;
    const h = new f(), d = h.currentTime, o = h.createOscillator(), T = h.createGain();
    o.type = "triangle", o.frequency.setValueAtTime(350, d), o.frequency.linearRampToValueAtTime(180, d + 0.12), o.frequency.linearRampToValueAtTime(280, d + 0.22), T.gain.setValueAtTime(0.2, d), T.gain.exponentialRampToValueAtTime(0.01, d + 0.25), o.connect(T), T.connect(h.destination), o.start(d), o.stop(d + 0.26);
  } catch {
  }
}
function eg() {
  if (!tl) try {
    const f = window.AudioContext || window.webkitAudioContext;
    if (!f) return;
    const h = new f(), d = h.currentTime;
    [523.25, 659.25, 783.99, 1046.5, 1318.51].forEach((T, N) => {
      const B = h.createOscillator(), U = h.createGain();
      B.type = "triangle", B.frequency.setValueAtTime(T, d + N * 0.06), U.gain.setValueAtTime(0, d + N * 0.06), U.gain.linearRampToValueAtTime(0.15, d + N * 0.06 + 0.02), U.gain.exponentialRampToValueAtTime(1e-3, d + N * 0.06 + 0.2), B.connect(U), U.connect(h.destination), B.start(d + N * 0.06), B.stop(d + N * 0.06 + 0.22);
    });
  } catch {
  }
}
function tg() {
  if (!tl) try {
    const f = window.AudioContext || window.webkitAudioContext;
    if (!f) return;
    const h = new f(), d = h.currentTime;
    [440, 554.37, 659.25, 880, 1108.73].forEach((T, N) => {
      const B = h.createOscillator(), U = h.createGain();
      B.type = "sine", B.frequency.setValueAtTime(T, d + N * 0.08), U.gain.setValueAtTime(0, d + N * 0.08), U.gain.linearRampToValueAtTime(0.12, d + N * 0.08 + 0.03), U.gain.exponentialRampToValueAtTime(1e-3, d + N * 0.08 + 0.35), B.connect(U), U.connect(h.destination), B.start(d + N * 0.08), B.stop(d + N * 0.08 + 0.36);
    });
  } catch {
  }
}
function Qo() {
  if (!tl) try {
    const f = window.AudioContext || window.webkitAudioContext;
    if (!f) return;
    const h = new f(), d = h.currentTime;
    [523.25, 659.25, 783.99, 1046.5].forEach((T, N) => {
      const B = h.createOscillator(), U = h.createGain();
      B.type = "sine", B.frequency.setValueAtTime(T, d + N * 0.08), U.gain.setValueAtTime(0, d + N * 0.08), U.gain.linearRampToValueAtTime(0.1, d + N * 0.08 + 0.02), U.gain.exponentialRampToValueAtTime(1e-3, d + N * 0.08 + 0.25), B.connect(U), U.connect(h.destination), B.start(d + N * 0.08), B.stop(d + N * 0.08 + 0.3);
    });
  } catch {
  }
}
function lg({ onBackToMenu: f, currentGame: h }) {
  const [d, o] = y.useState(Wp()), T = () => {
    const N = $p();
    o(N);
  };
  return n.jsxs("header", { className: "w-full bg-[#FED42C] border-4 border-black py-4 px-6 flex flex-col md:flex-row items-center justify-between shadow-[6px_6px_0px_#000000] rounded-2xl mb-6 gap-4 relative overflow-hidden", children: [n.jsxs("div", { onClick: f, className: "flex items-center gap-3 cursor-pointer hover:scale-102 transition-transform duration-200 select-none", children: [n.jsx("div", { className: "bg-white p-2.5 rounded-xl border-3 border-black flex items-center justify-center shadow-[3px_3px_0px_#000000]", children: n.jsx("span", { className: "text-2xl animate-bounce", children: "\u{1F344}" }) }), n.jsxs("div", { children: [n.jsxs("h1", { style: { textShadow: "2px 2px 0px #000000" }, className: "text-2xl md:text-3xl font-black text-white tracking-tight flex items-center gap-2", children: [n.jsx("span", { children: "PROFRESORA IONG" }), n.jsx("span", { className: "text-red-600 font-bold", style: { textShadow: "1.5px 1.5px 0px #FFFFFF" }, children: "PORTUGU\xCAS" })] }), n.jsx("p", { className: "text-xs text-black/85 font-black drop-shadow-sm flex items-center gap-1", children: n.jsx("span", { children: "\u2B50 As Formas em Portugu\xEAs \u2022 \u9670\u967D\u6027\u914D\u5408 \u{1F451}" }) })] })] }), n.jsxs("div", { className: "flex items-center gap-4 flex-wrap justify-center", children: [h && n.jsx("button", { onClick: f, className: "mario-btn mario-btn-red px-5 py-2.5 text-white text-xs md:text-sm cursor-pointer", children: n.jsx("span", { children: "\u{1F3E0} \u8FD4\u56DE\u5927\u5EF3 (Menu Principal)" }) }), n.jsx("button", { onClick: T, className: `p-2.5 rounded-xl border-3 border-black shadow-[3px_3px_0px_#000000] transition-all duration-205 flex items-center justify-center cursor-pointer ${d ? "bg-[#FFF8E7] text-gray-500" : "bg-white text-[#E52521] hover:scale-110"}`, title: d ? "\u89E3\u9664\u975C\u97F3" : "\u975C\u97F3", children: d ? n.jsx(Kp, { className: "w-5 h-5" }) : n.jsx(Xp, { className: "w-5 h-5 animate-bounce" }) }), n.jsxs("div", { className: "bg-white border-3 border-black px-4 py-1.5 rounded-xl flex items-center gap-1.5 text-xs font-black text-stone-900 shadow-[3px_3px_0px_#000000]", children: [n.jsx("span", { className: "text-amber-500 text-sm animate-spin inline-block", children: "\u2B50" }), n.jsx("span", { children: "\u8B8A\u5F62\u8D85\u4EBA retangular \u2022 \u9670\u967D\u540C\u5F62\uFF01" })] })] })] });
}
const ol = ["All", "1. 圓形組 (Redondo/a)", "2. 正方形組 (Quadrado/a)", "3. 長方形組 (Retangular)", "4. 居室傢俬組 (Mobiliário)"];
function Nl(f) {
  return !f || f === "All" || f.startsWith("Part")
    ? We
    : f.includes("傢俬") || f.includes("居室") || f.includes("Mobiliário")
    ? We.filter((h) => h.article !== "")
    : We.filter((h) => h.chapter === f);
}
const ag = {
  motto: "O 結尾配 -o (陽性)，A 結尾配 -a (陰性)，遇見 retangular 男生女生都一樣！"
};
const We = [
  {
    id: "mesa_1",
    english: "a mesa",
    portuguese: "a mesa",
    chinese: "桌子 (陰性)",
    emoji: "🪵",
    chapter: "1. 圓形組 (Redondo/a)",
    gender: "f",
    article: "a",
    shape: "circle",
    targetAdj: "redonda",
    exampleSentence: "A mesa é redonda.",
    sentenceChinese: "桌子是圓形的。",
    hint: "陰性名詞 (a mesa) 搭配陰性形容詞 redonda (-a)！"
  },
  {
    id: "mesa_2",
    english: "a mesa",
    portuguese: "a mesa",
    chinese: "正方桌 (陰性)",
    emoji: "🪵",
    chapter: "2. 正方形組 (Quadrado/a)",
    gender: "f",
    article: "a",
    shape: "square",
    targetAdj: "quadrada",
    exampleSentence: "A mesa é quadrada.",
    sentenceChinese: "桌子是正方形的。",
    hint: "陰性名詞 (a mesa) 搭配陰性形容詞 quadrada (-a)！"
  },
  {
    id: "janela_1",
    english: "a janela",
    portuguese: "a janela",
    chinese: "窗戶 (陰性)",
    emoji: "🪟",
    chapter: "2. 正方形組 (Quadrado/a)",
    gender: "f",
    article: "a",
    shape: "square",
    targetAdj: "quadrada",
    exampleSentence: "A janela é quadrada.",
    sentenceChinese: "窗戶是正方形的。",
    hint: "陰性名詞 (a janela) 搭配陰性形容詞 quadrada (-a)！"
  },
  {
    id: "cadeira_1",
    english: "a cadeira",
    portuguese: "a cadeira",
    chinese: "椅子 (陰性)",
    emoji: "🪑",
    chapter: "2. 正方形組 (Quadrado/a)",
    gender: "f",
    article: "a",
    shape: "square",
    targetAdj: "quadrada",
    exampleSentence: "A cadeira é quadrada.",
    sentenceChinese: "椅子是正方形的。",
    hint: "陰性名詞 (a cadeira) 搭配陰性形容詞 quadrada (-a)！"
  },
  {
    id: "armario_sq",
    english: "o armário",
    portuguese: "o armário",
    chinese: "方櫃 (陽性)",
    emoji: "🗄️",
    chapter: "2. 正方形組 (Quadrado/a)",
    gender: "m",
    article: "o",
    shape: "square",
    targetAdj: "quadrado",
    exampleSentence: "O armário é quadrado.",
    sentenceChinese: "櫃子是正方形的。",
    hint: "陽性名詞 (o armário) 搭配陽性形容詞 quadrado (-o)！"
  },
  {
    id: "janela_rec",
    english: "a janela",
    portuguese: "a janela",
    chinese: "長窗 (陰性)",
    emoji: "🪟",
    chapter: "3. 長方形組 (Retangular)",
    gender: "f",
    article: "a",
    shape: "rectangle",
    targetAdj: "retangular",
    exampleSentence: "A janela é retangular.",
    sentenceChinese: "窗戶是長方形的。",
    hint: "變形超人！陰性 a janela 搭配 retangular 不變形！"
  },
  {
    id: "televisao_1",
    english: "a televisão",
    portuguese: "a televisão",
    chinese: "電視機 (陰性)",
    emoji: "📺",
    chapter: "3. 長方形組 (Retangular)",
    gender: "f",
    article: "a",
    shape: "rectangle",
    targetAdj: "retangular",
    exampleSentence: "A televisão é retangular.",
    sentenceChinese: "電視機是長方形的。",
    hint: "變形超人！陰性 a televisão 搭配 retangular 不變形！"
  },
  {
    id: "frigorifico_1",
    english: "o frigorífico",
    portuguese: "o frigorífico",
    chinese: "冰箱 (陽性 • 歐葡)",
    emoji: "🧊",
    chapter: "3. 長方形組 (Retangular)",
    gender: "m",
    article: "o",
    shape: "rectangle",
    targetAdj: "retangular",
    exampleSentence: "O frigorífico é retangular.",
    sentenceChinese: "冰箱是長方形的。",
    hint: "變形超人！陽性 o frigorífico (歐葡冰箱) 搭配 retangular 不變形！"
  },
  {
    id: "roupeiro_1",
    english: "o roupeiro",
    portuguese: "o roupeiro",
    chinese: "大衣櫃 (陽性 • 歐葡)",
    emoji: "🚪",
    chapter: "3. 長方形組 (Retangular)",
    gender: "m",
    article: "o",
    shape: "rectangle",
    targetAdj: "retangular",
    exampleSentence: "O roupeiro é retangular.",
    sentenceChinese: "大衣櫃是長方形的。",
    hint: "變形超人！陽性 o roupeiro (歐葡大衣櫃) 搭配 retangular 不變形！"
  },
  {
    id: "armario_1",
    english: "o armário",
    portuguese: "o armário",
    chinese: "壁櫥/櫃子 (陽性)",
    emoji: "🗄️",
    chapter: "3. 長方形組 (Retangular)",
    gender: "m",
    article: "o",
    shape: "rectangle",
    targetAdj: "retangular",
    exampleSentence: "O armário é retangular.",
    sentenceChinese: "櫃子是長方形的。",
    hint: "變形超人！陽性 o armário 搭配 retangular 不變形！"
  },
  {
    id: "porta_1",
    english: "a porta",
    portuguese: "a porta",
    chinese: "大門 (陰性)",
    emoji: "🚪",
    chapter: "3. 長方形組 (Retangular)",
    gender: "f",
    article: "a",
    shape: "rectangle",
    targetAdj: "retangular",
    exampleSentence: "A porta é retangular.",
    sentenceChinese: "門是長方形的。",
    hint: "變形超人！陰性 a porta 搭配 retangular 同樣不變形！"
  },
  {
    id: "adj_1",
    english: "redondo",
    portuguese: "redondo",
    chinese: "圓形的 (陽性結尾 -o)",
    emoji: "🔵",
    chapter: "1. 圓形組 (Redondo/a)",
    gender: "m",
    article: "",
    shape: "circle",
    targetAdj: "redondo",
    exampleSentence: "O espelho é redondo.",
    sentenceChinese: "陽性名詞配 -o (redondo)。",
    hint: "結尾為 -o，配陽性名詞 (o ...)！"
  },
  {
    id: "adj_2",
    english: "redonda",
    portuguese: "redonda",
    chinese: "圓形的 (陰性結尾 -a)",
    emoji: "🌸",
    chapter: "1. 圓形組 (Redondo/a)",
    gender: "f",
    article: "",
    shape: "circle",
    targetAdj: "redonda",
    exampleSentence: "A mesa é redonda.",
    sentenceChinese: "陰性名詞配 -a (redonda)。",
    hint: "結尾為 -a，配陰性名詞 (a ...)！"
  },
  {
    id: "adj_3",
    english: "quadrado",
    portuguese: "quadrado",
    chinese: "正方形的 (陽性結尾 -o)",
    emoji: "🟢",
    chapter: "2. 正方形組 (Quadrado/a)",
    gender: "m",
    article: "",
    shape: "square",
    targetAdj: "quadrado",
    exampleSentence: "O armário é quadrado.",
    sentenceChinese: "陽性名詞配 -o (quadrado)。",
    hint: "結尾為 -o，配陽性名詞 (o ...)！"
  },
  {
    id: "adj_4",
    english: "quadrada",
    portuguese: "quadrada",
    chinese: "正方形的 (陰性結尾 -a)",
    emoji: "🌿",
    chapter: "2. 正方形組 (Quadrado/a)",
    gender: "f",
    article: "",
    shape: "square",
    targetAdj: "quadrada",
    exampleSentence: "A cadeira é quadrada. A janela é quadrada.",
    sentenceChinese: "陰性名詞配 -a (quadrada)。",
    hint: "結尾為 -a，配陰性名詞 (a ...)！"
  },
  {
    id: "adj_5",
    english: "retangular",
    portuguese: "retangular",
    chinese: "長方形的 (陰陽同形 變形超人 ⭐)",
    emoji: "⭐",
    chapter: "3. 長方形組 (Retangular)",
    gender: "both",
    article: "",
    shape: "rectangle",
    targetAdj: "retangular",
    exampleSentence: "A porta é retangular. O roupeiro é retangular.",
    sentenceChinese: "結尾 -ar，男女生都一樣不變！",
    hint: "單一形式形容詞：結尾為 -ar，陰陽性同形！"
  }
];
const _s = We.filter((f) => f.article !== "");
function ng({ onBack: f }) {
  const [h, d] = y.useState("library"), [o, T] = y.useState("All"), [N, B] = y.useState(""), [U, ne] = y.useState("all"), [ee, D] = y.useState("all"), [b, Y] = y.useState(_s[0]), [O, Z] = y.useState(_s[1] || _s[0]), [L, I] = y.useState("quadrada"), [X, K] = y.useState(null), [oe, H] = y.useState(0), se = We.filter((w) => w.article !== ""), J = se[oe % se.length], [G, z] = y.useState(null), ie = We.filter((w) => {
    const F = o === "All" || w.chapter === o, P = w.portuguese.toLowerCase().includes(N.toLowerCase()) || w.chinese.includes(N) || w.exampleSentence.toLowerCase().includes(N.toLowerCase()), ue = U === "all" || w.gender === U, W = ee === "all" || w.shape === ee;
    return F && P && ue && W;
  }), q = () => {
    const w = ["redondo", "redonda", "quadrado", "quadrada", "retangular"], F = w[Math.floor(Math.random() * w.length)];
    I(F), K(null);
  };
  return n.jsxs("div", { className: "w-full bg-[#FFF8E7] p-4 md:p-6 rounded-3xl border-4 border-black shadow-[8px_8px_0px_#000] relative overflow-hidden font-sans", children: [n.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 border-b-3 border-black pb-4", children: [n.jsxs("button", { onClick: f, className: "mario-btn mario-btn-gray px-4 py-2 text-xs md:text-sm text-white flex items-center gap-1.5", children: [n.jsx(Lt, { className: "w-4 h-4" }), n.jsx("span", { children: "\u8FD4\u56DE\u83DC\u55AE" })] }), n.jsxs("div", { className: "text-center", children: [n.jsx("h2", { className: "text-xl md:text-2xl font-black font-pixel text-stone-900 drop-shadow flex items-center justify-center gap-2", children: n.jsx("span", { children: "\u{1F4DA} AS FORMAS EM PORTUGU\xCAS \u{1F31F}" }) }), n.jsx("p", { className: "text-xs text-stone-700 font-bold", children: "Profresora Iong \u8461\u8A9E\u5F62\u72C0\u8207\u9670\u967D\u6027\u914D\u5408 \u2022 \u8A5E\u5EAB\u8207\u60C5\u5883\u4E92\u52D5" })] }), n.jsx("div", { className: "flex items-center gap-1 bg-amber-200 border-2 border-black px-3 py-1.5 rounded-xl font-bold text-xs text-amber-950", children: n.jsxs("span", { children: [We.length, " \u6838\u5FC3\u8A5E\u5F59"] }) })] }), n.jsx("div", { className: "flex flex-wrap items-center justify-center gap-2 mb-6", children: [{ id: "library", label: "\u{1F4D6} \u5F62\u72C0\u55AE\u8A5E\u5EAB", icon: Bx }, { id: "food_party", label: "\u{1F355} \u98DF\u7269\u5F62\u72C0\u6D3E\u5C0D", icon: Fp }, { id: "classroom_detective", label: "\u{1F3EB} \u8AB2\u5BA4\u5927\u641C\u67E5", icon: fp }, { id: "tail_match", label: "\u{1F9E9} \u63A5\u5C3E\u5DF4\u627E\u670B\u53CB", icon: Ep }, { id: "rules", label: "\u{1F4A1} \u9670\u967D\u6027\u53E3\u8A23\u5361", icon: up }].map((w) => {
    const F = w.icon, P = h === w.id;
    return n.jsxs("button", { onClick: () => d(w.id), className: `px-3.5 py-2 rounded-2xl font-black text-xs md:text-sm border-3 transition-all duration-150 cursor-pointer flex items-center gap-1.5 select-none ${P ? "bg-amber-400 border-black text-black shadow-[3px_3px_0px_#000] scale-103" : "bg-white border-black/40 text-stone-700 hover:bg-stone-100 hover:border-black"}`, children: [n.jsx(F, { className: "w-4 h-4" }), n.jsx("span", { children: w.label })] }, w.id);
  }) }), h === "library" && n.jsxs("div", { children: [n.jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-3 mb-4", children: [n.jsx("div", { className: "flex flex-wrap gap-1.5 justify-center sm:justify-start", children: ol.map((w) => n.jsx("button", { onClick: () => T(w), className: `px-3 py-1.5 rounded-xl text-xs font-bold border-2 transition-all cursor-pointer ${o === w ? "bg-[#E52521] border-black text-white shadow-[2px_2px_0px_#000]" : "bg-white border-stone-300 text-stone-700 hover:bg-amber-100"}`, children: w }, w)) }), n.jsxs("div", { className: "flex items-center gap-2 flex-wrap justify-center", children: [n.jsxs("select", { value: U, onChange: (w) => ne(w.target.value), className: "bg-white border-2 border-black rounded-xl px-2.5 py-1 text-xs font-bold text-stone-800", children: [n.jsx("option", { value: "all", children: "\u6027\u5225: \u5168\u90E8" }), n.jsx("option", { value: "m", children: "\u967D\u6027 (o ... -o)" }), n.jsx("option", { value: "f", children: "\u9670\u6027 (a ... -a)" })] }), n.jsxs("select", { value: ee, onChange: (w) => D(w.target.value), className: "bg-white border-2 border-black rounded-xl px-2.5 py-1 text-xs font-bold text-stone-800", children: [n.jsx("option", { value: "all", children: "\u5F62\u72C0: \u5168\u90E8" }), n.jsx("option", { value: "circle", children: "\u5713\u5F62 (Redondo/a)" }), n.jsx("option", { value: "square", children: "\u6B63\u65B9\u5F62 (Quadrado/a)" }), n.jsx("option", { value: "rectangle", children: "\u9577\u65B9\u5F62 (Retangular)" })] })] })] }), n.jsxs("div", { className: "max-w-md mx-auto mb-6 relative", children: [n.jsx("div", { className: "absolute inset-y-0 left-3 flex items-center pointer-events-none text-stone-400", children: n.jsx(Zo, { className: "w-4 h-4" }) }), n.jsx("input", { type: "text", placeholder: "\u641C\u5C0B\u8461\u8A9E\u55AE\u8A5E\u3001\u4F8B\u53E5\u6216\u4E2D\u6587\u610F\u601D...", value: N, onChange: (w) => B(w.target.value), className: "w-full pl-10 pr-4 py-2 bg-white border-3 border-black focus:outline-none rounded-xl text-stone-900 font-bold placeholder-stone-400 shadow-[3px_3px_0px_#000] text-sm" }), N && n.jsx("button", { onClick: () => B(""), className: "absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-black font-bold", children: "\u2715" })] }), n.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-h-[520px] overflow-y-auto pr-2 custom-scrollbar", children: ie.map((w) => n.jsxs("div", { onClick: () => {
    w.exampleSentence || w.portuguese, ut();
  }, className: "group cursor-pointer bg-white hover:bg-amber-50 border-3 border-black p-3 rounded-2xl flex flex-col items-center justify-between text-center shadow-[4px_4px_0px_#000] hover:-translate-y-1 transition-all duration-150 relative overflow-hidden select-none", children: [n.jsxs("div", { className: "w-full flex items-center justify-between text-[10px] font-black mb-1", children: [n.jsx("span", { className: `px-1.5 py-0.5 rounded border ${w.gender === "m" ? "bg-blue-100 text-blue-900 border-blue-400" : w.gender === "f" ? "bg-pink-100 text-pink-900 border-pink-400" : "bg-amber-100 text-amber-900 border-amber-400"}`, children: w.gender === "m" ? "\u967D\u6027 (o)" : w.gender === "f" ? "\u9670\u6027 (a)" : "\u9670\u967D\u540C\u5F62" }), n.jsx("span", { className: "text-stone-400 font-bold text-[9px]", children: w.targetAdj })] }), n.jsx("span", { className: "text-4xl my-1 group-hover:scale-120 transition-transform", children: w.emoji }), n.jsx("h3", { className: "text-sm md:text-base font-black text-stone-900 leading-tight", children: w.portuguese }), n.jsx("p", { className: "text-[11px] text-stone-600 font-bold my-1", children: w.chinese }), n.jsx("div", { className: "w-full bg-stone-100 border border-stone-300 rounded-lg p-1 text-[10px] text-stone-700 font-bold mt-1", children: w.exampleSentence })] }, w.id)) })] }), h === "food_party" && n.jsxs("div", { className: "bg-white border-3 border-black rounded-3xl p-6 shadow-[6px_6px_0px_#000]", children: [n.jsxs("div", { className: "text-center mb-6", children: [n.jsx("span", { className: "text-5xl animate-bounce inline-block mb-1", children: "\u{1F355}\u{1F9C7}\u{1F36B}" }), n.jsx("h3", { className: "text-2xl font-black text-amber-900 font-pixel", children: "O BANQUETE DAS FORMAS \u2022 \u7F8E\u5473\u98DF\u7269\u5F62\u72C0\u6D3E\u5C0D" }), n.jsx("p", { className: "text-stone-600 text-xs md:text-sm font-bold mt-1", children: "\u6311\u9078\u98DF\u7269\u5361\u7247\uFF0C\u5411\u5BA2\u4EBA\u4ECB\u7D39\u83DC\u55AE\uFF01\u89C0\u5BDF\u62AB\u85A9 (a)\u3001\u5DE7\u514B\u529B\u78DA (o)\u3001\u9905\u4E7E (a) \u7684\u5F62\u72C0\u5F62\u5BB9\u8A5E\u8B8A\u5316\uFF01" })] }), n.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6", children: [n.jsxs("div", { className: "bg-amber-50 border-3 border-amber-400 rounded-2xl p-4", children: [n.jsx("label", { className: "text-xs font-black text-amber-950 block mb-2", children: "1\uFE0F\u20E3 \u9078\u64C7\u7B2C\u4E00\u9053\u6D3E\u5C0D\u7F8E\u98DF\uFF1A" }), n.jsx("div", { className: "grid grid-cols-3 gap-2", children: _s.map((w) => n.jsxs("button", { onClick: () => Y(w), className: `p-2 rounded-xl border-2 text-center cursor-pointer transition-all ${b.id === w.id ? "bg-amber-400 border-black shadow-[3px_3px_0px_#000] scale-103 font-black" : "bg-white border-stone-300 text-stone-700 hover:bg-amber-100"}`, children: [n.jsx("span", { className: "text-3xl block", children: w.emoji }), n.jsx("span", { className: "text-xs font-bold block", children: w.portuguese })] }, w.id)) })] }), n.jsxs("div", { className: "bg-orange-50 border-3 border-orange-400 rounded-2xl p-4", children: [n.jsx("label", { className: "text-xs font-black text-orange-950 block mb-2", children: "2\uFE0F\u20E3 \u9078\u64C7\u7B2C\u4E8C\u9053\u6D3E\u5C0D\u7F8E\u98DF\uFF1A" }), n.jsx("div", { className: "grid grid-cols-3 gap-2", children: _s.map((w) => n.jsxs("button", { onClick: () => Z(w), className: `p-2 rounded-xl border-2 text-center cursor-pointer transition-all ${O.id === w.id ? "bg-orange-400 border-black shadow-[3px_3px_0px_#000] scale-103 font-black" : "bg-white border-stone-300 text-stone-700 hover:bg-orange-100"}`, children: [n.jsx("span", { className: "text-3xl block", children: w.emoji }), n.jsx("span", { className: "text-xs font-bold block", children: w.portuguese })] }, w.id)) })] })] }), n.jsxs("div", { className: "bg-amber-100 border-4 border-black rounded-2xl p-5 text-center shadow-[4px_4px_0px_#000]", children: [n.jsx("span", { className: "text-xs font-pixel text-amber-800 block mb-2", children: "MENU SPEECH \u2022 \u5B78\u751F\u83DC\u55AE\u4ECB\u7D39\u53F0\u8A5E" }), n.jsxs("div", { className: "text-lg md:text-2xl font-black text-stone-900 mb-2", children: ['"', b.exampleSentence.replace(".", ""), ", e ", O.exampleSentence.toLowerCase(), '"'] }), n.jsxs("div", { className: "text-xs md:text-sm text-stone-600 font-bold", children: ["(", b.sentenceChinese.replace("\u3002", ""), "\uFF0C\u800C\u4E14", O.sentenceChinese, ")"] })] })] }), h === "classroom_detective" && n.jsxs("div", { className: "bg-white border-3 border-black rounded-3xl p-6 shadow-[6px_6px_0px_#000]", children: [n.jsxs("div", { className: "text-center mb-6", children: [n.jsx("span", { className: "text-5xl animate-bounce inline-block mb-1", children: "\u{1F3EB}\u{1F4E2}\u{1F50D}" }), n.jsx("h3", { className: "text-2xl font-black text-blue-900 font-pixel", children: "DETETIVE NA SALA DE AULA \u2022 \u8AB2\u5BA4\u5927\u641C\u67E5" }), n.jsx("p", { className: "text-stone-600 text-xs md:text-sm font-bold mt-1", children: "\u8001\u5E2B\u96A8\u6A5F\u51FA\u984C\u6307\u4EE4\uFF0C\u5B78\u751F\u627E\u5230\u7269\u54C1\u5F8C\u6307\u8457\u4E26\u8AAA\u51FA\u5B8C\u6574\u53E5\u5B50\uFF0C\u6CE8\u610F\u770B\u662F o \u9084\u662F a\uFF01" })] }), n.jsxs("div", { className: "bg-blue-50 border-3 border-blue-500 rounded-2xl p-5 mb-6 text-center shadow-[4px_4px_0px_#000]", children: [n.jsx("span", { className: "text-xs font-pixel text-blue-800 block mb-1", children: "TEACHER'S COMMAND" }), n.jsxs("h4", { className: "text-xl md:text-3xl font-black text-blue-950 mb-2", children: ['"Procurem uma coisa que \xE9 ', L, '!"'] }), n.jsxs("p", { className: "text-xs md:text-sm text-blue-800 font-bold mb-4", children: ["(\u8ACB\u627E\u4E00\u500B\u662F\u3010", L, "\u3011\u7684\u6771\u897F\uFF01)"] }), n.jsx("div", { className: "flex justify-center gap-3", children: n.jsxs("button", { onClick: q, className: "mario-btn mario-btn-yellow px-5 py-2 text-black font-black flex items-center gap-1.5 cursor-pointer text-xs md:text-sm", children: [n.jsx(Vx, { className: "w-4 h-4" }), n.jsx("span", { children: "\u63DB\u4E00\u500B\u6307\u4EE4\u984C\u76EE\uFF01" })] }) })] }), n.jsx("span", { className: "text-xs font-bold text-stone-600 mb-2 block text-center", children: "\u9EDE\u64CA\u6559\u5BA4\u88E1\u7684\u7269\u54C1\u4F86\u56DE\u7B54\u8001\u5E2B\uFF1A" }), n.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-4", children: We.filter((w) => w.article !== "").slice(0, 12).map((w) => n.jsxs("button", { onClick: () => {
    w.targetAdj === L ? (ut(), w.exampleSentence, K(`\u2705 \u592A\u68D2\u4E86\uFF01\u627E\u5230\u3010${w.portuguese}\u3011\uFF01\u5B8C\u6574\u5927\u8072\u8AAA\u51FA\u4F86\uFF1A${w.exampleSentence}`)) : (lt(), K(`\u274C \u54CE\u5440\uFF01${w.portuguese} \u662F\u3010${w.targetAdj}\u3011\uFF0C\u4E0D\u7B26\u5408\u984C\u76EE\u8981\u6C42\u7684\u3010${L}\u3011\u5594\uFF01`));
  }, className: "p-3 bg-stone-50 hover:bg-blue-50 border-2 border-black rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer hover:scale-105 active:scale-95 transition-all shadow-[2px_2px_0px_#000]", children: [n.jsx("span", { className: "text-3xl", children: w.emoji }), n.jsx("span", { className: "text-xs font-black mt-1", children: w.portuguese }), n.jsx("span", { className: "text-[10px] text-stone-500 font-bold", children: w.chinese })] }, w.id)) }), X && n.jsx("div", { className: "bg-amber-100 border-2 border-black p-3 rounded-xl text-center text-xs md:text-sm font-bold text-stone-800 animate-fade-in", children: X })] }), h === "tail_match" && n.jsxs("div", { className: "bg-white border-3 border-black rounded-3xl p-6 shadow-[6px_6px_0px_#000]", children: [n.jsxs("div", { className: "text-center mb-6", children: [n.jsx("span", { className: "text-5xl animate-bounce inline-block mb-1", children: "\u{1F9E9}\u{1F380}\u26A1" }), n.jsx("h3", { className: "text-2xl font-black text-purple-900 font-pixel", children: "O CASAMENTO DAS LETRAS \u2022 \u5F62\u72C0\u627E\u670B\u53CB (\u63A5\u5C3E\u5DF4)" }), n.jsx("p", { className: "text-stone-600 text-xs md:text-sm font-bold mt-1", children: "\u73A9\u300C\u63A5\u5C3E\u5DF4\u300D\u586B\u7A7A\u5361\u7247\uFF1AA mesa \u2794 \u914D\u5C0D redond-a\uFF0CO roupeiro \u2794 \u914D\u5C0D retangular\uFF0C\u9047\u898B retangular \u7537\u751F\u5973\u751F\u90FD\u80FD\u76F4\u63A5\u727D\u624B\uFF01" })] }), n.jsxs("div", { className: "bg-purple-50 border-3 border-purple-500 rounded-3xl p-6 max-w-xl mx-auto text-center shadow-[4px_4px_0px_#000] mb-6", children: [n.jsx("div", { className: "text-6xl mb-2", children: J.emoji }), n.jsxs("div", { className: "text-2xl md:text-3xl font-black text-stone-900 mb-1", children: [n.jsxs("span", { children: [J.portuguese, " \xE9 "] }), n.jsx("span", { className: "underline decoration-purple-500 decoration-wavy", children: J.shape === "circle" ? "redond-" : J.shape === "square" ? "quadrad-" : "_____" }), n.jsx("span", { className: "text-purple-600 font-black", children: "?" })] }), n.jsxs("div", { className: "text-xs text-stone-500 font-bold mb-4", children: [J.chinese, " \u2022 \u5B9A\u51A0\u8A5E\u662F\u300C", J.article, "\u300D\uFF0C\u5C6C\u65BC\u3010", J.gender === "m" ? "\u967D\u6027" : "\u9670\u6027", "\u3011"] }), n.jsx("div", { className: "grid grid-cols-3 gap-3", children: [{ label: "-o (\u967D\u6027)", value: "redondo", isO: true }, { label: "-a (\u9670\u6027)", value: "redonda", isA: true }, { label: "retangular (\u8B8A\u5F62\u8D85\u4EBA \u2B50)", value: "retangular", isRet: true }].map((w, F) => n.jsx("button", { onClick: () => {
    J.shape === "rectangle" && w.isRet || J.shape === "circle" && (J.gender === "m" && w.isO || J.gender === "f" && w.isA) || J.shape === "square" && (J.gender === "m" && w.isO || J.gender === "f" && w.isA) ? (ut(), J.exampleSentence, z(`\u{1F389} \u592A\u53B2\u5BB3\u4E86\uFF01\u6B63\u78BA\u7B54\u6848\u662F\uFF1A${J.exampleSentence}\uFF01`), setTimeout(() => {
      H((ue) => ue + 1), z(null);
    }, 2e3)) : (lt(), z(`\u274C \u518D\u60F3\u4E00\u60F3\uFF01\u5B9A\u51A0\u8A5E\u662F\u300C${J.article}\u300D\uFF0C\u5F62\u72C0\u662F\u3010${J.shape}\u3011\uFF0C\u61C9\u8A72\u63A5\u54EA\u4E00\u500B\u5C3E\u5DF4\u5462\uFF1F`));
  }, className: "mario-btn mario-btn-yellow p-3 text-xs md:text-sm font-black cursor-pointer shadow-[3px_3px_0px_#000]", children: w.label }, F)) }), G && n.jsx("div", { className: "mt-4 p-3 bg-white border-2 border-black rounded-xl text-xs md:text-sm font-bold text-stone-800 animate-fade-in", children: G })] })] }), h === "rules" && n.jsxs("div", { className: "bg-white border-3 border-black rounded-3xl p-6 shadow-[6px_6px_0px_#000] max-w-3xl mx-auto", children: [n.jsxs("div", { className: "text-center mb-6", children: [n.jsx("span", { className: "text-5xl animate-bounce inline-block mb-1", children: "\u{1F4A1}\u{1F9B8}\u200D\u2642\uFE0F" }), n.jsx("h3", { className: "text-2xl font-black text-amber-900 font-pixel", children: "\u5F62\u72C0\u8207\u9670\u967D\u6027\u914D\u5408\u6559\u5B78\u79D8\u7C4D" }), n.jsx("p", { className: "text-stone-600 text-xs md:text-sm font-bold mt-1", children: "\u53E3\u8A23\u5728\u5FC3\uFF0C\u8003\u8A66\u516C\u958B\u8AB2\u6EFF\u5206\u901A\u95DC\uFF01" })] }), n.jsxs("div", { className: "space-y-4", children: [n.jsxs("div", { className: "bg-blue-50 border-3 border-blue-400 p-4 rounded-2xl", children: [n.jsx("h4", { className: "text-base font-black text-blue-900 flex items-center gap-2 mb-1", children: n.jsx("span", { children: "1\uFE0F\u20E3 \u967D\u6027\u7D50\u5C3E -o \u8207 \u9670\u6027\u7D50\u5C3E -a \u914D\u5408" }) }), n.jsxs("p", { className: "text-xs md:text-sm text-stone-700 leading-relaxed font-medium", children: ["\u4EE5 ", n.jsx("strong", { children: "-o" }), " \u7D50\u5C3E\u7684\u5F62\u5BB9\u8A5E\u914D\u5408\u967D\u6027\u540D\u8A5E\uFF08o armário \xE9 ", n.jsx("strong", { children: "redondo" }), " / o roupeiro \xE9 ", n.jsx("strong", { children: "quadrado" }), "\uFF09\u3002", n.jsx("br", {}), "\u4EE5 ", n.jsx("strong", { children: "-a" }), " \u7D50\u5C3E\u7684\u5F62\u5BB9\u8A5E\u914D\u5408\u9670\u6027\u540D\u8A5E\uFF08a mesa \xE9 ", n.jsx("strong", { children: "redonda" }), " / a cadeira \xE9 ", n.jsx("strong", { children: "quadrada" }), "\uFF09\u3002"] })] }), n.jsxs("div", { className: "bg-amber-50 border-3 border-amber-500 p-4 rounded-2xl", children: [n.jsx("h4", { className: "text-base font-black text-amber-950 flex items-center gap-2 mb-1", children: n.jsx("span", { children: "2\uFE0F\u20E3 \u55AE\u4E00\u5F62\u5F0F\u5F62\u5BB9\u8A5E\uFF1Aretangular \u8B8A\u5F62\u8D85\u4EBA \u2B50" }) }), n.jsxs("p", { className: "text-xs md:text-sm text-stone-800 leading-relaxed font-medium", children: ["\u4EE5 ", n.jsx("strong", { children: "-ar" }), " \u7D50\u5C3E\u7684 retangular\uFF0C", n.jsx("strong", { children: "\u9670\u967D\u6027\u540C\u5F62" }), "\uFF01", n.jsx("br", {}), "\u4E0D\u7BA1\u662F\u7537\u751F (o frigorífico / o roupeiro) \u9084\u662F\u5973\u751F (a porta / a janela)\uFF0C\u8863\u670D\u90FD\u4E0D\u8B8A\uFF0C\u90FD\u662F ", n.jsx("strong", { children: "retangular" }), "\uFF01"] })] }), n.jsxs("div", { className: "bg-emerald-50 border-3 border-emerald-500 p-4 rounded-2xl text-center", children: [n.jsx("h4", { className: "text-sm font-black text-emerald-900 mb-1", children: "\u{1F31F} Profresora Iong \u62BC\u97FB\u5C0F\u53E3\u8A23 \u{1F31F}" }), n.jsx("div", { className: "text-base md:text-lg font-black text-emerald-950 py-1", children: ag.motto })] })] })] })] });
}
function sg({ onBack: f }) {
  const [h, d] = y.useState("All"), [o, T] = y.useState(false), [N, B] = y.useState([]), [U, ne] = y.useState(0), [ee, D] = y.useState([]), [b, Y] = y.useState(null), [O, Z] = y.useState(null), [L, I] = y.useState(0), [X, K] = y.useState(false), oe = ol, H = (z) => {
    let ie = Nl(z);
    const q = [...ie].sort(() => Math.random() - 0.5);
    q.length !== 0 && (B(q), ne(0), I(0), Y(null), Z(null), K(false), T(true), se(q[0], ie));
  }, se = (z, ie) => {
    const F = [...ie.filter((ue) => ue.id !== z.id)].sort(() => Math.random() - 0.5).slice(0, 3), P = [z, ...F].sort(() => Math.random() - 0.5);
    D(P);
  }, J = (z) => {
    if (b !== null) return;
    Y(z.id);
    const ie = N[U];
    z.id === ie.id ? (Z(true), I((q) => q + 1), ut()) : (Z(false), lt()), setTimeout(() => {
      if (U + 1 < N.length) {
        const q = U + 1;
        ne(q), Y(null), Z(null);
        let w = We.filter((F) => h === "All" || F.chapter === h);
        se(N[q], w);
      } else K(true);
    }, 1500);
  };
  if (!o) return n.jsxs("div", { className: "w-full bg-[#FFF0F5] p-8 rounded-3xl border-4 border-[#FF69B4] text-center relative max-w-2xl mx-auto shadow-2xl", children: [n.jsx("div", { className: "absolute top-3 left-3 text-3xl", children: "\u{1F9E9}" }), n.jsx("div", { className: "absolute top-3 right-3 text-3xl", children: "\u{1F50D}" }), n.jsx("h2", { className: "text-3xl font-black text-[#FF1493] mb-3 flex items-center justify-center gap-2", children: n.jsx("span", { children: "Emoji Detective \u{1F50D} \u8868\u60C5\u5075\u63A2" }) }), n.jsx("p", { className: "text-[#FF69B4] font-bold text-sm mb-6 bg-white py-2 px-4 rounded-full border border-[#FFF0F5] inline-block shadow-sm", children: "\u770B\u82F1\u6587\u55AE\u8A5E\uFF0C\u627E\u51FA\u5C6C\u65BC\u5B83\u7684 Emoji \u5427\uFF01\u6BCF\u500B\u8868\u60C5\u4E0B\u65B9\u6703\u63D0\u4F9B\u4E2D\u6587\u610F\u601D\u5F15\u5C0E\u3002\u{1F338}" }), n.jsxs("div", { className: "bg-white p-6 rounded-2xl border-3 border-[#FFB6C1] mb-6 shadow-md", children: [n.jsx("label", { className: "block text-[#FF1493] font-black text-base mb-3", children: "\u{1F380} \u8ACB\u9078\u64C7\u8981\u5927\u986F\u8EAB\u624B\u7684\u55AE\u8A5E\u7BC4\u570D\uFF1A" }), n.jsx("div", { className: "flex flex-wrap justify-center gap-2", children: oe.map((z) => n.jsx("button", { onClick: () => d(z), className: `px-4 py-2.5 rounded-full font-black text-xs md:text-sm border-2 transition-all duration-150 cursor-pointer ${h === z ? "bg-[#FF1493] border-[#FF69B4] text-white scale-105 shadow-md" : "bg-[#FFF5F7] hover:bg-[#FFF0F5] border-[#FFB6C1] text-[#FF1493]"}`, children: z === "All" ? "\u{1F31F} \u5168\u90E8\u55AE\u8A5E" : z }, z)) })] }), n.jsxs("div", { className: "flex justify-center gap-4", children: [n.jsx("button", { onClick: f, className: "px-6 py-3 bg-slate-400 border-b-4 border-slate-600 font-bold text-white rounded-full transition hover:bg-slate-500 flex items-center gap-2 cursor-pointer", children: "\u8FD4\u56DE" }), n.jsx("button", { onClick: () => H(h), className: "px-8 py-3 bg-[#FF1493] border-b-4 border-[#FF69B4] hover:bg-[#FF69B4] font-black text-white text-lg rounded-full transition-all duration-150 flex items-center gap-2 cursor-pointer shadow-md", children: n.jsx("span", { children: "\u{1F680} \u958B\u59CB\u904A\u6232 \u{1F380}" }) })] })] });
  if (X) return n.jsxs("div", { className: "w-full bg-white p-8 rounded-3xl border-4 border-pink-300 text-center max-w-xl mx-auto shadow-xl relative overflow-hidden", children: [n.jsx("div", { className: "absolute -top-10 -right-10 w-24 h-24 bg-pink-100 rounded-full opacity-50" }), n.jsx("div", { className: "absolute -bottom-10 -left-10 w-24 h-24 bg-pink-100 rounded-full opacity-50" }), n.jsx(Bl, { className: "w-20 h-20 text-yellow-400 fill-yellow-200 mx-auto mb-4 animate-bounce" }), n.jsx("h2", { className: "text-3xl font-black text-pink-600 mb-2", children: "\u{1F389} \u5075\u63A2\u4EFB\u52D9\u5B8C\u6210\uFF01 \u{1F389}" }), n.jsx("p", { className: "text-slate-600 font-medium mb-6", children: "\u4F60\u627E\u5230\u4E86\u597D\u591A\u8EB2\u85CF\u7684\u55AE\u8A5E\u8868\u60C5\uFF01\u771F\u662F\u592A\u53B2\u5BB3\u4E86\uFF01\u{1F496}" }), n.jsxs("div", { className: "bg-pink-50 py-4 px-6 rounded-2xl border-2 border-pink-200 inline-block mb-6 shadow-inner", children: [n.jsx("span", { className: "text-slate-500 text-xs font-bold block mb-1", children: "FINAL SCORE \u{1F3C6}" }), n.jsxs("span", { className: "text-3xl font-black text-pink-600", children: [L, " / ", N.length, " \u5206"] })] }), n.jsxs("div", { className: "flex justify-center gap-3", children: [n.jsxs("button", { onClick: () => T(false), className: "px-6 py-2.5 bg-pink-400 border-b-4 border-pink-600 text-white font-bold rounded-full hover:bg-pink-500 transition cursor-pointer flex items-center gap-1.5", children: [n.jsx(jt, { className: "w-4 h-4" }), n.jsx("span", { children: "\u518D\u73A9\u4E00\u6B21" })] }), n.jsx("button", { onClick: f, className: "px-6 py-2.5 bg-slate-400 border-b-4 border-slate-600 text-white font-bold rounded-full hover:bg-slate-500 transition cursor-pointer", children: "\u{1F3E0} \u8FD4\u56DE\u9078\u55AE" })] })] });
  const G = N[U];
  return n.jsxs("div", { className: "w-full max-w-3xl mx-auto bg-white p-6 rounded-3xl border-4 border-[#FFB6C1] shadow-2xl relative", children: [n.jsxs("div", { className: "flex justify-between items-center mb-6", children: [n.jsxs("button", { onClick: () => T(false), className: "px-3 py-1.5 bg-white border-2 border-[#FFB6C1] rounded-full text-xs font-black text-[#FF1493] hover:bg-[#FFF0F5] transition cursor-pointer flex items-center gap-1", children: [n.jsx(Lt, { className: "w-3.5 h-3.5" }), n.jsx("span", { children: "\u91CD\u65B0\u9078\u64C7" })] }), n.jsxs("div", { className: "bg-[#FFF0F5] border-2 border-[#FFB6C1] px-4 py-1.5 rounded-full text-xs font-black text-[#FF1493] flex items-center gap-1 shadow-sm", children: [n.jsx(Es, { className: "w-3.5 h-3.5 fill-[#FF69B4] text-[#FF1493]" }), n.jsxs("span", { children: ["\u984C\u76EE: ", U + 1, " / ", N.length] })] }), n.jsxs("div", { className: "bg-emerald-100 border-2 border-emerald-300 px-4 py-1.5 rounded-full text-xs font-black text-emerald-700 shadow-sm", children: ["\u5F97\u5206: ", L] })] }), n.jsxs("div", { className: "bg-[#FFF5F7] p-6 rounded-2xl border-3 border-[#FFB6C1] shadow-inner text-center mb-6 relative overflow-hidden", children: [n.jsx("div", { className: "absolute top-2 left-2 text-pink-200 text-4xl select-none opacity-40", children: "\u{1F4AC}" }), n.jsx("div", { className: "absolute bottom-2 right-2 text-pink-200 text-4xl select-none opacity-40", children: "\u{1F575}\uFE0F\u200D\u2640\uFE0F" }), n.jsx("p", { className: "text-xs font-extrabold text-[#FF69B4] tracking-wider uppercase mb-1", children: "FIND THE CORRECT EMOJI FOR \u{1F50D}" }), n.jsx("h3", { className: "text-4xl font-black text-slate-800 tracking-tight uppercase select-all", children: G == null ? void 0 : G.english }), n.jsx("p", { className: "text-xs text-[#FF69B4] mt-2", children: "\u63D0\u793A\uFF1A\u770B\u8868\u60C5\u8207\u4E0B\u9762\u7684\u4E2D\u6587\u5C0D\u61C9 \u{1F4E3}" })] }), n.jsx("div", { className: "grid grid-cols-2 gap-4", children: ee.map((z) => {
    const ie = b === z.id, q = z.id === G.id;
    let w = "bg-white border-3 border-[#FFB6C1] hover:border-[#FF69B4] hover:bg-[#FFF5F7]";
    return b !== null && (ie ? w = O ? "bg-emerald-50 border-3 border-emerald-400 text-emerald-800 scale-95" : "bg-rose-50 border-3 border-rose-400 text-rose-800 scale-95" : q ? w = "bg-emerald-50 border-3 border-emerald-400 text-emerald-800 animate-pulse" : w = "bg-slate-55 border-3 border-slate-100 text-slate-400 opacity-60"), n.jsxs("button", { onClick: () => J(z), disabled: b !== null, className: `p-5 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-200 shadow-md min-h-[140px] relative cursor-pointer ${w}`, children: [n.jsx("span", { className: "text-5xl md:text-6xl mb-2.5 block transform transition group-hover:scale-110", children: z.emoji }), n.jsx("span", { className: "text-xs md:text-sm font-black text-[#FF1493] block bg-[#FFF0F5] px-3.5 py-1.5 rounded-full border border-[#FFB6C1] shadow-sm", children: z.chinese })] }, z.id);
  }) }), n.jsx("div", { className: "mt-4 h-12 flex items-center justify-center", children: b !== null && n.jsx("div", { className: `text-base font-black px-6 py-1.5 rounded-full border-2 shadow-md ${O ? "bg-emerald-100 border-emerald-300 text-emerald-700 animate-bounce" : "bg-rose-100 border-rose-300 text-rose-700"}`, children: O ? "\u2728 \u592A\u68D2\u4E86\uFF01\u7B54\u5C0D\u56C9\uFF01 \u{1F496} \u{1F380}" : "\u{1F4A1} \u54CE\u5440\uFF01\u5DEE\u4E00\u9EDE\u9EDE\uFF0C\u518D\u63A5\u518D\u53B2\uFF01 \u{1F31F}" }) })] });
}
function ig({ onBack: f }) {
  const [h, d] = y.useState("All"), [o, T] = y.useState(false), [N, B] = y.useState([]), [U, ne] = y.useState([]), [ee, D] = y.useState([]), [b, Y] = y.useState([]), [O, Z] = y.useState(null), [L, I] = y.useState(null), [X, K] = y.useState([]), [oe, H] = y.useState(0), [se, J] = y.useState(0), [G, z] = y.useState(0), [ie, q] = y.useState("playing"), w = ol, F = (W) => {
    const A = [...Nl(W)].sort(() => Math.random() - 0.5);
    if (A.length === 0) return;
    B(A), H(0);
    const C = Math.min(Math.ceil(A.length / 5), 10);
    J(C), z(0), q("playing"), T(true), P(0, A);
  }, P = (W, S) => {
    const A = W * 5;
    let C = S.slice(A, A + 5);
    if (C.length < 5 && A > 0) {
      const ae = 5 - C.length, _e = S.filter((Re) => !C.some((x) => x.id === Re.id));
      C = [...C, ..._e.slice(0, ae)];
    }
    if (C.length === 0) {
      q("game_over");
      return;
    }
    ne(C), K([]), Z(null), I(null);
    const E = C.map((ae) => ({ id: `${ae.id}_eng`, wordId: ae.id, text: ae.english, type: "english", emoji: ae.emoji })).sort(() => Math.random() - 0.5), $ = C.map((ae) => ({ id: `${ae.id}_ch`, wordId: ae.id, text: ae.chinese, type: "chinese" })).sort(() => Math.random() - 0.5);
    D(E), Y($);
  };
  y.useEffect(() => {
    if (O && L) if (O.wordId === L.wordId) {
      const W = O.wordId;
      ut(), K((S) => [...S, W]), z((S) => S + 10), Z(null), I(null);
    } else {
      lt();
      const W = O, S = L;
      setTimeout(() => {
        Z((A) => (A == null ? void 0 : A.id) === W.id ? null : A), I((A) => (A == null ? void 0 : A.id) === S.id ? null : A);
      }, 800);
    }
  }, [O, L]), y.useEffect(() => {
    U.length > 0 && X.length === U.length && setTimeout(() => {
      const W = oe + 1;
      H(W), W < se && W * 5 < N.length ? P(W, N) : q("game_over");
    }, 1e3);
  }, [X, U]);
  const ue = (W) => {
    X.includes(W.wordId) || (W.type === "english" ? (O == null ? void 0 : O.id) === W.id ? Z(null) : Z(W) : (L == null ? void 0 : L.id) === W.id ? I(null) : I(W));
  };
  return o ? ie === "game_over" ? n.jsxs("div", { className: "w-full bg-white p-8 rounded-3xl border-4 border-pink-300 text-center max-w-xl mx-auto shadow-xl relative overflow-hidden", children: [n.jsx("div", { className: "absolute -top-10 -right-10 w-24 h-24 bg-pink-100 rounded-full opacity-50" }), n.jsx("div", { className: "absolute -bottom-10 -left-10 w-24 h-24 bg-pink-100 rounded-full opacity-50" }), n.jsx(Bl, { className: "w-20 h-20 text-yellow-500 fill-yellow-200 mx-auto mb-4 animate-bounce" }), n.jsx("h2", { className: "text-3xl font-black text-pink-600 mb-2", children: "\u{1F389} \u592A\u68D2\u4E86\uFF01\u914D\u5C0D\u738B\uFF01 \u{1F389}" }), n.jsx("p", { className: "text-slate-600 font-medium mb-6", children: "\u4F60\u6210\u529F\u5B8C\u6210\u4E86\u6240\u6709\u7684\u914D\u5C0D\uFF01\u5927\u8166\u904B\u4F5C\u5F97\u592A\u9748\u6D3B\u4E86\uFF01\u{1F9E0}\u{1F4A1}" }), n.jsxs("div", { className: "bg-pink-50 py-4 px-6 rounded-2xl border-2 border-pink-200 inline-block mb-6 shadow-inner", children: [n.jsx("span", { className: "text-slate-500 text-xs font-bold block mb-1", children: "SCORE \u{1F3C6}" }), n.jsxs("span", { className: "text-3xl font-black text-pink-600", children: ["\u7E3D\u5F97\u5206: ", G, " \u5206"] })] }), n.jsxs("div", { className: "flex justify-center gap-3", children: [n.jsxs("button", { onClick: () => T(false), className: "px-6 py-2.5 bg-pink-400 border-b-4 border-pink-600 text-white font-bold rounded-full hover:bg-pink-500 transition cursor-pointer flex items-center gap-1.5", children: [n.jsx(jt, { className: "w-4 h-4" }), n.jsx("span", { children: "\u518D\u73A9\u4E00\u6B21" })] }), n.jsx("button", { onClick: f, className: "px-6 py-2.5 bg-slate-400 border-b-4 border-slate-600 text-white font-bold rounded-full hover:bg-slate-500 transition cursor-pointer", children: "\u{1F3E0} \u8FD4\u56DE\u9078\u55AE" })] })] }) : n.jsxs("div", { className: "w-full max-w-3xl mx-auto bg-pink-50/50 p-6 rounded-3xl border-4 border-pink-200 shadow-lg relative", children: [n.jsxs("div", { className: "flex justify-between items-center mb-6", children: [n.jsxs("button", { onClick: () => T(false), className: "px-3 py-1.5 bg-white border-2 border-pink-200 rounded-full text-xs font-bold text-pink-600 hover:bg-pink-100 transition cursor-pointer flex items-center gap-1", children: [n.jsx(Lt, { className: "w-3.5 h-3.5" }), n.jsx("span", { children: "\u91CD\u65B0\u9078\u64C7" })] }), n.jsxs("div", { className: "bg-pink-100 border border-pink-200 px-4 py-1.5 rounded-full text-xs font-black text-pink-600 flex items-center gap-1", children: [n.jsx(Es, { className: "w-3.5 h-3.5 fill-pink-400 text-pink-500" }), n.jsxs("span", { children: ["\u56DE\u5408: ", oe + 1, " / ", se, " \u7D44"] })] }), n.jsxs("div", { className: "bg-emerald-100 border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-black text-emerald-700", children: ["\u7E3D\u5206: ", G] })] }), n.jsx("div", { className: "text-center mb-6 bg-white/40 p-2.5 rounded-xl border border-pink-100", children: n.jsx("p", { className: "text-pink-600 font-extrabold text-sm", children: "\u{1F4A1} \u8ACB\u9EDE\u9EDE\u770B\u5DE6\u908A\u4E00\u500B\u82F1\u6587\uFF0C\u518D\u9EDE\u9EDE\u770B\u53F3\u908A\u5C0D\u61C9\u7684\u4E2D\u6587\u610F\u601D\uFF01" }) }), n.jsxs("div", { className: "grid grid-cols-2 gap-8 md:gap-12 min-h-[350px]", children: [n.jsxs("div", { className: "flex flex-col gap-3.5", children: [n.jsx("h4", { className: "text-center text-sm font-black text-rose-500 tracking-wider bg-rose-100/50 py-1 rounded-full border border-rose-200 mb-1", children: "\u{1F1EC}\u{1F1E7} ENGLISH WORDS" }), ee.map((W) => {
    const S = X.includes(W.wordId), A = (O == null ? void 0 : O.id) === W.id;
    let C = "bg-white border-3 border-pink-100 text-slate-800 hover:bg-pink-50/50 cursor-pointer";
    return S ? C = "bg-emerald-100 border-3 border-emerald-300 text-emerald-700 opacity-50 cursor-not-allowed transform scale-95" : A && (C = L !== null && (O == null ? void 0 : O.id) === W.id && L.wordId !== W.wordId ? "bg-rose-100 border-3 border-rose-400 text-rose-800 shake-animation" : "bg-pink-400 border-3 border-pink-600 text-white font-extrabold shadow-md scale-105"), n.jsxs("button", { onClick: () => ue(W), disabled: S, className: `py-4 px-4 rounded-2xl text-center flex items-center justify-center gap-2 font-bold text-sm md:text-base transition-all duration-150 select-none ${C}`, children: [n.jsx("span", { className: "text-xl", children: W.emoji }), n.jsx("span", { className: "break-words w-full truncate", children: W.text }), S && n.jsx("span", { className: "text-sm", children: "\u{1F496}" })] }, W.id);
  })] }), n.jsxs("div", { className: "flex flex-col gap-3.5", children: [n.jsx("h4", { className: "text-center text-sm font-black text-sky-500 tracking-wider bg-sky-100/50 py-1 rounded-full border border-sky-200 mb-1", children: "\u{1F1E8}\u{1F1F3} \u4E2D\u6587\u91CB\u7FA9" }), b.map((W) => {
    const S = X.includes(W.wordId), A = (L == null ? void 0 : L.id) === W.id;
    let C = "bg-white border-3 border-pink-100 text-slate-800 hover:bg-pink-50/50 cursor-pointer";
    return S ? C = "bg-emerald-100 border-3 border-emerald-300 text-emerald-700 opacity-50 cursor-not-allowed transform scale-95" : A && (C = O !== null && (L == null ? void 0 : L.id) === W.id && O.wordId !== W.wordId ? "bg-rose-100 border-3 border-rose-400 text-rose-800 shake-animation" : "bg-sky-400 border-3 border-sky-600 text-white font-extrabold shadow-md scale-105"), n.jsxs("button", { onClick: () => ue(W), disabled: S, className: `py-4 px-4 rounded-2xl text-center flex items-center justify-center gap-2 font-bold text-sm md:text-base transition-all duration-150 select-none ${C}`, children: [n.jsx("span", { className: "break-words w-full truncate", children: W.text }), S && n.jsx(Gx, { className: "w-4 h-4 text-emerald-500 shrink-0" })] }, W.id);
  })] })] }), n.jsx("div", { className: "mt-6 flex justify-center text-center", children: X.length === 5 && n.jsx("span", { className: "text-base font-black px-6 py-2 rounded-full bg-emerald-100 border-2 border-emerald-300 text-emerald-700 animate-pulse", children: "\u2728 \u5168\u90E8\u7B54\u5C0D\u5566\uFF01\u6B63\u5728\u70BA\u4F60\u8F09\u5165\u4E0B\u4E00\u7D44 \u{1F380} \u{1F3C3}\u200D\u2642\uFE0F" }) })] }) : n.jsxs("div", { className: "w-full bg-[#FFF0F5] p-8 rounded-3xl border-4 border-[#FF69B4] text-center relative max-w-2xl mx-auto shadow-2xl", children: [n.jsx("div", { className: "absolute top-3 left-3 text-3xl", children: "\u{1F380}" }), n.jsx("div", { className: "absolute top-3 right-3 text-3xl", children: "\u{1F338}" }), n.jsx("h2", { className: "text-3xl font-black text-[#FF1493] mb-3 flex items-center justify-center gap-2", children: n.jsx("span", { children: "Match Match \u4E2D\u82F1\u914D\u5C0D\u984C \u{1F91D}" }) }), n.jsx("p", { className: "text-[#FF69B4] font-bold text-sm mb-6 bg-white py-2 px-4 rounded-full border border-[#FFF0F5] inline-block shadow-sm", children: "\u5C07\u82F1\u6587\u5B57\u8207\u76F8\u61C9\u7684\u4E2D\u6587\u610F\u601D\u9023\u5728\u4E00\u8D77\uFF01\u6BCF\u5B8C\u6210\u4E00\u7D445\u500B\uFF0C\u5373\u53EF\u9032\u5165\u4E0B\u4E00\u7D44\uFF01" }), n.jsxs("div", { className: "bg-white p-6 rounded-2xl border-3 border-[#FFB6C1] mb-6 shadow-md", children: [n.jsx("label", { className: "block text-[#FF1493] font-black text-base mb-3", children: "\u{1F380} \u8ACB\u9078\u64C7\u8981\u914D\u5C0D\u7684\u55AE\u8A5E\u7BC4\u570D\uFF1A" }), n.jsx("div", { className: "flex flex-wrap justify-center gap-2", children: w.map((W) => n.jsx("button", { onClick: () => d(W), className: `px-4 py-2.5 rounded-full font-black text-xs md:text-sm border-2 transition-all duration-150 cursor-pointer ${h === W ? "bg-[#FF1493] border-[#FF69B4] text-white scale-105 shadow-md" : "bg-[#FFF5F7] hover:bg-[#FFF0F5] border-[#FFB6C1] text-[#FF1493]"}`, children: W === "All" ? "\u{1F31F} \u5168\u90E8\u55AE\u8A5E" : W }, W)) })] }), n.jsxs("div", { className: "flex justify-center gap-4", children: [n.jsx("button", { onClick: f, className: "px-6 py-3 bg-slate-400 border-b-4 border-slate-600 font-bold text-white rounded-full transition hover:bg-slate-500 flex items-center gap-2 cursor-pointer", children: "\u8FD4\u56DE" }), n.jsx("button", { onClick: () => F(h), className: "px-8 py-3 bg-[#FF1493] border-b-4 border-[#FF69B4] hover:bg-[#FF69B4] font-black text-white text-lg rounded-full transition-all duration-150 flex items-center gap-2 cursor-pointer shadow-md", children: n.jsx("span", { children: "\u{1F680} \u9032\u5165\u8003\u9A57 \u{1F380}" }) })] })] });
}
function Ox({ onBack: f, isCompetitionMode: h = false }) {
  const [d, o] = y.useState("All"), [T, N] = y.useState(false), [B, U] = y.useState([]), [ne, ee] = y.useState(0), [D, b] = y.useState(""), [Y, O] = y.useState([]), [Z, L] = y.useState([]), [I, X] = y.useState(0), [K, oe] = y.useState(false), [H, se] = y.useState(null), J = ol, G = (S) => {
    const C = [...Nl(S)].sort(() => Math.random() - 0.5);
    if (C.length === 0) return;
    const E = h ? 3 : C.length, $ = C.slice(0, E);
    U($), X(0), ee(0), oe(false), N(true), z($[0]);
  }, z = (S) => {
    const A = S.english.toLowerCase();
    b(A), se(null);
    const C = [];
    let E = 0;
    for (let _e = 0; _e < A.length; _e++) {
      const Re = A[_e];
      Re !== " " && C.push({ index: E++, char: Re, isUsed: false });
    }
    const $ = [...C].sort(() => Math.random() - 0.5);
    O($);
    const ae = [];
    for (let _e = 0; _e < A.length; _e++) A[_e], ae.push(null);
    L(ae);
  }, ie = (S) => {
    if (H !== null) return;
    const A = D.split(""), C = Z.findIndex((E, $) => A[$] !== " " && E === null);
    if (C !== -1) {
      const E = [...Z];
      E[C] = S, L(E), O(($) => $.map((ae) => ae.index === S.index ? { ...ae, isUsed: true } : ae)), w(E);
    }
  }, q = (S) => {
    if (H !== null) return;
    const A = Z[S];
    if (A === null) return;
    O((E) => E.map(($) => $.index === A.index ? { ...$, isUsed: false } : $));
    const C = [...Z];
    C[S] = null, L(C);
  }, w = (S) => {
    const A = D.split("");
    if (!S.every(($, ae) => A[ae] === " " ? true : $ !== null)) return;
    S.map(($, ae) => A[ae] === " " ? " " : $ ? $.char : "").join("") === D ? (se(true), X(($) => $ + 1), ut(), setTimeout(() => {
      F();
    }, 1500)) : (se(false), lt(), setTimeout(() => {
      se(null);
    }, 1500));
  }, F = () => {
    if (ne + 1 < B.length) {
      const S = ne + 1;
      ee(S), z(B[S]);
    } else oe(true);
  }, P = D.split(" ");
  if (!T) return n.jsxs("div", { className: "w-full bg-pink-50/50 p-6 rounded-3xl border-4 border-pink-200 text-center relative max-w-2xl mx-auto shadow-md", children: [n.jsx("div", { className: "absolute top-2 left-2 text-3xl", children: "\u{1F520}" }), n.jsx("div", { className: "absolute top-2 right-2 text-3xl", children: "\u{1F41D}" }), n.jsx("h2", { className: "text-3xl font-extrabold text-pink-600 mb-2 flex items-center justify-center gap-2", children: n.jsx("span", { children: h ? "\u{1F3C6} Spelling Bee Competition (3\u984C\u7D44)" : "\u{1F41D} Spelling Bee \u62FC\u5B57\u5927\u8003\u9A57" }) }), n.jsx("p", { className: "text-pink-500 font-medium text-sm mb-6", children: "\u6839\u64DA\u4E2D\u6587\u984C\u76EE\u8207 Emoji\uFF0C\u9EDE\u64CA\u53EF\u611B\u7684\u5B57\u6BCD\u62FC\u51FA\u82F1\u6587\u55AE\u8A5E\uFF01\u9EDE\u932F\u5B57\u6BCD\u9EDE\u64CA\u4E0A\u65B9\u683C\u5B50\u4FBF\u80FD\u53D6\u6D88\u5594\uFF01\u{1F485}" }), n.jsxs("div", { className: "bg-white/80 p-6 rounded-2xl border-2 border-pink-100 mb-6 shadow-sm", children: [n.jsx("label", { className: "block text-pink-700 font-extrabold text-base mb-3", children: "\u{1F380} \u8ACB\u9078\u64C7\u62FC\u5B57\u5927\u6311\u6230\u7BC4\u570D\uFF1A" }), n.jsx("div", { className: "flex flex-wrap justify-center gap-2", children: J.map((S) => n.jsx("button", { onClick: () => o(S), className: `px-4 py-2.5 rounded-full font-bold text-sm border-2 transition-all duration-150 cursor-pointer ${d === S ? "bg-pink-400 border-pink-500 text-white scale-105 shadow-md" : "bg-pink-50 hover:bg-pink-100 border-pink-200 text-pink-700"}`, children: S === "All" ? "\u{1F31F} \u5168\u90E8\u55AE\u8A5E" : S }, S)) })] }), n.jsxs("div", { className: "flex justify-center gap-4", children: [n.jsx("button", { onClick: f, className: "px-6 py-3 bg-slate-400 border-b-4 border-slate-600 font-bold text-white rounded-full transition hover:bg-slate-500 flex items-center gap-2 cursor-pointer", children: "\u8FD4\u56DE" }), n.jsxs("button", { onClick: () => G(d), className: "px-8 py-3 bg-pink-500 border-b-4 border-pink-700 hover:bg-pink-600 font-extrabold text-white text-lg rounded-full transition-all duration-150 flex items-center gap-2 cursor-pointer shadow-md", children: [n.jsx(Mp, { className: "w-5 h-5 fill-white text-white" }), n.jsx("span", { children: "\u958B\u59CB\u62FC\u5B57 \u{1F380}" })] })] })] });
  if (K) return n.jsxs("div", { className: "w-full bg-white p-8 rounded-3xl border-4 border-pink-300 text-center max-w-xl mx-auto shadow-xl relative overflow-hidden", children: [n.jsx(Bl, { className: "w-20 h-20 text-yellow-400 fill-yellow-100 mx-auto mb-4 animate-bounce" }), n.jsx("h2", { className: "text-3xl font-black text-pink-600 mb-2", children: "\u{1F389} \u606D\u559C\u62FC\u5B57\u738B\u8A95\u751F\uFF01 \u{1F389}" }), n.jsx("p", { className: "text-slate-600 font-medium mb-6", children: "\u4F60\u7684\u62FC\u5B57\u901F\u5EA6\u548C\u6E96\u78BA\u5EA6\u7C21\u76F4\u662F\u5B87\u5B99\u7121\u6575\u68D2\uFF01\u{1F680}" }), n.jsxs("div", { className: "bg-pink-50 py-4 px-6 rounded-2xl border-2 border-pink-200 inline-block mb-6 shadow-inner", children: [n.jsx("span", { className: "text-slate-500 text-xs font-bold block mb-1", children: "ACCURACY \u{1F3C6}" }), n.jsxs("span", { className: "text-3xl font-black text-pink-600", children: [I, " / ", B.length, " \u984C\u5168\u5C0D"] })] }), n.jsxs("div", { className: "flex justify-center gap-3", children: [n.jsxs("button", { onClick: () => N(false), className: "px-6 py-2.5 bg-pink-400 border-b-4 border-pink-600 text-white font-bold rounded-full hover:bg-pink-500 transition cursor-pointer flex items-center gap-1.5", children: [n.jsx(jt, { className: "w-4 h-4" }), n.jsx("span", { children: "\u518D\u73A9\u4E00\u6B21" })] }), n.jsx("button", { onClick: f, className: "px-6 py-2.5 bg-slate-400 border-b-4 border-slate-600 text-white font-bold rounded-full hover:bg-slate-500 transition cursor-pointer", children: "\u{1F3E0} \u8FD4\u56DE\u9078\u55AE" })] })] });
  const ue = B[ne];
  let W = 0;
  return n.jsxs("div", { className: "w-full max-w-3xl mx-auto bg-pink-50/50 p-6 rounded-3xl border-4 border-pink-200 shadow-lg relative", children: [n.jsxs("div", { className: "flex justify-between items-center mb-6", children: [n.jsxs("button", { onClick: () => N(false), className: "px-3 py-1.5 bg-white border-2 border-pink-200 rounded-full text-xs font-bold text-pink-600 hover:bg-pink-100 transition cursor-pointer flex items-center gap-1", children: [n.jsx(Lt, { className: "w-3.5 h-3.5" }), n.jsx("span", { children: "\u91CD\u65B0\u9078\u64C7" })] }), n.jsxs("div", { className: "bg-pink-100 border border-pink-200 px-4 py-1.5 rounded-full text-xs font-black text-pink-600 flex items-center gap-1", children: [n.jsx(Es, { className: "w-3.5 h-3.5 fill-pink-400 text-pink-500" }), n.jsxs("span", { children: ["\u55AE\u8A5E: ", ne + 1, " / ", B.length] })] }), n.jsxs("div", { className: "bg-emerald-100 border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-black text-emerald-700", children: ["\u7B54\u5C0D\u984C\u6578: ", I] })] }), n.jsxs("div", { className: "bg-white p-5 rounded-2xl border-3 border-pink-100 text-center shadow-sm mb-6 flex flex-col items-center justify-center relative", children: [n.jsx("span", { className: "text-5xl mb-2 animate-pulse", children: ue == null ? void 0 : ue.emoji }), n.jsx("h3", { className: "text-2xl font-black text-slate-800 bg-pink-50 px-4 py-1.5 rounded-full border border-pink-100", children: ue == null ? void 0 : ue.chinese }), n.jsx("p", { className: "text-xs text-pink-400 mt-2 font-medium", children: "\u2728 \u8ACB\u4F7F\u7528\u4E0B\u65B9\u7684\u5B57\u6BCD\u62FC\u51FA\u5C0D\u61C9\u7684\u82F1\u6587\uFF01 \u2728" })] }), n.jsx("div", { className: "bg-white/70 p-6 rounded-2xl border-2 border-pink-200 shadow-inner flex flex-wrap items-center justify-center gap-y-6 gap-x-12 mb-6", children: P.map((S, A) => {
    const C = [];
    for (let E = 0; E < S.length; E++) {
      const $ = W, ae = Z[$];
      C.push(n.jsxs("div", { onClick: () => ae !== null && q($), className: `w-11 h-11 md:w-12 md:h-12 border-3 rounded-xl flex items-center justify-center font-extrabold text-lg select-none cursor-pointer transition-all duration-150 relative ${ae !== null ? "bg-pink-400 border-pink-500 text-white scale-105 shadow-md active:scale-95" : "bg-pink-50/50 border-pink-200 border-dashed text-pink-300"} ${H === true ? "bg-emerald-500 border-emerald-600 text-white animate-bounce" : ""} ${H === false ? "bg-rose-500 border-rose-600 text-white animate-shake" : ""}`, children: [ae ? ae.char : "", ae && n.jsx("span", { className: "absolute -top-1.5 -right-1 bg-pink-600 text-[8px] text-white p-0.5 rounded-full font-black leading-none scale-75 select-none", children: "\u2715" })] }, E)), W++;
    }
    return A < P.length - 1 && W++, n.jsxs("div", { className: "flex gap-1.5 items-center", children: [n.jsx("div", { className: "flex gap-1.5", children: C }), A < P.length - 1 && n.jsxs("div", { className: "flex flex-col items-center justify-center mx-1 text-pink-300 font-bold select-none text-center", children: [n.jsx("span", { className: "text-xl animate-bounce", children: "\u{1F590}\uFE0F" }), n.jsx("span", { className: "text-[9px] bg-pink-100 text-pink-500 px-1.5 py-0.5 rounded-full scale-90 border border-pink-200", children: "Finger Space" })] })] }, A);
  }) }), n.jsx("div", { className: "flex flex-wrap justify-center gap-3 select-none mb-6", children: Y.map((S) => n.jsx("button", { onClick: () => ie(S), disabled: S.isUsed || H !== null, className: `w-12 h-12 md:w-14 md:h-14 font-black rounded-2xl flex items-center justify-center text-xl transition-all duration-150 transform hover:-translate-y-1 active:translate-y-0 border-3 shadow-md focus:outline-none cursor-pointer ${S.isUsed ? "opacity-0 scale-50 pointer-events-none" : "bg-white border-pink-200 hover:border-pink-400 text-pink-600 active:bg-pink-100 active:scale-95 hover:shadow-lg"}`, children: S.char }, S.index)) }), n.jsx("p", { className: "text-center text-xs text-pink-400 font-medium", children: "\u{1F4A1} \u9EDE\u932F\u4E86\u4E0A\u9762\u7684\u7C89\u8272\u5B57\u6BCD\u53EF\u4EE5\u9000\u56DE\u53BB\u5594\uFF01\u8A66\u8A66\u770B\uFF01" })] });
}
const zx = ["bg-pink-200/90 text-pink-700 font-black scale-105 border border-pink-400/50", "bg-sky-200/90 text-sky-700 font-black scale-105 border border-sky-400/50", "bg-amber-200/90 text-amber-700 font-black scale-105 border border-amber-400/50", "bg-emerald-200/90 text-emerald-700 font-black scale-105 border border-emerald-400/50", "bg-purple-200/90 text-purple-700 font-black scale-105 border border-purple-400/50", "bg-rose-200/90 text-rose-700 font-black scale-105 border border-rose-400/50"];
function rg({ onBack: f }) {
  const [h, d] = y.useState("All"), [o, T] = y.useState(false), [N, B] = y.useState([]), [U, ne] = y.useState([]), [ee, D] = y.useState(10), [b, Y] = y.useState(null), [O, Z] = y.useState(null), [L, I] = y.useState(0), [X, K] = y.useState(false), oe = ol, H = (z) => {
    const w = [...Nl(z)].sort(() => Math.random() - 0.5).filter((S) => S.english.replace(/ /g, "").length <= 12).slice(0, 6);
    if (w.length === 0) return;
    const F = 10;
    D(F);
    const P = Array(F).fill(null).map((S, A) => Array(F).fill(null).map((C, E) => ({ row: A, col: E, char: "", wordIds: [], isMatched: false }))), ue = [], W = [[0, 1], [1, 0], [1, 1]];
    w.forEach((S, A) => {
      const C = S.english.toLowerCase().replace(/ /g, "");
      let E = false, $ = 0;
      for (; !E && $ < 100; ) {
        $++;
        const ae = W[Math.floor(Math.random() * W.length)], _e = Math.floor(Math.random() * F), Re = Math.floor(Math.random() * F), x = _e + ae[0] * (C.length - 1), V = Re + ae[1] * (C.length - 1);
        if (x >= 0 && x < F && V >= 0 && V < F) {
          let re = true;
          const fe = [];
          for (let ve = 0; ve < C.length; ve++) {
            const we = _e + ae[0] * ve, ke = Re + ae[1] * ve, xe = P[we][ke].char;
            if (xe !== "" && xe !== C[ve]) {
              re = false;
              break;
            }
            fe.push({ r: we, c: ke });
          }
          re && (fe.forEach(({ r: ve, c: we }, ke) => {
            P[ve][we].char = C[ke], P[ve][we].wordIds.push(S.id);
          }), ue.push({ id: S.id, text: C, chinese: S.chinese, emoji: S.emoji, isFound: false, cells: fe, color: zx[A % zx.length] }), E = true);
        }
      }
    });
    for (let S = 0; S < F; S++) for (let A = 0; A < F; A++) if (P[S][A].char === "") {
      const C = String.fromCharCode(97 + Math.floor(Math.random() * 26));
      P[S][A].char = C;
    }
    ne(P), B(ue), I(0), K(false), T(true);
  }, se = (z) => {
    B((ie) => {
      const q = ie.findIndex((ue) => ue.id === z);
      if (q === -1 || ie[q].isFound) return ie;
      const w = ie[q];
      ne((ue) => {
        const W = [...ue];
        return w.cells.forEach(({ r: S, c: A }) => {
          W[S][A] = { ...W[S][A], isMatched: true, matchColor: w.color };
        }), W;
      }), ut();
      const F = [...ie];
      return F[q] = { ...w, isFound: true }, I((ue) => ue + 20), F.every((ue) => ue.isFound) && setTimeout(() => K(true), 1500), F;
    });
  }, J = (z, ie) => {
    if (b === null) Y({ r: z, c: ie }), Z({ r: z, c: ie });
    else {
      Math.min(b.r, z), Math.max(b.r, z), Math.min(b.c, ie), Math.max(b.c, ie);
      const q = N.find((w) => {
        if (w.isFound) return false;
        const F = w.cells, P = F[0], ue = F[F.length - 1], W = P.r === b.r && P.c === b.c && ue.r === z && ue.c === ie, S = ue.r === b.r && ue.c === b.c && P.r === z && P.c === ie;
        return W || S;
      });
      q ? se(q.id) : lt(), Y(null), Z(null);
    }
  }, G = (z) => {
    z.isFound || se(z.id);
  };
  return o ? X ? n.jsxs("div", { className: "w-full bg-white p-8 rounded-3xl border-4 border-pink-300 text-center max-w-xl mx-auto shadow-xl relative overflow-hidden", children: [n.jsx(Bl, { className: "w-20 h-20 text-yellow-500 fill-yellow-250 mx-auto mb-4 animate-bounce" }), n.jsx("h2", { className: "text-3xl font-black text-pink-600 mb-2", children: "\u{1F389} \u5C0B\u8A5E\u5929\u624D\u8A95\u751F\uFF01 \u{1F389}" }), n.jsx("p", { className: "text-slate-600 font-medium mb-6", children: "\u6240\u6709\u7684\u55AE\u8A5E\u90FD\u88AB\u4F60\u654F\u92B3\u7684\u76EE\u5149\u767C\u6398\u51FA\u4F86\u4E86\uFF01\u5075\u63A2\u52DB\u7AE0\u9812\u767C\u7D66\u4F60\uFF01\u{1F3C5}\u2728" }), n.jsxs("div", { className: "bg-pink-50 py-4 px-6 rounded-2xl border-2 border-pink-200 inline-block mb-6 shadow-inner", children: [n.jsx("span", { className: "text-slate-500 text-xs font-bold block mb-1", children: "SCORE \u{1F3C6}" }), n.jsxs("span", { className: "text-3xl font-black text-pink-600", children: ["\u7E3D\u7A4D\u5206: ", L, " \u5206"] })] }), n.jsxs("div", { className: "flex justify-center gap-3", children: [n.jsxs("button", { onClick: () => T(false), className: "px-6 py-2.5 bg-pink-400 border-b-4 border-pink-600 text-white font-bold rounded-full hover:bg-pink-500 transition cursor-pointer flex items-center gap-1.5", children: [n.jsx(jt, { className: "w-4 h-4" }), n.jsx("span", { children: "\u518D\u73A9\u4E00\u6B21" })] }), n.jsx("button", { onClick: f, className: "px-6 py-2.5 bg-slate-400 border-b-4 border-slate-600 text-white font-bold rounded-full hover:bg-slate-500 transition cursor-pointer", children: "\u{1F3E0} \u8FD4\u56DE\u9078\u55AE" })] })] }) : n.jsxs("div", { className: "w-full max-w-5xl mx-auto bg-pink-50/50 p-6 rounded-3xl border-4 border-pink-200 shadow-lg relative", children: [n.jsxs("div", { className: "flex justify-between items-center mb-6", children: [n.jsxs("button", { onClick: () => T(false), className: "px-3 py-1.5 bg-white border-2 border-pink-200 rounded-full text-xs font-bold text-pink-600 hover:bg-pink-100 transition cursor-pointer flex items-center gap-1", children: [n.jsx(Lt, { className: "w-3.5 h-3.5" }), n.jsx("span", { children: "\u91CD\u65B0\u9078\u64C7" })] }), n.jsxs("div", { className: "bg-pink-100 border border-pink-200 px-4 py-1.5 rounded-full text-xs font-black text-pink-600 flex items-center gap-1", children: [n.jsx(Zo, { className: "w-3.5 h-3.5 text-pink-500" }), n.jsx("span", { children: "\u55AE\u8A5E\u62FC\u5BEB\u5747\u70BA\u5C0F\u5BEB \u{1F4DA}" })] }), n.jsxs("div", { className: "bg-emerald-100 border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-black text-emerald-700", children: ["\u5F97\u5206: ", L] })] }), n.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch", children: [n.jsxs("div", { className: "md:col-span-8 bg-white p-4 justify-center items-center rounded-2xl border-3 border-pink-100 shadow-sm flex flex-col", children: [n.jsx("div", { className: "grid grid-cols-10 gap-1.5 w-full aspect-square max-w-[450px]", children: U.map((z, ie) => z.map((q, w) => {
    const F = b && b.r === ie && b.c === w;
    O && O.r === ie && O.c;
    let P = "bg-pink-50/20 text-slate-700 hover:bg-pink-50 cursor-pointer";
    return q.isMatched && q.matchColor ? P = q.matchColor : F && (P = "bg-pink-400 text-white font-extrabold scale-110 shadow-md"), n.jsx("button", { onClick: () => J(ie, w), onMouseEnter: () => b && Z({ r: ie, c: w }), className: `w-full h-full font-bold text-base md:text-lg rounded-xl border border-pink-100 flex items-center justify-center select-none transition-all duration-150 relative ${P}`, children: q.char }, `${ie}_${w}`);
  })) }), n.jsx("p", { className: "text-[11px] text-pink-400 font-bold mt-4", children: "\u{1F4A1} \u5148\u9EDE\u64CA\u55AE\u8A5E\u5728\u65B9\u683C\u4E2D\u8D77\u9EDE\u5B57\u6BCD\uFF0C\u518D\u9EDE\u64CA\u7D42\u9EDE\u5B57\u6BCD\uFF0C\u5373\u53EF\u6A19\u8A18\u627E\u51FA\u55AE\u8A5E\uFF01" })] }), n.jsxs("div", { className: "md:col-span-4 flex flex-col justify-between bg-pink-100/60 p-5 rounded-2xl border border-pink-200/80", children: [n.jsxs("div", { children: [n.jsx("h4", { className: "text-sm font-black text-pink-700 uppercase mb-3 flex items-center gap-1 bg-white px-3 py-1.5 rounded-full border border-pink-200 shadow-sm", children: n.jsxs("span", { children: ["\u{1F38F} \u5F85\u5C0B\u627E\u55AE\u8A5E\u6E05\u55AE (", N.filter((z) => !z.isFound).length, " \u672A\u627E)"] }) }), n.jsx("div", { className: "flex flex-col gap-2 max-h-[380px] overflow-y-auto pr-1", children: N.map((z) => n.jsxs("button", { onClick: () => G(z), className: `w-full py-2.5 px-3.5 rounded-2xl flex items-center justify-between font-bold text-xs md:text-sm text-left shadow-sm border-2 select-none transition-all duration-200 group cursor-pointer ${z.isFound ? "bg-emerald-100 border-emerald-300 text-emerald-700 line-through scale-95 opacity-80" : "bg-white border-pink-100 text-slate-800 hover:scale-102 hover:border-pink-300"}`, children: [n.jsxs("div", { className: "flex items-center gap-1.5 break-all", children: [n.jsx("span", { className: "text-lg", children: z.emoji }), n.jsxs("div", { children: [n.jsx("span", { className: "block font-black", children: z.text }), n.jsx("span", { className: "text-[10px] text-slate-500 font-medium ", children: z.chinese })] })] }), z.isFound ? n.jsx(Gx, { className: "w-4 h-4 text-emerald-500" }) : n.jsx("div", { className: "opacity-0 group-hover:opacity-100 transition-opacity bg-pink-50 text-pink-600 text-[9px] font-extrabold px-1.5 py-0.5 rounded-full border border-pink-200 shrink-0", children: "\u5E6B\u6211\u627E \u{1FA84}" })] }, z.id)) })] }), n.jsx("div", { className: "mt-4 bg-white/80 p-3 rounded-xl border border-pink-200", children: n.jsx("p", { className: "text-[10px] text-pink-600 font-semibold leading-relaxed", children: "\u2B50 \u5B78\u82F1\u6587\u63D0\u793A\uFF1A\u9EDE\u4E00\u4E0B\u53F3\u908A\u7684\u7DA0\u8272\u300C\u5E6B\u6211\u627E\u300D\u6216\u662F\u55AE\u8A5E\uFF0C\u5C0F\u4ED9\u5973\u5C31\u6703\u795E\u5947\u5730\u5728\u65B9\u683C\u5167\u76F4\u63A5\u5857\u4E0A\u5C08\u5C6C\u8272\u5F69\u63ED\u958B\u7B54\u6848\u54E6\uFF01" }) })] })] })] }) : n.jsxs("div", { className: "w-full bg-pink-50/50 p-6 rounded-3xl border-4 border-pink-200 text-center relative max-w-2xl mx-auto shadow-md", children: [n.jsx("div", { className: "absolute top-2 left-2 text-3xl", children: "\u{1F50D}" }), n.jsx("div", { className: "absolute top-2 right-2 text-3xl", children: "\u{1F380}" }), n.jsx("h2", { className: "text-3xl font-extrabold text-pink-600 mb-2 flex items-center justify-center gap-2", children: n.jsx("span", { children: "Word Search \u55AE\u8A5E\u641C\u5C0B\u5668 \u{1F50D}" }) }), n.jsx("p", { className: "text-pink-500 font-medium text-sm mb-6", children: "\u5B57\u6BCD\u5168\u90E8\u90FD\u662F\u53EF\u611B\u7684\u5C0F\u5BEB\uFF01\u627E\u51FA\u96B1\u85CF\u5728\u5B57\u6BCD\u65B9\u584A\u4E2D\u7684\u55AE\u8A5E\u3002\u5982\u679C\u5361\u4F4F\u4E86\uFF0C\u53EF\u4EE5\u9EDE\u53F3\u908A\u55AE\u8A5E\uFF0C\u5C0F\u5E6B\u624B\u6703\u76F4\u63A5\u5728\u4E0A\u65B9\u5E6B\u4F60\u627E\u51FA\u4F86\u5594\uFF01\u{1F4A1}\u{1F9DA}\u200D\u2640\uFE0F" }), n.jsxs("div", { className: "bg-white/80 p-6 rounded-2xl border-2 border-pink-100 mb-6 shadow-sm", children: [n.jsx("label", { className: "block text-pink-700 font-extrabold text-base mb-3", children: "\u{1F380} \u8ACB\u9078\u64C7\u8981\u641C\u5C0B\u7684\u55AE\u8A5E\u7BC4\u570D\uFF1A" }), n.jsx("div", { className: "flex flex-wrap justify-center gap-2", children: oe.map((z) => n.jsx("button", { onClick: () => d(z), className: `px-4 py-2.5 rounded-full font-bold text-sm border-2 transition-all duration-150 cursor-pointer ${h === z ? "bg-pink-400 border-pink-500 text-white scale-105 shadow-md" : "bg-pink-50 hover:bg-pink-100 border-pink-200 text-pink-700"}`, children: z === "All" ? "\u{1F31F} \u5168\u90E8\u55AE\u8A5E" : z }, z)) })] }), n.jsxs("div", { className: "flex justify-center gap-4", children: [n.jsx("button", { onClick: f, className: "px-6 py-3 bg-slate-400 border-b-4 border-slate-600 font-bold text-white rounded-full transition hover:bg-slate-500 flex items-center gap-2 cursor-pointer", children: "\u8FD4\u56DE" }), n.jsx("button", { onClick: () => H(h), className: "px-8 py-3 bg-pink-500 border-b-4 border-pink-700 hover:bg-pink-600 font-extrabold text-white text-lg rounded-full transition-all duration-150 flex items-center gap-2 cursor-pointer shadow-md", children: n.jsx("span", { children: "\u{1F680} \u9032\u5165\u65B9\u584A \u{1F380}" }) })] })] });
}
function cg({ onBack: f }) {
  const [h, d] = y.useState("All"), [o, T] = y.useState(false), [N, B] = y.useState([]), [U, ne] = y.useState(null), [ee, D] = y.useState([]), [b, Y] = y.useState(10), [O, Z] = y.useState(true), [L, I] = y.useState(null), [X, K] = y.useState(null), [oe, H] = y.useState(0), [se, J] = y.useState(1), [G, z] = y.useState(false), ie = ol, q = y.useRef(null), w = (A) => {
    H(0), J(1), z(false), T(true), F(1, A);
  }, F = (A, C) => {
    I(null), K(null), Y(10), Z(true);
    let E = Nl(C);
    E.length < 8 && (E = We);
    const ae = [...E].sort(() => Math.random() - 0.5).slice(0, 8);
    B(ae), P(ae);
  }, P = (A) => {
    q.current && clearInterval(q.current), Y(10), q.current = setInterval(() => {
      Y((C) => C <= 1 ? (q.current && clearInterval(q.current), W(A), 0) : C - 1);
    }, 1e3);
  }, ue = () => {
    q.current && clearInterval(q.current), W(N);
  }, W = (A) => {
    Z(false);
    const C = Math.floor(Math.random() * A.length), E = A[C];
    ne(E);
    const $ = [...A].sort(() => Math.random() - 0.5);
    D($);
  }, S = (A) => {
    L !== null || U === null || (I(A.id), A.id === U.id ? (K(true), H((C) => C + 10), ut()) : (K(false), lt()), setTimeout(() => {
      if (se < 5) {
        const C = se + 1;
        J(C), F(C, h);
      } else z(true);
    }, 2e3));
  };
  return y.useEffect(() => () => {
    q.current && clearInterval(q.current);
  }, []), o ? G ? n.jsxs("div", { className: "w-full bg-white p-8 rounded-3xl border-4 border-pink-300 text-center max-w-xl mx-auto shadow-xl relative overflow-hidden", children: [n.jsx(Bl, { className: "w-20 h-20 text-yellow-500 fill-yellow-200 mx-auto mb-4 animate-bounce" }), n.jsx("h2", { className: "text-3xl font-black text-pink-600 mb-2", children: "\u{1F389} \u8A18\u61B6\u5927\u5E2B\uFF01 \u{1F389}" }), n.jsx("p", { className: "text-slate-600 font-medium mb-6", children: "\u4F60\u7684\u96D9\u773C\u548C\u8A18\u61B6\u529B\u5C31\u50CF\u62CD\u7167\u4E00\u6A23\u795E\u6E96\uFF01\u606D\u559C\u901A\u904E 5 \u56DE\u5408\u8003\u9A57\uFF01\u{1F4F8}\u{1F380}" }), n.jsxs("div", { className: "bg-pink-50 py-4 px-6 rounded-2xl border-2 border-pink-200 inline-block mb-6 shadow-inner", children: [n.jsx("span", { className: "text-slate-500 text-xs font-bold block mb-1", children: "FINAL SCORE \u{1F3C6}" }), n.jsxs("span", { className: "text-3xl font-black text-pink-600", children: ["\u7E3D\u5F97\u5206: ", oe, " \u5206"] })] }), n.jsxs("div", { className: "flex justify-center gap-3", children: [n.jsxs("button", { onClick: () => T(false), className: "px-6 py-2.5 bg-pink-400 border-b-4 border-pink-600 text-white font-bold rounded-full hover:bg-pink-500 transition cursor-pointer flex items-center gap-1.5", children: [n.jsx(jt, { className: "w-4 h-4" }), n.jsx("span", { children: "\u518D\u73A9\u4E00\u6B21" })] }), n.jsx("button", { onClick: f, className: "px-6 py-2.5 bg-slate-400 border-b-4 border-slate-600 text-white font-bold rounded-full hover:bg-slate-500 transition cursor-pointer", children: "\u{1F3E0} \u8FD4\u56DE\u9078\u55AE" })] })] }) : n.jsxs("div", { className: "w-full max-w-3xl mx-auto bg-pink-50/50 p-6 rounded-3xl border-4 border-pink-200 shadow-lg relative", children: [n.jsxs("div", { className: "flex justify-between items-center mb-6", children: [n.jsxs("button", { onClick: () => T(false), className: "px-3 py-1.5 bg-white border-2 border-pink-200 rounded-full text-xs font-bold text-pink-600 hover:bg-pink-100 transition cursor-pointer flex items-center gap-1", children: [n.jsx(Lt, { className: "w-3.5 h-3.5" }), n.jsx("span", { children: "\u91CD\u65B0\u9078\u64C7" })] }), n.jsxs("div", { className: "bg-pink-100 border border-pink-200 px-4 py-1.5 rounded-full text-xs font-black text-pink-600 flex items-center gap-1", children: [n.jsx(np, { className: "w-3.5 h-3.5 text-pink-500" }), n.jsxs("span", { children: ["\u56DE\u5408: ", se, " / 5"] })] }), n.jsxs("div", { className: "bg-emerald-100 border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-black text-emerald-700", children: ["\u7E3D\u5206: ", oe] })] }), O ? n.jsxs("div", { className: "animate-fade-in", children: [n.jsxs("div", { className: "bg-white p-5 rounded-2xl border-3 border-pink-100 shadow-sm text-center mb-6 relative", children: [n.jsxs("div", { className: "absolute top-2 right-4 text-emerald-500 flex items-center gap-1 font-black text-xs bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200", children: [n.jsx(Np, { className: "w-4 h-4 animate-pulse" }), n.jsxs("span", { children: ["\u6CE8\u610F\u770B\uFF01\u5269\u9918 ", b, " \u79D2"] })] }), n.jsx("h3", { className: "text-xl font-bold text-pink-600 mb-2", children: "\u{1F4A1} \u8A18\u4F4F\u9019 8 \u500B\u55AE\u8A5E\u548C\u4E2D\u6587\uFF01" }), n.jsx("div", { className: "w-full bg-slate-100 h-3 rounded-full overflow-hidden border border-slate-200 mt-2", children: n.jsx("div", { className: "bg-pink-400 h-full transition-all duration-1000 ease-linear", style: { width: `${b / 10 * 100}%` } }) })] }), n.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6", children: N.map((A) => n.jsxs("div", { className: "bg-white p-4 border-3 border-pink-100 rounded-2xl flex flex-col items-center text-center justify-center min-h-[110px] shadow-sm relative overflow-hidden", children: [n.jsx("span", { className: "text-3xl mb-1", children: A.emoji }), n.jsx("span", { className: "text-sm font-black text-slate-800 break-normal text-wrap w-full", children: A.english }), n.jsxs("span", { className: "text-[10px] text-pink-500 font-extrabold bg-pink-50 px-1.5 py-0.5 rounded-full mt-1", children: ["(", A.chinese, ")"] })] }, A.id)) }), n.jsx("button", { onClick: ue, className: "w-full py-3 bg-pink-500 hover:bg-pink-600 border-b-4 border-pink-700 text-white font-extrabold text-base rounded-2xl shadow-md cursor-pointer transition-all active:translate-y-0.5", children: "\u{1F380} \u6211\u8A18\u597D\u56C9\uFF01\u76F4\u63A5\u9032\u5165\u56DE\u7B54 \u26A1" })] }) : n.jsxs("div", { className: "animate-fade-in", children: [n.jsxs("div", { className: "bg-white p-5 rounded-2xl border-3 border-pink-100 shadow-sm text-center mb-6 relative", children: [n.jsxs("div", { className: "absolute top-2 right-4 text-rose-500 flex items-center gap-1 font-black text-xs bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200", children: [n.jsx(yp, { className: "w-4 h-4" }), n.jsx("span", { children: "\u8003\u8A66\u4E2D\uFF01" })] }), n.jsx("h3", { className: "text-xl font-bold text-pink-600", children: "\u{1F575}\uFE0F\u200D\u2640\uFE0F \u7CDF\u7CD5\uFF01\u4E00\u500B\u55AE\u8A5E\u548C\u4E2D\u6587\u6E9C\u8D70\u4E86\uFF01" }), n.jsx("p", { className: "text-xs text-slate-500 mt-1", children: "\u8ACB\u770B\u4E0B\u9762\uFF0C\u9078\u51FA\u300C\u8EB2\u8D77\u4F86\uFF08\u4E0D\u77E5\u54EA\u88E1\u53BB\u4E86\uFF09\u300D\u7684\u90A3\u500B\u55AE\u8A5E\uFF1A" })] }), n.jsx("p", { className: "text-xs font-black text-slate-500 mb-2 uppercase text-center", children: "\u5269\u9918\u7559\u5728\u5834\u4E0A\u7684 7 \u500B\u55AE\u8A5E\uFF1A" }), n.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6", children: N.map((A) => {
    const C = A.id === (U == null ? void 0 : U.id);
    return n.jsx("div", { className: `p-4 rounded-2xl flex flex-col items-center text-center justify-center min-h-[110px] border-3 transition-opacity duration-300 relative ${C ? "bg-stone-50 border-stone-200 border-dashed border-4 opacity-100 scale-98" : "bg-white border-pink-150 shadow-sm"}`, children: C ? n.jsxs("div", { className: "flex flex-col items-center justify-center text-stone-300", children: [n.jsx("span", { className: "text-3xl animate-pulse", children: "\u2753" }), n.jsx("span", { className: "text-[10px] font-bold", children: "\u8AB0\u4E0D\u898B\u4E86\uFF1F" })] }) : n.jsxs(n.Fragment, { children: [n.jsx("span", { className: "text-3xl mb-1", children: A.emoji }), n.jsx("span", { className: "text-sm font-black text-slate-800 break-normal w-full", children: A.english }), n.jsxs("span", { className: "text-[10px] text-pink-500 font-extrabold bg-pink-50 px-1.5 py-0.5 rounded-full mt-1", children: ["(", A.chinese, ")"] })] }) }, A.id);
  }) }), n.jsxs("div", { className: "bg-white p-5 rounded-2xl border-3 border-pink-100 shadow-sm", children: [n.jsx("p", { className: "text-xs font-black text-pink-600 mb-3 text-center", children: "\u{1F447} \u8ACB\u9078\u51FA\u525B\u624D\u6D88\u5931\u7684\u90A3\u500B\u55AE\u8A5E \u{1F50D}" }), n.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: ee.map((A) => {
    const C = L === A.id, E = A.id === (U == null ? void 0 : U.id);
    let $ = "bg-pink-50 hover:bg-pink-100 border-2 border-pink-200 text-pink-700 cursor-pointer";
    return L !== null && (C ? $ = X ? "bg-emerald-500 border-2 border-emerald-600 text-white font-black scale-95" : "bg-rose-500 border-2 border-rose-600 text-white font-black scale-95" : E ? $ = "bg-emerald-300 border-2 border-emerald-500 text-emerald-950 font-black animate-pulse" : $ = "bg-slate-100 border-2 border-slate-200 text-slate-400 opacity-60"), n.jsxs("button", { onClick: () => S(A), disabled: L !== null, className: `p-3 rounded-2xl font-bold text-xs md:text-sm text-center flex flex-col items-center transition-all duration-150 ${$}`, children: [n.jsx("span", { className: "text-xl block mb-0.5", children: A.emoji }), n.jsx("span", { className: "block break-all font-black", children: A.english }), n.jsxs("span", { className: "text-[9px] opacity-80", children: ["(", A.chinese, ")"] })] }, A.id);
  }) })] }), n.jsx("div", { className: "mt-4 h-12 flex items-center justify-center", children: L !== null && n.jsx("div", { className: `text-base font-black px-6 py-1.5 rounded-full border-2 ${X ? "bg-emerald-100 border-emerald-300 text-emerald-700 animate-bounce" : "bg-rose-100 border-rose-300 text-rose-700"}`, children: X ? "\u2728 \u592A\u53B2\u5BB3\u4E86\uFF01\u4F60\u771F\u662F\u8A18\u61B6\u8D85\u4EBA\uFF01 \u{1F9E0}\u{1F3C5}" : `\u{1F4A1} \u54CE\u5440\uFF01\u525B\u624D\u5077\u5077\u8EB2\u8D77\u4F86\u7684\u662F: ${U == null ? void 0 : U.english} (${U == null ? void 0 : U.chinese})` }) })] })] }) : n.jsxs("div", { className: "w-full bg-pink-50/50 p-6 rounded-3xl border-4 border-pink-200 text-center relative max-w-2xl mx-auto shadow-md", children: [n.jsx("div", { className: "absolute top-2 left-2 text-3xl", children: "\u{1F9E0}" }), n.jsx("div", { className: "absolute top-2 right-2 text-3xl", children: "\u{1F380}" }), n.jsx("h2", { className: "text-3xl font-extrabold text-pink-600 mb-2 flex items-center justify-center gap-2", children: n.jsx("span", { children: "Mind Memory \u8A18\u61B6\u5927\u6311\u6230 \u{1F9E0}" }) }), n.jsx("p", { className: "text-pink-500 font-medium text-sm mb-6", children: "\u4F60\u6709 10 \u79D2\u9418\u7684\u6642\u9593\u4F86\u8A18\u61B6\u5927\u767D\u677F\u4E0A\u7684 8 \u500B\u55AE\u8A5E\uFF0C\u653E\u6709\u4E2D\u6587\u89E3\u8AAA\u3002\u96A8\u5F8C\u6703\u6709\u4E00\u500B\u55AE\u8A5E\u6084\u6084\u8EB2\u8D77\u4F86\uFF0C\u731C\u731C\u770B\u662F\u54EA\u4E00\u500B\u5462\uFF1F\u{1F981}" }), n.jsxs("div", { className: "bg-white/80 p-6 rounded-2xl border-2 border-pink-100 mb-6 shadow-sm", children: [n.jsx("label", { className: "block text-pink-700 font-extrabold text-base mb-3", children: "\u{1F380} \u8ACB\u9078\u64C7\u8981\u8A18\u61B6\u7684\u55AE\u8A5E\u7BC4\u570D\uFF1A" }), n.jsx("div", { className: "flex flex-wrap justify-center gap-2", children: ie.map((A) => n.jsx("button", { onClick: () => d(A), className: `px-4 py-2.5 rounded-full font-bold text-sm border-2 transition-all duration-150 cursor-pointer ${h === A ? "bg-pink-400 border-pink-500 text-white scale-105 shadow-md" : "bg-pink-50 hover:bg-pink-100 border-pink-200 text-pink-700"}`, children: A === "All" ? "\u{1F31F} \u5168\u90E8\u55AE\u8A5E" : A }, A)) })] }), n.jsxs("div", { className: "flex justify-center gap-4", children: [n.jsx("button", { onClick: f, className: "px-6 py-3 bg-slate-400 border-b-4 border-slate-600 font-bold text-white rounded-full transition hover:bg-slate-500 flex items-center gap-2 cursor-pointer", children: "\u8FD4\u56DE" }), n.jsx("button", { onClick: () => w(h), className: "px-8 py-3 bg-pink-500 border-b-4 border-pink-700 hover:bg-pink-600 font-extrabold text-white text-lg rounded-full transition-all duration-150 flex items-center gap-2 cursor-pointer shadow-md", children: n.jsx("span", { children: "\u{1F680} \u8F09\u5165\u5927\u8166 \u{1F380}" }) })] })] });
}
const og = { ".": "transparent", r: "#E52521", g: "#00A24A", b: "#0043A4", s: "#FCD8A5", k: "#4B2500", y: "#FED42C", p: "#FF69B4", w: "#FFFFFF", o: "#FF9900", u: "#63B3ED" }, ug = { idle: ["..rrrrr.....", ".rrrrrrrrr..", ".kkksskss...", "kskssskss...", "kskksssksss.", "kksssskkkk..", "....sssss...", "..rrbbrr....", ".rrrbbrrbr..", "rrrrbbbbrrr.", "ssrrbyybrrss", "ssbbbbbbbbss", ".bbbbbbbbbb.", "..bbb..bbb..", ".kkk....kkk.", "kkkk....kkkk"], walk1: ["..rrrrr.....", ".rrrrrrrrr..", ".kkksskss...", "kskssskss...", "kskksssksss.", "kksssskkkk..", "....sssss...", "..rrbbrr....", ".rrrbbrrbr..", "rrrrbbbbrrr.", "ssrrbyybrrss", "ssbbbbbbbbss", ".bbbbbbbbbb.", "..bbbbb.....", "...kkk......", "..kkkkkk...."], walk2: ["..rrrrr.....", ".rrrrrrrrr..", ".kkksskss...", "kskssskss...", "kskksssksss.", "kksssskkkk..", "....sssss...", "..rrbbrr....", ".rrrbbrrbr..", "rrrrbbbbrrr.", "ssrrbyybrrss", "ssbbbbbbbbss", ".bbbbbbbbbb.", ".....bbbbb..", "......kkk...", "....kkkkkk.."], win: ["s.rrrrr....s", "ssrrrrrrrrss", ".kkksskss...", "kskssskss...", "kskksssksss.", "kksssskkkk..", "....sssss...", "..rrbbrr....", ".rrrbbrrbr..", "rrrrbbbbrrr.", "..rrbyybrr..", "..bbbbbbbb..", ".bbbbbbbbbb.", "..bbb..bbb..", ".kkk....kkk.", "kkkk....kkkk"], pulling: ["....rrrrr...", "...rrrrrrrrr", "...kkksskss.", "..kskssskss.", "..kskkssskss", "..kksssskkkk", "......sssss.", "....rrbbrr..", "...rrrbbrrbr", "..rrrrbbbbrr", "ss.ssrrbyybr", "sss.ssbbbbbb", ".ss..bbbbbbb", "....bbb...bb", "...kkk....kk", "..kkkk...kkk"] }, dg = { idle: ["..ggggg.....", ".ggggggggg..", ".kkksskss...", "kskssskss...", "kskksssksss.", "kksssskkkk..", "....sssss...", "..ggbbgg....", ".gggbbggbb..", "ggggbbbbbb..", "ssggbyybggss", "ssbbbbbbbbss", ".bbbbbbbbbb.", "..bbb..bbb..", ".kkk....kkk.", "kkkk....kkkk"], walk1: ["..ggggg.....", ".ggggggggg..", ".kkksskss...", "kskssskss...", "kskksssksss.", "kksssskkkk..", "....sssss...", "..ggbbgg....", ".gggbbggbb..", "ggggbbbbbb..", "ssggbyybggss", "ssbbbbbbbbss", ".bbbbbbbbbb.", "..bbbbb.....", "...kkk......", "..kkkkkk...."], walk2: ["..ggggg.....", ".ggggggggg..", ".kkksskss...", "kskssskss...", "kskksssksss.", "kksssskkkk..", "....sssss...", "..ggbbgg....", ".gggbbggbb..", "ggggbbbbbb..", "ssggbyybggss", "ssbbbbbbbbss", ".bbbbbbbbbb.", ".....bbbbb..", "......kkk...", "....kkkkkk.."], win: ["s.ggggg....s", "ssggggggggss", ".kkksskss...", "kskssskss...", "kskksssksss.", "kksssskkkk..", "....sssss...", "..ggbbgg....", ".gggbbggbb..", "ggggbbbbbb..", "..ggbyybgg..", "..bbbbbbbb..", ".bbbbbbbbbb.", "..bbb..bbb..", ".kkk....kkk.", "kkkk....kkkk"], pulling: ["....ggggg...", "...ggggggggg", "...kkksskss.", "..kskssskss.", "..kskkssskss", "..kksssskkkk", "......sssss.", "....ggbbgg..", "...gggbbggbb", "..ggggbbbbgg", "ss.ssggbyybg", "sss.ssbbbbbb", ".ss..bbbbbbb", "....bbb...bb", "...kkk....kk", "..kkkk...kkk"] }, fg = { idle: ["....ooyoo...", "...oyuyuyo..", "....yyyyy...", "...ysssys...", "..ysssssys..", "..ysuskssys.", "...yssssys..", "....yyyyy...", "...ppppppp..", "..ppppppppp.", ".ppspppppspp", "ppspppppppss", ".pppppppppp.", "..pppppppp..", "...kk..kk...", "..kkk..kkk.."], walk1: ["....ooyoo...", "...oyuyuyo..", "....yyyyy...", "...ysssys...", "..ysssssys..", "..ysuskssys.", "...yssssys..", "....yyyyy...", "...ppppppp..", "..ppppppppp.", ".ppspppppspp", "ppspppppppss", ".pppppppppp.", "..pppppp....", "...kkk......", "..kkkk......"], walk2: ["....ooyoo...", "...oyuyuyo..", "....yyyyy...", "...ysssys...", "..ysssssys..", "..ysuskssys.", "...yssssys..", "....yyyyy...", "...ppppppp..", "..ppppppppp.", ".ppspppppspp", "ppspppppppss", ".pppppppppp.", "....pppppp..", "......kkk...", "......kkkk.."], win: ["s...ooyoo..s", "ss.oyuyuyo.ss", "....yyyyy...", "...ysssys...", "..ysssssys..", "..ysuskssys.", "...yssssys..", "....yyyyy...", "...ppppppp..", "..ppppppppp.", "..ppppppppp.", "..ppppppppp.", ".pppppppppp.", "..pppppppp..", "...kk..kk...", "..kkk..kkk.."], pulling: [".....ooyoo..", "....oyuyuyo.", ".....yyyyy..", "....ysssys..", "...ysssssys.", "...ysuskssys", "....yssssys.", ".....yyyyy..", "....ppppppp.", "...ppppppppp", "ss.pspppppsp", "ss.ppppppppp", ".s..pppppppp", "....pppp.ppp", "...kk.....kk", "..kkk....kkk"] }, xg = { idle: ["....wwwww...", "..wwrrrrrww.", ".wrrrrrrrrrw", "wrrrrwwwwwrr", "wrrwwwwwrrwr", ".wwwwwwwww...", "...ssssss...", "..ssssssss..", "..ssskksss..", "...ssssss...", "..wwbbbbww..", ".wwbbbbbbww.", ".wwwwwwwwww.", "..wwwwwwww..", "...kk..kk...", "..kkk..kkk.."], walk1: ["....wwwww...", "..wwrrrrrww.", ".wrrrrrrrrrw", "wrrrrwwwwwrr", "wrrwwwwwrrwr", ".wwwwwwwww...", "...ssssss...", "..ssssssss..", "..ssskksss..", "...ssssss...", "..wwbbbbww..", ".wwbbbbbbww.", ".wwwwwwwwww.", "..wwwwww....", "...kkk......", "..kkkk......"], walk2: ["....wwwww...", "..wwrrrrrww.", ".wrrrrrrrrrw", "wrrrrwwwwwrr", "wrrwwwwwrrwr", ".wwwwwwwww...", "...ssssss...", "..ssssssss..", "..ssskksss..", "...ssssss...", "..wwbbbbww..", ".wwbbbbbbww.", ".wwwwwwwwww.", "....wwwwww..", "......kkk...", "......kkkk.."], win: ["s...wwwww..s", "sswwrrrrrwwss", ".wrrrrrrrrrw", "wrrrrwwwwwrr", "wrrwwwwwrrwr", ".wwwwwwwww...", "...ssssss...", "..ssssssss..", "..ssskksss..", "...ssssss...", "..bbbbbbbb..", "..bbbbbbbb..", ".wwwwwwwwww.", "..wwwwwwww..", "...kk..kk...", "..kkk..kkk.."], pulling: [".....wwwww..", "...wwrrrrrww", "..wrrrrrrrrr", ".wrrrrwwwwwr", ".wrrwwwwwrrw", "..wwwwwwwww.", "....ssssss..", "...ssssssss.", "...ssskksss.", "....ssssss..", "...wwbbbbww.", "ss.wbbbbbbww", "ss.wwwwwwwww", "..wwwww..www", "..kk......kk", ".kkk.....kkk"] };
function Hl({ character: f, animation: h, className: d = "", size: o = 48 }) {
  const [T, N] = y.useState(0);
  y.useEffect(() => {
    if (h === "idle") {
      N(0);
      return;
    }
    const b = setInterval(() => {
      N((Y) => Y + 1);
    }, h === "win" ? 250 : 180);
    return () => clearInterval(b);
  }, [h]);
  let B;
  switch (f) {
    case "luigi":
      B = dg;
      break;
    case "peach":
      B = fg;
      break;
    case "toad":
      B = xg;
      break;
    case "mario":
    default:
      B = ug;
      break;
  }
  let U;
  switch (h) {
    case "walk":
    case "climb":
      U = T % 2 === 0 ? B.walk1 : B.walk2;
      break;
    case "win":
      U = T % 2 === 0 ? B.win : B.idle;
      break;
    case "pulling":
      U = T % 2 === 0 ? B.pulling : B.idle;
      break;
    case "idle":
    default:
      U = B.idle;
      break;
  }
  const ne = 16, ee = 12;
  return n.jsx("div", { className: `inline-block ${d}`, style: { width: `${o}px`, height: `${o * (ne / ee)}px` }, children: n.jsx("svg", { width: "100%", height: "100%", viewBox: `0 0 ${ee} ${ne}`, style: { imageRendering: "pixelated" }, children: U.map((D, b) => D.padEnd(ee, ".").split("").map((O, Z) => {
    const L = og[O] || "transparent";
    return L === "transparent" ? null : n.jsx("rect", { x: Z, y: b, width: 1, height: 1, fill: L }, `${Z}-${b}`);
  })) }) });
}
function Mx({ onBack: f, roundsCount: h = 5 }) {
  const [d, o] = y.useState("All"), [T, N] = y.useState(false), [B, U] = y.useState([]), [ne, ee] = y.useState(0), [D, b] = y.useState([]), [Y, O] = y.useState(0), [Z, L] = y.useState(0), [I, X] = y.useState(null), [K, oe] = y.useState(false), [H, se] = y.useState(false), [J, G] = y.useState(false), [z, ie] = y.useState(0), q = ol, w = (C) => {
    let E = Nl(C);
    const $ = [...E].sort(() => Math.random() - 0.5);
    if ($.length === 0) return;
    const ae = $.slice(0, h);
    U(ae), ee(0), O(0), L(0), X(null), oe(false), se(false), ie(0), G(false), N(true), F(ae[0], E);
  }, F = (C, E) => {
    const _e = [...E.filter((x) => x.id !== C.id)].sort(() => Math.random() - 0.5).slice(0, 3), Re = [C, ..._e].sort(() => Math.random() - 0.5);
    b(Re);
  }, P = (C) => {
    if (I !== null || K) return;
    const E = B[ne];
    C === E.id ? (X("A"), O(($) => $ + 1), ie(($) => Math.max($ - 2, -5)), Qo(), setTimeout(() => {
      W();
    }, 1500)) : (lt(), oe(true), setTimeout(() => oe(false), 1200));
  }, ue = (C) => {
    if (I !== null || H) return;
    const E = B[ne];
    C === E.id ? (X("B"), L(($) => $ + 1), ie(($) => Math.min($ + 2, 5)), Qo(), setTimeout(() => {
      W();
    }, 1500)) : (lt(), se(true), setTimeout(() => se(false), 1200));
  }, W = () => {
    X(null), oe(false), se(false);
    const C = ne + 1;
    if (C < B.length) {
      ee(C);
      let E = We.filter(($) => d === "All" || $.chapter === d);
      F(B[C], E);
    } else G(true);
  };
  if (!T) return n.jsxs("div", { className: "w-full bg-pink-50/50 p-6 rounded-3xl border-4 border-pink-200 text-center relative max-w-2xl mx-auto shadow-md", children: [n.jsx("div", { className: "absolute top-2 left-2 text-3xl", children: "\u{1F380}" }), n.jsx("div", { className: "absolute top-2 right-2 text-3xl", children: "\u{1FAA2}" }), n.jsx("h2", { className: "text-3xl font-extrabold text-pink-600 mb-2 flex items-center justify-center gap-2", children: n.jsxs("span", { children: [h, "\u984C\u7D44 \u{1FAA2} \u96D9\u4EBA\u540C\u6B65\u62D4\u6CB3\u8CFD"] }) }), n.jsxs("p", { className: "text-pink-500 font-medium text-sm mb-6 leading-relaxed", children: ["\u96D9\u4EBA\u7DDA\u4E0B\u5C0D\u6230\uFF01\u770B\u4E2D\u9593\u986F\u793A\u7684\u4E2D\u6587\u5167\u5BB9\uFF0C\u5FEB\u901F\u5728\u81EA\u5DF1\u90A3\u4E00\u908A\u627E\u51FA\u6B63\u78BA\u7684\u82F1\u6587\u55AE\u8A5E\u4E26\u9EDE\u64CA\uFF01", n.jsx("br", {}), " \u2B50 \u62D4\u6CB3\u898F\u5247\uFF1A\u5982\u679C\u5C0D\u65B9\u5148\u7B54\u5C0D\u4E86\uFF0C\u4F60\u5C31\u4E0D\u80FD\u505A\u56C9\uFF0C\u76F4\u63A5\u9032\u5165\u4E0B\u4E00\u984C\u4E26\u7B97\u4ED6\u5F97\u5206\uFF01"] }), n.jsxs("div", { className: "bg-white/80 p-6 rounded-2xl border-2 border-pink-100 mb-6 shadow-sm", children: [n.jsx("label", { className: "block text-pink-700 font-extrabold text-base mb-3", children: "\u{1F380} \u8ACB\u9078\u64C7\u62D4\u6CB3\u6311\u6230\u7684\u55AE\u8A5E\u7BC4\u570D\uFF1A" }), n.jsx("div", { className: "flex flex-wrap justify-center gap-2", children: q.map((C) => n.jsx("button", { onClick: () => o(C), className: `px-4 py-2.5 rounded-full font-bold text-sm border-2 transition-all duration-150 cursor-pointer ${d === C ? "bg-pink-400 border-pink-500 text-white scale-105 shadow-md" : "bg-pink-50 hover:bg-pink-100 border-pink-200 text-pink-700"}`, children: C === "All" ? "\u{1F31F} \u5168\u90E8\u55AE\u8A5E" : C }, C)) })] }), n.jsxs("div", { className: "flex justify-center gap-4", children: [n.jsx("button", { onClick: f, className: "px-6 py-3 bg-slate-400 border-b-4 border-slate-600 font-bold text-white rounded-full transition hover:bg-slate-500 flex items-center gap-2 cursor-pointer", children: "\u8FD4\u56DE" }), n.jsxs("button", { onClick: () => w(d), className: "px-8 py-3 bg-pink-500 border-b-4 border-pink-700 hover:bg-pink-600 font-extrabold text-white text-lg rounded-full transition-all duration-150 flex items-center gap-2 cursor-pointer shadow-md", children: [n.jsx(Yp, { className: "w-5 h-5" }), n.jsx("span", { children: "\u958B\u59CB\u62D4\u6CB3 \u{1F380}" })] })] })] });
  if (J) {
    const C = Y > Z ? "A" : Z > Y ? "B" : "TIE";
    return n.jsxs("div", { className: "w-full bg-white p-8 rounded-3xl border-4 border-pink-300 text-center max-w-2xl mx-auto shadow-xl relative overflow-hidden", children: [n.jsx(Bl, { className: "w-20 h-20 text-yellow-400 fill-yellow-105 mx-auto mb-4 animate-bounce" }), n.jsx("h2", { className: "text-3xl font-black text-pink-600 mb-2", children: "\u{1F389} \u62D4\u6CB3\u6BD4\u8CFD\u5713\u6EFF\u7D50\u675F\uFF01 \u{1F389}" }), n.jsx("div", { className: "my-6 p-6 rounded-3xl border-3 border-pink-100 bg-pink-50/50", children: C === "TIE" ? n.jsx("p", { className: "text-2xl font-black text-slate-700", children: "\u{1F640} \u5169\u4F4D\u540C\u5B78\u5E73\u624B\u56C9\uFF01\u5927\u5BB6\u90FD\u8D85\u53B2\u5BB3\uFF01 \u{1F338}" }) : n.jsxs("div", { className: "flex flex-col items-center", children: [n.jsx("span", { className: "text-xs font-bold text-pink-400", children: "WINNER \u{1F3C6}" }), n.jsxs("span", { className: "text-4xl font-extrabold text-pink-600 mb-2", children: ["\u{1F389} ", C === "A" ? "\u{1F448} \u5DE6\u908A\u540C\u5B78 (Player A)" : "\u{1F449} \u53F3\u908A\u540C\u5B78 (Player B)", " \u7372\u52DD\uFF01"] }), n.jsxs("span", { className: "text-sm font-medium text-slate-600", children: ["\u5F97\u5206\u6BD4\uFF1A", Y, " \u6BD4 ", Z] })] }) }), n.jsxs("div", { className: "flex justify-center gap-3", children: [n.jsxs("button", { onClick: () => N(false), className: "px-6 py-2.5 bg-pink-400 border-b-4 border-pink-600 text-white font-bold rounded-full hover:bg-pink-500 transition cursor-pointer flex items-center gap-1.5", children: [n.jsx(jt, { className: "w-4 h-4" }), n.jsx("span", { children: "\u518D\u73A9\u4E00\u6B21" })] }), n.jsx("button", { onClick: f, className: "px-6 py-2.5 bg-slate-400 border-b-4 border-slate-600 text-white font-bold rounded-full hover:bg-slate-500 transition cursor-pointer", children: "\u{1F3E0} \u8FD4\u56DE\u9078\u55AE" })] })] });
  }
  const S = B[ne], A = 50 + z * 8;
  return n.jsxs("div", { className: "w-full max-w-6xl mx-auto bg-pink-50/20 p-6 rounded-3xl border-4 border-pink-200 shadow-xl relative overflow-hidden", children: [n.jsxs("div", { className: "bg-white p-5 rounded-2xl border-3 border-pink-100 shadow-sm mb-6 flex flex-col items-center relative overflow-hidden", children: [n.jsxs("div", { className: "flex justify-between items-center w-full mb-3 select-none", children: [n.jsxs("div", { className: "bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-black", children: ["\u{1F448} Player A: ", Y, " \u5206"] }), n.jsxs("div", { className: "bg-slate-100 text-slate-600 px-3.5 py-1 rounded-full text-xs font-extrabold border border-slate-200", children: ["\u56DE\u5408: ", ne + 1, " / ", B.length] }), n.jsxs("div", { className: "bg-sky-100 text-sky-600 px-3 py-1 rounded-full text-xs font-black", children: ["Player B: ", Z, " \u5206 \u{1F449}"] })] }), n.jsxs("div", { className: "text-center mb-4 z-10", children: [n.jsx("span", { className: "text-xs font-bold text-slate-400 tracking-widest uppercase block mb-1", children: "TARGET CHINESE MEANING \u{1F1E8}\u{1F1F3}" }), n.jsxs("h3", { className: "text-3xl font-black text-slate-800 break-normal select-none", children: [S == null ? void 0 : S.emoji, " ", S == null ? void 0 : S.chinese] })] }), n.jsxs("div", { className: "w-full relative h-24 flex items-end bg-[#5C94FC] rounded-2xl p-2 border-3 border-black shadow-inner overflow-hidden", children: [n.jsx("div", { className: "absolute bottom-0 inset-x-0 w-full h-4 bg-[#00A24A] border-t border-black" }), n.jsx("div", { className: "absolute top-2 left-6 bg-white/20 w-8 h-2.5 rounded-full select-none" }), n.jsx("div", { className: "absolute top-4 right-12 bg-white/20 w-12 h-3.5 rounded-full select-none" }), n.jsx("div", { className: "absolute left-6 right-6 bottom-5 h-2 bg-amber-800 border-y border-black z-0 shadow" }), n.jsx("div", { className: "absolute left-1/2 -translate-x-1/2 bottom-4 w-1.5 h-6 bg-red-500 border border-black z-0" }), n.jsxs("div", { className: "absolute -translate-x-1/2 transition-all duration-300 ease-out z-10", style: { left: `calc(${A}% - 34px)`, bottom: "8px" }, children: [n.jsx(Hl, { character: "mario", animation: I === "A" ? "win" : I === "B" ? "idle" : "pulling", size: 36 }), n.jsx("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 text-[8px] font-black text-rose-600 bg-white border border-black rounded px-1 leading-none shadow-sm select-none", children: "P1" })] }), n.jsx("div", { className: "absolute -translate-x-1/2 transition-all duration-300 ease-out flex flex-col items-center justify-center z-10", style: { left: `${A}%`, bottom: "14px" }, children: n.jsx("span", { className: "text-xl leading-none filter drop-shadow", children: "\u{1F380}" }) }), n.jsxs("div", { className: "absolute -translate-x-1/2 transition-all duration-300 ease-out z-10 flex flex-col items-center", style: { left: `calc(${A}% + 34px)`, bottom: "8px" }, children: [n.jsx("div", { className: "scale-x-[-1]", children: n.jsx(Hl, { character: "luigi", animation: I === "B" ? "win" : I === "A" ? "idle" : "pulling", size: 36 }) }), n.jsx("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 text-[8px] font-black text-sky-600 bg-white border border-black rounded px-1 leading-none shadow-sm select-none", children: "P2" })] })] }), n.jsx("div", { className: "mt-2 h-7 flex items-center justify-center overflow-hidden", children: I && n.jsx("span", { className: `text-xs font-black px-4 py-1 rounded-full border ${I === "A" ? "bg-pink-100 border-pink-300 text-pink-700 animate-bounce" : "bg-sky-100 border-sky-300 text-sky-700 animate-bounce"}`, children: I === "A" ? "\u{1F389} \u{1F448} \u5DE6\u908A\u5B78\u751F\u6436\u5148\u7B54\u5C0D\uFF01 \u{1F380}" : "\u{1F389} \u{1F449} \u53F3\u908A\u5B78\u751F\u6436\u5148\u7B54\u5C0D\uFF01 \u{1F380}" }) })] }), n.jsxs("div", { className: "grid grid-cols-2 gap-10 md:gap-14 relative", children: [n.jsx("div", { className: "absolute left-1/2 -translate-x-1/2 inset-y-0 w-1.5 bg-pink-100 border-r border-dashed border-pink-200" }), n.jsxs("div", { className: `p-4 rounded-2xl border-4 flex flex-col gap-4 shadow-sm relative ${K ? "border-rose-450 bg-rose-50" : "border-pink-200 bg-white"}`, children: [n.jsxs("div", { className: "flex items-center justify-between border-b pb-2", children: [n.jsx("span", { className: "text-sm font-black text-pink-600", children: "\u{1F448} PLAYER A\u5340\u57DF" }), K && n.jsx("span", { className: "text-[10px] text-rose-500 font-bold bg-rose-100 px-2 py-0.5 rounded animate-pulse", children: "\u7B54\u932F\u7F70\u79D2! \u23F3" })] }), n.jsx("div", { className: "flex flex-col gap-2.5", children: D.map((C) => n.jsx("button", { onClick: () => P(C.id), disabled: I !== null || K, className: "py-4 px-4 bg-pink-50 border-3 border-pink-100 hover:border-pink-350 hover:bg-pink-100/50 text-pink-850 font-bold text-sm md:text-base rounded-2xl shadow-sm text-center transition-all duration-150 active:scale-98 select-none disabled:opacity-50 cursor-pointer text-wrap", children: C.english }, `${C.id}_a`)) })] }), n.jsxs("div", { className: `p-4 rounded-2xl border-4 flex flex-col gap-4 shadow-sm relative ${H ? "border-sky-400 bg-sky-50" : "border-sky-200 bg-white"}`, children: [n.jsxs("div", { className: "flex items-center justify-between border-b pb-2", children: [n.jsx("span", { className: "text-sm font-black text-sky-600", children: "PLAYER B\u5340\u57DF \u{1F449}" }), H && n.jsx("span", { className: "text-[10px] text-rose-500 font-bold bg-rose-100 px-2 py-0.5 rounded animate-pulse", children: "\u7B54\u932F\u7F70\u79D2! \u23F3" })] }), n.jsx("div", { className: "flex flex-col gap-2.5", children: D.map((C) => n.jsx("button", { onClick: () => ue(C.id), disabled: I !== null || H, className: "py-4 px-4 bg-sky-50 border-3 border-sky-150 hover:border-sky-305 hover:bg-sky-100/50 text-sky-850 font-bold text-sm md:text-base rounded-2xl shadow-sm text-center transition-all duration-150 active:scale-98 select-none disabled:opacity-50 cursor-pointer text-wrap", children: C.english }, `${C.id}_b`)) })] })] }), n.jsx("div", { className: "mt-8 text-center flex justify-center", children: n.jsx("button", { onClick: () => N(false), className: "px-5 py-2.5 bg-slate-400 border-b-4 border-slate-600 text-white font-bold text-xs rounded-full hover:bg-slate-500 transition cursor-pointer", children: "\u653E\u68C4\u9019\u5834\uFF0C\u91CD\u9078\u7BC4\u570D" }) })] });
}
function mg({ onBack: f }) {
  const [h, d] = y.useState("All"), [o, T] = y.useState(false), [N, B] = y.useState(1), [U] = y.useState(8), [ne, ee] = y.useState([]), [D, b] = y.useState(null), [Y, O] = y.useState("en_to_ch"), [Z, L] = y.useState(0), [I, X] = y.useState(0), [K, oe] = y.useState(false), [H, se] = y.useState(null), [J, G] = y.useState({ x: 0, y: 0 }), [z, ie] = y.useState({ x: 0, y: 0 }), q = ol, w = y.useRef(null), F = (E) => {
    L(0), X(0), B(1), oe(false), T(true), P(1, E);
  }, P = (E, $) => {
    let ae = Nl($);
    ae.length < 9 && (ae = We);
    const Re = [...ae].sort(() => Math.random() - 0.5).slice(0, 9), x = Math.floor(Math.random() * 9), V = Re[x];
    b(V), O(Math.random() > 0.5 ? "en_to_ch" : "ch_to_en");
    const re = Re.map((fe, ve) => ({ index: ve, word: fe, xOffset: 0, yOffset: 0, wobbleDir: Math.random() > 0.5 ? 1 : -1 }));
    ee(re);
  };
  y.useEffect(() => {
    if (!o || K) return;
    const E = () => {
      ee(($) => $.map((ae) => {
        let _e = ae.xOffset + ae.wobbleDir * 0.15, Re = ae.yOffset + (Math.random() - 0.5) * 0.2, x = ae.wobbleDir;
        return Math.abs(_e) > 12 && (x = -x, _e = Math.sign(_e) * 11.5), { ...ae, xOffset: _e, yOffset: Re, wobbleDir: x };
      })), w.current = requestAnimationFrame(E);
    };
    return w.current = requestAnimationFrame(E), () => {
      w.current && cancelAnimationFrame(w.current);
    };
  }, [o, K]);
  const ue = (E, $) => {
    E.preventDefault();
    const ae = E.currentTarget.getBoundingClientRect();
    G({ x: E.clientX - ae.left, y: E.clientY - ae.top }), se($), ie({ x: E.clientX, y: E.clientY }), E.currentTarget.setPointerCapture(E.pointerId);
  }, W = (E) => {
    H !== null && ie({ x: E.clientX, y: E.clientY });
  }, S = (E) => {
    if (H === null) return;
    E.currentTarget.releasePointerCapture(E.pointerId);
    const $ = window.innerWidth, ae = E.clientX, _e = ae < $ * 0.32, Re = ae > $ * 0.68, x = ne.find((V) => V.index === H);
    se(null), !(!x || !D) && (_e ? x.word.id === D.id ? (L((V) => V + 10), ut(), A()) : lt() : Re && (x.word.id === D.id ? (X((V) => V + 10), ut(), A()) : lt()));
  }, A = () => {
    if (N < U) {
      const E = N + 1;
      B(E), P(E, h);
    } else oe(true);
  }, C = (E, $) => {
    D && (E.word.id === D.id ? ($ === "A" ? L((ae) => ae + 10) : X((ae) => ae + 10), ut(), A()) : lt());
  };
  if (!o) return n.jsxs("div", { className: "w-full bg-pink-50/50 p-6 rounded-3xl border-4 border-pink-200 text-center relative max-w-2xl mx-auto shadow-md", children: [n.jsx("div", { className: "absolute top-2 left-2 text-3xl", children: "\u{1F9A2}" }), n.jsx("div", { className: "absolute top-2 right-2 text-3xl", children: "\u{1F9FA}" }), n.jsx("h2", { className: "text-3xl font-extrabold text-pink-600 mb-2 flex items-center justify-center gap-2", children: n.jsx("span", { children: "Goose Chase \u5927\u767D\u9D5DPK \u{1F9A2}" }) }), n.jsxs("p", { className: "text-pink-500 font-medium text-sm mb-6 leading-relaxed", children: ["\u96D9\u4EBA\u4E92\u52D5\u62D6\u62FD\u5C0D\u8CFD\uFF01\u4E2D\u9593\u653E\u6709 9 \u96BB", n.jsx("b", { children: "\u4E0D\u91CD\u8907" }), "\u4E14\u6703", n.jsx("b", { children: "\u8D70\u4F86\u8D70\u53BB" }), "\u7684\u5927\u767D\u9D5D\uFF01", n.jsx("br", {}), " \u770B\u9802\u90E8\u7684\u984C\u76EE\uFF0C\u5FEB\u901F\u628A\u5408\u9069\u7684\u767D\u9D5D\u62D6\u5230\u81EA\u5DF1\u968A\u4F0D\u7684\u5927\u63D0\u7C43\u88E1\u9762\uFF01", n.jsx("br", {}), " \u984C\u76EE\u7D66\u4E2D\u6587\u627E\u82F1\u6587\uFF0C\u6216\u662F\u7D66\u82F1\u6587\u627E\u4E2D\u6587\u3002\u62D6\u5C0D\u7684\u4EBA\u52A0 10 \u5206\uFF01"] }), n.jsxs("div", { className: "bg-white/80 p-6 rounded-2xl border-2 border-pink-100 mb-6 shadow-sm", children: [n.jsx("label", { className: "block text-pink-700 font-extrabold text-base mb-3", children: "\u{1F380} \u8ACB\u9078\u64C7\u8981\u6293\u6355\u7684\u5927\u767D\u9D5D\u7BC4\u570D\uFF1A" }), n.jsx("div", { className: "flex flex-wrap justify-center gap-2", children: q.map((E) => n.jsx("button", { onClick: () => d(E), className: `px-4 py-2.5 rounded-full font-bold text-sm border-2 transition-all duration-150 cursor-pointer ${h === E ? "bg-pink-400 border-pink-500 text-white scale-105 shadow-md" : "bg-pink-50 hover:bg-pink-100 border-pink-200 text-pink-700"}`, children: E === "All" ? "\u{1F31F} \u5168\u90E8\u55AE\u8A5E" : E }, E)) })] }), n.jsxs("div", { className: "flex justify-center gap-4", children: [n.jsx("button", { onClick: f, className: "px-6 py-3 bg-slate-400 border-b-4 border-slate-600 font-bold text-white rounded-full transition hover:bg-slate-500 flex items-center gap-2 cursor-pointer", children: "\u8FD4\u56DE" }), n.jsx("button", { onClick: () => F(h), className: "px-8 py-3 bg-pink-500 border-b-4 border-pink-700 hover:bg-pink-600 font-extrabold text-white text-lg rounded-full transition-all duration-150 flex items-center gap-2 cursor-pointer shadow-md", children: n.jsx("span", { children: "\u{1F680} \u6293\u5927\u767D\u9D5D \u{1F9A2}" }) })] })] });
  if (K) {
    const E = Z > I ? "A" : I > Z ? "B" : "TIE";
    return n.jsxs("div", { className: "w-full bg-white p-8 rounded-3xl border-4 border-pink-300 text-center max-w-xl mx-auto shadow-xl relative overflow-hidden", children: [n.jsx(Bl, { className: "w-20 h-20 text-yellow-400 fill-yellow-205 mx-auto mb-4 animate-bounce" }), n.jsx("h2", { className: "text-3xl font-black text-pink-600 mb-2", children: "\u{1F389} \u5361\u901A\u5927\u767D\u9D5D\u5C0D\u6C7A\u7D50\u675F\uFF01 \u{1F389}" }), n.jsx("div", { className: "bg-pink-50/50 border-3 border-pink-200 p-6 rounded-3xl my-6", children: E === "TIE" ? n.jsx("p", { className: "text-xl font-bold text-slate-800", children: "\u{1F63B} \u5169\u968A\u5E73\u5C40\uFF01\u5927\u5BB6\u90FD\u597D\u53B2\u5BB3\uFF01 \u{1F9A2}" }) : n.jsxs("div", { children: [n.jsx("p", { className: "text-xs font-semibold text-pink-450 uppercase", children: "\u{1F3C6} CONGRATULATIONS \u{1F3C6}" }), n.jsxs("h3", { className: "text-3xl font-black text-pink-600 mt-1 mb-2", children: [E === "A" ? "\u{1F448} A\u968A (Pink Team)" : "\u{1F449} B\u968A (Blue Team)", " \u52DD\u5229\uFF01"] }), n.jsxs("p", { className: "text-slate-600 font-bold", children: ["A\u968A\u5F97\u5206: ", Z, " \u5206  |  B\u968A\u5F97\u5206: ", I, " \u5206"] })] }) }), n.jsxs("div", { className: "flex justify-center gap-3", children: [n.jsxs("button", { onClick: () => T(false), className: "px-6 py-2.5 bg-pink-400 border-b-4 border-pink-600 text-white font-bold rounded-full hover:bg-pink-500 transition cursor-pointer flex items-center gap-1.5", children: [n.jsx(jt, { className: "w-4 h-4" }), n.jsx("span", { children: "\u518D\u73A9\u4E00\u6B21" })] }), n.jsx("button", { onClick: f, className: "px-6 py-2.5 bg-slate-400 border-b-4 border-slate-600 text-white font-bold rounded-full hover:bg-slate-500 transition cursor-pointer", children: "\u{1F3E0} \u8FD4\u56DE\u9078\u55AE" })] })] });
  }
  return n.jsxs("div", { className: "w-full max-w-7xl mx-auto bg-white border-4 border-[#FFB6C1] p-6 rounded-3xl shadow-xl relative select-none", children: [n.jsxs("div", { className: "bg-[#FFF0F5] p-5 rounded-2xl border-3 border-[#FFB6C1] shadow-sm text-center mb-6 flex flex-col items-center justify-center relative w-full", children: [n.jsxs("div", { className: "flex justify-between items-center w-full mb-1.5", children: [n.jsx("span", { className: "text-[#FF1493] font-black text-xs md:text-sm", children: "\u{1F448} \u5074 A\u63D0\u7C43 (TEAM PINK)" }), n.jsxs("span", { className: "bg-[#FFB6C1] text-white px-3.5 py-1 rounded-full text-xs font-black border border-[#FF69B4] shadow-sm", children: ["\u{1F9A2} Swan Question: ", N, " / 8 (\u4E0D\u9650\u6642)"] }), n.jsx("span", { className: "text-[#1E90FF] font-black text-xs md:text-sm", children: "\u5074 B\u63D0\u7C43 (TEAM BLUE) \u{1F449}" })] }), n.jsx("span", { className: "text-xs text-slate-500 font-bold uppercase tracking-wider block mb-2", children: Y === "en_to_ch" ? "\u984C\u76EE\u7D66\u82F1\u6587 \u2794 \u8ACB\u62D6\u62FD\u4E2D\u6587\u610F\u601D\u7684\u5927\u767D\u9D5D" : "\u984C\u76EE\u7D66\u4E2D\u6587 \u2794 \u8ACB\u62D6\u62FD\u82F1\u6587\u55AE\u8A5E\u7684\u5927\u767D\u9D5D" }), n.jsxs("h3", { className: "text-3xl font-black text-slate-800 flex items-center gap-2", children: [n.jsx("span", { children: D == null ? void 0 : D.emoji }), n.jsx("span", { className: "text-[#FF2493] px-6 py-2 bg-white border-2 border-[#FFB6C1] rounded-full shadow-md font-extrabold", children: Y === "en_to_ch" ? D == null ? void 0 : D.english : D == null ? void 0 : D.chinese })] })] }), n.jsxs("div", { className: "grid grid-cols-12 gap-4 items-stretch relative min-h-[460px]", children: [n.jsxs("div", { className: "col-span-12 md:col-span-3 bg-[rgba(255,105,180,0.15)] border-4 border-[#FF69B4] rounded-[25px] p-4 md:p-5 flex flex-col items-center justify-between text-center shadow-lg relative overflow-hidden", children: [n.jsx("div", { className: "absolute top-1 right-2 text-[#FF69B4]/30 text-4xl select-none", children: "\u{1F9FA}" }), n.jsxs("div", { children: [n.jsx("span", { className: "text-xs font-black text-[#FF1493] bg-white px-3 py-1.5 rounded-full border border-[#FF69B4] shadow-sm", children: "\u{1F9F8} TEAM PINK (A)" }), n.jsxs("div", { className: "text-3xl font-extrabold text-[#FF1493] mt-3 select-none", children: [Z, " ", n.jsx("span", { className: "text-xs", children: "PTS" })] })] }), n.jsxs("div", { className: "w-full flex flex-col items-center justify-center my-6 py-4 bg-white/85 rounded-2xl border-2 border-[#FFB6C1] shadow-inner", children: [n.jsx("span", { className: "text-7xl block animate-bounce filter drop-shadow", children: "\u{1F9FA}" }), n.jsx("p", { className: "text-[10px] text-pink-700 font-extrabold mt-2", children: "\u5C07\u767D\u9D5D\u671D\u6B64\u62D6\u62C9\u5F97\u5206" })] }), n.jsx("div", { className: "text-[10px] text-pink-600 font-bold", children: "\u2728 \u5DE6\u968A\u5C08\u5C6C\u5F97\u5206\u7C43 \u{1F388}" })] }), n.jsxs("div", { className: "col-span-12 md:col-span-6 bg-[#FFF5F7] rounded-[25px] p-4 border-2 border-[#FFB6C1] flex flex-col justify-center relative", children: [n.jsx("div", { className: "grid grid-cols-3 gap-3", children: ne.map((E) => {
    E.word.id, D == null || D.id;
    const $ = Y === "en_to_ch" ? E.word.chinese : E.word.english, ae = H === E.index, _e = ae ? { position: "fixed", left: `${z.x - J.x}px`, top: `${z.y - J.y}px`, transform: "scale(1.15) rotate(-3deg)", zIndex: 1e3, pointerEvents: "none" } : { transform: `translate(${E.xOffset}px, ${E.yOffset}px)` };
    return n.jsxs("div", { onPointerDown: (Re) => ue(Re, E.index), onPointerMove: W, onPointerUp: S, className: `bg-white rounded-[20px] p-3 border-3 border-dashed border-[#4FC3F7] hover:border-[#1E90FF] text-slate-800 shadow-sm transition-shadow flex flex-col items-center justify-center select-none text-center cursor-move relative min-h-[120px] ${ae ? "shadow-2xl" : "hover:shadow-md animate-wobble"}`, style: _e, children: [n.jsxs("div", { className: "text-4xl mb-1.5 flex flex-col items-center select-none relative", children: [n.jsx("span", { className: "animate-bounce inline-block pointer-events-none", children: "\u{1F9A2}" }), n.jsx("span", { className: "absolute bottom-0 text-[10px] scale-75 select-none pointer-events-none", children: "\u{1F397}\uFE0F" })] }), n.jsxs("div", { className: "w-full", children: [n.jsx("span", { className: "block font-black text-[12px] md:text-[13px] text-[#4A4A4A] break-words leading-tight bg-[#FFF9C4]/60 border border-yellow-200 py-1 px-1 rounded-lg", children: $ }), n.jsx("span", { className: "text-[10px] text-cyan-600 font-extrabold select-none mt-0.5 block", children: E.word.emoji })] }), n.jsxs("div", { className: "mt-2 flex gap-1 w-full justify-between pointer-events-auto", children: [n.jsx("button", { onPointerDown: (Re) => Re.stopPropagation(), onClick: () => C(E, "A"), className: "px-1 py-0.5 bg-pink-100 hover:bg-pink-200 border border-pink-300 rounded text-[9px] text-pink-700 font-bold cursor-pointer font-sans", title: "\u6295\u5165\u5DE6\u7C43", children: "\u6295A \u{1F9FA}" }), n.jsx("button", { onPointerDown: (Re) => Re.stopPropagation(), onClick: () => C(E, "B"), className: "px-1 py-0.5 bg-sky-100 hover:bg-sky-200 border border-sky-300 rounded text-[9px] text-sky-700 font-bold cursor-pointer font-sans", title: "\u6295\u5165\u53F3\u7C43", children: "\u6295B \u{1F9FA}" })] })] }, E.index);
  }) }), n.jsx("div", { className: "mt-4 text-center", children: n.jsx("span", { className: "text-[11px] bg-white text-[#1E90FF] px-3 py-1.5 rounded-full border-2 border-[#4FC3F7] font-bold block shadow-sm", children: "\u2B50 \u5927\u767D\u9D5D\u5011\u6B63\u5728\u8349\u5730\u4E0A\u5FEB\u6A02\u8E31\u6B65\uFF01\u62D6\u8457\u5408\u9069\u7684\u767D\u9D5D\u6ED1\u9032\u5169\u5074\u7684\u300C\u5927\u63D0\u7C43\u300D\u4E2D\u63D0\u4EA4\u60A8\u7684\u7B54\u6848 \u{1F380}" }) })] }), n.jsxs("div", { className: "col-span-12 md:col-span-3 bg-[rgba(30,144,255,0.15)] border-4 border-[#1E90FF] rounded-[25px] p-4 md:p-5 flex flex-col items-center justify-between text-center shadow-lg relative overflow-hidden", children: [n.jsx("div", { className: "absolute top-1 left-2 text-[#1E90FF]/25 text-4xl select-none", children: "\u{1F9FA}" }), n.jsxs("div", { children: [n.jsx("span", { className: "text-xs font-black text-[#1E90FF] bg-white px-3 py-1.5 rounded-full border border-[#1E90FF] shadow-sm", children: "\u{1F9F8} TEAM BLUE (B)" }), n.jsxs("div", { className: "text-3xl font-extrabold text-[#1E90FF] mt-3 select-none text-center", children: [I, " ", n.jsx("span", { className: "text-xs", children: "PTS" })] })] }), n.jsxs("div", { className: "w-full flex flex-col items-center justify-center my-6 py-4 bg-white/80 rounded-2xl border-2 border-sky-300 shadow-inner", children: [n.jsx("span", { className: "text-7xl block animate-bounce filter drop-shadow", children: "\u{1F9FA}" }), n.jsx("p", { className: "text-[10px] text-sky-700 font-extrabold mt-2", children: "\u5C07\u767D\u9D5D\u671D\u6B64\u62D6\u62C9\u63D0\u4EA4\u5206\u6578" })] }), n.jsx("div", { className: "text-[10px] text-[#1E90FF] font-bold", children: "\u2728 \u53F3\u968A\u5C08\u5C6C\u5F97\u5206\u7C43 \u{1F388}" })] })] }), n.jsx("div", { className: "mt-6 text-center", children: n.jsx("button", { onClick: () => T(false), className: "px-5 py-2.5 bg-slate-400 border-b-4 border-slate-600 text-white font-bold text-xs rounded-full hover:bg-slate-500 transition cursor-pointer", children: "\u653E\u68C4\u6B64\u5834\uFF0C\u56DE\u5230\u6700\u521D" }) })] });
}
function bg({ onBack: f }) {
  const [h, d] = y.useState("All"), [o, T] = y.useState(false), [N, B] = y.useState([]), [U, ne] = y.useState([]), [ee, D] = y.useState(0), [b, Y] = y.useState(0), [O, Z] = y.useState(null), [L, I] = y.useState(null), [X, K] = y.useState(false), [oe, H] = y.useState(""), se = ol, J = (q) => {
    D(0), Y(0), Z(null), I(null), K(false), H(""), T(true), G(q);
  }, G = (q) => {
    let w = Nl(q);
    w.length < 6 && (w = We);
    const P = [...w].sort(() => Math.random() - 0.5).slice(0, 6), ue = [...w].sort(() => Math.random() - 0.5).slice(0, 6), W = (S, A) => {
      const C = [];
      return S.forEach((E) => {
        C.push({ id: `${E.id}_en_${A}`, wordId: E.id, text: E.english, type: "english", emoji: E.emoji, isEliminated: false }), C.push({ id: `${E.id}_ch_${A}`, wordId: E.id, text: E.chinese, type: "chinese", isEliminated: false });
      }), C.sort(() => Math.random() - 0.5);
    };
    B(W(P, "A")), ne(W(ue, "B"));
  }, z = (q) => {
    if (!q.isEliminated) if (O === null) Z(q);
    else {
      if (O.id === q.id) {
        Z(null);
        return;
      }
      if (O.wordId === q.wordId && O.type !== q.type) {
        ut(), D((P) => P + 10);
        const w = N.map((P) => P.id === O.id || P.id === q.id ? { ...P, isEliminated: true } : P);
        B(w), Z(null), w.every((P) => P.isEliminated) && (H("\u{1F534} \u746A\u5229\u6B50 (P1) \u7387\u5148\u901A\u95DC\u677F\u584A\uFF01"), setTimeout(() => K(true), 1200));
      } else lt(), Z(q);
    }
  }, ie = (q) => {
    if (!q.isEliminated) if (L === null) I(q);
    else {
      if (L.id === q.id) {
        I(null);
        return;
      }
      if (L.wordId === q.wordId && L.type !== q.type) {
        ut(), Y((P) => P + 10);
        const w = U.map((P) => P.id === L.id || P.id === q.id ? { ...P, isEliminated: true } : P);
        ne(w), I(null), w.every((P) => P.isEliminated) && (H("\u{1F7E2} \u8DEF\u6613\u5409 (P2) \u7387\u5148\u901A\u95DC\u677F\u584A\uFF01"), setTimeout(() => K(true), 1200));
      } else lt(), I(q);
    }
  };
  return o ? X ? n.jsxs("div", { className: "w-full bg-white p-8 rounded-3xl border-4 border-black text-center max-w-xl mx-auto shadow-[6px_6px_0px_#000] relative overflow-hidden", children: [n.jsx(Bl, { className: "w-20 h-20 text-yellow-400 fill-yellow-200 mx-auto mb-4 animate-bounce" }), n.jsx("h2", { className: "text-3xl font-black text-[#E52521] mb-2", style: { textShadow: "1px 1px 0px #000" }, children: "\u{1F389} \u96D9\u4EBA\u6D88\u6D88\u6A02\u5C0D\u6C7A\u7D50\u675F\uFF01 \u{1F389}" }), n.jsxs("div", { className: "bg-[#FFF8E7] border-4 border-black p-6 rounded-3xl my-6", children: [n.jsx("p", { className: "text-xs font-black text-stone-500 uppercase tracking-widest font-pixel", children: "\u{1F3C6} DUEL RESULT \u{1F3C6}" }), n.jsx("h3", { className: "text-2xl font-black text-stone-900 mt-2 mb-3", children: oe || "\u7CBE\u5F69\u7684\u5C0D\u6297\uFF01" }), n.jsxs("div", { className: "grid grid-cols-2 gap-4 mt-4 text-sm font-black border-t-2 border-black/10 pt-4", children: [n.jsxs("div", { className: "text-[#E52521]", children: ["\u{1F534} \u746A\u5229\u6B50 (P1): ", ee, " \u5206", n.jsxs("p", { className: "text-[10px] text-stone-400", children: ["\u6D88\u9664 ", ee / 10, " \u7D44"] })] }), n.jsxs("div", { className: "text-[#00A24A]", children: ["\u{1F7E2} \u8DEF\u6613\u5409 (P2): ", b, " \u5206", n.jsxs("p", { className: "text-[10px] text-stone-400", children: ["\u6D88\u9664 ", b / 10, " \u7D44"] })] })] })] }), n.jsxs("div", { className: "flex justify-center gap-3", children: [n.jsxs("button", { onClick: () => T(false), className: "mario-btn mario-btn-yellow text-stone-900 px-6 py-2.5 text-xs cursor-pointer", children: [n.jsx(jt, { className: "w-4 h-4 inline-block mr-1" }), n.jsx("span", { children: "\u91CD\u65B0\u9078\u984C" })] }), n.jsx("button", { onClick: f, className: "mario-btn mario-btn-red text-white px-6 py-2.5 text-xs cursor-pointer", children: "\u{1F3E0} \u8FD4\u56DE\u57CE\u5821\u5927\u5EF3" })] })] }) : n.jsxs("div", { className: "w-full max-w-7xl mx-auto bg-white p-6 rounded-3xl border-4 border-black shadow-[6px_6px_0px_#000000] relative", children: [n.jsxs("div", { className: "flex justify-between items-center mb-6 bg-[#FFF8E7] p-3 rounded-2xl border-3 border-black shadow-inner", children: [n.jsxs("button", { onClick: () => T(false), className: "px-4 py-1.5 bg-white border-2 border-black rounded-lg text-xs font-black text-stone-700 hover:bg-stone-50 flex items-center gap-1 cursor-pointer transition", children: [n.jsx(Lt, { className: "w-3.5 h-3.5" }), n.jsx("span", { children: "\u91CD\u65B0\u9078\u64C7\u984C\u76EE" })] }), n.jsx("h3", { className: "text-sm md:text-base font-black text-stone-900 tracking-wider flex items-center gap-1 font-pixel", children: n.jsx("span", { children: "\u{1F9F1} DUEL MATCHING SPLIT-BOARD \u{1F9F1}" }) }), n.jsxs("div", { className: "text-stone-500 font-bold text-xs uppercase tracking-tight flex items-center gap-1", children: [n.jsx(Yx, { className: "w-4 h-4 text-yellow-500 animate-bounce" }), n.jsx("span", { children: "\u6BD4\u62FC\u6D88\u9664\u901F\u5EA6\uFF01" })] })] }), n.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [n.jsxs("div", { className: "bg-[#FFFEEF] border-4 border-[#E52521] p-5 rounded-2xl shadow-[4px_4px_0px_#E52521]", children: [n.jsxs("div", { className: "flex justify-between items-center pb-3 mb-4 border-b-3 border-black", children: [n.jsxs("div", { className: "flex items-center gap-2", children: [n.jsx("span", { className: "text-3xl animate-bounce", children: "\u{1F534}" }), n.jsxs("div", { children: [n.jsx("h4", { className: "text-sm font-black text-[#E52521]", children: "PLAYER 1 (\u746A\u5229\u6B50)" }), n.jsx("p", { className: "text-[10px] text-stone-500", children: "\u7D05\u968A\u6D88\u6D88\u6A02\u677F\u584A" })] })] }), n.jsx("div", { className: "text-right", children: n.jsxs("span", { className: "text-2xl font-black text-[#E52521]", children: [ee, " ", n.jsx("span", { className: "text-xs", children: "PTS" })] }) })] }), n.jsxs("div", { className: "mb-3 bg-white p-2 rounded-lg border-2 border-dashed border-stone-300 text-center text-xs font-bold text-stone-700", children: ["\u7576\u524D\u9078\u53D6\u5361\u7247: ", n.jsx("span", { className: "text-[#E52521] font-black", children: O ? O.text : "\u5C1A\u672A\u9EDE\u64CA" })] }), n.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-4 gap-3 bg-stone-100 p-3 rounded-xl border-3 border-black", children: N.map((q) => {
    const w = q.isEliminated, F = (O == null ? void 0 : O.id) === q.id;
    return n.jsx("div", { onClick: () => z(q), className: `aspect-square p-2 rounded-xl flex flex-col justify-center items-center text-center select-none cursor-pointer transition-all border-3 ${w ? "bg-transparent border-dashed border-stone-300 text-stone-300 opacity-20 scale-75 pointer-events-none" : F ? "bg-[#FED42C] border-black text-black scale-102 shadow-[2px_2px_0px_#000] rotate-2" : "bg-white hover:bg-red-50 border-[#E52521] text-stone-850 hover:scale-102 active:scale-95"}`, children: !w && n.jsxs(n.Fragment, { children: [q.emoji && n.jsx("span", { className: "text-2xl mb-1", children: q.emoji }), n.jsx("span", { className: "font-extrabold text-[10px] sm:text-xs tracking-tight break-words leading-tight w-full pointer-events-none", children: q.text })] }) }, q.id);
  }) })] }), n.jsxs("div", { className: "bg-[#FFFEEF] border-4 border-[#00A24A] p-5 rounded-2xl shadow-[4px_4px_0px_#00024A]", children: [n.jsxs("div", { className: "flex justify-between items-center pb-3 mb-4 border-b-3 border-black", children: [n.jsxs("div", { className: "flex items-center gap-2", children: [n.jsx("span", { className: "text-3xl animate-bounce", children: "\u{1F7E2}" }), n.jsxs("div", { children: [n.jsx("h4", { className: "text-sm font-black text-[#00A24A]", children: "PLAYER 2 (\u8DEF\u6613\u5409)" }), n.jsx("p", { className: "text-[10px] text-stone-500", children: "\u7DA0\u968A\u6D88\u6D88\u6A02\u677F\u584A" })] })] }), n.jsx("div", { className: "text-right", children: n.jsxs("span", { className: "text-2xl font-black text-[#00A24A]", children: [b, " ", n.jsx("span", { className: "text-xs", children: "PTS" })] }) })] }), n.jsxs("div", { className: "mb-3 bg-white p-2 rounded-lg border-2 border-dashed border-stone-300 text-center text-xs font-bold text-stone-700", children: ["\u7576\u524D\u9078\u53D6\u5361\u7247: ", n.jsx("span", { className: "text-[#00A24A] font-black", children: L ? L.text : "\u5C1A\u672A\u9EDE\u64CA" })] }), n.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-4 gap-3 bg-stone-100 p-3 rounded-xl border-3 border-black", children: U.map((q) => {
    const w = q.isEliminated, F = (L == null ? void 0 : L.id) === q.id;
    return n.jsx("div", { onClick: () => ie(q), className: `aspect-square p-2 rounded-xl flex flex-col justify-center items-center text-center select-none cursor-pointer transition-all border-3 ${w ? "bg-transparent border-dashed border-stone-300 text-stone-300 opacity-20 scale-75 pointer-events-none" : F ? "bg-[#FED42C] border-black text-black scale-102 shadow-[2px_2px_0px_#000] -rotate-2" : "bg-white hover:bg-green-50 border-[#00A24A] text-stone-850 hover:scale-102 active:scale-95"}`, children: !w && n.jsxs(n.Fragment, { children: [q.emoji && n.jsx("span", { className: "text-2xl mb-1", children: q.emoji }), n.jsx("span", { className: "font-extrabold text-[10px] sm:text-xs tracking-tight break-words leading-tight w-full pointer-events-none", children: q.text })] }) }, q.id);
  }) })] })] }), n.jsx("div", { className: "mt-8 text-center border-t-4 border-black pt-5", children: n.jsx("button", { onClick: f, className: "mario-btn mario-btn-red px-6 py-2.5 text-xs inline-flex items-center gap-1 cursor-pointer", children: n.jsx("span", { children: "\u96E2\u958B\u904A\u6232\uFF0C\u8FD4\u56DE\u5927\u5EF3" }) }) })] }) : n.jsxs("div", { className: "w-full bg-[#FFF8E7] p-8 rounded-3xl border-4 border-black text-center relative max-w-2xl mx-auto shadow-[6px_6px_0px_#000000]", children: [n.jsx("div", { className: "absolute top-3 left-3 text-3xl animate-spin", children: "\u{1F9F1}" }), n.jsx("div", { className: "absolute top-3 right-3 text-3xl animate-bounce", children: "\u{1F996}" }), n.jsx("h2", { className: "text-3xl font-black text-[#00A24A] mb-2 flex items-center justify-center gap-2", style: { textShadow: "1.5px 1.5px 0px #000" }, children: n.jsx("span", { children: "\u{1F9F1} Duo Match \u96D9\u4EBA\u5206\u5C4F\u6D88\u6D88\u6A02" }) }), n.jsxs("p", { className: "text-stone-700 font-bold text-sm mb-6 leading-relaxed bg-white/70 p-4 rounded-xl border-2 border-black inline-block mt-2", children: ["\u{1F344} \u5C08\u70BA\u96D9\u4EBA\u5C0D\u6230\u5168\u65B0\u8A2D\u8A08\uFF01", n.jsx("br", {}), "\u5B78\u751F\u5728\u540C\u5C4F\u4E2D\u64C1\u6709", n.jsx("span", { className: "text-[#E52521] font-black", children: " \u5169\u7D44\u5404\u81EA\u7368\u7ACB " }), "\u7684\u6D88\u6D88\u6A02\u7248\u9762\uFF0812\u500B\u5361\u7247\uFF09\u3002", n.jsx("br", {}), "\u{1F534} P1 \u5C08\u5C6C\u7D05\u968A\u7248\u9762\uFF0C\u{1F7E2} P2 \u5C08\u5C6C\u7DA0\u968A\u7248\u9762\uFF01", n.jsx("br", {}), "\u96D9\u65B9\u5404\u81EA\u9EDE\u6309\u914D\u5C0D\u81EA\u5DF1\u9762\u524D\u7684\u4E2D\u82F1\u55AE\u8A5E\uFF0C\u770B\u8AB0\u80FD\u6700\u5FEB\u5168\u90E8\u6D88\u9664\uFF01"] }), n.jsxs("div", { className: "bg-white p-6 rounded-2xl border-4 border-black mb-6 shadow-[4px_4px_0px_#000000]", children: [n.jsx("label", { className: "block text-[#E52521] font-black text-base mb-3", children: "\u{1F3AF} \u8ACB\u9078\u64C7\u6D88\u6D88\u6A02\u55AE\u8A5E\u7BC4\u570D\uFF1A" }), n.jsx("div", { className: "flex flex-wrap justify-center gap-2", children: se.map((q) => n.jsx("button", { onClick: () => d(q), className: `px-4 py-2 rounded-xl font-black text-xs md:text-sm border-2 transition-all cursor-pointer ${h === q ? "bg-[#FED42C] border-black text-black scale-105 shadow-[2px_2px_0px_#000000]" : "bg-white hover:bg-stone-50 border-stone-300 text-stone-750"}`, children: q === "All" ? "\u{1F31F} \u5168\u90E8\u55AE\u8A5E" : q }, q)) })] }), n.jsxs("div", { className: "flex justify-center gap-4", children: [n.jsx("button", { onClick: f, className: "mario-btn mario-btn-gray px-6 py-3 cursor-pointer text-sm", children: "\u8FD4\u56DE\u9078\u55AE" }), n.jsx("button", { onClick: () => J(h), className: "mario-btn mario-btn-red px-8 py-3 text-sm cursor-pointer", children: n.jsx("span", { children: "\u{1F680} \u642D\u5EFA\u5206\u5C4F\u6230\u5834 \u{1F9F1}" }) })] })] });
}
const hg = [{ emoji: "\u{1F468}\u200D\u{1F527}", name: "Mario / \u746A\u5229\u6B50", character: "mario", color: "text-white bg-[#E52521]", badgeBg: "bg-[#E52521]/15", border: "border-[#E52521]" }, { emoji: "\u{1F9D1}\u200D\u{1F527}", name: "Luigi / \u8DEF\u6613\u5409", character: "luigi", color: "text-white bg-[#00A24A]", badgeBg: "bg-[#00A24A]/15", border: "border-[#00A24A]" }, { emoji: "\u{1F478}", name: "Peach / \u78A7\u59EC\u516C\u4E3B", character: "peach", color: "text-white bg-[#FF69B4]", badgeBg: "bg-[#FF69B4]/15", border: "border-[#FF69B4]" }, { emoji: "\u{1F344}", name: "Toad / \u5947\u8AFE\u6BD4\u5967", character: "toad", color: "text-black bg-[#FED42C]", badgeBg: "bg-[#FED42C]/15", border: "border-black" }];
function Rx({ onBack: f, playersCount: h }) {
  const [d, o] = y.useState("All"), [T, N] = y.useState(false), [B, U] = y.useState([]), [ne, ee] = y.useState(false), D = ol, b = (O) => {
    let Z = Nl(O);
    Z.length < 15 && (Z = We);
    const L = [];
    for (let I = 0; I < h; I++) {
      const X = hg[I];
      let K = [...Z].sort(() => Math.random() - 0.5).slice(0, 10);
      while (K.length < 10 && Z.length > 0) {
        K.push(Z[Math.floor(Math.random() * Z.length)]);
      }
      const oe = K[0];
      const se = [...Z.filter((G) => G.id !== oe.id)].sort(() => Math.random() - 0.5).slice(0, 3);
      const J = [oe, ...se].sort(() => Math.random() - 0.5);
      L.push({ id: I + 1, name: X.name, avatar: X.emoji, character: X.character, color: X.color, badgeBg: X.badgeBg, borderColor: X.border, rung: 0, currentQuestionIndex: 0, isFinished: false, score: 0, personalQuestions: K, optionsForCurrent: J });
    }
    U(L), ee(false), N(true);
  }, Y = (O, Z) => {
    U((L) => {
      const I = L.map((K) => {
        if (K.id !== O || K.isFinished) return K;
        const oe = K.personalQuestions[K.currentQuestionIndex], H = Z === oe.id;
        let se = K.rung, J = K.score;
        H ? (se = Math.min(K.rung + 1, 10), J += 10, ut()) : lt();
        const G = K.currentQuestionIndex + 1, z = G >= 10;
        let ie = [];
        if (!z) {
          const q = K.personalQuestions[G];
          let w = We.filter((ue) => d === "All" || ue.chapter === d);
          w.length < 5 && (w = We);
          const P = [...w.filter((ue) => ue.id !== q.id)].sort(() => Math.random() - 0.5).slice(0, 3);
          ie = [q, ...P].sort(() => Math.random() - 0.5);
        }
        return { ...K, rung: se, score: J, currentQuestionIndex: G, isFinished: z, optionsForCurrent: ie };
      });
      return I.every((K) => K.isFinished) && ee(true), I;
    });
  };
  return T ? n.jsxs("div", { className: "w-full max-w-7xl mx-auto bg-white p-5 rounded-3xl border-4 border-black shadow-[6px_6px_0px_#000000] relative", children: [n.jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-center mb-6 bg-[#FFF8E7] p-3 rounded-2xl border-3 border-black gap-2 shadow-inner", children: [n.jsxs("button", { onClick: () => N(false), className: "px-4 py-1.5 bg-white border-2 border-black rounded-lg text-xs font-black text-[#E52521] hover:bg-red-50 flex items-center gap-1 cursor-pointer transition", children: [n.jsx(Lt, { className: "w-3 h-3" }), n.jsx("span", { children: "\u91CD\u65B0\u9078\u64C7\u7BC4\u570D / \u73A9\u5BB6\u6578" })] }), n.jsx("h3", { className: "text-sm md:text-base font-black text-stone-900 tracking-wider flex items-center gap-1 font-pixel", children: n.jsx("span", { children: "\u{1F3AE} LADDER CLIMB DUEL \u{1F3AE}" }) }), ne ? n.jsxs("button", { onClick: () => b(d), className: "px-4 py-1.5 bg-[#00A24A] hover:bg-[#02c35a] border-2 border-black text-white font-black text-xs rounded-lg flex items-center gap-1 cursor-pointer shadow-[2px_2px_0px_#000]", children: [n.jsx(jt, { className: "w-3.5 h-3.5" }), n.jsx("span", { children: "\u91CD\u65B0\u958B\u4E00\u5C40 \u{1F680}" })] }) : n.jsx("div", { className: "bg-red-100 border border-[#E52521] px-3 py-1 rounded-xl text-xs font-bold text-[#E52521]", children: "\u6311\u6230\u4E2D... \u26A1" })] }), n.jsx("div", { className: `grid gap-5 ${h === 3 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"} items-stretch`, children: B.map((O) => {
    const Z = O.personalQuestions[O.currentQuestionIndex], L = O.optionsForCurrent, I = O.rung, X = Array.from({ length: 11 }, (K, oe) => 10 - oe);
    return n.jsxs("div", { className: `p-4 rounded-2xl border-4 border-black flex flex-col justify-between shadow-[4px_4px_0px_#000000] relative bg-[#FFFEEF] ${O.badgeBg}`, children: [n.jsxs("div", { className: "flex items-center justify-between border-b-2 border-black pb-2 mb-3 bg-white p-2 rounded-xl border-2", children: [n.jsxs("div", { className: "flex items-center gap-1.5", children: [n.jsx(Hl, { character: O.character, animation: O.isFinished ? "win" : "idle", size: 36 }), n.jsxs("div", { className: "text-xs font-black text-stone-900 leading-tight", children: [n.jsxs("span", { className: "block text-stone-400 font-pixel text-[8px]", children: ["PLAYER ", O.id] }), n.jsx("span", { children: O.name.split("/")[0] })] })] }), n.jsx("div", { className: "text-right", children: n.jsxs("span", { className: "block text-lg font-black text-[#E52521] leading-none", children: [O.score, n.jsx("span", { className: "text-[10px]", children: " pts" })] }) })] }), n.jsxs("div", { className: "bg-[#5C94FC] rounded-xl p-3 border-3 border-black flex-grow flex items-center justify-center relative min-h-[260px] shadow-inner overflow-hidden", children: [n.jsx("div", { className: "absolute top-2 left-2 text-white/40 text-[10px] uppercase font-pixel tracking-tighter select-none", children: "sky-zone" }), n.jsx("div", { className: "absolute top-1/4 right-3 bg-white/50 w-8 h-3 rounded-full blur-[1px]" }), n.jsx("div", { className: "absolute top-2/3 left-4 bg-white/50 w-10 h-4 rounded-full blur-[1px]" }), n.jsx("div", { className: "absolute left-1/3 w-2.5 bg-amber-700 inset-y-4 rounded border border-black shadow" }), n.jsx("div", { className: "absolute right-1/3 w-2.5 bg-amber-700 inset-y-4 rounded border border-black shadow" }), n.jsx("div", { className: "w-full h-full flex flex-col justify-between py-4 relative z-10", children: X.map((K) => {
      const oe = I === K;
      return n.jsxs("div", { className: "h-5 flex items-center justify-center relative w-full", children: [n.jsx("div", { className: "absolute left-1/3 right-1/3 h-1.5 bg-amber-600 border-y border-black" }), n.jsx("span", { className: "absolute left-3 text-[8px] font-pixel text-white leading-none", children: K === 10 ? "GOAL" : `#${K}` }), oe && n.jsx("div", { className: "absolute animate-[bounce_1s_infinite] z-20 flex flex-col items-center", children: K === 10 ? n.jsxs("div", { className: "flex flex-col items-center scale-110", children: [n.jsx(mp, { className: "w-4 h-4 text-yellow-300 fill-yellow-200 animate-spin mb-1" }), n.jsx(Hl, { character: O.character, animation: "win", size: 36 })] }) : n.jsx(Hl, { character: O.character, animation: "climb", size: 32 }) })] }, K);
    }) })] }), n.jsx("div", { className: "mt-4 pt-3 border-t-2 border-black", children: O.isFinished ? n.jsxs("div", { className: "bg-[#FFFEEF] border-3 border-black text-center p-3 rounded-xl flex flex-col items-center justify-center min-h-[160px] text-stone-900 shadow", children: [n.jsx(Bl, { className: "w-9 h-9 text-amber-500 fill-amber-200 animate-bounce mb-1" }), n.jsx("span", { className: "text-xs font-black text-[#00A24A]", children: "\u9806\u5229\u767B\u9802\uFF01\u{1F3C6}" }), n.jsx("span", { className: "text-[10px] text-stone-500 mt-1", children: "\u606D\u559C\u901A\u95DC\u5EAB\u5DF4\u6311\u6230\uFF01" })] }) : n.jsxs("div", { className: "bg-white p-2.5 rounded-xl border-3 border-black flex flex-col gap-2.5 min-h-[170px] justify-between shadow-[2px_2px_0px_#000]", children: [n.jsxs("div", { className: "text-center bg-[#FFF8E7] p-2 rounded-lg border-2 border-black", children: [n.jsxs("span", { className: "text-[8px] font-pixel text-[#E52521] block", children: ["STAIR ", O.currentQuestionIndex + 1, " / 10"] }), n.jsxs("span", { className: "text-xs md:text-sm font-black text-stone-800 tracking-tight leading-tight block mt-1", children: [Z == null ? void 0 : Z.emoji, " ", Z == null ? void 0 : Z.chinese] })] }), n.jsx("div", { className: "grid grid-cols-2 gap-1.5", children: L.map((K) => n.jsx("button", { onClick: () => Y(O.id, K.id), className: "py-1.5 bg-stone-50 hover:bg-[#FED42C] border-2 border-black text-[9px] md:text-[10px] font-black text-stone-900 rounded-lg text-center transition active:scale-95 cursor-pointer leading-tight truncate px-1 text-wrap", children: K.english }, K.id)) })] }) })] }, O.id);
  }) }), n.jsx("div", { className: "mt-8 text-center border-t-4 border-black pt-5", children: n.jsx("button", { onClick: f, className: "mario-btn mario-btn-red px-6 py-2.5 text-xs inline-flex items-center gap-1 cursor-pointer", children: n.jsx("span", { children: "\u9000\u51FA\u6311\u6230\uFF0C\u8FD4\u56DE\u5927\u5EF3" }) }) })] }) : n.jsxs("div", { className: "w-full bg-[#FFF8E7] p-8 rounded-3xl border-4 border-black text-center relative max-w-2xl mx-auto shadow-[6px_6px_0px_#000000]", children: [n.jsx("div", { className: "absolute top-3 left-3 text-3xl animate-bounce", children: "\u{1FA9C}" }), n.jsx("div", { className: "absolute top-3 right-3 text-3xl animate-spin", children: "\u{1FA99}" }), n.jsx("h2", { className: "text-3xl font-black text-[#E52521] mb-2 flex items-center justify-center gap-2", style: { textShadow: "1.5px 1.5px 0px #000" }, children: n.jsxs("span", { children: ["\u{1FA9C} ", h, "\u4EBA\u722C\u722C\u68AF\u5927\u8CFD (4\u500B\u9078\u9805)"] }) }), n.jsxs("p", { className: "text-stone-700 font-bold text-sm mb-6 leading-relaxed bg-white/70 p-4 rounded-xl border-2 border-black inline-block mt-2", children: ["\u{1F344} \u591A\u4EBA\u8DA3\u5473\u722C\u68AF\u64C2\u53F0\u8CFD\uFF01Mario \u5192\u96AA\u98A8\u683C\uFF01", n.jsx("br", {}), "\u984C\u76EE\u7D66\u4E2D\u6587\u53CA Emojis\uFF0C\u73A9\u5BB6\u5F9E ", n.jsx("span", { className: "text-[#E52521] font-extrabold", children: "4\u500B\u9078\u9805" }), " \u4E2D\u627E\u51FA\u82F1\u6587\uFF0C\u7B54\u5C0D\u4EBA\u5076\u5C31\u6703\u5411\u4E0A\u722C\u4E00\u683C\uFF01", n.jsx("br", {}), "\u2B50 \u7576\u6709\u4EBA\u767B\u9802\u6642\uFF0C\u5176\u4ED6\u4EBA\u4F9D\u820A\u53EF\u4EE5\u7E7C\u7E8C\u4F5C\u7B54\u6311\u6230\uFF01"] }), n.jsxs("div", { className: "bg-white p-6 rounded-2xl border-4 border-black mb-6 shadow-[4px_4px_0px_#000000]", children: [n.jsx("label", { className: "block text-[#0043A4] font-black text-base mb-3 flex items-center justify-center gap-1", children: n.jsx("span", { children: "\u2B50\uFE0F \u8ACB\u9078\u64C7\u55AE\u8A5E\u7BC4\u570D \u2B50\uFE0F" }) }), n.jsx("div", { className: "flex flex-wrap justify-center gap-2", children: D.map((O) => n.jsx("button", { onClick: () => o(O), className: `px-4 py-2 rounded-xl font-black text-xs md:text-sm border-2 transition-all cursor-pointer ${d === O ? "bg-[#FED42C] border-black text-black scale-105 shadow-[2px_2px_0px_#000000]" : "bg-white hover:bg-stone-50 border-stone-300 text-stone-750"}`, children: O === "All" ? "\u{1F31F} \u5168\u90E8\u55AE\u8A5E" : O }, O)) })] }), n.jsxs("div", { className: "flex justify-center gap-4", children: [n.jsx("button", { onClick: f, className: "mario-btn mario-btn-gray px-6 py-3 cursor-pointer text-sm", children: "\u8FD4\u56DE\u9078\u55AE" }), n.jsx("button", { onClick: () => b(d), className: "mario-btn mario-btn-red px-8 py-3 text-sm cursor-pointer", children: n.jsx("span", { children: "\u{1F680} \u9032\u5165\u8003\u9A57 \u{1F344}" }) })] })] });
}
function As({ type: f, size: h = 36 }) {
  return f === "goomba" ? n.jsxs("svg", { width: h, height: h, viewBox: "0 0 32 32", className: "drop-shadow", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [n.jsx("path", { d: "M6 18C6 11 10 8 16 8C22 8 26 11 26 18C26 21 24 23 21 23H11C8 23 6 21 6 18Z", fill: "#A0522D", stroke: "black", strokeWidth: "2" }), n.jsx("path", { d: "M9 17C9 14 11 13 16 13C21 13 23 14 23 17C23 20 20 21 16 21C12 21 9 20 9 17Z", fill: "#FFE4C4" }), n.jsx("path", { d: "M10 11L14 13.5", stroke: "black", strokeWidth: "2.5", strokeLinecap: "round" }), n.jsx("path", { d: "M22 11L18 13.5", stroke: "black", strokeWidth: "2.5", strokeLinecap: "round" }), n.jsx("rect", { x: "12", y: "14", width: "2", height: "4", fill: "black" }), n.jsx("rect", { x: "18", y: "14", width: "2", height: "4", fill: "black" }), n.jsx("path", { d: "M12 21L13 18L14 21", fill: "white", stroke: "black", strokeWidth: "1" }), n.jsx("path", { d: "M20 21L19 18L18 21", fill: "white", stroke: "black", strokeWidth: "1" }), n.jsx("ellipse", { cx: "11", cy: "25", rx: "4", ry: "2", fill: "#000000" }), n.jsx("ellipse", { cx: "21", cy: "25", rx: "4", ry: "2", fill: "#000000" })] }) : f === "bobomb" ? n.jsxs("svg", { width: h, height: h, viewBox: "0 0 32 32", className: "drop-shadow", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [n.jsx("path", { d: "M16 8V4", stroke: "#8B4513", strokeWidth: "2", strokeLinecap: "round" }), n.jsx("circle", { cx: "16", cy: "3", r: "2", fill: "yellow" }), n.jsx("circle", { cx: "16", cy: "18", r: "8", fill: "#2C2C2C", stroke: "black", strokeWidth: "2" }), n.jsx("rect", { x: "13", y: "14", width: "2", height: "5", rx: "1", fill: "white" }), n.jsx("rect", { x: "17", y: "14", width: "2", height: "5", rx: "1", fill: "white" }), n.jsx("rect", { x: "9", y: "24", width: "6", height: "3", rx: "1.5", fill: "#FFA500", stroke: "black", strokeWidth: "1.5" }), n.jsx("rect", { x: "17", y: "24", width: "6", height: "3", rx: "1.5", fill: "#FFA500", stroke: "black", strokeWidth: "1.5" }), n.jsx("path", { d: "M8 18H5", stroke: "#FFD700", strokeWidth: "2" }), n.jsx("path", { d: "M5 15C3.5 15 3.5 21 5 21", fill: "#FFD700", stroke: "black", strokeWidth: "1.5" })] }) : f === "koopa" ? n.jsxs("svg", { width: h, height: h, viewBox: "0 0 32 32", className: "drop-shadow", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [n.jsx("circle", { cx: "14", cy: "20", r: "7", fill: "#00A24A", stroke: "black", strokeWidth: "2" }), n.jsx("path", { d: "M9 20H19M14 15V25", stroke: "white", strokeWidth: "1" }), n.jsx("circle", { cx: "21", cy: "13", r: "5", fill: "#FED42C", stroke: "black", strokeWidth: "2" }), n.jsx("circle", { cx: "23", cy: "12", r: "1.5", fill: "black" }), n.jsx("path", { d: "M24 13C25 14 26 15 25 16C24 17 22 17 21 16", fill: "#FED42C", stroke: "black", strokeWidth: "1.5" }), n.jsx("rect", { x: "9", y: "25", width: "4", height: "4", rx: "1", fill: "#FED42C", stroke: "black", strokeWidth: "1.5" }), n.jsx("rect", { x: "15", y: "25", width: "4", height: "4", rx: "1", fill: "#FED42C", stroke: "black", strokeWidth: "1.5" })] }) : n.jsxs("svg", { width: h, height: h, viewBox: "0 0 32 32", className: "drop-shadow", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [n.jsx("path", { d: "M4 11H22C26 11 28 13 28 16C28 19 26 21 22 21H4V11Z", fill: "#1A2D37", stroke: "black", strokeWidth: "2" }), n.jsx("path", { d: "M20 13C19 13 18 14 18 16C18 18 19 19 20 19C21 19 22 18 22 16C22 14 21 13 20 13Z", fill: "white" }), n.jsx("circle", { cx: "20", cy: "16", r: "1", fill: "black" }), n.jsx("path", { d: "M12 18C10 18 10 22 13 21", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round" })] });
}
function Yo({ className: f = "", style: h = {} }) {
  return n.jsxs("svg", { className: `drop-shadow-sm select-none pointer-events-none ${f}`, style: h, width: "76", height: "40", viewBox: "0 0 64 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [n.jsx("path", { d: "M16 12H12V16H8V20H4V28H60V20H56V16H52V12H44V8H36V4H28V8H20V12H16Z", fill: "#D3EDFF" }), n.jsx("path", { d: "M16 10H14V14H10V18H6V26H58V18H54V14H50V10H42V6H34V2H30V6H22V10H16Z", fill: "white" }), n.jsx("path", { d: "M30 0H34V2H30V0ZM22 4H24V6H22V4ZM34 4H36V6H34V4ZM38 4H42V6H38V4ZM16 8H20V10H16V8ZM44 8H50V10H44V8ZM10 12H14V14H10V12ZM52 12H54V14H52V12ZM6 16H8V18H6V16ZM56 16H58V18H56V16ZM4 20H6V24H4V20ZM58 20H60V24H58V20ZM2 24H4V28H2V24ZM60 24H62V28H60V24ZM2 28H62V30H2V28Z", fill: "#000000" })] });
}
function Lo({ className: f = "", style: h = {} }) {
  return n.jsxs("svg", { className: `select-none pointer-events-none ${f}`, style: h, width: "90", height: "52", viewBox: "0 0 96 56", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [n.jsx("path", { d: "M48 4L8 44V56H88V44L48 4Z", fill: "#00A24A", stroke: "black", strokeWidth: "2" }), n.jsx("path", { d: "M48 6L12 42V54H84V42L48 6Z", fill: "#54D075" }), n.jsx("path", { d: "M48 6V54H84V42L48 6Z", fill: "#00A24A", opacity: "0.35" }), n.jsx("rect", { x: "42", y: "26", width: "3.5", height: "11", rx: "1.5", fill: "black" }), n.jsx("rect", { x: "50", y: "26", width: "3.5", height: "11", rx: "1.5", fill: "black" }), n.jsx("rect", { x: "42", y: "26", width: "2", height: "4.5", rx: "1", fill: "white" }), n.jsx("rect", { x: "50", y: "26", width: "2", height: "4.5", rx: "1", fill: "white" })] });
}
function Cs({ height: f = 48, width: h = 36, className: d = "", style: o }) {
  return n.jsxs("div", { className: `flex flex-col items-center select-none ${d}`, style: { width: h, height: f, ...o }, children: [n.jsxs("div", { className: "w-full h-4 bg-[#00A24A] border-2 border-black rounded-sm relative overflow-hidden shadow-[inset_1.5px_1.5px_0px_rgba(255,255,255,0.4)]", children: [n.jsx("div", { className: "absolute left-1 inset-y-0 w-2.5 bg-[#54D075]" }), n.jsx("div", { className: "absolute left-4 inset-y-0 w-0.5 bg-[#54D075]" }), n.jsx("div", { className: "absolute right-1.5 inset-y-0 w-2 bg-[#007030]" })] }), n.jsxs("div", { className: "border-x-2 border-b-2 border-black bg-[#008A3E] relative overflow-hidden flex-1 shadow-[inset_1.5px_-1.5px_0px_rgba(0,0,0,0.3)]", style: { width: h - 4 }, children: [n.jsx("div", { className: "absolute left-1 inset-y-0 w-2 bg-[#54D075]" }), n.jsx("div", { className: "absolute left-3.5 inset-y-0 w-0.5 bg-[#54D075]" }), n.jsx("div", { className: "absolute right-1 inset-y-0 w-2.5 bg-[#005020]" })] })] });
}
function Dx({ size: f = 18, className: h = "" }) {
  return n.jsxs("div", { className: `bg-[#D86818] border-2 border-black relative rounded shadow-[inset_1.5px_1.5px_0px_rgba(255,255,255,0.4)] ${h}`, style: { width: f, height: f }, children: [n.jsx("div", { className: "absolute top-1/2 left-0 right-0 h-0.5 bg-black" }), n.jsx("div", { className: "absolute top-0 bottom-1/2 left-1/3 w-0.5 bg-black" }), n.jsx("div", { className: "absolute top-0 bottom-1/2 left-2/3 w-0.5 bg-black" }), n.jsx("div", { className: "absolute top-1/2 bottom-0 left-1/2 w-0.5 bg-black" }), n.jsx("div", { className: "absolute top-0.5 left-0.5 right-0.5 h-0.5 bg-[#FFA060] opacity-70" }), n.jsx("div", { className: "absolute top-[55%] left-0.5 right-0.5 h-0.5 bg-[#FFA060] opacity-70" })] });
}
function pg({ size: f = 20, isBouncing: h = false, className: d = "", isEmpty: o = false }) {
  return o ? n.jsxs("div", { className: `bg-[#9C4A00] border-2 border-black rounded relative shadow-[inset_1.5px_1.5px_0px_rgba(255,255,255,0.2)] ${h ? "animate-question-bounce" : ""} ${d}`, style: { width: f, height: f }, children: [n.jsx("div", { className: "absolute top-0.5 left-0.5 w-1 h-1 bg-black rounded-full opacity-60" }), n.jsx("div", { className: "absolute top-0.5 right-0.5 w-1 h-1 bg-black rounded-full opacity-60" }), n.jsx("div", { className: "absolute bottom-0.5 left-0.5 w-1 h-1 bg-black rounded-full opacity-60" }), n.jsx("div", { className: "absolute bottom-0.5 right-0.5 w-1 h-1 bg-black rounded-full opacity-60" })] }) : n.jsxs("div", { className: `bg-[#FCBC14] border-2 border-black rounded relative select-none flex items-center justify-center shadow-[inset_1.5px_1.5px_0px_white] ${h ? "animate-question-bounce" : "animate-question-shine"} ${d}`, style: { width: f, height: f }, children: [n.jsx("div", { className: "absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-black rounded-full" }), n.jsx("div", { className: "absolute top-0.5 right-0.5 w-0.5 h-0.5 bg-black rounded-full" }), n.jsx("div", { className: "absolute bottom-0.5 left-0.5 w-0.5 h-0.5 bg-black rounded-full" }), n.jsx("div", { className: "absolute bottom-0.5 right-0.5 w-0.5 h-0.5 bg-black rounded-full" }), n.jsx("span", { className: "text-stone-900 font-extrabold text-[11px] leading-tight select-none mt-[-1px] font-sans", style: { textShadow: "1px 1px 0px #FFEA9F" }, children: "?" })] });
}
function qx({ className: f = "", style: h = {} }) {
  return n.jsx("div", { className: `w-4 h-5 bg-[#FCBC14] rounded-full border-2 border-black relative flex items-center justify-center shadow-[inset_1px_1px_0px_white] animate-coin-spin ${f}`, style: h, children: n.jsx("div", { className: "w-[2px] h-2 bg-[#A45000] rounded-sm opacity-50" }) });
}
function gg({ size: f = 26 }) {
  return n.jsxs("div", { className: "flex flex-col items-center select-none", style: { height: 42 }, children: [n.jsxs("svg", { width: f, height: f, viewBox: "0 0 32 32", className: "drop-shadow animate-bounce", style: { animationDuration: "1s" }, fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [n.jsx("circle", { cx: "16", cy: "18", r: "9", fill: "#E52521", stroke: "black", strokeWidth: "2" }), n.jsx("path", { d: "M7 18H25", stroke: "black", strokeWidth: "2.5" }), n.jsx("path", { d: "M10 18L12 14L14 18L16 14L18 18L20 14L22 18", fill: "none", stroke: "white", strokeWidth: "1.5" }), n.jsx("circle", { cx: "12", cy: "13", r: "2", fill: "white" }), n.jsx("circle", { cx: "20", cy: "13", r: "1.5", fill: "white" }), n.jsx("circle", { cx: "16", cy: "23", r: "1.8", fill: "white" }), n.jsx("rect", { x: "14", y: "27", width: "4", height: "5", fill: "#00A24A", stroke: "black", strokeWidth: "1.5" })] }), n.jsxs("div", { className: "w-8 h-4 bg-[#00A24A] border-2 border-black rounded-sm relative -mt-1 shadow-[inset_1px_1px_0px_rgba(255,255,255,0.4)] overflow-hidden", children: [n.jsx("div", { className: "absolute left-1 inset-y-0 w-1.5 bg-[#54D075]" }), n.jsx("div", { className: "absolute right-1 inset-y-0 w-1 bg-[#007030]" })] })] });
}
const vg = () => {
  try {
    const f = window.AudioContext || window.webkitAudioContext;
    if (f) {
      const h = new f(), d = h.createOscillator(), o = h.createGain();
      d.type = "sine", d.frequency.setValueAtTime(987.77, h.currentTime), d.frequency.setValueAtTime(1318.51, h.currentTime + 0.08), o.gain.setValueAtTime(0.04, h.currentTime), o.gain.exponentialRampToValueAtTime(1e-3, h.currentTime + 0.25), d.connect(o), o.connect(h.destination), d.start(), d.stop(h.currentTime + 0.3);
    }
  } catch {
  }
};
function yg({ onBack: f }) {
  const [h, d] = y.useState("setup"), [o, T] = y.useState("All"), [N, B] = y.useState([]), [U, ne] = y.useState(0), [ee, D] = y.useState([]), [b, Y] = y.useState(false), [O, Z] = y.useState(0), [L, I] = y.useState(0), [X, K] = y.useState(0), [oe, H] = y.useState(false), [se, J] = y.useState([]), [G, z] = y.useState(false), [ie, q] = y.useState(""), [w, F] = y.useState(false), [P, ue] = y.useState([]), [W, S] = y.useState([]), [A, C] = y.useState({}), [E, $] = y.useState(null), ae = ol, _e = (Q) => [...Q].sort(() => Math.random() - 0.5), Re = [{ progress: 15, emoji: "\u{1F344}", name: "\u6817\u5BF6\u5BF6 Goomba" }, { progress: 35, emoji: "\u{1F422}", name: "\u7DA0\u9F9C\u6BBC Shell" }, { progress: 55, emoji: "\u{1F34C}", name: "\u9999\u8549\u76AE Banana" }, { progress: 75, emoji: "\u{1FAB4}", name: "\u98DF\u4EBA\u82B1 Plant" }, { progress: 92, emoji: "\u{1F9F1}", name: "\u7DA0\u6C34\u7BA1 Pipe" }], x = () => {
    const Q = Nl(o), le = _e(Q).slice(0, 6);
    for (; le.length < 6 && We.length > 0; ) {
      const he = We[Math.floor(Math.random() * We.length)];
      le.some((Ae) => Ae.id === he.id) || le.push(he);
    }
    B(le), ne(0), D([]), Y(false), Z(0), I(0), K(0), H(false), C({}), $(null), le.length > 0 && V(le[0].english), d("playing");
  }, V = (Q) => {
    const le = [...Q.toLowerCase().replace(/\s/g, "").split("")], he = _e(le).map((Ae, ze) => ({ id: ze, char: Ae, used: false }));
    J(he), D([]);
  }, re = N[U], fe = () => {
    if (G) return;
    z(true);
    const Q = ["HUP! \u{1F998}", "YIPPEE! \u2B50", "BOING! \u{1F31F}", "JUMP! \u{1F4A8}"];
    q(Q[Math.floor(Math.random() * Q.length)]);
    try {
      if (typeof window < "u") {
        const de = window.AudioContext || window.webkitAudioContext;
        if (de) {
          const le = new de(), he = le.createOscillator(), Ae = le.createGain();
          he.type = "sine", he.frequency.setValueAtTime(150, le.currentTime), he.frequency.exponentialRampToValueAtTime(700, le.currentTime + 0.15), Ae.gain.setValueAtTime(0.08, le.currentTime), Ae.gain.exponentialRampToValueAtTime(1e-3, le.currentTime + 0.25), he.connect(Ae), Ae.connect(le.destination), he.start(), he.stop(le.currentTime + 0.3);
        }
      }
    } catch {
    }
    setTimeout(() => {
      z(false), q("");
    }, 600);
  };
  y.useEffect(() => {
    if (h !== "playing") return;
    const Q = (de) => {
      if (de.key === " " || de.code === "Space") {
        de.preventDefault(), fe();
        return;
      }
      if (b) return;
      const le = de.key.toLowerCase();
      /^[a-z]$/.test(le) ? ve(le) : de.key === "Backspace" ? ke() : de.key === "Enter" && ge();
    };
    return window.addEventListener("keydown", Q), () => window.removeEventListener("keydown", Q);
  }, [ee, re, h, b, se, G]), y.useEffect(() => {
    if (h === "hugging") {
      const Q = Array.from({ length: 25 }).map((de, le) => ({ id: le, left: Math.random() * 80 + 10, delay: Math.random() * 4, scale: Math.random() * 0.6 + 0.6 }));
      S(Q);
    }
  }, [h]), y.useEffect(() => {
    if (!b) return;
    const Q = 50, le = 100 / (N.length || 6), Ae = le / (3e3 / Q);
    let ze = 3e3;
    const gt = setInterval(() => {
      if (ze -= Q, Z(Math.max(0, Math.ceil(ze / 1e3))), ze <= 0) {
        clearInterval(gt), Y(false), ue([]), ll();
        return;
      }
      I((nt) => {
        const Ft = Math.min((U + 1) * le, nt + Ae);
        return ue((ba) => ba.map((st) => {
          if (st.isHit || st.isDodged) return st;
          const Vl = st.progress - 0.25;
          if (Math.abs(Ft - Vl) < 1.6) if (G) {
            K((vt) => vt + 3);
            try {
              const vt = window.AudioContext || window.webkitAudioContext;
              if (vt) {
                const Qt = new vt(), ul = Qt.createOscillator(), Ba = Qt.createGain();
                ul.type = "sine", ul.frequency.setValueAtTime(450, Qt.currentTime), ul.frequency.exponentialRampToValueAtTime(850, Qt.currentTime + 0.1), Ba.gain.setValueAtTime(0.04, Qt.currentTime), Ba.gain.exponentialRampToValueAtTime(1e-3, Qt.currentTime + 0.12), ul.connect(Ba), Ba.connect(Qt.destination), ul.start(), ul.stop(Qt.currentTime + 0.15);
              }
            } catch {
            }
            return { ...st, progress: Vl, isDodged: true };
          } else return K((vt) => Math.max(0, vt - 2)), lt(), { ...st, progress: Vl, isHit: true };
          return { ...st, progress: Vl };
        })), Ft;
      }), ze % 1e3 === 0 && K((nt) => nt + 1);
    }, Q);
    return () => clearInterval(gt);
  }, [b, U, N, G]);
  const ve = (Q, de) => {
    if (b) return;
    const le = re.english.toLowerCase().replace(/\s/g, "");
    if (ee.length >= le.length) return;
    let he = de;
    if (he === void 0) {
      const Ae = se.find((ze) => ze.char === Q && !ze.used);
      Ae && (he = Ae.id);
    }
    he !== void 0 && (J((Ae) => Ae.map((ze) => ze.id === he ? { ...ze, used: true } : ze)), D((Ae) => [...Ae, { char: Q, scrambledId: he }])), H(false);
  }, we = (Q) => {
    if (b || Q < 0 || Q >= ee.length) return;
    const de = ee[Q];
    J((le) => le.map((he) => he.id === de.scrambledId ? { ...he, used: false } : he)), D((le) => le.filter((he, Ae) => Ae !== Q)), H(false);
  }, ke = () => {
    b || ee.length === 0 || we(ee.length - 1);
  }, xe = () => {
    b || (D([]), J((Q) => Q.map((de) => ({ ...de, used: false }))), H(false));
  }, ge = () => {
    if (b || !re) return;
    const Q = ee.map((le) => le.char).join(""), de = re.english.toLowerCase().replace(/\s/g, "");
    if (Q === de) {
      ut(), K((st) => st + 10), C((st) => ({ ...st, [U]: true })), $(U), vg(), setTimeout(() => {
        $(null);
      }, 1200), F(true), setTimeout(() => {
        F(false);
      }, 1500), Y(true), Z(3), H(false);
      const le = ["goomba", "bobomb", "koopa", "bullet"], Ae = 100 / (N.length || 6), ze = U * Ae, gt = (U + 1) * Ae, nt = ze + (gt - ze) * 0.35, Ft = ze + (gt - ze) * 0.7, ba = [{ id: Date.now() + 10, type: le[Math.floor(Math.random() * le.length)], progress: nt, spawnProgress: nt, isHit: false, isDodged: false }, { id: Date.now() + 20, type: le[Math.floor(Math.random() * le.length)], progress: Ft, spawnProgress: Ft, isHit: false, isDodged: false }];
      ue(ba.filter((st) => st.progress < 95));
    } else lt(), H(true), setTimeout(() => {
      H(false);
    }, 500);
  }, ll = () => {
    const Q = N.length || 6, de = 100 / Q, le = (U + 1) * de;
    if (I(le), U + 1 >= Q) Qo(), d("hugging");
    else {
      const he = U + 1;
      ne(he), H(false), N[he] && V(N[he].english);
    }
  }, En = () => {
    if (b) return;
    const Q = U, de = N.length || 6, le = 100 / de, he = (Q + 1) * le;
    I(he), Q + 1 >= de ? d("hugging") : (ne(Q + 1), H(false), N[Q + 1] && V(N[Q + 1].english));
  }, Gl = () => {
    if (!re) return null;
    let Q = 0;
    return n.jsx("div", { className: "flex flex-wrap justify-center gap-x-6 gap-y-3 my-6 select-none", children: re.english.split(" ").map((de, le) => n.jsx("div", { className: "flex gap-2.5", children: de.split("").map((he, Ae) => {
      const ze = Q;
      Q++;
      const gt = ee[ze], nt = gt ? gt.char : "";
      return n.jsxs("button", { disabled: b || !nt, onClick: () => we(ze), className: `w-11 h-14 border-3 rounded-xl flex items-center justify-center font-sans font-bold text-2xl relative transition-all duration-150 ${nt ? "border-black bg-yellow-100 text-stone-900 shadow-[3px_3px_0px_#000] hover:bg-red-100 hover:text-red-700 active:scale-95 cursor-pointer" : "border-dashed border-stone-400 bg-stone-50 text-transparent cursor-default"}`, title: nt ? "\u9EDE\u64CA\u5B57\u6BCD\u6216\u6309\u5012\u9000\u53EF\u4EE5\u53D6\u6D88\u91CD\u9078\u5594\uFF01" : "", children: [nt, n.jsx("div", { className: "absolute bottom-1.5 w-6 h-1 bg-stone-400/50 rounded" })] }, Ae);
    }) }, le)) });
  };
  return n.jsxs("div", { className: "w-full bg-[#FFF8E7] border-4 border-black rounded-3xl p-4 md:p-6 shadow-[8px_8px_0px_#000000] relative overflow-hidden", children: [n.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between border-b-4 border-black pb-4 mb-5 gap-3", children: [n.jsxs("div", { className: "flex items-center gap-3", children: [n.jsxs("button", { onClick: f, className: "mario-btn mario-btn-red text-[11px] px-3.5 py-1.5 text-white flex items-center gap-1.5", children: [n.jsx(Lt, { className: "w-3.5 h-3.5" }), n.jsx("span", { children: "\u8FD4\u56DE\u57CE\u5821" })] }), n.jsxs("div", { children: [n.jsx("h2", { className: "text-xl md:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2", children: n.jsx("span", { children: "Super Mario spelling Parkour! \u{1F3C3}\u200D\u2642\uFE0F" }) }), n.jsx("p", { className: "text-stone-500 font-bold text-xs", children: "\u6BCF\u62FC\u5C0D\u4E00\u500B\u55AE\u5B57\uFF0CMario \u5C31\u6703\u5954\u8DD1 3 \u79D2\uFF01\u6311\u6230 6 \u95DC\u6551\u51FA\u78A7\u59EC\u516C\u4E3B\u4E26\u64C1\u62B1\uFF01 \u{1F496} (\u53EF\u6309\u7A7A\u767D\u9375\u6216\u9EDE\u8DF3\u8E8D\u4F86\u8EB2\u907F\u602A\u7378\u5594\uFF01)" })] })] }), n.jsx("div", { className: "flex items-center gap-2.5", children: n.jsxs("div", { className: "flex items-center gap-1.5 bg-[#FFF] border-3 border-black text-stone-900 font-black px-3.5 py-1 rounded-2xl shadow-[2px_2px_0px_#000000]", children: [n.jsx("span", { className: "text-xl animate-spin inline-block", children: "\u{1FA99}" }), n.jsxs("span", { className: "font-pixel text-xs", children: ["COINS: ", n.jsx("span", { className: "text-amber-500 text-sm", children: X })] })] }) })] }), h === "setup" && n.jsx("div", { className: "py-6 flex flex-col items-center", children: n.jsxs("div", { className: "max-w-xl text-center", children: [n.jsx("div", { className: "text-7xl animate-bounce mb-4 select-none", children: "\u{1F3C1}" }), n.jsx("h3", { className: "text-2xl font-black text-[#E52521] mb-2 font-pixel", children: "SELECT YOUR SPEEDWAY!" }), n.jsxs("p", { className: "text-stone-600 font-bold text-xs leading-relaxed mb-6", children: ["Mario \u6B63\u6574\u88DD\u5F85\u767C\uFF0C\u6E96\u5099\u7A7F\u8D8A\u9577\u9577\u7684\u78DA\u584A\u8CFD\u9053\u3002", n.jsx("br", {}), "\u8ACB\u5148\u9078\u64C7\u8981\u6EAB\u7FD2\u62FC\u5BEB\u7684\u82F1\u8A9E\u807D\u5BEB\u6BB5\u843D\uFF1A"] }), n.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8", children: ae.map((Q) => n.jsx("button", { onClick: () => T(Q), className: `px-4 py-3.5 border-3 rounded-2xl font-black text-xs md:text-sm text-left transition-all duration-150 ${o === Q ? "border-black bg-[#FED42C] text-stone-900 shadow-[4px_4px_0px_#000000] -translate-y-0.5" : "border-stone-350 bg-white text-stone-700 hover:border-black shadow-[2px_2px_0px_#000]"}`, children: n.jsxs("div", { className: "flex items-center justify-between", children: [n.jsx("span", { children: Q === "All" ? "\u{1F31F} \u5168\u90E8\u7AE0\u7BC0\u55AE\u8A5E\u5927\u6DF7\u6230" : `\u{1F344} ${Q}` }), o === Q && n.jsx("span", { className: "text-sm", children: "\u{1F534}" })] }) }, Q)) }), n.jsx("button", { onClick: x, className: "mario-btn mario-btn-yellow text-stone-950 px-10 py-5 font-black text-xl flex items-center justify-center gap-3 mx-auto shadow-[6px_6px_0px_#000000] animate-pulse", children: n.jsx("span", { children: "\u958B\u59CB\u5192\u96AA \u2022 START RUN! \u{1F680}" }) })] }) }), h === "playing" && re && n.jsxs("div", { className: "flex flex-col gap-6", children: [n.jsxs("div", { className: "w-full bg-gradient-to-b from-[#3ea0ff] via-[#5C94FC] to-[#9ad1ff] border-4 border-black rounded-2xl relative h-48 md:h-56 overflow-hidden select-none shadow-[inset_4px_4px_0px_rgba(0,0,0,0.25)]", children: [n.jsx(Lo, { className: "absolute bottom-6 transition-all duration-300", style: { left: `calc(10% - (${L}% * 0.16))` } }), n.jsx(Lo, { className: "absolute bottom-6 transition-all duration-300 scale-75 origin-bottom opacity-80", style: { left: `calc(48% - (${L}% * 0.11))` } }), n.jsx(Lo, { className: "absolute bottom-6 transition-all duration-300 scale-110 origin-bottom", style: { left: `calc(78% - (${L}% * 0.20))` } }), n.jsx(Yo, { className: "absolute top-4 transition-all duration-150", style: { left: `calc(12% - (${L}% * 0.08))` } }), n.jsx(Yo, { className: "absolute top-8 scale-75 opacity-70 transition-all duration-150", style: { left: `calc(52% - (${L}% * 0.05))` } }), n.jsx(Yo, { className: "absolute top-2 scale-110 transition-all duration-150", style: { left: `calc(82% - (${L}% * 0.12))` } }), n.jsx(Cs, { height: 40, width: 32, className: "absolute bottom-6 transition-all duration-300 opacity-90", style: { left: "calc(4% + (18% * 0.72))" } }), n.jsx(Cs, { height: 50, width: 34, className: "absolute bottom-6 transition-all duration-300 opacity-90", style: { left: "calc(4% + (65% * 0.72))" } }), Array.from({ length: 6 }).map((Q, de) => {
    const he = 100 / (N.length || 6), Ae = de * he, ze = A[de], gt = E === de, nt = `calc(4% + (${Ae}% * 0.72))`;
    return n.jsxs("div", { className: "absolute bottom-20 z-15 flex items-center gap-0 pointer-events-none", style: { left: `calc(${nt} - 16px)` }, children: [n.jsx(Dx, { size: 18 }), n.jsxs("div", { className: "relative", children: [gt && n.jsxs("div", { className: "absolute -top-12 left-1/2 -translate-x-1/2 z-25", children: [n.jsx("div", { className: "animate-coin-popup flex items-center justify-center", children: n.jsx(qx, {}) }), n.jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 animate-star-burst text-yellow-300 text-xs", children: "\u2728" })] }), n.jsx(pg, { size: 18, isBouncing: gt, isEmpty: ze })] }), n.jsx(Dx, { size: 18 })] }, de);
  }), Array.from({ length: 9 }).map((Q, de) => {
    const le = (de + 1) * 10, he = L >= le, Ae = de % 3, ze = Ae === 0 ? 12 : Ae === 1 ? 26 : 12;
    return n.jsx("div", { className: "absolute transition-all duration-300 z-10", style: { left: `calc(4% + (${le}% * 0.72) + 12px)`, bottom: `${26 + ze}px`, opacity: he ? 0 : 1, transform: he ? "translateY(-35px) scale(0.2) rotate(180deg)" : "none" }, children: n.jsx(qx, {}) }, de);
  }), n.jsxs("div", { className: "absolute left-1.5 bottom-6 w-16 h-12 flex items-end pointer-events-none z-10", children: [n.jsx(Cs, { height: 28, width: 24, className: "opacity-80" }), n.jsx(Cs, { height: 42, width: 28, className: "-ml-1.5" })] }), Re.map((Q, de) => {
    const le = L >= Q.progress, he = Math.abs(L - Q.progress) < 6, Ae = () => Q.name.includes("Goomba") ? n.jsx(As, { type: "goomba", size: 30 }) : Q.name.includes("Shell") ? n.jsx(As, { type: "koopa", size: 30 }) : Q.name.includes("Plant") ? n.jsx(gg, { size: 24 }) : Q.name.includes("Pipe") ? n.jsx(Cs, { height: 44, width: 32 }) : n.jsx("span", { className: "text-xl animate-bounce", children: "\u{1F34C}" });
    return n.jsx("div", { className: "absolute bottom-6 transition-all duration-300 z-10", style: { left: `calc(4% + (${Q.progress}% * 0.72) + 14px)` }, children: n.jsxs("div", { className: "flex flex-col items-center select-none relative", children: [he && n.jsx("div", { className: "absolute h-5 -top-7 bg-[#E52521] text-white text-[8px] font-black border border-black rounded px-1.5 whitespace-nowrap leading-none flex items-center shadow-lg animate-bounce z-30", children: G ? "DODGED! \u2B50" : "JUMP QUICK! \u26A1" }), n.jsx("div", { className: `transition-all duration-150 ${le && !G ? "opacity-30 scale-75 rotate-45" : ""}`, children: Ae() }), n.jsx("span", { className: "text-[7.5px] font-black text-black bg-[#FFEA9F] border border-black rounded px-0.5 scale-75 whitespace-nowrap leading-none mt-1 shadow-sm", children: Q.name.split(" ")[0] })] }) }, de);
  }), P.map((Q) => Q.isHit ? n.jsx("div", { className: "absolute bottom-6 transition-all duration-300 z-30", style: { left: `calc(4% + (${Q.progress}% * 0.72) + 14px)` }, children: n.jsxs("div", { className: "flex flex-col items-center relative animate-bounce select-none", children: [n.jsx("div", { className: "absolute -top-7 px-1.5 py-0.5 bg-red-500 border border-black rounded text-[8px] font-black tracking-tighter text-white animate-pulse whitespace-nowrap leading-none z-30 shadow", children: "OUCH! \u{1F4A5} -2\u{1FA99}" }), n.jsx("div", { className: "rotate-180 opacity-60 scale-75 filter grayscale", children: n.jsx(As, { type: Q.type, size: 36 }) }), n.jsx("span", { className: "text-[7px] font-black text-red-600 bg-white border border-black rounded px-0.5 scale-75 whitespace-nowrap leading-none", children: "HIT! \u{1F915}" })] }) }, Q.id) : Q.isDodged ? n.jsx("div", { className: "absolute bottom-6 transition-all duration-300 z-15", style: { left: `calc(4% + (${Q.progress}% * 0.72) + 14px)` }, children: n.jsxs("div", { className: "flex flex-col items-center relative select-none", children: [n.jsx("div", { className: "absolute -top-7 px-1.5 py-0.5 bg-emerald-500 border border-black rounded text-[8px] font-black tracking-tighter text-white whitespace-nowrap leading-none z-30 shadow", children: "DODGED! \u2B50 +3\u{1FA99}" }), n.jsx("div", { className: "opacity-45 scale-75 -translate-y-2 select-none pointer-events-none", children: n.jsx(As, { type: Q.type, size: 36 }) }), n.jsx("span", { className: "text-[7px] font-black text-emerald-600 bg-white border border-black rounded px-0.5 scale-75 whitespace-nowrap leading-none", children: "DODGED! \u{1F44D}" })] }) }, Q.id) : n.jsx("div", { className: "absolute bottom-6 transition-all duration-75 z-20", style: { left: `calc(4% + (${Q.progress}% * 0.72) + 14px)` }, children: n.jsxs("div", { className: "flex flex-col items-center select-none relative animate-pulse", children: [Math.abs(L - Q.progress) < 12 && n.jsx("div", { className: "absolute -top-6 bg-red-600 text-white text-[8px] font-black border border-black rounded px-1.5 animate-bounce z-40 whitespace-nowrap leading-none", children: "\u26A0\uFE0F \u{1F998} SPACE!" }), n.jsx("div", { className: "animate-bounce", style: { animationDuration: "0.6s" }, children: n.jsx(As, { type: Q.type, size: 36 }) }), n.jsx("span", { className: "text-[7px] font-black text-black bg-stone-100 border border-black rounded px-0.5 scale-75 whitespace-nowrap leading-none uppercase", children: Q.type === "goomba" ? "\u6817\u5BF6\u5BF6" : Q.type === "bobomb" ? "\u70B8\u5F48\u5175" : Q.type === "koopa" ? "\u98DB\u9F9C\u6BBC" : "\u7832\u5F48" })] }) }, Q.id)), n.jsxs("div", { className: "absolute right-1 bottom-6 w-24 h-32 flex flex-col justify-end items-center pointer-events-none z-10", children: [n.jsxs("div", { className: "w-[72px] bg-[#9C4A00] border-3 border-black h-20 rounded-t-lg relative flex flex-col items-center justify-end shadow-[inset_2px_2px_0px_rgba(255,255,255,0.25)]", children: [n.jsxs("div", { className: "absolute -top-[9px] inset-x-0 h-[9px] flex justify-between px-0.5", children: [n.jsx("div", { className: "w-[16px] h-[9px] bg-[#9C4A00] border-t-3 border-x-3 border-black" }), n.jsx("div", { className: "w-[16px] h-[9px] bg-[#9C4A00] border-t-3 border-x-3 border-black" }), n.jsx("div", { className: "w-[16px] h-[9px] bg-[#9C4A00] border-t-3 border-x-3 border-black" })] }), n.jsx("div", { className: "w-8 h-10 bg-stone-900 border-t-3 border-x-3 border-black rounded-t-lg absolute bottom-0 left-1/2 -translate-x-1/2 shadow-inner" }), n.jsxs("div", { className: "absolute -top-9 left-1/2 -translate-x-1/2 flex flex-col items-center", children: [n.jsx("div", { className: "w-[3px] h-9 bg-stone-700 border border-black rounded-full" }), n.jsx("div", { className: "w-[22px] h-[15px] bg-[#E52521] border-2 border-black absolute top-0 left-[2px] flex items-center justify-center rounded-sm", children: n.jsx("span", { className: "text-[7px] text-yellow-300 font-extrabold animate-pulse", children: "\u2B50" }) })] })] }), n.jsx("div", { className: "absolute right-2.5 bottom-0 h-12 z-20 scale-x-[-1] animate-bounce", style: { animationDuration: "1.4s" }, children: n.jsx(Hl, { character: "peach", animation: "idle", size: 28 }) })] }), n.jsx("div", { className: "absolute bottom-0 inset-x-0 h-6 bg-[#C84C0C] border-t-3 border-black z-15 select-none overflow-hidden flex", children: Array.from({ length: 45 }).map((Q, de) => n.jsxs("div", { className: "flex-1 min-w-[20px] border-r-2 border-black h-full relative", style: { backgroundColor: "#C84C0C" }, children: [n.jsx("div", { className: "absolute top-0 inset-x-0 h-1.5 bg-[#FC9C14] border-b-2 border-black" }), n.jsx("div", { className: "absolute bottom-1 left-0.5 w-1 h-1 bg-black rounded-full opacity-60" }), n.jsx("div", { className: "absolute bottom-1 right-0.5 w-1 h-1 bg-black rounded-full opacity-60" })] }, de)) }), n.jsx("div", { className: `absolute transition-all duration-1000 ease-out z-20 ${w ? "animate-correct-mario-jump" : ""}`, style: { left: `calc(4% + (${L}% * 0.72))`, bottom: G ? "72px" : "22px", transform: G ? "rotate(10deg) scale(1.15)" : "none", transition: G ? "bottom 0.18s cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 0.18s ease-out" : "bottom 0.3s ease-in, transform 0.3s ease-in, left 1s ease-out" }, children: n.jsxs("div", { className: "flex flex-col items-center relative", children: [w && n.jsx("div", { className: "absolute -top-7 px-2 py-0.5 bg-[#FED42C] text-stone-900 border border-black rounded text-[8px] font-black tracking-tighter animate-bounce whitespace-nowrap leading-none z-30 shadow-[1.5px_1.5px_0px_#000]", children: "SUPER SPELLED! \u{1F31F}" }), !w && G && ie && n.jsx("div", { className: "absolute -top-7 px-1.5 py-0.5 bg-yellow-300 border border-black rounded text-[8px] font-black tracking-tighter text-black animate-bounce whitespace-nowrap leading-none z-30 shadow", children: ie }), !w && !G && b && n.jsxs("div", { className: "absolute -top-7 px-2 py-0.5 bg-yellow-300 border border-black rounded text-[9px] font-black tracking-tighter text-black animate-bounce whitespace-nowrap leading-none select-none shadow", children: ["YAHOO! SPEED RUNNING (", O, "s)"] }), n.jsx(Hl, { character: "mario", animation: w ? "win" : G ? "climb" : b ? "walk" : "idle", size: 40 })] }) }), n.jsx("div", { className: "absolute inset-x-12 bottom-4 h-1 flex justify-between pointer-events-none", children: Array.from({ length: 11 }).map((Q, de) => {
    const le = de * 10, he = L >= le;
    return n.jsxs("div", { className: "relative flex flex-col items-center", children: [n.jsx("div", { className: `w-0.5 h-3 ${he ? "bg-stone-800" : "bg-stone-400"}` }), de > 0 && de < 10 && n.jsx("span", { className: "absolute -top-4 text-[8px] font-bold text-stone-300", children: de })] }, de);
  }) })] }), n.jsxs("div", { className: "flex items-center justify-between bg-white border-3 border-black p-3 rounded-2xl shadow-[3px_3px_0px_#000]", children: [n.jsxs("div", { className: "flex items-center gap-1.5 text-xs font-black text-[#E52521]", children: [n.jsx("span", { className: "animate-pulse", children: "\u{1F6A9}" }), n.jsxs("span", { children: ["QUEST LIST: ", n.jsxs("span", { className: "text-stone-900", children: [U + 1, " / 6 \u984C"] })] })] }), n.jsxs("div", { className: "w-1/2 bg-stone-100 border-2 border-black rounded-lg h-4 relative overflow-hidden flex items-center", children: [n.jsx("div", { className: "bg-yellow-400 border-r-2 border-black h-full transition-all duration-300", style: { width: `${L}%` } }), n.jsxs("span", { className: "absolute inset-0 text-[9px] font-black text-center text-stone-900 leading-none flex items-center justify-center", children: ["MARIO RUN PROGRESS: ", Math.round(L), "%"] })] }), n.jsxs("div", { className: "text-[10px] font-black text-stone-500 flex items-center gap-1", children: [n.jsx("span", { children: "Chapter:" }), n.jsx("span", { className: "bg-[#FFF8E7] px-2 py-1 rounded-lg border-2 border-black text-stone-900 font-pixel", children: re.chapter })] })] }), n.jsxs("div", { className: `bg-white border-4 border-black rounded-3xl p-5 shadow-[5px_5px_0px_#000] text-center transition-all ${oe ? "animate-shake bg-red-50 border-rose-500" : ""}`, children: [n.jsxs("div", { className: "inline-block bg-[#FFF8E7] border-3 border-black px-6 py-3.5 rounded-2xl shadow-[3px_3px_0px_#000] mb-4", children: [n.jsxs("div", { className: "flex items-center justify-center gap-2 mb-1", children: [n.jsx("span", { className: "text-3xl", children: re.emoji }), n.jsx("span", { className: "text-xl md:text-2xl font-black text-stone-900 tracking-wide", children: re.chinese })] }), n.jsx("span", { className: "text-[10px] font-bold text-[#E52521] uppercase tracking-wider block", children: "\u8ACB\u62FC\u51FA\u4E0B\u65B9\u55AE\u5B57\u62FC\u5BEB \u2022 LOWERCASE" })] }), Gl(), !b && n.jsx("div", { className: "flex flex-wrap justify-center gap-2.5 max-w-xl mx-auto mb-6", children: se.map((Q) => n.jsx("button", { disabled: Q.used, onClick: () => ve(Q.char, Q.id), className: `w-10 h-10 md:w-11 md:h-11 border-2 border-black bg-white rounded-lg flex items-center justify-center text-lg md:text-xl font-black font-sans hover:bg-yellow-200 hover:-translate-y-0.5 active:translate-y-0.5 transition-all shadow-[2px_2px_0px_#000] ${Q.used ? "opacity-0 pointer-events-none scale-50" : "cursor-pointer"}`, children: Q.char }, `${Q.char}-${Q.id}`)) }), n.jsxs("div", { className: "flex flex-wrap justify-center items-center gap-3", children: [n.jsx("button", { onClick: xe, disabled: b || ee.length === 0, className: `mario-btn mario-btn-yellow text-stone-900 border-2 px-5 py-2.5 text-xs font-black flex items-center gap-1.5 ${ee.length === 0 ? "opacity-30 cursor-not-allowed" : ""}`, children: n.jsx("span", { children: "\u6E05\u9664\u5168\u90E8 \u{1F9F9}" }) }), n.jsxs("button", { onClick: ke, disabled: b || ee.length === 0, className: `mario-btn mario-btn-yellow text-stone-900 border-2 px-5 py-2.5 text-xs font-black flex items-center gap-1.5 ${ee.length === 0 ? "opacity-30 cursor-not-allowed" : ""}`, children: [n.jsx(hp, { className: "w-4 h-4" }), n.jsx("span", { children: "\u5012\u9000 \u232B" })] }), n.jsxs("button", { onClick: ge, disabled: b || ee.length === 0, className: "mario-btn mario-btn-red text-white border-2 px-8 py-3.5 text-sm font-black flex items-center gap-2 animate-bounce", children: [n.jsx(ip, { className: "w-5 h-5" }), n.jsx("span", { children: "\u78BA\u8A8D\u9001\u51FA \u{1F3C1}" })] }), n.jsx("button", { type: "button", onClick: fe, className: `mario-btn bg-[#FF8E3C] hover:bg-[#FF7011] text-white border-2 px-6 py-2.5 text-xs font-black flex items-center gap-1.5 shadow-[2px_2px_0px_#000] active:scale-95 transition-all ${G ? "translate-y-0.5" : ""}`, title: "\u6309\u7A7A\u767D\u9375\u6216\u9019\u88E1\u53EF\u4EE5\u8D77\u8DF3\u5594\uFF01", children: n.jsx("span", { children: "\u{1F998} SPACE \u8DF3\u8E8D" }) }), n.jsx("button", { onClick: En, disabled: b, className: "mario-btn bg-[#FFF8E7] hover:bg-[#FED42C] text-stone-800 border-2 border-dashed border-stone-500 px-4 py-2.5 text-xs font-black", title: "Skip this question", children: n.jsx("span", { children: "\u8DF3\u904E\u6B64\u984C \u23E9" }) })] }), b && n.jsxs("div", { className: "mt-4 p-4 bg-sky-100 border-3 border-black rounded-2xl flex flex-col items-center gap-1 animate-pulse max-w-sm mx-auto", children: [n.jsx("span", { className: "text-2xl animate-bounce", children: "\u{1F3C3}\u200D\u2642\uFE0F\u{1F4A8}" }), n.jsxs("span", { className: "text-xs font-black text-sky-800", children: ["MARIO IS RUNNING FOR ", O, " SECONDS!"] }), n.jsx("span", { className: "text-[10px] font-bold text-stone-500", children: "\u53EF\u4EE5\u6309\u4E0B\u7A7A\u767D\u9375\u6216\u9EDE\u9078\u6A58\u8272\u6309\u9215\u5728\u534A\u7A7A\u4E2D\u8DF3\u8E8D\u5594\uFF01" })] })] })] }), h === "hugging" && n.jsxs("div", { className: "py-8 text-center flex flex-col items-center relative bg-gradient-to-b from-[#FFF0F5] to-[#FFE4E1] border-4 border-[#FFA6C9] rounded-3xl p-6 shadow-[8px_8px_0px_#FFA6C9]", children: [n.jsx("div", { className: "absolute inset-0 pointer-events-none overflow-hidden rounded-3xl z-0", children: W.map((Q) => n.jsx("div", { className: "absolute text-2xl text-red-500 animate-float-heart", style: { left: `${Q.left}%`, bottom: "-10%", animationDelay: `${Q.delay}s`, animationDuration: `${3 + Math.random() * 2}s`, transform: `scale(${Q.scale})` }, children: "\u{1F496}" }, Q.id)) }), n.jsxs("div", { className: "inline-flex items-center gap-2 bg-[#E52521] text-white border-4 border-black px-6 py-2.5 rounded-2xl text-sm md:text-base font-black shadow-[4px_4px_0px_#000] mb-6 z-10", children: [n.jsx(Es, { className: "w-5 h-5 animate-spin text-yellow-300 fill-yellow-250" }), n.jsx("span", { children: "STAGE COMPLETED \u2022 \u95DC\u5361\u5B8C\u7F8E\u5168\u901A\uFF01" }), n.jsx(Es, { className: "w-5 h-5 animate-spin text-yellow-300 fill-yellow-250" })] }), n.jsxs("div", { className: "w-full max-w-lg bg-[#5C94FC] border-4 border-black rounded-2xl h-44 flex items-end justify-center gap-0 relative p-2 shadow-[inset_4px_4px_0px_rgba(0,0,0,0.3)] z-10 mb-6 overflow-hidden", children: [n.jsx("div", { className: "absolute bottom-0 inset-x-0 h-4 bg-amber-800 border-t-3 border-black z-0" }), n.jsxs("div", { className: "absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-1 z-30 pointer-events-none", children: [n.jsx("span", { className: "text-3xl animate-bounce", children: "\u2764\uFE0F" }), n.jsx("span", { className: "text-3xl animate-bounce", style: { animationDelay: "150ms" }, children: "\u{1F496}" }), n.jsx("span", { className: "text-3xl animate-bounce", style: { animationDelay: "300ms" }, children: "\u{1F495}" })] }), n.jsxs("div", { className: "flex items-end justify-center z-10 gap-0 transform -translate-y-1 scale-125", children: [n.jsxs("div", { className: "translate-x-1 text-center", children: [n.jsx("span", { className: "text-[10px] block font-black text-black bg-yellow-200 border border-black rounded px-1 scale-75 animate-bounce leading-none", children: "\u746A\u5229\u6B50 \u2764\uFE0F" }), n.jsx(Hl, { character: "mario", animation: "win", size: 36 })] }), n.jsx("span", { className: "text-2xl animate-pulse self-center z-20 mx-[-4px]", children: "\u{1F48F}" }), n.jsxs("div", { className: "translate-x-[-4px] text-center scale-x-[-1]", children: [n.jsx("div", { className: "scale-x-[-1]", children: n.jsx("span", { className: "text-[10px] block font-black text-pink-600 bg-white border border-pink-300 rounded px-1 scale-75 animate-bounce leading-none", children: "\u78A7\u59EC\u516C\u4E3B \u2764\uFE0F" }) }), n.jsx(Hl, { character: "peach", animation: "win", size: 36 })] })] }), n.jsxs("div", { className: "absolute inset-x-12 top-6 flex justify-between opacity-40", children: [n.jsx("span", { className: "text-xl", children: "\u{1F3C6}" }), n.jsx("span", { className: "text-xl", children: "\u2B50\uFE0F" }), n.jsx("span", { className: "text-xl", children: "\u{1F31F}" }), n.jsx("span", { className: "text-xl", children: "\u2B50\uFE0F" }), n.jsx("span", { className: "text-xl", children: "\u{1F3C6}" })] })] }), n.jsxs("div", { className: "z-10 max-w-md", children: [n.jsx("h3", { className: "text-2xl md:text-3xl font-black text-stone-900 mb-2", children: "\u{1F496} \u6210\u529F\u6551\u51FA\u78A7\u59EC\u516C\u4E3B \u{1F496}" }), n.jsx("p", { className: "text-[#E12521] font-black text-lg md:text-xl tracking-wide mb-3 animate-pulse", children: "\u516C\u4E3B\u7D66\u4E86\u746A\u5229\u6B50\u4E00\u500B\u6EAB\u6696\u53C8\u6DF1\u60C5\u7684\u64C1\u62B1\uFF01" }), n.jsxs("div", { className: "bg-white/80 border-3 border-black p-4 rounded-2xl text-xs md:text-sm font-bold text-stone-700 leading-relaxed mb-6 shadow-sm", children: ["\u606D\u559C\uFF0C\u4F60\u5728", n.jsx("span", { className: "text-amber-500 font-extrabold px-1 text-base font-pixel", children: o }), "\u6BB5\u843D\u6311\u6230\u4E2D\uFF0C\u4EE5\u9A5A\u4EBA\u7684\u6BC5\u529B\u9023\u7E8C\u62FC\u5C0D 6 \u9053\u807D\u5BEB\u55AE\u8A5E\u95DC\u5361\uFF01", n.jsx("br", {}), "\u4E00\u8DEF\u4E0A\u62FE\u53D6\u4E86\u5927\u91CF\u7684\u9EC3\u91D1\u91D1\u5E63\uFF0C\u70BA\u746A\u5229\u6B50\u738B\u570B\u91CD\u65B0\u5E36\u4F86\u4E86\u548C\u5E73\u8207\u559C\u6085\uFF01"] }), n.jsxs("div", { className: "flex gap-4 justify-center", children: [n.jsxs("button", { onClick: x, className: "mario-btn mario-btn-red text-white text-xs md:text-sm px-6 py-3 font-black flex items-center gap-1.5", children: [n.jsx(jt, { className: "w-4 h-4" }), n.jsx("span", { children: "\u518D\u6B21\u6311\u6230\u73FE\u6709\u6BB5\u843D" })] }), n.jsxs("button", { onClick: () => d("setup"), className: "mario-btn mario-btn-yellow text-stone-900 text-xs md:text-sm px-6 py-3 font-black flex items-center gap-1.5", children: [n.jsx(tp, { className: "w-4 h-4 animate-spin" }), n.jsx("span", { children: "\u5207\u63DB\u5176\u4ED6\u55AE\u8A5E\u6BB5\u843D" })] })] })] })] }), n.jsx("style", { children: `
        @keyframes floatingHeartsPulse {
          0% { transform: translateY(0) scale(0.6); opacity: 0; }
          12% { opacity: 1; }
          90% { opacity: 0.9; }
          100% { transform: translateY(-300px) scale(1.1); opacity: 0; }
        }
        .animate-float-heart {
          animation: floatingHeartsPulse 4s linear infinite;
        }

        @keyframes scrollingBgAnim {
          0% { background-position-x: 0px; }
          100% { background-position-x: -60px; }
        }
        .animate-scrolling-bg {
          animation: scrollingBgAnim 1s linear infinite;
        }

        @keyframes correctMarioJump {
          0%, 100% {
            bottom: 22px;
            transform: scale(1) rotate(0deg);
          }
          20% {
            bottom: 72px;
            transform: scale(1.21) rotate(-8deg);
          }
          40% {
            bottom: 104px;
            transform: scale(1.35) rotate(15deg);
          }
          60% {
            bottom: 92px;
            transform: scale(1.28) rotate(-15deg);
          }
          80% {
            bottom: 52px;
            transform: scale(1.1) rotate(5deg);
          }
        }
        .animate-correct-mario-jump {
          animation: correctMarioJump 1.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        @keyframes questionShine {
          0%, 100% { background-color: #FCBC14; }
          50% { background-color: #FFEA8A; }
        }
        .animate-question-shine {
          animation: questionShine 0.75s infinite steps(2);
        }

        @keyframes questionBounce {
          0%, 100% { transform: translateY(0); }
          30% { transform: translateY(-8px); }
          65% { transform: translateY(2px); }
        }
        .animate-question-bounce {
          animation: questionBounce 0.4s ease-out;
        }

        @keyframes coinSpin {
          0% { transform: scaleX(1); }
          50% { transform: scaleX(0.1); }
          100% { transform: scaleX(1); }
        }
        .animate-coin-spin {
          animation: coinSpin 0.75s infinite linear;
        }

        @keyframes coinPopUp {
          0% {
            transform: translateY(0) scale(1) rotate(0deg);
            opacity: 1;
          }
          45% {
            transform: translateY(-44px) scale(1.3) rotate(180deg);
            opacity: 1;
          }
          80% {
            transform: translateY(-24px) scale(0.9) rotate(360deg);
            opacity: 0.8;
          }
          100% {
            transform: translateY(-16px) scale(0.4) rotate(450deg);
            opacity: 0;
          }
        }
        .animate-coin-popup {
          animation: coinPopUp 0.75s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        @keyframes starBurstAnim {
          0% { transform: scale(0) rotate(0); opacity: 0; }
          50% { transform: scale(1.15) rotate(180deg); opacity: 1; }
          100% { transform: scale(0.5) rotate(360deg); opacity: 0; }
        }
        .animate-star-burst {
          animation: starBurstAnim 0.5s ease-out forwards;
        }
      ` })] });
}
const jg = [{ id: "redondo", label: "Redondo", sub: "\u967D\u6027 -o \u{1F535}", gender: "m", colorClass: "bg-blue-500 hover:bg-blue-600 text-white", borderClass: "border-blue-900", shadowClass: "shadow-[4px_4px_0px_#1e3a8a]", icon: "\u{1F535}" }, { id: "redonda", label: "Redonda", sub: "\u9670\u6027 -a \u{1F338}", gender: "f", colorClass: "bg-pink-500 hover:bg-pink-600 text-white", borderClass: "border-pink-900", shadowClass: "shadow-[4px_4px_0px_#831843]", icon: "\u{1F338}" }, { id: "quadrado", label: "Quadrado", sub: "\u967D\u6027 -o \u{1F7E2}", gender: "m", colorClass: "bg-emerald-600 hover:bg-emerald-700 text-white", borderClass: "border-emerald-950", shadowClass: "shadow-[4px_4px_0px_#064e3b]", icon: "\u{1F7E9}" }, { id: "quadrada", label: "Quadrada", sub: "\u9670\u6027 -a \u{1F33F}", gender: "f", colorClass: "bg-teal-500 hover:bg-teal-600 text-white", borderClass: "border-teal-950", shadowClass: "shadow-[4px_4px_0px_#134e4a]", icon: "\u{1F33F}" }, { id: "retangular", label: "Retangular", sub: "\u8B8A\u5F62\u8D85\u4EBA \u2B50 \u9670\u967D\u540C\u5F62", gender: "both", colorClass: "bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 hover:from-amber-500 hover:to-yellow-400 text-amber-950 font-black", borderClass: "border-amber-700 ring-4 ring-yellow-300 ring-offset-2 animate-pulse", shadowClass: "shadow-[6px_6px_0px_#78350f]", icon: "\u2B50" }];
function Ng({ onBack: f }) {
  const h = y.useRef(We.filter((F) => F.article !== "")), [d, o] = y.useState(h.current[0]), [T, N] = y.useState(0), [B, U] = y.useState(0), [ne, ee] = y.useState(false), [D, b] = y.useState(3), [Y, O] = y.useState(false), [Z, L] = y.useState(false), [I, X] = y.useState(10), [K, oe] = y.useState(false), [H, se] = y.useState(null), J = y.useRef(200), G = y.useRef(null), z = (F) => {
    if (F) {
      const P = h.current[0];
      o(P);
    } else {
      const P = Math.floor(Math.random() * h.current.length);
      o(h.current[P]);
    }
    X(15);
  }, ie = () => {
    N(0), U(0), b(3), ee(false), O(false), se(null), oe(false), L(true), z(false);
  };
  y.useEffect(() => {
    if (!(!Z || Y || H != null && H.show)) return G.current = setInterval(() => {
      X((F) => F >= 95 ? (q(), 15) : F + 2.5);
    }, J.current), () => clearInterval(G.current);
  }, [Z, Y, H, d]);
  const q = () => {
    Ex(), U(0), ee(false), b((F) => {
      const P = F - 1;
      return P <= 0 && O(true), P;
    }), se({ show: true, itemName: d.portuguese, chosen: "\u8D85\u6642\u672A\u5206\u985E", correct: d.targetAdj, ruleExplanation: `\u7269\u54C1\u6389\u843D\u4E86\uFF01${d.portuguese} \u662F ${d.gender === "m" ? "\u967D\u6027 (o)" : "\u9670\u6027 (a)"}\uFF0C\u6B63\u78BA\u9580\u662F\u3010${d.targetAdj}\u3011\uFF01` }), setTimeout(() => {
      se(null), D > 1 && z(false);
    }, 1800);
  }, w = (F) => {
    if (Y || H != null && H.show || !Z) return;
    const P = d.targetAdj;
    if (F === P) {
      ut(), d.exampleSentence, F === "retangular" && (oe(true), setTimeout(() => oe(false), 1200));
      const ue = ne ? 200 : 100;
      N((S) => S + ue);
      const W = B + 1;
      U(W), W === 5 && (eg(), ee(true)), z(W >= 5);
    } else {
      Ex(), U(0), ee(false), b((W) => {
        const S = W - 1;
        return S <= 0 && O(true), S;
      });
      let ue = "";
      d.shape === "rectangle" && F !== "retangular" ? ue = "\u6CE8\u610F\uFF01\u9577\u65B9\u5F62\u662F\u300C\u8B8A\u5F62\u8D85\u4EBA\u300D\uFF0C\u4E0D\u7BA1\u5B9A\u51A0\u8A5E\u662F o \u9084\u662F a\uFF0C\u8863\u670D\u90FD\u4E0D\u8B8A\uFF0C\u5FC5\u9808\u9032\u3010retangular\u3011\u91D1\u8272\u9580\uFF01" : d.gender === "m" && F.endsWith("a") ? ue = `\u5B9A\u51A0\u8A5E\u662F\u300Co (${d.portuguese})\u300D\uFF0C\u4EE3\u8868\u3010\u967D\u6027\u3011\uFF0C\u8A5E\u5C3E\u61C9\u914D\u5408\u300C-o\u300D\u800C\u975E\u300C-a\u300D\uFF01` : d.gender === "f" && F.endsWith("o") ? ue = `\u5B9A\u51A0\u8A5E\u662F\u300Ca (${d.portuguese})\u300D\uFF0C\u4EE3\u8868\u3010\u9670\u6027\u3011\uFF0C\u8A5E\u5C3E\u61C9\u914D\u5408\u300C-a\u300D\u800C\u975E\u300C-o\u300D\uFF01` : ue = `${d.portuguese} \u7684\u6B63\u78BA\u5F62\u72C0\u662F\u3010${d.targetAdj}\u3011\uFF01`, se({ show: true, itemName: d.portuguese, chosen: F, correct: P, ruleExplanation: ue }), setTimeout(() => {
        se(null), D > 1 && z(false);
      }, 2300);
    }
  };
  return y.useEffect(() => {
    const F = (P) => {
      !Z || Y || (P.key === "1" && w("redondo"), P.key === "2" && w("redonda"), P.key === "3" && w("quadrado"), P.key === "4" && w("quadrada"), P.key === "5" && w("retangular"));
    };
    return window.addEventListener("keydown", F), () => window.removeEventListener("keydown", F);
  }, [Z, Y, d, H]), n.jsxs("div", { className: "w-full bg-[#1b2838] text-white p-4 md:p-6 rounded-3xl border-4 border-black shadow-[8px_8px_0px_#000] relative overflow-hidden font-sans", children: [ne && n.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-yellow-500/20 via-pink-500/20 to-purple-500/20 pointer-events-none animate-pulse z-0" }), n.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4 mb-4 relative z-10", children: [n.jsxs("button", { onClick: f, className: "mario-btn mario-btn-gray px-4 py-2 text-xs md:text-sm text-white flex items-center gap-1.5", children: [n.jsx(Lt, { className: "w-4 h-4" }), n.jsx("span", { children: "\u8FD4\u56DE\u83DC\u55AE" })] }), n.jsxs("div", { className: "text-center", children: [n.jsx("h2", { className: "text-xl md:text-2xl font-black font-pixel text-yellow-400 drop-shadow-[2px_2px_0px_#000] flex items-center justify-center gap-2", children: n.jsx("span", { children: "\u{1F3ED} FORMA FACTORY \u{1F354}" }) }), n.jsx("p", { className: "text-xs text-yellow-200 font-bold", children: "\u300A\u5F62\u72C0\u5DE5\u5EE0\u5403\u8CA8\u738B\u300B\u2022 5\u9580\u6025\u901F\u5206\u985E\uFF0C\u9047\u898B retangular \u7537\u751F\u5973\u751F\u90FD\u901A\u95DC\uFF01" })] }), n.jsxs("div", { className: "flex items-center gap-3", children: [B > 0 && n.jsxs("div", { className: `px-3 py-1 rounded-xl border-2 border-black font-pixel text-xs flex items-center gap-1 shadow-[2px_2px_0px_#000] ${ne ? "bg-amber-400 text-black animate-bounce font-black" : "bg-purple-600 text-white"}`, children: [n.jsx(Yx, { className: "w-3.5 h-3.5" }), n.jsx("span", { children: ne ? `\u{1F389} FESTA x${B}` : `COMBO x${B}` })] }), n.jsx("div", { className: "flex items-center gap-1 bg-black/60 px-3 py-1.5 rounded-xl border-2 border-red-500", children: Array.from({ length: 3 }).map((F, P) => n.jsx(kp, { className: `w-5 h-5 ${P < D ? "text-red-500 fill-red-500 animate-pulse" : "text-gray-600"}` }, P)) }), n.jsxs("div", { className: "bg-amber-500 border-2 border-black px-3 py-1.5 rounded-xl text-black font-pixel text-xs shadow-[2px_2px_0px_#000]", children: ["\u{1FA99} ", T] })] })] }), !Z && n.jsxs("div", { className: "bg-stone-900/90 border-4 border-yellow-400 rounded-2xl p-6 text-center max-w-xl mx-auto my-8 shadow-[6px_6px_0px_#000] relative z-10", children: [n.jsx("div", { className: "text-6xl mb-3 animate-bounce", children: "\u{1F916}\u{1F4E6}\u{1F355}" }), n.jsx("h3", { className: "text-2xl font-black text-yellow-300 font-pixel mb-2", children: "\u5F62\u72C0\u50B3\u9001\u5E36\u5373\u5C07\u958B\u52D5\uFF01" }), n.jsxs("p", { className: "text-stone-300 text-sm mb-4 leading-relaxed font-medium", children: ["\u8F38\u9001\u5E36\u6E90\u6E90\u4E0D\u7D55\u9001\u4F86\u751F\u6D3B\u7269\u54C1\uFF08\u5982 ", n.jsx("span", { className: "text-pink-300 font-bold", children: "a mesa 🪵" }), "\u3001", n.jsx("span", { className: "text-sky-300 font-bold", children: "o cubo m\xE1gico \u{1F3B2}" }), "\u3001", n.jsx("span", { className: "text-yellow-300 font-bold", children: "a r\xE9gua \u{1F4CF}" }), "\uFF09\uFF01", n.jsx("br", {}), "\u770B\u6E05\u540D\u8A5E\u51A0\u8A5E\u662F ", n.jsx("span", { className: "text-sky-400 font-black", children: "o (\u967D\u6027 -o)" }), " \u9084\u662F ", n.jsx("span", { className: "text-pink-400 font-black", children: "a (\u9670\u6027 -a)" }), "\uFF0C\u6ED1\u52D5\u6216\u9EDE\u64CA\u9001\u5165\u6B63\u78BA\u7684\u9580\uFF01", n.jsx("br", {}), n.jsx("span", { className: "text-amber-400 font-bold block mt-2", children: "\u2B50 \u8B8A\u5F62\u8D85\u4EBA\u79D8\u7C4D\uFF1A\u9047\u5230\u9577\u65B9\u5F62\u7269\u54C1\uFF0C\u4E0D\u8AD6\u662F o \u9084\u662F a\uFF0C\u90FD\u76F4\u885D retangular \u91D1\u8272\u5927\u9580\uFF01" })] }), n.jsx("button", { onClick: ie, className: "mario-btn mario-btn-yellow px-8 py-3 text-lg font-black tracking-wider cursor-pointer shadow-[4px_4px_0px_#000]", children: "\u{1F680} \u958B\u59CB\u8CEA\u6AA2\u95D6\u95DC\uFF01" })] }), Z && !Y && n.jsxs("div", { className: "relative z-10", children: [K && n.jsx("div", { className: "absolute top-2 left-1/2 -translate-x-1/2 z-30 bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 border-3 border-black text-black px-6 py-2 rounded-2xl shadow-[4px_4px_0px_#000] font-black text-base animate-bounce flex items-center gap-2", children: n.jsx("span", { children: "\u26A1 \u8B8A\u5F62\u8D85\u4EBA\u767C\u5A01\uFF01\u9670\u967D\u540C\u5F62 RETANGULAR \u5B8C\u5168\u5339\u914D\uFF01 \u26A1" }) }), n.jsxs("div", { className: "relative w-full h-56 md:h-64 bg-stone-900 border-4 border-black rounded-2xl overflow-hidden shadow-inner flex flex-col justify-between p-3 mb-6", children: [n.jsx("div", { className: "absolute inset-x-0 bottom-4 h-24 bg-stone-800 border-t-4 border-b-4 border-yellow-500/50 flex items-center overflow-hidden", children: n.jsx("div", { className: "w-full h-full opacity-20 bg-[repeating-linear-gradient(45deg,#000,#000_20px,#ffb703_20px,#ffb703_40px)]" }) }), n.jsxs("div", { className: "flex items-center justify-between text-xs font-pixel text-stone-400 px-2 relative z-10", children: [n.jsxs("span", { className: "text-yellow-400 flex items-center gap-1", children: [n.jsx("span", { children: "CONVEYOR SPEED:" }), n.jsx("span", { className: "text-green-400 font-bold", children: "NORMAL" })] }), n.jsx("span", { className: "text-stone-300", children: "\u9375\u76E4\u5FEB\u6377\u9375\uFF1A[1] [2] [3] [4] [5]" })] }), n.jsxs("div", { className: "absolute transition-all duration-150 ease-linear flex flex-col items-center justify-center z-20 cursor-grab", style: { top: `${I}%`, left: "50%", transform: "translate(-50%, -50%)" }, children: [n.jsxs("div", { className: `p-4 rounded-3xl border-4 border-black shadow-[6px_6px_0px_#000] flex flex-col items-center justify-center transition-all ${ne ? "bg-gradient-to-tr from-amber-300 to-yellow-100 ring-4 ring-amber-400 animate-pulse scale-110" : "bg-white"}`, children: [n.jsx("span", { className: "text-5xl md:text-6xl drop-shadow mb-1 animate-bounce", children: d.emoji }), n.jsxs("div", { className: "flex items-center gap-1.5 font-black text-stone-900 text-lg md:text-xl", children: [n.jsx("span", { className: `px-2 py-0.5 rounded-lg border-2 border-black text-xs uppercase ${d.gender === "m" ? "bg-blue-200 text-blue-900" : "bg-pink-200 text-pink-900"}`, children: d.article ? `${d.article} (${d.gender === "m" ? "\u967D\u6027" : "\u9670\u6027"})` : "\u540D\u8A5E" }), n.jsx("span", { children: d.portuguese })] }), n.jsx("div", { className: "text-xs text-stone-600 font-bold mt-0.5", children: d.chinese })] }), n.jsx("div", { className: "w-32 h-2.5 bg-black/60 rounded-full border border-yellow-400 mt-2 overflow-hidden", children: n.jsx("div", { className: `h-full transition-all duration-100 ${I > 75 ? "bg-red-500" : "bg-green-400"}`, style: { width: `${100 - I}%` } }) })] }), (H == null ? void 0 : H.show) && n.jsxs("div", { className: "absolute inset-0 bg-black/85 z-40 flex flex-col items-center justify-center p-4 text-center animate-fade-in", children: [n.jsx("div", { className: "w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center border-3 border-black text-3xl font-black mb-2 animate-bounce", children: "\u2715" }), n.jsx("h4", { className: "text-xl font-black text-red-400 font-pixel mb-1", children: "BUZZER! \u7B54\u932F\u5566\uFF01" }), n.jsxs("div", { className: "bg-stone-900 border-3 border-red-500 p-3 rounded-2xl my-2 max-w-md shadow-lg", children: [n.jsxs("div", { className: "text-sm font-bold text-stone-200 mb-1", children: ["\u984C\u76EE\uFF1A", n.jsx("span", { className: "text-yellow-300 font-black", children: H.itemName })] }), n.jsxs("div", { className: "text-xs font-semibold text-red-300", children: ["\u4F60\u7684\u9078\u64C7\uFF1A", n.jsx("span", { className: "line-through text-red-400 font-bold", children: H.chosen }), n.jsx("span", { className: "mx-2 text-white", children: "\u2794" }), "\u6B63\u78BA\u5F62\u72C0\uFF1A", n.jsx("span", { className: "text-green-400 font-black text-sm bg-green-950 px-2 py-0.5 rounded border border-green-500", children: H.correct })] }), n.jsxs("p", { className: "text-xs text-yellow-200 mt-2 font-medium", children: ["\u{1F4A1} ", H.ruleExplanation] })] })] })] }), n.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3", children: jg.map((F, P) => n.jsxs("button", { onClick: () => w(F.id), className: `p-3 md:p-4 rounded-2xl border-4 ${F.borderClass} ${F.colorClass} ${F.shadowClass} flex flex-col items-center justify-center transition-all duration-100 cursor-pointer active:translate-y-1 active:shadow-none relative group select-none`, children: [n.jsxs("span", { className: "absolute top-1.5 left-2 bg-black/40 text-[10px] font-pixel px-1.5 py-0.5 rounded text-white/80", children: ["[", P + 1, "]"] }), n.jsx("span", { className: "text-3xl mb-1 group-hover:scale-125 transition-transform", children: F.icon }), n.jsx("span", { className: "text-base md:text-lg font-black tracking-tight leading-none", children: F.label }), n.jsx("span", { className: "text-[11px] font-bold opacity-90 mt-1", children: F.sub })] }, F.id)) })] }), Y && n.jsxs("div", { className: "bg-stone-900/95 border-4 border-red-500 rounded-3xl p-6 md:p-8 text-center max-w-lg mx-auto my-6 shadow-[8px_8px_0px_#000] relative z-20", children: [n.jsx("div", { className: "text-6xl mb-3", children: "\u{1F3C6}" }), n.jsx("h3", { className: "text-2xl md:text-3xl font-black text-yellow-400 font-pixel mb-2", children: "FACTORY REPORT" }), n.jsx("p", { className: "text-stone-300 text-sm mb-4", children: "\u95D6\u95DC\u5B8C\u6210\uFF01\u4F60\u5728\u5F62\u72C0\u5DE5\u5EE0\u4E2D\u8868\u73FE\u51FA\u8272\uFF01" }), n.jsxs("div", { className: "bg-stone-800 border-2 border-black rounded-2xl p-4 mb-6 flex justify-around", children: [n.jsxs("div", { children: [n.jsx("div", { className: "text-xs text-stone-400 font-pixel", children: "FINAL SCORE" }), n.jsxs("div", { className: "text-2xl font-black text-amber-400 font-pixel mt-1", children: ["\u{1FA99} ", T] })] }), n.jsxs("div", { children: [n.jsx("div", { className: "text-xs text-stone-400 font-pixel", children: "MAX COMBO" }), n.jsxs("div", { className: "text-2xl font-black text-purple-400 font-pixel mt-1", children: ["\u26A1 x", B] })] })] }), n.jsxs("div", { className: "flex justify-center gap-3", children: [n.jsxs("button", { onClick: ie, className: "mario-btn mario-btn-yellow px-6 py-2.5 text-black font-black flex items-center gap-2 cursor-pointer", children: [n.jsx(jt, { className: "w-4 h-4" }), n.jsx("span", { children: "\u518D\u4F86\u4E00\u5C40" })] }), n.jsx("button", { onClick: f, className: "mario-btn mario-btn-red px-6 py-2.5 text-white font-black cursor-pointer", children: "\u8FD4\u56DE\u4E3B\u9801" })] })] })] });
}
const wg = [{ id: "redondo", text: "redondo", sub: "\u5713\u5F62 \u2022 \u967D\u6027 -o", gender: "m", pole: "N (\u967D\u6027)", poleColor: "bg-blue-600 text-white", bgGradient: "from-blue-50 to-blue-100 border-blue-500", borderClass: "border-blue-600 text-blue-900" }, { id: "redonda", text: "redonda", sub: "\u5713\u5F62 \u2022 \u9670\u6027 -a", gender: "f", pole: "S (\u9670\u6027)", poleColor: "bg-pink-600 text-white", bgGradient: "from-pink-50 to-pink-100 border-pink-500", borderClass: "border-pink-600 text-pink-900" }, { id: "quadrado", text: "quadrado", sub: "\u6B63\u65B9\u5F62 \u2022 \u967D\u6027 -o", gender: "m", pole: "N (\u967D\u6027)", poleColor: "bg-emerald-600 text-white", bgGradient: "from-emerald-50 to-emerald-100 border-emerald-500", borderClass: "border-emerald-600 text-emerald-900" }, { id: "quadrada", text: "quadrada", sub: "\u6B63\u65B9\u5F62 \u2022 \u9670\u6027 -a", gender: "f", pole: "S (\u9670\u6027)", poleColor: "bg-teal-600 text-white", bgGradient: "from-teal-50 to-teal-100 border-teal-500", borderClass: "border-teal-600 text-teal-900" }, { id: "retangular", text: "retangular", sub: "\u9577\u65B9\u5F62 \u2022 \u8B8A\u5F62\u8D85\u4EBA \u2B50", gender: "both", pole: "N/S (\u96D9\u5411\u842C\u7528)", poleColor: "bg-gradient-to-r from-blue-600 via-amber-400 to-pink-600 text-white font-black", bgGradient: "from-amber-100 via-yellow-50 to-amber-100 border-amber-500", borderClass: "border-amber-600 text-amber-950" }];
function kg({ onBack: f }) {
  const h = We.filter((X) => X.article !== ""), [d, o] = y.useState([]), [T, N] = y.useState(null), [B, U] = y.useState([]), [ne, ee] = y.useState(null), [D, b] = y.useState(false), [Y, O] = y.useState(null), Z = () => {
    const X = h.filter((se) => se.shape === "circle").sort(() => Math.random() - 0.5).slice(0, 2), K = h.filter((se) => se.shape === "square").sort(() => Math.random() - 0.5).slice(0, 2), oe = h.filter((se) => se.shape === "rectangle").sort(() => Math.random() - 0.5).slice(0, 2), H = [...X, ...K, ...oe].sort(() => Math.random() - 0.5);
    o(H), N(null), U([]), ee(null), O(null);
  };
  y.useEffect(() => {
    Z();
  }, []);
  const L = (X) => {
    if (!T || B.some((oe) => oe.nounId === T.id)) return;
    if (T.targetAdj === X.id) {
      Ip();
      const oe = T.exampleSentence;
      O(oe), U((H) => [...H, { nounId: T.id, adjId: X.id, sentence: oe }]), N(null), ee(null);
    } else {
      Pp(), b(true), setTimeout(() => b(false), 500);
      let oe = "";
      T.shape !== X.id && !X.id.startsWith(T.targetAdj.substring(0, 4)) ? oe = `\u5F62\u72C0\u4E0D\u7B26\uFF01\u3010${T.portuguese}\u3011\u4E0D\u662F\u9019\u500B\u5F62\u72C0\u5594\uFF01` : T.gender === "f" && X.gender === "m" ? oe = `\u540C\u6975\u76F8\u65A5\uFF01\u3010${T.portuguese}\u3011\u662F\u9670\u6027\u540D\u8A5E (a)\uFF0C\u4E0D\u80FD\u5438\u9644\u967D\u6027\u7684 -o (${X.text})\uFF0C\u61C9\u8A72\u627E\u9670\u6027\u7684 -a (redonda/quadrada)\uFF01` : T.gender === "m" && X.gender === "f" ? oe = `\u540C\u6975\u76F8\u65A5\uFF01\u3010${T.portuguese}\u3011\u662F\u967D\u6027\u540D\u8A5E (o)\uFF0C\u4E0D\u80FD\u5438\u9644\u9670\u6027\u7684 -a (${X.text})\uFF0C\u61C9\u8A72\u627E\u967D\u6027\u7684 -o (redondo/quadrado)\uFF01` : oe = `\u78C1\u6975\u6392\u65A5\uFF01\u3010${T.portuguese}\u3011\u548C\u3010${X.text}\u3011\u7121\u6CD5\u5438\u9644\uFF01`, ee({ noun: T, adj: X, message: oe }), setTimeout(() => {
        ee(null);
      }, 3e3);
    }
  }, I = d.length > 0 && B.length === d.length;
  return n.jsxs("div", { className: `w-full bg-[#fdf8f0] p-4 md:p-6 rounded-3xl border-4 border-black shadow-[8px_8px_0px_#000] relative overflow-hidden transition-transform duration-100 ${D ? "translate-x-1 translate-y-1 rotate-0.5" : ""}`, children: [n.jsx("div", { className: "absolute top-2 right-4 text-purple-200/40 text-7xl select-none pointer-events-none", children: "\u{1F9F2}" }), n.jsx("div", { className: "absolute bottom-3 left-4 text-amber-200/40 text-7xl select-none pointer-events-none", children: "\u26A1" }), n.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 relative z-10 border-b-3 border-black pb-4", children: [n.jsxs("button", { onClick: f, className: "mario-btn mario-btn-gray px-4 py-2 text-xs md:text-sm text-white flex items-center gap-1.5", children: [n.jsx(Lt, { className: "w-4 h-4" }), n.jsx("span", { children: "\u8FD4\u56DE\u83DC\u55AE" })] }), n.jsxs("div", { className: "text-center", children: [n.jsx("h2", { className: "text-xl md:text-2xl font-black font-pixel text-purple-800 drop-shadow flex items-center justify-center gap-2", children: n.jsx("span", { children: "\u{1F9F2} O CASAMENTO DAS FORMAS \u{1F48D}" }) }), n.jsx("p", { className: "text-xs text-stone-700 font-bold", children: "\u300A\u5F62\u72C0\u5927\u806F\u59FB\u300B\u2022 \u78C1\u529B\u5438\u9644\u914D\u5C0D\uFF1A\u540D\u8A5E\u5C0B\u627E\u5C08\u5C6C\u5F62\u72C0\u5C3E\u5DF4\uFF0C\u540C\u6027\u76F8\u65A5\uFF0C\u7570\u6027\u76F8\u5438\uFF01" })] }), n.jsxs("button", { onClick: Z, className: "mario-btn mario-btn-yellow px-4 py-2 text-xs md:text-sm text-black flex items-center gap-1.5 cursor-pointer", children: [n.jsx(jt, { className: "w-4 h-4" }), n.jsx("span", { children: "\u63DB\u4E00\u6279\u55AE\u8A5E" })] })] }), n.jsxs("div", { className: "min-h-12 mb-6 flex items-center justify-center", children: [Y && !ne && n.jsxs("div", { className: "bg-emerald-100 border-3 border-emerald-600 px-5 py-2 rounded-2xl flex items-center gap-3 shadow-[4px_4px_0px_#059669] animate-bounce", children: [n.jsx(Vx, { className: "w-5 h-5 text-emerald-600" }), n.jsx("span", { className: "text-base md:text-lg font-black text-emerald-900", children: Y })] }), ne && n.jsxs("div", { className: "bg-red-100 border-3 border-red-600 px-5 py-2 rounded-2xl flex items-center gap-2 shadow-[4px_4px_0px_#dc2626] animate-pulse", children: [n.jsx(Bp, { className: "w-5 h-5 text-red-600 shrink-0" }), n.jsx("span", { className: "text-xs md:text-sm font-bold text-red-900", children: ne.message })] }), !Y && !ne && n.jsx("div", { className: "bg-amber-100 border-2 border-dashed border-amber-400 px-4 py-1.5 rounded-xl text-xs text-amber-900 font-bold", children: "\u{1F4A1} \u5148\u5728\u5DE6\u5074\u9EDE\u9078\u300C\u540D\u8A5E\u5361\u300D\uFF0C\u518D\u9EDE\u53F3\u5074\u78C1\u9435\u300C\u5F62\u5BB9\u8A5E\u300D\u5438\u9644\uFF01" })] }), n.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10", children: [n.jsxs("div", { className: "lg:col-span-7 flex flex-col gap-3", children: [n.jsxs("div", { className: "flex items-center justify-between px-1", children: [n.jsx("h3", { className: "font-pixel text-xs text-stone-800 font-bold flex items-center gap-1.5", children: n.jsxs("span", { children: ["\u{1F4E6} \u5F85\u914D\u5C0D\u7684\u540D\u8A5E\u5361 (", B.length, " / ", d.length, ")"] }) }), n.jsx("span", { className: "text-[11px] text-stone-500 font-semibold", children: "\u6CE8\u610F\u770B\u5B9A\u51A0\u8A5E o \u9084\u662F a" })] }), n.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3", children: d.map((X) => {
    const K = B.find((H) => H.nounId === X.id), oe = (T == null ? void 0 : T.id) === X.id;
    return n.jsxs("div", { onClick: () => {
      K ? (X.exampleSentence, void 0) : (N(X), X.portuguese, void 0);
    }, className: `p-3 rounded-2xl border-3 transition-all duration-150 cursor-pointer relative flex flex-col items-center justify-between select-none ${K ? "bg-emerald-50 border-emerald-500 shadow-sm opacity-90" : oe ? "bg-amber-100 border-amber-500 shadow-[4px_4px_0px_#f59e0b] scale-103 ring-4 ring-amber-300" : "bg-white border-black shadow-[4px_4px_0px_#000] hover:bg-stone-50 hover:-translate-y-0.5"}`, children: [n.jsxs("div", { className: "w-full flex items-center justify-between mb-1", children: [n.jsx("span", { className: `text-[10px] font-black px-1.5 py-0.5 rounded border ${X.gender === "m" ? "bg-blue-100 text-blue-900 border-blue-400" : "bg-pink-100 text-pink-900 border-pink-400"}`, children: X.gender === "m" ? "\u9633\u6027 (o)" : "\u9634\u6027 (a)" }), K && n.jsx(Fo, { className: "w-4 h-4 text-emerald-600 fill-emerald-100" })] }), n.jsx("span", { className: "text-4xl my-1 group-hover:scale-110 transition-transform", children: X.emoji }), n.jsx("div", { className: "text-sm md:text-base font-black text-stone-900 text-center leading-tight", children: X.portuguese }), n.jsx("div", { className: "text-[11px] text-stone-500 font-bold", children: X.chinese }), K ? n.jsx("div", { className: "mt-2 text-[11px] font-black bg-emerald-600 text-white px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm", children: n.jsxs("span", { children: ["\xE9 ", K.adjId, "!"] }) }) : n.jsxs("div", { className: "mt-2 text-[10px] text-stone-400 font-semibold flex items-center gap-1", children: [n.jsx(Tx, { className: "w-3 h-3" }), n.jsx("span", { children: oe ? "\u5DF2\u9078\u5B9A" : "\u9EDE\u64CA\u9078\u64C7" })] })] }, X.id);
  }) })] }), n.jsxs("div", { className: "lg:col-span-5 flex flex-col gap-3", children: [n.jsxs("div", { className: "flex items-center justify-between px-1", children: [n.jsx("h3", { className: "font-pixel text-xs text-stone-800 font-bold flex items-center gap-1.5", children: n.jsx("span", { children: "\u{1F9F2} \u78C1\u529B\u5F62\u5BB9\u8A5E\u6CE1\u6CE1" }) }), n.jsx("span", { className: "text-[11px] text-stone-500 font-semibold", children: "\u914D\u5C0D\u5F8C\u81EA\u52D5\u6717\u8B80" })] }), n.jsx("div", { className: "flex flex-col gap-2.5", children: wg.map((X) => {
    const K = X.id === "retangular";
    return n.jsxs("button", { onClick: () => L(X), className: `w-full p-3.5 rounded-2xl border-3 ${X.borderClass} bg-gradient-to-r ${X.bgGradient} shadow-[4px_4px_0px_#000] hover:scale-101 active:scale-98 transition-all flex items-center justify-between cursor-pointer relative overflow-hidden group select-none`, children: [n.jsxs("div", { className: "flex items-center gap-3", children: [n.jsxs("div", { className: `px-2.5 py-1 rounded-xl text-xs font-black shadow-sm flex items-center gap-1 ${X.poleColor}`, children: [n.jsx(Tx, { className: "w-3.5 h-3.5" }), n.jsx("span", { children: X.pole })] }), n.jsxs("div", { className: "text-left", children: [n.jsxs("div", { className: "text-lg font-black tracking-tight flex items-center gap-1.5", children: [n.jsx("span", { children: X.text }), K && n.jsx("span", { className: "text-xs bg-yellow-400 border border-black text-black px-1.5 py-0.2 rounded font-black animate-pulse", children: "\u8D85\u4EBA \u2B50" })] }), n.jsx("div", { className: "text-xs font-bold text-stone-600", children: X.sub })] })] }), n.jsx("div", { className: "text-right", children: n.jsx("span", { className: "text-xs font-bold px-2 py-1 bg-white/80 border border-black/20 rounded-lg group-hover:bg-white text-stone-700", children: "\u5438\u9644 \u2794" }) })] }, X.id);
  }) }), n.jsxs("div", { className: "bg-amber-50 border-3 border-amber-300 rounded-2xl p-3 text-xs text-amber-900 leading-relaxed font-medium mt-1", children: [n.jsx("span", { className: "font-black text-amber-950 block mb-0.5", children: "\u{1F4A1} \u78C1\u529B\u53E3\u8A23\u901F\u8A18\uFF1A" }), "\u2022 \u967D\u6027\u540D\u8A5E (", n.jsx("span", { className: "text-blue-700 font-bold", children: "o ..." }), ") \u2794 \u642D\u914D ", n.jsx("span", { className: "font-bold", children: "redond-o / quadrad-o" }), "\uFF01", n.jsx("br", {}), "\u2022 \u9670\u6027\u540D\u8A5E (", n.jsx("span", { className: "text-pink-700 font-bold", children: "a ..." }), ") \u2794 \u642D\u914D ", n.jsx("span", { className: "font-bold", children: "redond-a / quadrad-a" }), "\uFF01", n.jsx("br", {}), "\u2022 \u9577\u65B9\u5F62\u8D85\u4EBA (", n.jsx("span", { className: "text-amber-700 font-bold", children: "retangular" }), ") \u2794 \u7537\u751F\u5973\u751F\u901A\u901A\u5438\u5F97\u7262\uFF01"] })] })] }), I && n.jsxs("div", { className: "mt-8 bg-emerald-50 border-4 border-emerald-600 rounded-3xl p-6 text-center max-w-lg mx-auto shadow-[6px_6px_0px_#000] animate-fade-in relative z-20", children: [n.jsx("div", { className: "text-5xl mb-2 animate-bounce", children: "\u{1F389}\u{1F48D}\u2728" }), n.jsx("h3", { className: "text-2xl font-black text-emerald-800 font-pixel mb-1", children: "CASAMENTO PERFEITO!" }), n.jsx("p", { className: "text-emerald-700 text-sm font-bold mb-4", children: "\u606D\u559C\uFF01\u6240\u6709\u540D\u8A5E\u548C\u5F62\u72C0\u5C3E\u5DF4\u90FD\u9806\u5229\u727D\u624B\u6210\u529F\uFF01" }), n.jsxs("div", { className: "flex justify-center gap-3", children: [n.jsxs("button", { onClick: Z, className: "mario-btn mario-btn-yellow px-6 py-2.5 text-black font-black flex items-center gap-2 cursor-pointer", children: [n.jsx(jt, { className: "w-4 h-4" }), n.jsx("span", { children: "\u518D\u73A9\u4E00\u7D44" })] }), n.jsx("button", { onClick: f, className: "mario-btn mario-btn-red px-6 py-2.5 text-white font-black cursor-pointer", children: "\u8FD4\u56DE\u4E3B\u9801" })] })] })] });
}
const Sg = [
  { id: "cadeira", name: "a cadeira", chinese: "椅子", emoji: "🪑", gender: "f", article: "a", shape: "square", targetAdj: "quadrada", sentence: "A cadeira é quadrada.", xPos: "left-[18%]", yPos: "top-[25%]", locationLabel: "書桌前的正方形椅子" },
  { id: "janela", name: "a janela", chinese: "窗戶", emoji: "🪟", gender: "f", article: "a", shape: "square", targetAdj: "quadrada", sentence: "A janela é quadrada.", xPos: "left-[24%]", yPos: "top-[64%]", locationLabel: "牆上的正方形窗戶" },
  { id: "mesa", name: "a mesa", chinese: "圓形餐桌", emoji: "🪵", gender: "f", article: "a", shape: "circle", targetAdj: "redonda", sentence: "A mesa é redonda.", xPos: "left-[48%]", yPos: "top-[20%]", locationLabel: "房間中央的圓桌" },
  { id: "televisao", name: "a televisão", chinese: "電視機", emoji: "📺", gender: "f", article: "a", shape: "rectangle", targetAdj: "retangular", sentence: "A televisão é retangular.", xPos: "left-[50%]", yPos: "top-[68%]", locationLabel: "電視櫃上的長方形電視" },
  { id: "frigorifico", name: "o frigorífico", chinese: "冰箱 (歐葡)", emoji: "🧊", gender: "m", article: "o", shape: "rectangle", targetAdj: "retangular", sentence: "O frigorífico é retangular.", xPos: "left-[75%]", yPos: "top-[25%]", locationLabel: "角落的歐葡冰箱" },
  { id: "roupeiro", name: "o roupeiro", chinese: "大衣櫃 (歐葡)", emoji: "🚪", gender: "m", article: "o", shape: "rectangle", targetAdj: "retangular", sentence: "O roupeiro é retangular.", xPos: "left-[78%]", yPos: "top-[64%]", locationLabel: "靠牆的大衣櫃" },
  { id: "armario", name: "o armário", chinese: "壁櫥/櫃子", emoji: "🗄️", gender: "m", article: "o", shape: "rectangle", targetAdj: "retangular", sentence: "O armário é retangular.", xPos: "left-[36%]", yPos: "top-[70%]", locationLabel: "旁邊的儲物壁櫥" },
  { id: "porta", name: "a porta", chinese: "大門", emoji: "🚪", gender: "f", article: "a", shape: "rectangle", targetAdj: "retangular", sentence: "A porta é retangular.", xPos: "left-[64%]", yPos: "top-[72%]", locationLabel: "通往走廊的房門" }
], Ux = [
  { step: 1, ptCommand: "Procura um objeto que é quadrada!", zhCommand: "尋找一個正方形且為陰性 (a ...) 的物品！", requiredAdj: "quadrada", hint: "提示：注意是 quadrada (-a 陰性)，如椅子 (a cadeira) 或窗戶 (a janela)！" },
  { step: 2, ptCommand: "Procura um objeto que é redonda!", zhCommand: "尋找一個圓形且為陰性 (a ...) 的物品！", requiredAdj: "redonda", hint: "提示：注意是 redonda (-a 陰性)，房間中央擺放的圓桌 (a mesa)！" },
  { step: 3, ptCommand: "Procura um objeto que é retangular!", zhCommand: "尋找一個長方形物品（變形超人）！", requiredAdj: "retangular", hint: "提示：長方形是變形超人，不分陰陽性！冰箱 (o frigorífico)、衣櫃 (o roupeiro)、電視 (a televisão) 或大門 (a porta) 都可以！" }
];
function _g({ onBack: f }) {
  const [h, d] = y.useState(0), [o, T] = y.useState(0), [N, B] = y.useState(null), [U, ne] = y.useState(false), [ee, D] = y.useState(null), [b, Y] = y.useState(false), [O, Z] = y.useState(null), L = Ux[h], I = () => {
    U || L && (L.ptCommand, void 0);
  };
  y.useEffect(() => {
    I();
  }, [h, U]);
  const X = (H) => {
    if (U) return;
    const se = L;
    if (H.targetAdj === se.requiredAdj) {
      tg(), H.sentence, B({ show: true, obj: H, isCorrect: true, explanation: `\u592A\u68D2\u4E86\uFF01${H.name} \u5B8C\u7F8E\u7B26\u5408\uFF01\u5B8C\u6574\u53E5\u5B50\uFF1A${H.sentence}\u3002\u7269\u54C1\u4E0B\u65B9\u6389\u51FA\u4E86\u4E00\u628A\u9583\u4EAE\u91D1\u9470\u5319 \u{1F5DD}\uFE0F\uFF01` });
      const G = o + 1;
      T(G), setTimeout(() => {
        h < Ux.length - 1 ? d((z) => z + 1) : ne(true);
      }, 2500);
    } else {
      lt();
      let G = "";
      se.requiredAdj === "quadrada" && (H.id === "cadeira" || H.id === "janela") ? G = "找到正方形物品啦！" : se.requiredAdj === "redonda" && H.id === "mesa" ? G = "\u62AB\u85A9\u78BA\u5BE6\u662F\u5713\u5F62\uFF0C\u4F46\u5B83\u662F\u300Ca mesa\uFF08\u9670\u6027\uFF09\u300D\uFF0C\u61C9\u8A72\u914D\u300Credonda\u300D\uFF0C\u4E0D\u662F\u984C\u76EE\u8981\u6C42\u7684\u967D\u6027\u300Credondo\u300D\u5594\uFF01" : H.shape !== "rectangle" && se.requiredAdj === "retangular" ? G = `\u9019\u500B\u7269\u54C1\u4E0D\u662F\u9577\u65B9\u5F62\uFF01\u5B83\u9700\u8981\u914D\u3010${H.targetAdj}\u3011\u3002` : H.gender === "m" && se.requiredAdj.endsWith("a") ? G = `\u6CE8\u610F\uFF01${H.name} \u662F\u967D\u6027\u540D\u8A5E (o)\uFF0C\u4E0D\u80FD\u914D\u4EE5 -a \u7D50\u5C3E\u7684\u3010${se.requiredAdj}\u3011\uFF01` : H.gender === "f" && se.requiredAdj.endsWith("o") ? G = `\u6CE8\u610F\uFF01${H.name} \u662F\u9670\u6027\u540D\u8A5E (a)\uFF0C\u4E0D\u80FD\u914D\u4EE5 -o \u7D50\u5C3E\u7684\u3010${se.requiredAdj}\u3011\uFF01` : G = `${H.name} \u7684\u5F62\u72C0\u662F\u3010${H.targetAdj}\u3011\uFF0C\u8207\u7DDA\u7D22\u4E0D\u7B26\u5594\uFF01`, B({ show: true, obj: H, isCorrect: false, explanation: G });
    }
  }, K = (H) => {
    D(H), H === "retangular" ? (ut(), Y(true), Z("\u5C01\u5370\u89E3\u9664\uFF01\u5927\u9580\u7DE9\u7DE9\u958B\u555F\uFF1AA porta \xE9 retangular\uFF01\u9577\u65B9\u5F62\u8B8A\u5F62\u8D85\u4EBA\u842C\u7528\u540C\u5F62\uFF01")) : (lt(), Z(`\u7B26\u77F3\u5F48\u958B\u4E86\uFF01\u5927\u9580\u662F\u9577\u65B9\u5F62\u7684\uFF0C\u4E0D\u80FD\u586B\u3010${H}\u3011\u5594\uFF01\u56DE\u60F3\u4E00\u4E0B\u9577\u65B9\u5F62\u53E3\u8A23\uFF1F`));
  }, oe = () => {
    d(0), T(0), ne(false), D(null), Y(false), Z(null), B(null);
  };
  return n.jsxs("div", { className: "w-full bg-[#201d2d] text-white p-4 md:p-6 rounded-3xl border-4 border-black shadow-[8px_8px_0px_#000] relative overflow-hidden font-sans", children: [n.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-3 mb-4 border-b-2 border-stone-700 pb-3", children: [n.jsxs("button", { onClick: f, className: "mario-btn mario-btn-gray px-4 py-2 text-xs md:text-sm text-white flex items-center gap-1.5", children: [n.jsx(Lt, { className: "w-4 h-4" }), n.jsx("span", { children: "\u8FD4\u56DE\u83DC\u55AE" })] }), n.jsxs("div", { className: "text-center", children: [n.jsx("h2", { className: "text-xl md:text-2xl font-black font-pixel text-amber-400 drop-shadow flex items-center justify-center gap-2", children: n.jsx("span", { children: "\u{1F50D} DETETIVE DAS PALAVRAS \u{1F5DD}\uFE0F" }) }), n.jsx("p", { className: "text-xs text-amber-200 font-bold", children: "\u300A\u540D\u8A5E\u5BC6\u5BA4\u5927\u9003\u812B\u300B\u2022 \u807D\u8072\u8FA8\u8A5E\uFF0C\u627E\u51FA\u96B1\u85CF\u5728\u5BB6\u5177\u4E2D\u7684\u5BC6\u78BC\u9470\u5319\uFF01" })] }), n.jsxs("div", { className: "flex items-center gap-2 bg-stone-900 border-2 border-amber-500 px-3 py-1.5 rounded-xl shadow-[2px_2px_0px_#000]", children: [n.jsx("span", { className: "text-xs font-pixel text-amber-400", children: "KEYS:" }), n.jsx("div", { className: "flex gap-1", children: Array.from({ length: 3 }).map((H, se) => n.jsx(_p, { className: `w-5 h-5 ${se < o ? "text-amber-400 fill-amber-400 animate-bounce" : "text-stone-600"}` }, se)) })] })] }), !U && n.jsxs("div", { className: "bg-gradient-to-r from-amber-900/80 via-stone-800 to-amber-900/80 border-3 border-amber-500 rounded-2xl p-4 mb-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg", children: [n.jsxs("div", { className: "flex items-center gap-3", children: [n.jsx("div", { className: "w-12 h-12 bg-amber-500 text-black rounded-2xl border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_#000] shrink-0", children: n.jsx(Zo, { className: "w-6 h-6 animate-pulse" }) }), n.jsxs("div", { children: [n.jsxs("div", { className: "flex items-center gap-2", children: [n.jsxs("span", { className: "text-xs font-pixel bg-amber-400 text-black px-2 py-0.5 rounded font-black", children: ["CLUE #", L.step] }), n.jsx("span", { className: "text-xs text-amber-300 font-bold", children: "\u7246\u4E0A\u63DA\u8072\u5668\u50B3\u51FA\u8072\u97F3\uFF1A" })] }), n.jsxs("h3", { className: "text-lg md:text-xl font-black text-white mt-1", children: ['"', L.ptCommand, '"'] }), n.jsx("p", { className: "text-xs text-stone-300 font-medium", children: L.zhCommand })] })] }), n.jsxs("div", { className: "bg-black/50 p-2.5 rounded-xl border border-amber-500/50 max-w-xs text-xs text-amber-200", children: [n.jsx("span", { className: "font-bold text-yellow-300 block mb-0.5", children: "\u{1F4A1} \u5075\u63A2\u63D0\u793A\u672C\uFF1A" }), L.hint] })] }), !U && n.jsxs("div", { className: "relative w-full h-[400px] md:h-[460px] bg-gradient-to-b from-[#2a223f] to-[#171324] border-4 border-black rounded-3xl overflow-hidden shadow-2xl relative", children: [n.jsx("div", { className: "absolute inset-x-0 top-0 h-[60%] bg-[radial-gradient(#3a2e5c_1px,transparent_1px)] [background-size:16px_16px] opacity-70" }), n.jsx("div", { className: "absolute inset-x-0 bottom-0 h-[40%] bg-stone-900 border-t-4 border-amber-950 flex flex-col justify-end", children: n.jsx("div", { className: "w-full h-full opacity-20 bg-[repeating-linear-gradient(90deg,#000,#000_40px,#3d2c1d_40px,#3d2c1d_80px)]" }) }), Sg.map((H) => n.jsxs("button", { onClick: () => X(H), className: `absolute ${H.xPos} ${H.yPos} group -translate-x-1/2 -translate-y-1/2 p-2.5 rounded-2xl bg-stone-900/80 hover:bg-amber-900/90 border-2 border-stone-600 hover:border-amber-400 shadow-[4px_4px_0px_#000] transition-all hover:scale-115 active:scale-95 cursor-pointer z-10 flex flex-col items-center select-none`, children: [n.jsx("span", { className: "text-4xl md:text-5xl drop-shadow group-hover:rotate-6 transition-transform", children: H.emoji }), n.jsx("div", { className: "mt-1 px-2 py-0.5 rounded-md bg-black/80 border border-stone-500 group-hover:border-amber-400 text-[10px] md:text-xs font-black text-amber-300 whitespace-nowrap", children: H.name }), n.jsx("span", { className: "text-[9px] text-stone-400 group-hover:text-white font-medium", children: H.chinese })] }, H.id)), n.jsxs("div", { className: "absolute top-[30%] left-[8%] -translate-y-1/2 flex flex-col items-center opacity-85 pointer-events-none", children: [n.jsx(gp, { className: "w-16 h-24 text-amber-700" }), n.jsx("span", { className: "text-[10px] font-pixel text-stone-400", children: "BOSS DOOR" })] })] }), (N == null ? void 0 : N.show) && n.jsx("div", { className: "fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4", children: n.jsxs("div", { className: `p-6 rounded-3xl border-4 border-black max-w-md w-full shadow-[8px_8px_0px_#000] text-center ${N.isCorrect ? "bg-emerald-950 text-white" : "bg-stone-900 text-white"}`, children: [n.jsx("div", { className: "text-5xl mb-2 animate-bounce", children: N.isCorrect ? "\u{1F5DD}\uFE0F" : "\u{1F50E}" }), n.jsx("h3", { className: `text-xl font-black font-pixel mb-1 ${N.isCorrect ? "text-emerald-400" : "text-amber-400"}`, children: N.isCorrect ? "KEY FOUND! \u7372\u5F97\u9470\u5319\uFF01" : "\u5075\u63A2\u7DDA\u7D22\u5206\u6790" }), n.jsxs("div", { className: "text-sm font-bold text-stone-300 mb-3", children: ["\u8ABF\u67E5\u7269\u54C1\uFF1A", n.jsx("span", { className: "text-yellow-300 font-black", children: N.obj.name }), " (", N.obj.chinese, ")"] }), n.jsx("p", { className: "text-xs md:text-sm text-stone-200 mb-6 leading-relaxed bg-black/40 p-3 rounded-xl border border-stone-700", children: N.explanation }), n.jsx("button", { onClick: () => B(null), className: "mario-btn mario-btn-yellow px-6 py-2.5 text-black font-black cursor-pointer", children: "\u660E\u767D\uFF0C\u7E7C\u7E8C\u8ABF\u67E5\uFF01" })] }) }), U && n.jsxs("div", { className: "bg-stone-900 border-4 border-amber-500 rounded-3xl p-6 md:p-8 text-center max-w-2xl mx-auto shadow-2xl relative z-20", children: [n.jsx("div", { className: "text-5xl mb-2 animate-pulse", children: b ? "\u{1F6AA}\u2728" : "\u{1F512}" }), n.jsx("h3", { className: "text-2xl md:text-3xl font-black text-amber-400 font-pixel mb-1", children: "BOSS\u95DC\u5361\uFF1A\u7D42\u6975\u5BC6\u5BA4\u5927\u9580" }), n.jsx("p", { className: "text-stone-300 text-xs md:text-sm mb-6", children: "\u4E09\u628A\u91D1\u9470\u5319\u5DF2\u96C6\u9F4A\uFF01\u9580\u4E0A\u7684\u9B54\u6CD5\u9396\u69FD\u523B\u8457\u4E00\u9053\u5F62\u72C0\u9298\u6587\uFF1A" }), n.jsxs("div", { className: "bg-stone-950 border-3 border-amber-600 rounded-2xl p-5 mb-6 shadow-inner", children: [n.jsx("span", { className: "text-xs font-pixel text-amber-500 block mb-2", children: "DOOR INSCRIPTION" }), n.jsxs("div", { className: "text-2xl md:text-3xl font-black text-yellow-300 tracking-wide flex items-center justify-center gap-3", children: [n.jsx("span", { children: "A porta \xE9" }), n.jsx("span", { className: `px-4 py-1 rounded-xl border-2 border-dashed ${ee === "retangular" ? "bg-amber-400 text-black border-amber-300 font-black scale-105" : "bg-stone-800 text-stone-500 border-stone-600"}`, children: ee || "________" }), n.jsx("span", { children: "." })] }), n.jsx("div", { className: "text-xs text-stone-400 mt-2", children: "(\u5927\u9580\u662F\u9577\u65B9\u5F62\u7684\uFF0C\u4E0D\u7BA1\u662F\u7537\u751F\u9084\u662F\u5973\u751F\u7684\u9577\u65B9\u5F62\uFF0C\u7D50\u5C3E\u90FD\u662F\uFF1F)" })] }), O && n.jsx("div", { className: `p-3 rounded-xl border-2 mb-6 text-xs md:text-sm font-bold ${b ? "bg-emerald-950 border-emerald-500 text-emerald-300" : "bg-red-950 border-red-500 text-red-300"}`, children: O }), b ? n.jsxs("div", { className: "animate-fade-in", children: [n.jsx("div", { className: "text-6xl mb-3", children: "\u{1F393}\u{1F3C6}\u{1F3C5}" }), n.jsx("h4", { className: "text-xl md:text-2xl font-black text-yellow-300 font-pixel mb-2", children: "PARAB\xC9NS! \u6210\u529F\u9003\u812B\uFF01" }), n.jsx("p", { className: "text-xs md:text-sm text-stone-200 mb-6 max-w-md mx-auto", children: "\u4F60\u6210\u529F\u7834\u89E3\u4E86\u6240\u6709\u5F62\u72C0\u8207\u540D\u8A5E\u9670\u967D\u6027\u8B0E\u984C\uFF0C\u7372\u9812\u3010\u8461\u8A9E\u5F62\u72C0\u7279\u7D1A\u5C0F\u5075\u63A2\u3011\u5FBD\u7AE0\uFF01" }), n.jsxs("div", { className: "flex justify-center gap-3", children: [n.jsxs("button", { onClick: oe, className: "mario-btn mario-btn-yellow px-6 py-2.5 text-black font-black flex items-center gap-2 cursor-pointer", children: [n.jsx(jt, { className: "w-4 h-4" }), n.jsx("span", { children: "\u518D\u73A9\u4E00\u6B21\u5BC6\u5BA4" })] }), n.jsx("button", { onClick: f, className: "mario-btn mario-btn-red px-6 py-2.5 text-white font-black cursor-pointer", children: "\u8FD4\u56DE\u4E3B\u9801" })] })] }) : n.jsxs("div", { children: [n.jsx("span", { className: "text-xs font-bold text-stone-400 mb-2 block", children: "\u5F9E\u4F60\u7684\u5075\u63A2\u80CC\u5305\u4E2D\u9078\u53D6\u5F62\u72C0\u7B26\u77F3\u9472\u5D4C\uFF1A" }), n.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [{ id: "redondo", label: "redondo", note: "\u5713\u5F62 (\u967D\u6027)" }, { id: "redonda", label: "redonda", note: "\u5713\u5F62 (\u9670\u6027)" }, { id: "quadrada", label: "quadrada", note: "\u6B63\u65B9\u5F62 (\u9670\u6027)" }, { id: "retangular", label: "retangular", note: "\u9577\u65B9\u5F62 (\u8D85\u4EBA\u842C\u7528 \u2B50)" }].map((H) => n.jsxs("button", { onClick: () => K(H.id), className: "p-3 rounded-2xl border-3 border-amber-400 bg-amber-500/10 hover:bg-amber-500 hover:text-black transition-all cursor-pointer shadow-[3px_3px_0px_#000] flex flex-col items-center select-none", children: [n.jsx("span", { className: "text-base font-black", children: H.label }), n.jsx("span", { className: "text-[10px] opacity-80", children: H.note })] }, H.id)) })] })] })] });
}
const Ag = [{ word: "redondo", label: "redondo", note: "\u5713\u5F62 (\u967D\u6027 -o)", bg: "bg-blue-100 border-blue-500 text-blue-900" }, { word: "redonda", label: "redonda", note: "\u5713\u5F62 (\u9670\u6027 -a)", bg: "bg-pink-100 border-pink-500 text-pink-900" }, { word: "quadrado", label: "quadrado", note: "\u6B63\u65B9\u5F62 (\u967D\u6027 -o)", bg: "bg-emerald-100 border-emerald-500 text-emerald-900" }, { word: "quadrada", label: "quadrada", note: "\u6B63\u65B9\u5F62 (\u9670\u6027 -a)", bg: "bg-teal-100 border-teal-500 text-teal-900" }, { word: "retangular", label: "retangular", note: "\u9577\u65B9\u5F62 (\u8B8A\u5F62\u8D85\u4EBA \u2B50)", bg: "bg-amber-100 border-amber-500 text-amber-950 font-black ring-2 ring-yellow-400" }], Ts = [
  { id: 1, question: "Como é a porta?", questionChinese: "大門是什麼形狀的？", itemEmoji: "🚪", prefixPrompt: "A porta é ", correctAdjective: "retangular", fullSentence: "A porta é retangular.", sentenceChinese: "門是長方形的。", grammarTip: "a porta 是陰性名詞 (a)，形狀為長方形。長方形是「變形超人 retangular」，男女衣服都不變！", wordTokens: ["A", "porta", "é", "retangular", "quadrada", "redonda", "."] },
  { id: 2, question: "Como é a cadeira?", questionChinese: "椅子是什麼形狀的？", itemEmoji: "🪑", prefixPrompt: "A cadeira é ", correctAdjective: "quadrada", fullSentence: "A cadeira é quadrada.", sentenceChinese: "椅子是正方形的。", grammarTip: "a cadeira 是陰性名詞 (a)，正方形陰性結尾配合「-a」，所以用 quadrada！", wordTokens: ["A", "cadeira", "é", "quadrada", "quadrado", "retangular", "."] },
  { id: 3, question: "Como é a televisão?", questionChinese: "電視機是什麼形狀的？", itemEmoji: "📺", prefixPrompt: "A televisão é ", correctAdjective: "retangular", altAdjectives: ["quadrada"], fullSentence: "A televisão é retangular.", altFullSentences: ["A televisão é quadrada."], sentenceChinese: "電視機是長方形的。", grammarTip: "a televisão 是陰性名詞 (a)。電視機是長方形，因此回答 A televisão é retangular.！", wordTokens: ["A", "televisão", "é", "retangular", "O", "quadrada", "."] },
  { id: 4, question: "Como é a janela?", questionChinese: "窗戶是什麼形狀的？", itemEmoji: "🪟", prefixPrompt: "A janela é ", correctAdjective: "quadrada", altAdjectives: ["retangular"], fullSentence: "A janela é quadrada.", altFullSentences: ["A janela é retangular."], sentenceChinese: "窗戶是正方形的。", grammarTip: "a janela 是陰性名詞 (a)。窗戶是正方形，陰性配合「-a」，因此回答 A janela é quadrada.！", wordTokens: ["A", "janela", "é", "quadrada", "O", "retangular", "."] },
  { id: 5, question: "Como é o armário?", questionChinese: "壁櫥/櫃子是什麼形狀的？", itemEmoji: "🗄️", prefixPrompt: "O armário é ", correctAdjective: "retangular", fullSentence: "O armário é retangular.", sentenceChinese: "櫃子是長方形的。", grammarTip: "o armário 是陽性名詞 (o)。櫃子是長方形，長方形變形超人 retangular 男女衣服都不變！", wordTokens: ["O", "armário", "é", "retangular", "A", "quadrado", "."] },
  { id: 6, question: "Como é o frigorífico?", questionChinese: "冰箱 (歐葡) 是什麼形狀的？", itemEmoji: "🧊", prefixPrompt: "O frigorífico é ", correctAdjective: "retangular", fullSentence: "O frigorífico é retangular.", sentenceChinese: "冰箱是長方形的。", grammarTip: "o frigorífico 是陽性名詞 (o，歐洲葡語)。冰箱是長方形，使用 retangular！", wordTokens: ["O", "frigorífico", "é", "retangular", "A", "redondo", "."] },
  { id: 7, question: "Como é a mesa?", questionChinese: "桌子是什麼形狀的？", itemEmoji: "🪵", prefixPrompt: "A mesa é ", correctAdjective: "redonda", altAdjectives: ["quadrada", "retangular"], fullSentence: "A mesa é redonda.", altFullSentences: ["A mesa é quadrada.", "A mesa é retangular."], sentenceChinese: "桌子是圓形的。", grammarTip: "a mesa 是陰性名詞 (a)。圓形陰性結尾配合「-a」，所以用 redonda (A mesa é redonda.)！", wordTokens: ["A", "mesa", "é", "redonda", "redondo", "quadrada", "."] },
  { id: 8, question: "Como é o roupeiro?", questionChinese: "大衣櫃 (歐葡) 是什麼形狀的？", itemEmoji: "🚪", prefixPrompt: "O roupeiro é ", correctAdjective: "retangular", fullSentence: "O roupeiro é retangular.", sentenceChinese: "大衣櫃是長方形的。", grammarTip: "o roupeiro 是陽性名詞 (o，歐洲葡語大衣櫃)。長方形變形超人 retangular 陰陽同形！", wordTokens: ["O", "roupeiro", "é", "retangular", "A", "quadrado", "."] }
];
function Cg({ onBack: f }) {
  const [h, d] = y.useState(0), [o, T] = y.useState([]), [N, B] = y.useState(null), [U, ne] = y.useState({}), [ee, D] = y.useState(null), [b, Y] = y.useState(false), O = Ts[h], Z = () => {
    T([]), B(null), D(null);
  }, L = (J) => {
    T((G) => [...G, J]), D(null);
  }, I = (J) => {
    T((G) => G.filter((z, ie) => ie !== J)), D(null);
  }, X = (J) => {
    B(J), D(null), O.prefixPrompt && K(J);
  }, K = (J) => {
    var q;
    const G = J || N, z = o.join(" ").trim();
    let ie = false;
    if (o.length > 0) {
      const w = z.replace(/\s+\./g, ".").toLowerCase(), F = O.fullSentence.toLowerCase(), P = (O.altFullSentences || []).map((ue) => ue.toLowerCase());
      (w === F || P.includes(w)) && (ie = true);
    }
    if (G && (G === O.correctAdjective || (q = O.altAdjectives) != null && q.includes(G)) && (ie = true), ie) {
      ut();
      const w = O.fullSentence;
      ne((F) => ({ ...F, [O.id]: { isCorrect: true, answer: w } })), D({ isCorrect: true, message: `\u592A\u68D2\u4E86\uFF01\u6B63\u78BA\u7B54\u6848\u662F\uFF1A${w} (${O.sentenceChinese})\u3002\u{1F4A1} ${O.grammarTip}` });
    } else lt(), D({ isCorrect: false, message: `\u518D\u60F3\u4E00\u60F3\uFF01\u63D0\u793A\uFF1A${O.grammarTip}` });
  }, oe = () => {
    h < Ts.length - 1 ? (d(h + 1), T([]), B(null), D(null)) : Y(true);
  }, H = () => {
    h > 0 && (d(h - 1), T([]), B(null), D(null));
  }, se = Object.keys(U).length;
  return n.jsxs("div", { className: "w-full bg-[#FFF8E7] p-4 md:p-6 rounded-3xl border-4 border-black shadow-[8px_8px_0px_#000] relative overflow-hidden font-sans", children: [n.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 border-b-3 border-black pb-4", children: [n.jsxs("button", { onClick: f, className: "mario-btn mario-btn-gray px-4 py-2 text-xs md:text-sm text-white flex items-center gap-1.5 cursor-pointer", children: [n.jsx(Lt, { className: "w-4 h-4" }), n.jsx("span", { children: "\u8FD4\u56DE\u5927\u5EF3" })] }), n.jsxs("div", { className: "text-center", children: [n.jsx("h2", { className: "text-xl md:text-2xl font-black font-pixel text-stone-900 drop-shadow flex items-center justify-center gap-2", children: n.jsx("span", { children: "G. COMPLETAR COM AS PALAVRAS SEGUINTES \u{1F4DD}" }) }), n.jsx("p", { className: "text-xs text-stone-700 font-bold", children: "\u56DE\u7B54\u7269\u4EF6\u7684\u5F62\u72C0 \u2022 \u4E00\u500B\u55AE\u8A5E\u4E00\u500B\u55AE\u8A5E\u9EDE\u4F86\u7D44\u53E5 / \u586B\u7A7A\u9078\u64C7" })] }), n.jsx("div", { className: "flex items-center gap-2", children: n.jsxs("span", { className: "text-xs font-pixel bg-amber-300 border-2 border-black px-3 py-1.5 rounded-xl font-black text-stone-900 shadow-[2px_2px_0px_#000]", children: ["\u9032\u5EA6: ", se, " / 6"] }) })] }), n.jsxs("div", { className: "bg-white border-3 border-black rounded-2xl p-4 mb-6 shadow-[4px_4px_0px_#000]", children: [n.jsxs("div", { className: "flex items-center justify-between mb-2", children: [n.jsx("span", { className: "text-xs font-pixel text-stone-800 font-bold flex items.center gap-1.5", children: n.jsx("span", { children: "\u{1F4E6} BANCO DE PALAVRAS \u2022 \u5F62\u72C0\u5019\u9078\u55AE\u8A5E\u5EAB\uFF1A" }) }), n.jsx("span", { className: "text-[11px] text-stone-500 font-bold", children: "\u8ACB\u6839\u64DA\u540D\u8A5E\u9670\u967D\u6027\u8207\u5F62\u72C0\u9078\u64C7" })] }), n.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5", children: Ag.map((J) => n.jsxs("button", { onClick: () => X(J.word), className: `p-2.5 rounded-xl border-3 ${J.bg} shadow-[2px_2px_0px_#000] hover:scale-103 active:scale-95 transition-all text-center cursor-pointer select-none ${N === J.word ? "ring-4 ring-black font-black scale-105" : ""}`, children: [n.jsx("div", { className: "text-base md:text-lg font-black tracking-tight", children: J.label }), n.jsx("div", { className: "text-[10px] font-bold opacity-80 mt-0.5", children: J.note })] }, J.word)) })] }), n.jsxs("div", { className: "flex items-center justify-center gap-2 mb-6 flex-wrap", children: [Ts.map((J, G) => {
    var q;
    const z = (q = U[J.id]) == null ? void 0 : q.isCorrect, ie = h === G && !b;
    return n.jsx("button", { onClick: () => {
      d(G), Y(false), T([]), B(null), D(null);
    }, className: `w-10 h-10 rounded-xl border-3 font-pixel text-xs font-black flex items-center justify-center cursor-pointer transition-all select-none ${ie ? "bg-[#E52521] text-white border-black scale-110 shadow-[3px_3px_0px_#000]" : z ? "bg-emerald-400 text-black border-black shadow-[2px_2px_0px_#000]" : "bg-white text-stone-700 border-stone-400 hover:bg-stone-100"}`, children: G + 1 }, J.id);
  }), n.jsxs("button", { onClick: () => Y(true), className: `px-3 py-2 rounded-xl border-3 font-pixel text-xs font-black flex items-center gap-1 cursor-pointer transition-all ${b ? "bg-[#E52521] text-white border-black shadow-[3px_3px_0px_#000]" : "bg-white text-stone-700 border-black hover:bg-amber-100"}`, children: [n.jsx(Cp, { className: "w-3.5 h-3.5" }), n.jsx("span", { children: "\u5168\u5957\u7E3D\u7D50" })] })] }), !b && n.jsxs("div", { className: "bg-white border-4 border-black rounded-3xl p-5 md:p-8 max-w-3xl mx-auto shadow-[6px_6px_0px_#000] relative", children: [n.jsxs("div", { className: "flex items-center gap-4 mb-5 border-b-2 border-stone-200 pb-4", children: [n.jsx("span", { className: "text-5xl md:text-6xl p-3 bg-amber-100 border-3 border-black rounded-2xl shadow-[3px_3px_0px_#000]", children: O.itemEmoji }), n.jsxs("div", { children: [n.jsxs("div", { className: "flex items-center gap-2", children: [n.jsxs("span", { className: "text-xs font-pixel bg-[#E52521] text-white px-2 py-0.5 rounded-md font-black", children: ["QUESTION ", O.id, " / 6"] }), n.jsx("span", { className: "text-xs text-stone-500 font-bold", children: O.questionChinese })] }), n.jsx("h3", { className: "text-2xl md:text-3xl font-black text-stone-900 mt-1", children: O.question })] })] }), n.jsxs("div", { className: "bg-[#FFF8E7] border-3 border-black rounded-2xl p-5 mb-5 shadow-inner", children: [n.jsx("span", { className: "text-xs font-pixel text-amber-800 block mb-2 font-bold", children: "RESPOSTA \u2022 \u4F60\u7684\u7B54\u6848\uFF1A" }), O.prefixPrompt ? n.jsxs("div", { className: "text-xl md:text-2xl font-black text-stone-900 flex items-center flex-wrap gap-2", children: [n.jsx("span", { children: O.prefixPrompt }), n.jsx("span", { className: `px-4 py-1.5 rounded-xl border-2 border-dashed min-w-[160px] text-center inline-block ${N ? "bg-amber-300 border-amber-600 text-stone-950 font-black shadow-sm" : "bg-white border-stone-400 text-stone-400"}`, children: N || "____________________" }), n.jsx("span", { children: "." })] }) : n.jsx("div", { children: o.length > 0 ? n.jsx("div", { className: "flex items-center flex-wrap gap-2 min-h-12 p-2 bg-white rounded-xl border-2 border-amber-400", children: o.map((J, G) => n.jsx("span", { onClick: () => I(G), className: "px-3 py-1 bg-amber-400 border-2 border-black rounded-lg text-base md:text-lg font-black text-black cursor-pointer hover:bg-red-400 hover:text-white transition-all shadow-[2px_2px_0px_#000] active:scale-95 select-none", title: "\u9EDE\u64CA\u79FB\u9664\u6B64\u55AE\u8A5E", children: J }, G)) }) : n.jsx("div", { className: "text-lg md:text-xl font-bold text-stone-400 border-b-2 border-dashed border-stone-400 pb-2", children: "____________________________________________________________ ." }) })] }), n.jsxs("div", { className: "mb-6", children: [n.jsxs("div", { className: "flex items-center justify-between mb-2", children: [n.jsx("span", { className: "text-xs font-bold text-stone-700 flex items-center gap-1", children: n.jsx("span", { children: "\u{1F446} \u9EDE\u64CA\u55AE\u8A5E\u4E00\u500B\u500B\u62FC\u6210\u53E5\u5B50 (\u9EDE\u8A5E\u7D44\u53E5)\uFF1A" }) }), o.length > 0 && n.jsxs("button", { onClick: Z, className: "text-xs text-red-600 hover:underline font-bold flex items-center gap-1 cursor-pointer", children: [n.jsx(jt, { className: "w-3 h-3" }), n.jsx("span", { children: "\u6E05\u9664\u91CD\u6392" })] })] }), n.jsx("div", { className: "flex items-center flex-wrap gap-2", children: O.wordTokens.map((J, G) => n.jsx("button", { onClick: () => L(J), className: "mario-btn mario-btn-yellow px-4 py-2 text-base md:text-lg font-black text-black cursor-pointer shadow-[3px_3px_0px_#000] select-none", children: J }, G)) })] }), n.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [n.jsxs("button", { onClick: () => K(), className: "mario-btn mario-btn-red px-6 py-3 text-white font-black text-base flex-1 flex items-center justify-center gap-2 cursor-pointer shadow-[4px_4px_0px_#000]", children: [n.jsx(Fo, { className: "w-5 h-5" }), n.jsx("span", { children: "\u9A57\u8B49\u7B54\u6848 (Verificar)" })] }), n.jsx("button", { onClick: Z, className: "mario-btn mario-btn-gray px-4 py-3 text-white font-bold text-sm cursor-pointer", children: "\u91CD\u7F6E" })] }), ee && n.jsx("div", { className: `p-4 rounded-2xl border-3 mb-5 text-sm md:text-base font-bold ${ee.isCorrect ? "bg-emerald-100 border-emerald-600 text-emerald-950 animate-bounce" : "bg-red-100 border-red-500 text-red-950"}`, children: ee.message }), n.jsxs("div", { className: "flex items-center justify-between pt-3 border-t-2 border-stone-200", children: [n.jsx("button", { onClick: H, disabled: h === 0, className: `mario-btn px-4 py-2 text-xs md:text-sm font-bold ${h === 0 ? "opacity-40 cursor-not-allowed bg-stone-300" : "mario-btn-yellow text-black cursor-pointer"}`, children: "\u2B05 \u4E0A\u4E00\u984C" }), n.jsxs("span", { className: "text-xs font-pixel text-stone-500", children: [h + 1, " OF 6"] }), n.jsx("button", { onClick: oe, className: "mario-btn mario-btn-blue px-5 py-2 text-xs md:text-sm text-white font-black cursor-pointer", children: h === Ts.length - 1 ? "\u67E5\u770B\u5168\u90E8\u7E3D\u7D50 \u{1F393}" : "\u4E0B\u4E00\u984C \u27A1" })] })] }), b && n.jsxs("div", { className: "bg-white border-4 border-black rounded-3xl p-6 md:p-8 max-w-3xl mx-auto shadow-[6px_6px_0px_#000] animate-fade-in", children: [n.jsxs("div", { className: "text-center mb-6", children: [n.jsx("span", { className: "text-5xl animate-bounce inline-block mb-1", children: "\u{1F393}\u{1F4CB}\u2728" }), n.jsx("h3", { className: "text-2xl font-black text-stone-900 font-pixel", children: "G. RESUMO COMPLETO DAS FRASES" }), n.jsx("p", { className: "text-xs md:text-sm text-stone-600 font-bold mt-1", children: "\u5168\u5957 6 \u984C\u7269\u4EF6\u5F62\u72C0\u6A19\u6E96\u554F\u7B54\u4E00\u89BD\u8868" })] }), n.jsx("div", { className: "space-y-3 mb-6", children: Ts.map((J) => {
    var z;
    const G = (z = U[J.id]) == null ? void 0 : z.isCorrect;
    return n.jsxs("div", { className: "bg-amber-50 border-3 border-black rounded-2xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 shadow-[2px_2px_0px_#000]", children: [n.jsxs("div", { className: "flex items-center gap-3", children: [n.jsx("span", { className: "text-3xl", children: J.itemEmoji }), n.jsxs("div", { children: [n.jsxs("div", { className: "text-xs font-pixel text-[#E52521] font-bold", children: [J.id, ". ", J.question] }), n.jsx("div", { className: "text-base font-black text-stone-900 mt-0.5", children: J.fullSentence }), n.jsx("div", { className: "text-xs text-stone-500 font-bold", children: J.sentenceChinese })] })] }), n.jsxs("div", { className: "flex items-center gap-2", children: [n.jsx("span", { className: "px-3 py-1 bg-white border-2 border-black rounded-xl text-xs font-black text-stone-800", children: J.correctAdjective }), G ? n.jsxs("span", { className: "text-emerald-600 font-black text-xs flex items-center gap-1", children: [n.jsx(Fo, { className: "w-4 h-4 fill-emerald-100" }), n.jsx("span", { children: "\u5DF2\u901A\u95DC" })] }) : n.jsx("button", { onClick: () => {
      d(J.id - 1), Y(false), Z();
    }, className: "mario-btn mario-btn-yellow px-3 py-1 text-xs text-black font-black", children: "\u53BB\u7DF4\u7FD2" })] })] }, J.id);
  }) }), n.jsxs("div", { className: "flex justify-center gap-3", children: [n.jsxs("button", { onClick: () => {
    Y(false), d(0), Z();
  }, className: "mario-btn mario-btn-yellow px-6 py-2.5 text-black font-black flex items-center gap-2 cursor-pointer", children: [n.jsx(jt, { className: "w-4 h-4" }), n.jsx("span", { children: "\u91CD\u982D\u518D\u7DF4\u4E00\u904D" })] }), n.jsx("button", { onClick: f, className: "mario-btn mario-btn-red px-6 py-2.5 text-white font-black cursor-pointer", children: "\u8FD4\u56DE\u4E3B\u9801" })] })] })] });
}
const Tg = marioBannerImg || "/assets/mario_game_banner_1780816602934-BwTasZQ0.png";
function Eg() {
  const [f, h] = y.useState("menu"), d = () => {
    h("menu");
  }, o = (N) => {
    h(N);
  }, T = [{ id: "como_e_ex_g", title: "G) Como \xE9? \u7269\u4EF6\u5F62\u72C0\u554F\u7B54 \u{1F4DD}", subTitle: "G. Completar com as palavras (\u6838\u5FC3\u91CD\u9EDE)", description: "Como \xE9 a porta? A porta \xE9 retangular. \u5B78\u6703\u56DE\u7B54 6 \u5927\u7269\u4EF6\u7684\u5F62\u72C0\uFF01\u652F\u63F4\u4E00\u500B\u55AE\u8A5E\u4E00\u500B\u55AE\u8A5E\u9EDE\u9078\u7D44\u53E5\uFF0C\u6216\u76F4\u63A5\u9078\u53D6\u5F62\u72C0\u8A5E\uFF01", emoji: "\u{1F4DD}", color: "bg-amber-100 hover:bg-amber-150 border-amber-500 text-amber-950 font-black", badge: "\u6838\u5FC3\u7DF4\u7FD2 \u{1F3AF}" }, { id: "forma_factory", title: "1) Forma Factory \u{1F3ED}", subTitle: "\u5F62\u72C0\u5DE5\u5EE0\u5403\u8CA8\u738B (\u8857\u6A5F\u5206\u985E)", description: "\u50B3\u9001\u5E36\u6E90\u6E90\u4E0D\u7D55\u6389\u843D\u65E5\u5E38\u7269\u54C1\uFF015 \u9580\u6975\u901F\u5206\u985E\uFF0C\u9023\u64CA 5 \u6B21\u9032\u5165 Festa \u6D3E\u5C0D\u6642\u9593\uFF01\u9047\u898B retangular \u89F8\u767C\u8B8A\u5F62\u8D85\u4EBA\u7279\u6548\uFF01", emoji: "\u{1F3ED}", color: "bg-amber-100 hover:bg-amber-150 border-amber-400 text-amber-900", badge: "\u65D7\u8266\u8DD1\u9177 \u2B50" }, { id: "casamento_formas", title: "2) Casamento das Formas \u{1F9F2}", subTitle: "\u5F62\u72C0\u5927\u806F\u59FB (\u78C1\u529B\u914D\u5C0D)", description: "\u78C1\u9435\u738B\u570B\u540D\u8A5E\u8207\u5F62\u5BB9\u8A5E\u5927\u914D\u5C0D\uFF01\u540C\u6975\u76F8\u65A5\u87A2\u5E55\u5FAE\u9707\u5F48\u958B\uFF0C\u7570\u6027\u76F8\u5438\u5494\u55D2\u5438\u9644\uFF0Cretangular \u96D9\u5411\u842C\u7528\u96D9\u6975\u5438\u9644\uFF01", emoji: "\u{1F9F2}", color: "bg-purple-100 hover:bg-purple-150 border-purple-400 text-purple-900", badge: "\u78C1\u529B\u6D88\u9664 \u{1F48D}" }, { id: "detetive_palavras", title: "3) Detetive das Palavras \u{1F50D}", subTitle: "\u540D\u8A5E\u5BC6\u5BA4\u5927\u9003\u812B (\u89E3\u8B0E\u5192\u96AA)", description: "\u807D\u53D6\u7246\u4E0A\u63DA\u8072\u5668\u8A9E\u97F3\u6307\u4EE4\u641C\u67E5\u5BB6\u5177\uFF01\u8FA8\u6790 o roupeiro (\u967D) vs a cadeira (\u9670)\uFF0C\u96C6\u9F4A\u4E09\u628A\u9470\u5319\u89E3\u958B BOSS \u7D42\u6975\u9298\u6587\u5927\u9580\uFF01", emoji: "\u{1F50D}", color: "bg-rose-100 hover:bg-rose-150 border-rose-400 text-rose-900", badge: "\u5BC6\u5BA4\u9003\u812B \u{1F5DD}\uFE0F" }, { id: "word_review", title: "4) Banquete & Aulas \u{1F4DA}", subTitle: "\u98DF\u7269\u6D3E\u5C0D \u2022 \u8AB2\u5BA4\u641C\u67E5 \u2022 \u63A5\u5C3E\u5DF4", description: "3 \u5927\u751F\u52D5\u4E92\u52D5\u60C5\u5883\uFF1A\u98DF\u7269\u83DC\u55AE\u4ECB\u7D39\u3001\u96A8\u6A5F\u51FA\u984C\u8AB2\u5BA4\u5927\u641C\u67E5\u3001\u63A5\u5C3E\u5DF4\u627E\u670B\u53CB\u5361\u7247\uFF0C\u5167\u542B\u55AE\u8A5E\u5361\u8207\u53E3\u8A23\uFF01", emoji: "\u{1F4DA}", color: "bg-emerald-100 hover:bg-emerald-150 border-emerald-400 text-emerald-900", badge: "\u60C5\u5883\u8AB2\u5802 \u{1F34E}" }, { id: "emoji_detective", title: "5) Star Detective \u{1F31F}", subTitle: "\u8D85\u7D1A\u661F\u661F\u5F62\u72C0\u5075\u63A2", description: "\u8FA8\u5225\u6B63\u78BA\u8461\u8A9E\u540D\u8A5E\u8207\u5F62\u72C0\uFF0C\u6536\u96C6\u9583\u8000\u661F\u661F\uFF01\u4E0B\u65B9\u7D66\u4E88\u4E2D\u6587\u63D0\u9192\u5F15\u5C0E\uFF01", emoji: "\u2B50\uFE0F", color: "bg-pink-100 hover:bg-pink-150 border-pink-300 text-pink-700", badge: "\u95D6\u95DC\u6311\u6230 \u{1F534}" }, { id: "match_match", title: "6) Match Match \u{1F344}", subTitle: "\u795E\u5947\u8611\u83C7\u8461\u4E2D\u901F\u914D", description: "5\u584A\u795E\u5947\u8611\u83C7\u8461\u4E2D\u5B57\u5361\u914D\u5C0D\u6D88\u9664\uFF0C\u6311\u6230\u5927\u8166\u5F62\u72C0\u8A18\u61B6\u53CD\u61C9\uFF01", emoji: "\u{1F344}", color: "bg-rose-100 hover:bg-rose-150 border-rose-300 text-rose-750", badge: "\u96D9\u4EBA\u63A5\u529B \u{1F7E2}" }, { id: "spelling_bee", title: "7) Spelling Bee \u{1FA99}", subTitle: "\u9EC3\u91D1\u91D1\u5E63\u62FC\u5B57\u6311\u6230", description: "\u9EDE\u64CA\u5B57\u6BCD\u6536\u96C6\u9583\u4EAE\u91D1\u5E63\uFF01\u62FC\u51FA\u8461\u8A9E\u540D\u8A5E\u8207\u5F62\u72C0\uFF0C\u5E36\u81EA\u52D5\u7A7A\u683C\u63D0\u793A\uFF01", emoji: "\u{1FA99}", color: "bg-amber-100 hover:bg-amber-150 border-amber-300 text-amber-700", badge: "\u6975\u901F\u62FC\u5B57 \u26A1" }, { id: "mario_parkour", title: "8) Spelling Run \u{1F3C3}\u200D\u2642\uFE0F", subTitle: "\u6975\u901F\u8461\u8A9E\u8DD1\u9177\u5192\u96AA", description: "\u6BCF\u62FC\u5BEB\u6B63\u78BA\u4E00\u500B\u8461\u8A9E\u55AE\u8A5E\uFF0C\u746A\u5229\u6B50\u5411\u524D\u5954\u99B3\uFF01\u6311\u6230 6 \u95DC\u62EF\u6551\u78A7\u59EC\u516C\u4E3B\uFF01", emoji: "\u{1F3C3}\u200D\u2642\uFE0F", color: "bg-sky-100 hover:bg-sky-150 border-sky-300 text-sky-700", badge: "\u71B1\u9580\u8DD1\u9177 \u{1F3C1}" }, { id: "word_search", title: "9) Maze Search \u{1F422}", subTitle: "\u5EAB\u5DF4\u9F9C\u6BBC\u5B57\u6BCD\u8FF7\u5BAE", description: "\u5EAB\u5DF4\u5C07\u8461\u8A9E\u55AE\u8A5E\u85CF\u5728\u8FF7\u5BAE\u4E2D\uFF01\u627E\u51FA\u5168\u90E8\u85CF\u533F\u82F1\u6587\u5C31\u53EF\u4EE5\u7372\u5F97\u4E00\u689D\u751F\u547D\uFF01", emoji: "\u{1F422}", color: "bg-cyan-100 hover:bg-cyan-150 border-cyan-300 text-cyan-700", badge: "\u8FF7\u5BAE\u63A2\u7D22 \u{1F9ED}" }, { id: "memory_game", title: "10) Fire Flower \u{1F9E0}", subTitle: "\u706B\u4E4B\u82B1\u77AC\u6642\u8A18\u61B6", description: "10\u79D2\u5FEB\u901F\u8A18\u61B6\uFF01\u5403\u4E0B\u706B\u4E4B\u82B1\u7403\uFF0C\u9810\u6E2C\u662F\u54EA\u500B\u8461\u8A9E\u5F62\u72C0\u55AE\u8A5E\u6084\u6084\u4E0D\u898B\u4E86\uFF1F", emoji: "\u{1F525}", color: "bg-indigo-100 hover:bg-indigo-150 border-indigo-300 text-indigo-700", badge: "\u5927\u8166\u7279\u8A13 \u26A1" }, { id: "tug_of_war_5", title: "11) Yoshi War (5\u984C) \u{1F996}", subTitle: "\u8000\u897F\u5CF6 5 \u56DE\u5408\u529B\u91CF\u5C0D\u6C7A", description: "\u96D9\u4EBA\u5206\u968A\u5C0D\u6230\uFF01\u9A0E\u4E0A\u8000\u897F\uFF0C\u770B\u4E2D\u6587\u6BD4\u62FC\u8F38\u5165\u8461\u8A9E\u55AE\u8A5E\uFF0C\u6436\u4F54\u62D4\u6CB3\u512A\u52E2\uFF01", emoji: "\u{1F996}", color: "bg-purple-100 hover:bg-purple-150 border-purple-300 text-purple-700", badge: "\u96D9\u4EBA PK \u{1F93C}\u200D\u2642\uFE0F" }, { id: "tug_of_war_10", title: "12) Peach Rescue (10\u984C) \u{1F451}", subTitle: "\u62EF\u6551\u78A7\u59EC\u516C\u4E3B 10\u56DE\u5408\u6C7A\u6230", description: "\u62C9\u9577\u62C9\u62C9\u7DDA\u5927\u6BD4\u62FC\uFF01\u7B54\u984C\u5FEB\u6E96\u72E0\uFF0C\u5411\u4F60\u7684\u4E00\u5074\u62C9\u8FD1\u4E26\u62EF\u6551\u78A7\u59EC\u516C\u4E3B\uFF01", emoji: "\u{1F451}", color: "bg-violet-100 hover:bg-violet-150 border-violet-300 text-violet-750", badge: "\u96D9\u4EBA\u62D4\u6CB3 \u2694\uFE0F" }, { id: "spelling_bee_3", title: "13) Spelling Bee 3 \u26A1", subTitle: "\u9583\u96FB\u9EC3\u91D1\u62FC\u5B57\u62C9\u529B\u8CFD", description: "\u4E09\u56DE\u5408\u7AF6\u901F\u6975\u81F4\u5C0D\u4ED7\uFF01\u8AB0\u7B54\u5C0D\u5F97\u6700\u591A\u6700\u5FEB\uFF0C\u5C31\u53EF\u4EE5\u7372\u5F97\u8D85\u7D1A\u734E\u91D1\uFF01", emoji: "\u26A1", color: "bg-orange-100 hover:bg-orange-150 border-orange-300 text-orange-700", badge: "\u6025\u901F\u9EC3\u91D1 \u{1FA99}" }, { id: "goose_chase", title: "14) Cape Feathers \u{1F9FA}", subTitle: "\u62AB\u98A8\u7FBD\u6BDB\u5929\u964D\u6230", description: "\u7D93\u5178\u98DB\u5929\u767D\u9D5D\u5C0D\u4ED7\uFF01\u62D6\u66F3\u98DB\u5929\u9D5D\u5230\u5DF1\u65B9\u9053\u5177\u7C43\uFF0C\u64CA\u6557\u5C0D\u624B\u7684\u767D\u9D5D\uFF01", emoji: "\u{1F9FA}", color: "bg-emerald-100 hover:bg-emerald-150 border-emerald-300 text-emerald-750", badge: "\u96D9\u4EBA\u98DB\u5929 \u{1F9A2}" }, { id: "duo_xiaoxiaole", title: "15) Brick Eliminator \u{1F9F1}", subTitle: "\u540C\u5C4F\u96D9\u4EBA\u6D88\u9664\u78DA\u584A\u5927\u6230", description: "\u5C08\u5C6C\u5404\u534A\u5C4F\u5E55\u96D9\u4EBA\u6D88\u6D88\u6A02\uFF01\u6E05\u9664\u64CB\u5728\u4F60\u9762\u524D\u7684\u8461\u4E2D\u76F8\u7B26\u78DA\u584A\uFF0C\u722D\u596A\u6D88\u9664\u5927\u738B\uFF01", emoji: "\u{1F9F1}", color: "bg-teal-100 hover:bg-teal-150 border-teal-300 text-teal-750", badge: "\u96D9\u73A9\u5BB6\u6D88\u6D88\u6A02 \u{1F91D}" }, { id: "climb_ladder_3", title: "16) Climb Ladder (3\u4EBA) \u{1FA9C}", subTitle: "\u4E09\u4EBA\u57CE\u5821\u722C\u884C\u5927\u5C0D\u6297", description: "\u78A7\u59EC\u516C\u4E3B\u57CE\u5821\u722C\u722C\u6311\u6230\uFF01\u56DB\u9078\u4E00\u591A\u7D1A\u9078\u9805\uFF0C\u770B\u8AB0\u7684\u624B\u6307\u52D5\u5F97\u6BD4\u5EAB\u5DF4\u9084\u5FEB\uFF01", emoji: "\u{1F9D7}", color: "bg-blue-100 hover:bg-blue-150 border-blue-300 text-blue-750", badge: "\u4E09\u4EBA\u5206\u7D44 \u{1F3F0}" }, { id: "climb_ladder_4", title: "17) Climb Ladder (4\u4EBA) \u{1FA9C}", subTitle: "\u56DB\u4EBA\u8D85\u7D1A\u5EAB\u5DF4\u57CE\u5821\u722D\u9738", description: "\u7D42\u6975 4 \u540D\u73A9\u5BB6\u591A\u4EBA\u5927\u4E82\u9B25\uFF01\u6BCF\u524D\u9032\u4E00\u6B65\u90FD\u5C07\u9EDE\u4EAE\u57CE\u5821\u3002\u770B\u770B\u8AB0\u80FD\u6700\u7D42\u6551\u4E0B\u516C\u4E3B\uFF01", emoji: "\u{1F3F0}", color: "bg-red-100 hover:bg-red-150 border-red-300 text-red-750", badge: "\u56DB\u4EBA\u5927\u4E82\u9B25 \u{1F3C6}" }];
  return n.jsxs("div", { className: "min-h-screen mario-sky-bg text-[#2D2D2D] p-4 md:p-6 pb-12 flex flex-col items-center", children: [n.jsxs("div", { className: "w-full max-w-7xl animate-fade-in", children: [n.jsx(lg, { onBackToMenu: d, currentGame: f === "menu" ? null : f }), n.jsxs("main", { className: "w-full", children: [f === "menu" && n.jsxs("div", { className: "animate-fade-in col-span-1", children: [n.jsxs("div", { className: "w-full bg-[#FFF8E7] border-4 border-black rounded-3xl p-4 md:p-5 mb-8 shadow-[8px_8px_0px_#000000] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6", children: [n.jsxs("div", { className: "w-full md:w-3/5 border-4 border-black rounded-2xl overflow-hidden shadow-[4px_4px_0px_#000000] relative bg-[#5C94FC] h-48 md:h-64 flex items-center justify-center", children: [n.jsx("img", { src: Tg, alt: "Mario Adventure", className: "w-full h-full object-cover select-none pointer-events-none", referrerPolicy: "no-referrer" }), n.jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" })] }), n.jsxs("div", { className: "w-full md:w-2/5 text-center md:text-left flex flex-col justify-center", children: [n.jsxs("div", { className: "inline-flex items-center gap-1.5 bg-[#E52521] border-2 border-black text-white px-3 py-1 rounded-xl text-xs font-black shadow-[2px_2px_0px_#000] mb-3 self-center md:self-start", children: [n.jsx("span", { className: "animate-bounce", children: "\u{1F534}" }), n.jsx("span", { children: "AS FORMAS EM PORTUGU\xCAS!" })] }), n.jsx("h3", { className: "text-lg md:text-xl font-black text-stone-900 tracking-tight leading-normal mb-2 font-pixel text-[#E52521]", children: "PROFRESORA IONG!" }), n.jsxs("p", { className: "text-stone-700 font-bold text-xs leading-relaxed mb-4", children: ["\u638C\u63E1\u8461\u8A9E\u5F62\u5BB9\u8A5E\u8207\u540D\u8A5E\u7684\u300C\u9670\u967D\u6027\u914D\u5408\u300D\uFF1A", n.jsx("br", {}), "\u2022 ", n.jsx("span", { className: "text-blue-700 font-black", children: "redondo / redonda" }), " (\u5713\u5F62)", n.jsx("br", {}), "\u2022 ", n.jsx("span", { className: "text-emerald-700 font-black", children: "quadrado / quadrada" }), " (\u6B63\u65B9\u5F62)", n.jsx("br", {}), "\u2022 ", n.jsx("span", { className: "text-amber-700 font-black", children: "retangular \u8B8A\u5F62\u8D85\u4EBA \u2B50" }), " (\u9577\u65B9\u5F62 \u7537\u751F\u5973\u751F\u8863\u670D\u90FD\u4E0D\u8B8A\uFF01)"] }), n.jsxs("div", { className: "flex gap-2 justify-center md:justify-start", children: [n.jsx("span", { className: "text-3xl animate-bounce", children: "\u2600\uFE0F" }), n.jsx("span", { className: "text-3xl animate-pulse", children: "\u{1F355}" }), n.jsx("span", { className: "text-3xl animate-spin", children: "\u{1F3B2}" }), n.jsx("span", { className: "text-3xl animate-bounce", style: { animationDelay: "150ms" }, children: "\u{1F4D6}" })] })] })] }), n.jsxs("div", { className: "bg-[#FFF8E7] border-4 border-black rounded-2xl p-6 md:p-8 text-center shadow-[6px_6px_0px_#000000] mb-8 relative overflow-hidden", children: [n.jsx("div", { className: "absolute top-2 left-2 text-[#ff9900] text-6xl opacity-15 select-none pointer-events-none font-black font-pixel", children: "?" }), n.jsx("div", { className: "absolute bottom-2 right-2 text-[#ff9910] text-6xl opacity-15 select-none pointer-events-none font-black font-pixel", children: "*" }), n.jsx("p", { className: "text-[#E52521] font-black text-sm tracking-wider uppercase mb-1", children: "\u{1F344} \u6838\u5FC3\u91CD\u9EDE \u2022 \u56DE\u7B54\u7269\u4EF6\u5F62\u72C0\u8207\u9670\u967D\u6027\u914D\u5408 \u{1F4DA}" }), n.jsx("h2", { className: "text-2xl md:text-3xl font-black text-stone-900 mb-2", children: "\u{1F31F} Profresora Iong \u8461\u8A9E\u5F62\u72C0\u8207\u9670\u967D\u6027\u914D\u5408 \u{1F31F}" }), n.jsxs("div", { className: "my-5 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center", children: [n.jsxs("div", { className: "bg-blue-50 border-4 border-blue-600 p-5 rounded-2xl shadow-[5px_5px_0px_#1e3a8a] flex flex-col justify-center items-center", children: [n.jsx("span", { className: "text-4xl mb-1", children: "\u{1F535}" }), n.jsx("div", { className: "text-xl md:text-2xl font-black text-blue-900 tracking-tight", children: "redondo / redonda" }), n.jsx("div", { className: "text-lg md:text-xl font-black text-blue-700 mt-1", children: "\u2014 \u5713\u5F62\u7684" }), n.jsx("div", { className: "text-xs font-bold text-blue-950 mt-1", children: "(\u967D\u6027 -o / \u9670\u6027 -a)" })] }), n.jsxs("div", { className: "bg-emerald-50 border-4 border-emerald-600 p-5 rounded-2xl shadow-[5px_5px_0px_#064e3b] flex flex-col justify-center items-center", children: [n.jsx("span", { className: "text-4xl mb-1", children: "\u{1F7E9}" }), n.jsx("div", { className: "text-xl md:text-2xl font-black text-emerald-950 tracking-tight", children: "quadrado / quadrada" }), n.jsx("div", { className: "text-lg md:text-xl font-black text-emerald-700 mt-1", children: "\u2014 \u6B63\u65B9\u5F62\u7684" }), n.jsx("div", { className: "text-xs font-bold text-emerald-950 mt-1", children: "(\u967D\u6027 -o / \u9670\u6027 -a)" })] }), n.jsxs("div", { className: "bg-amber-50 border-4 border-amber-600 p-5 rounded-2xl shadow-[5px_5px_0px_#78350f] flex flex-col justify-center items-center", children: [n.jsx("span", { className: "text-4xl mb-1", children: "\u2B50" }), n.jsx("div", { className: "text-xl md:text-2xl font-black text-amber-950 tracking-tight", children: "retangular" }), n.jsx("div", { className: "text-lg md:text-xl font-black text-amber-700 mt-1", children: "\u2014 \u9577\u65B9\u5F62\u7684" }), n.jsx("div", { className: "text-xs font-bold text-amber-900 mt-1", children: "(\u8B8A\u5F62\u8D85\u4EBA \u7537\u751F\u5973\u751F\u90FD\u4E00\u6A23\uFF01)" })] })] }), n.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-3 mt-4", children: [n.jsx("button", { onClick: () => o("como_e_ex_g"), className: "mario-btn mario-btn-yellow text-stone-950 px-7 py-3.5 font-black text-base md:text-lg flex items-center justify-center gap-2 cursor-pointer shadow-[4px_4px_0px_#000]", children: n.jsx("span", { children: "\u{1F4DD} G. \u56DE\u7B54\u7269\u4EF6\u5F62\u72C0\u7DF4\u7FD2 (Completar com as palavras) \u{1F680}" }) }), n.jsxs("button", { onClick: () => o("word_review"), className: "mario-btn mario-btn-blue text-white px-5 py-3.5 font-black text-sm md:text-base flex items-center justify-center gap-2 cursor-pointer", children: [n.jsx(Bx, { className: "w-5 h-5" }), n.jsx("span", { children: "\u5F62\u72C0\u55AE\u8A5E\u5EAB & 3\u5927\u60C5\u5883 \u{1F4E3}" })] })] })] }), n.jsxs("div", { className: "mb-6 text-center", children: [n.jsx("span", { className: "text-xs font-black text-white bg-[#E52521] border-2 border-black px-4 py-1.5 rounded-xl max-w-sm mx-auto mb-2 inline-block shadow-[2px_2px_0px_#000000] uppercase", children: "\u{1F3AE} CHOOSE YOUR GAME \u2022 \u9078\u64C7\u6311\u6230\u6A21\u5F0F \u{1F3AE}" }), n.jsx("h3", { style: { textShadow: "2px 2px 0px #000000" }, className: "text-2xl md:text-3xl font-black text-[#FED42C] flex items-center justify-center gap-1.5", children: n.jsx("span", { children: "Profresora Iong \u8461\u8A9E\u5F62\u72C0\u95D6\u95DC\u6A5F \u{1F47E}" }) }), n.jsx("p", { className: "text-white drop-shadow font-bold text-xs mt-1", children: "\u652F\u63F4\u8857\u6A5F\u8DD1\u9177\u3001\u78C1\u529B\u914D\u5C0D\u3001\u5BC6\u5BA4\u9003\u812B\u8207\u591A\u4EBA\u5728\u7DDA\u5C0D\u6C7A\uFF01\u7A4D\u7D2F\u91D1\u5E63\uFF0C\u638C\u63E1\u9670\u967D\u6027\uFF01\u{1F344}" })] }), n.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: T.map((N) => n.jsxs("div", { onClick: () => o(N.id), className: "group cursor-pointer bg-white text-stone-800 rounded-xl p-5 border-4 border-black hover:bg-[#FED42C] hover:text-black transition-all duration-150 shadow-[5px_5px_0px_#000000] hover:shadow-[7px_7px_0px_#000000] hover:-translate-y-1 active:translate-y-0.5 active:shadow-[1px_1px_0px_#000000] relative flex flex-col justify-between overflow-hidden min-h-[220px] select-none", children: [n.jsx("div", { className: "absolute top-2.5 right-2.5 bg-[#FFF8E7] border-2 border-black text-stone-955 px-2 py-0.5 rounded-lg text-[9px] font-black shadow-sm group-hover:bg-white", children: N.badge }), n.jsxs("div", { children: [n.jsx("div", { className: "text-4xl mb-3 block group-hover:scale-110 transition-transform duration-200 pointer-events-none", children: N.emoji }), n.jsx("h4", { className: "text-base font-black leading-snug tracking-tight", children: N.title }), n.jsx("p", { className: "text-xs font-bold text-[#E52521] opacity-90 mt-0.5 group-hover:text-stone-900", children: N.subTitle }), n.jsx("p", { className: "text-[11px] font-bold text-stone-600 leading-relaxed mt-2.5 line-clamp-3 group-hover:text-stone-900 font-sans", children: N.description })] }), n.jsxs("div", { className: "mt-4 flex items-center justify-between text-[10px] font-black", children: [n.jsxs("span", { className: "flex items-center gap-1 text-stone-500 group-hover:text-stone-800", children: [n.jsx("span", { className: "text-amber-500 animate-spin inline-block", children: "\u2B50" }), n.jsx("span", { children: "Profresora Iong Edition" })] }), n.jsx("span", { className: "mario-btn mario-btn-red text-[10px] px-2.5 py-1 text-white group-hover:bg-white group-hover:text-[#E52521] select-none", children: "\u9EDE\u64CA\u6311\u6230 \u{1F680}" })] })] }, N.id)) })] }), f === "como_e_ex_g" && n.jsx(Cg, { onBack: d }), f === "forma_factory" && n.jsx(Ng, { onBack: d }), f === "casamento_formas" && n.jsx(kg, { onBack: d }), f === "detetive_palavras" && n.jsx(_g, { onBack: d }), f === "word_review" && n.jsx(ng, { onBack: d, onSelectChapter: (N) => console.log(N) }), f === "emoji_detective" && n.jsx(sg, { onBack: d }), f === "match_match" && n.jsx(ig, { onBack: d }), f === "spelling_bee" && n.jsx(Ox, { onBack: d }), f === "mario_parkour" && n.jsx(yg, { onBack: d }), f === "word_search" && n.jsx(rg, { onBack: d }), f === "memory_game" && n.jsx(cg, { onBack: d }), f === "tug_of_war_5" && n.jsx(Mx, { onBack: d, roundsCount: 5 }), f === "tug_of_war_10" && n.jsx(Mx, { onBack: d, roundsCount: 10 }), f === "spelling_bee_3" && n.jsx(Ox, { onBack: d, isCompetitionMode: true }), f === "goose_chase" && n.jsx(mg, { onBack: d }), f === "duo_xiaoxiaole" && n.jsx(bg, { onBack: d }), f === "climb_ladder_3" && n.jsx(Rx, { onBack: d, playersCount: 3 }), f === "climb_ladder_4" && n.jsx(Rx, { onBack: d, playersCount: 4 })] })] }), n.jsx("style", { children: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(244, 63, 94, 0.05);
          border-radius: 999px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(244, 63, 94, 0.2);
          border-radius: 999px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(244, 63, 94, 0.4);
        }

        @keyframes wobble {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-3px) rotate(1deg); }
        }
        .animate-wobble {
          animation: wobble 4s ease-in-out infinite;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }
        .animate-shake {
          animation: shake 0.25s ease-in-out double;
        }

        .shake-animation {
          animation: shake 0.3s ease-in-out infinite;
        }
      ` })] });
}


export default Eg;
