const e=document.querySelector("body"),t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");let n=null;t.addEventListener("click",(function(){t.disabled=!0,d.disabled=!1,n=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;e.style.backgroundColor=t}),1e3)})),d.addEventListener("click",(function(){d.disabled=!0,t.disabled=!1,clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.92240f0d.js.map
