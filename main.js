var heading=document.createElement("h3");
heading.innerHTML="Non consectetur a erat nam at lectus urna duis?";
heading.classList.add("heading");
var btn=document.createElement("button");
btn.innerHTML=('<i class="fa fa-angle-down" aria-hidden="true"></i>');
btn.classList.add("accor-btn");


var para=document.createElement("p");
para.innerHTML="Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.";
para.classList.add("para");

var title=document.createElement("h1");
title.innerHTML="Frequently Asked Questions";
title.classList.add("top-title");

var row=document.createElement("div");
row.classList.add("row");

var card=document.createElement("div");
card.classList.add("cont-card");

var con=document.getElementById("accor-con");
con.appendChild(title);
con.appendChild(card);

card.appendChild(row);
row.appendChild(heading);
row.appendChild(btn);
card.appendChild(para);

btn.addEventListener("click",function(){
    para.style.display="none";
    btn.style.transform="rotate(180deg)";
});


