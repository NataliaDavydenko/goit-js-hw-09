!function(){var e=document.querySelector("body"),t=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");var n=null;t.addEventListener("click",(function(){t.disabled=!0,a.disabled=!1,n=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));e.style.backgroundColor=t}),1e3)})),a.addEventListener("click",(function(){a.disabled=!0,t.disabled=!1,clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.ed2776a0.js.map
