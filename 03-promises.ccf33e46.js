!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("h6c0i"),r=document.querySelector(".form"),u=document.querySelector("input[name=delay]"),a=document.querySelector("input[name=step]"),c=document.querySelector("input[name=amount]"),l=document.querySelector("button");function d(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}r.addEventListener("submit",(function(e){e.preventDefault();for(var n=e.currentTarget.elements,t=(n.delay,n.step,n.amount,Number(u.value)),o=Number(a.value),r=Number(c.value),s=1;s<=r;s++)d(s,t).then((function(e){var n=e.position,t=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),t+=o;l.disabled=!0,setTimeout((function(){l.disabled=!1}),t+o*r)}))}();
//# sourceMappingURL=03-promises.ccf33e46.js.map
