function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");const u=document.querySelector('input[name="delay"]'),l=(document.querySelector('input[name="step"]'),document.querySelector('input[name="amount"]'));function d(e,t){return new Promise(((n,o)=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}document.querySelector('button[type="submit"]').addEventListener("submit",(t=>{t.preventDefault;parseInt(u.value);for(let t=0;t<l.value;t++)d(t,u).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}))}));
//# sourceMappingURL=03-promises.c72cf28a.js.map
