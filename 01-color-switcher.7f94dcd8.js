const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");let a;e.addEventListener("click",(function(){a=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(function(){clearInterval(a),console.log("Przycisk Zatrzymaj został kliknięty"),console.log("Właściwość disabled dla przycisku start:",e.disabled),console.log("Właściwość disabled dla przycisku stop:",t.disabled),e.disabled=!1,t.disabled=!0}));
//# sourceMappingURL=01-color-switcher.7f94dcd8.js.map
