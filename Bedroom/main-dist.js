"use strict";let bocina=document.querySelector("#bocina"),bocinaA=document.querySelectorAll(".bocina-a"),librero=document.querySelector("#librero"),libreroPuerta=document.querySelector(".librero-r1"),repisa=document.querySelector("#repisa"),repisaPuerta=document.querySelector(".repisa-p"),buro=document.querySelector("#buro"),a=document.querySelector("#audio"),a2=document.querySelector("#audio2"),a3=document.querySelector("#audio3"),a4=document.querySelector("#audio4"),radioTocando=()=>{bocinaA[0].classList.toggle("is-bocina-active"),bocinaA[1].classList.toggle("is-bocina-active"),a.loop=!0,a.paused?a.play():(a.pause(),a.currentTime=0)},libreroAbiero=()=>{libreroPuerta.classList.toggle("is-librero-open"),a2.loop=!1,a2.paused?a2.play():(a2.pause(),a2.currentTime=0)},repisaAbierto=()=>{repisaPuerta.classList.toggle("is-repisa-open"),a3.loop=!1,a3.paused?a3.play():(a3.pause(),a3.currentTime=0)},buroAbierto=()=>{a4.loop=!1,a4.paused?a4.play():(a4.pause(),a4.currentTime=0)};bocina.addEventListener("click",radioTocando),librero.addEventListener("click",libreroAbiero),repisa.addEventListener("click",repisaAbierto),buro.addEventListener("click",buroAbierto);