if(window.EpicTimeDisplay)throw alert("EpicTimeDisplay already active"),new Error;window.EpicTimeDisplay=!0;let downReq,toggled=!1;const style='\n    <style id="EpicTimeDisplayCSS">\n      .ETDElement {all: unset; background: rgba(0,0,0,0.5); position: fixed; z-index: 100; right: 10px; bottom: 10px; padding: 5px 10px; border-radius: 5px; backdrop-filter: blur(10px); font-family: Helvetica, sans-serif; font-size: 12px; transition: 0.25s; color: white; font-weight: 900; outline: 0 solid rgba(0,0,0,0)}\n      .ETDButton:hover {box-shadow: inset 0 0 0 100px rgba(0,0,0,0.25); transform: scale(1.025); outline: 1px solid rgba(255,255,255,0.5); cursor: pointer;}\n      .ETDButton:active {box-shadow: inset 0 0 0 100px rgba(0,0,0,0.75); transform: scale(0.99); transition: 0s; cursor: pointer;}\n      #ETDclosebutton:hover {background: #ff6464}\n    </style>';document.head.insertAdjacentHTML("beforeend",style);let timedisplay=document.createElement("div");timedisplay.className="ETDElement",timedisplay.innerHTML="Time",timedisplay.style.right="40px",document.body.appendChild(timedisplay);let closebutton=document.createElement("button");function updateTime(){var e=(new Date).toLocaleTimeString("en-US");timedisplay.innerHTML=e,window.requestAnimationFrame(updateTime)}closebutton.className="ETDElement ETDButton",closebutton.innerHTML="X",closebutton.style.padding="5px 8px",closebutton.id="ETDclosebutton",document.body.appendChild(closebutton);let animFrame=window.requestAnimationFrame(updateTime);closebutton.addEventListener("click",(function(){window.EpicTimeDisplay=!1,timedisplay.remove(),closebutton.remove(),timedisplay=null,closebutton=null,document.getElementById("EpicTimeDisplayCSS").remove()}));
