(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(t,n,F){"use strict";F.r(n);var e=["#FFADAD","#FFD6A5","#FDFFB6","#CAFFBF","#9BF6FF","#9EDDFF","#A0C4FF","#AFBBFF","#BDB2FF","#FFC6FF","#FFFFFC"],o={body:document.querySelector("body"),btnStart:document.querySelector('[data-action="start"]'),btnStop:document.querySelector('[data-action="stop"]')};o.btnStart.addEventListener("click",(function(){a=setInterval((function(){var t,n,F=e[(t=0,n=e.length-1,Math.floor(Math.random()*(n-t+1)+t))];o.body.style.backgroundColor=F}),1e3),o.btnStart.disabled=!0})),o.btnStop.addEventListener("click",(function(){clearInterval(a),o.btnStart.disabled=!1}));var a=null}},[["QfWi",1]]]);
//# sourceMappingURL=main.42661c5606c96077d92a.js.map