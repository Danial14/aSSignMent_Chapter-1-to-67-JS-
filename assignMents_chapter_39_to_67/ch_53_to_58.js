var iMages = ["iMages/1.jpg", "iMages/2.jpg", "iMages/3.jpg", "iMages/4.png", 
"iMages/5.jpg", "iMages/6.jpg", "iMages/7.png", "iMages/8.jpg", "iMages/9.jpg",
 "iMages/10.jpg", "iMages/11.jpg", "iMages/12.jpg", "iMages/13.jpg", "iMages/14.png", "iMages/15.jpg"];
 
 var iMageContainer = document.getElementById("iMgS");
 var div = document.getElementById("modal");
 div.addEventListener("animationend", endOfAniMation);
 var closeDiv;
 for(var i = 0; i < iMages.length; i++){
     var li = document.createElement("li");
     li.innerHTML = "<img src='" + iMages[i] + "' class='no-Modal'>";
     var iMage = li.firstElementChild;
     iMage.addEventListener("click", openModal);
     iMage.MyParaM = iMages[i];
     iMageContainer.appendChild(li);
 }

 function openModal(ev){
     closeDiv = false;
     var iMage = document.getElementById("modal-img");
     div.style.display = "block";
     div.classList.add("modal-open");
     div.classList.remove("modal-close");
     iMage.setAttribute("src", ev.currentTarget.MyParaM);
 }
 function onClosedImagModal(){
     closeDiv = true;
     div.classList.add("modal-close");
     div.classList.remove("modal-open");
     var iMage = document.getElementById("modal-img");
     iMage.removeAttribute("style");
 }
 function endOfAniMation(){
     if(closeDiv){
         div.style.display = "none";
     }
 }
 function increaseSize(){
     var iMage = document.querySelector(".modal-content");
     var sty = getComputedStyle(iMage);
     var width = parseInt(sty.width) + 10;
     var height = parseInt(sty.height) + 10;
     iMage.style.width = width + "px";
     iMage.style.height = height + "px";
 }
 function decreaseSize(){
     var iMage = document.querySelector(".modal-content");
     var sty = getComputedStyle(iMage);
     var width = parseInt(sty.width) - 10;
     var height = parseInt(sty.height) - 10;
     iMage.style.width = width + "px";
     iMage.style.height = height + "px";
 }