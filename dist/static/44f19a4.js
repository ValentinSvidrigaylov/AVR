(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{326:function(e,t,o){var l="theme-preference",n=function(){d.value="light"===d.value?"dark":"light",r()},r=function(){localStorage.setItem(l,d.value),c()},c=function(){var e;document.firstElementChild.setAttribute("data-theme",d.value),null===(e=document.querySelector("#theme-toggle"))||void 0===e||e.setAttribute("aria-label",d.value)},d={value:localStorage.getItem(l)?localStorage.getItem(l):window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"};c(),window.onload=function(){c(),document.querySelector("#theme-toggle").addEventListener("click",n)},window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(e){var t=e.matches;d.value=t?"dark":"light",r()}))}}]);