var SP=[
['<path d="M12 21 3.500 12.500A5.500 5.500 0 0 1 12 5.500a5.500 5.500 0 0 1 8.500 7z"/><path d="M5 12h4l1.500-3 3 6 1.500-3h4" fill="none" stroke="#fdeee8" stroke-width="1.600" stroke-linecap="round" stroke-linejoin="round"/>','Cardiology','Diagnosis and treatment of congenital heart defects, coronary artery disease, heart failure, valvular heart disease, and electrophysiology.'],
['<circle cx="5" cy="9.500" r="2.300"/><circle cx="5" cy="14.500" r="2.300"/><circle cx="19" cy="9.500" r="2.300"/><circle cx="19" cy="14.500" r="2.300"/><rect x="5" y="10" width="14" height="4"/>','Orthopedics &amp; Joint Care','Bone fractures, arthritis treatment, joint replacement surgeries, sports injuries etc.'],
['<circle cx="12" cy="7" r="3.400"/><path d="M5 21c0-4 3-6.500 7-6.500s7 2.500 7 6.500z"/>','Gynecology &amp; Obstetrics','Pregnancy care, normal &amp; C-section delivery, fertility treatments, PCOS management, etc.'],
['<path d="M7 3C4.500 3 3 5 3 7.500c0 2 1 3.500 1.500 6S5 21 6.500 21 8 17 9 15s2-2 3-2 2 0 3 2 1.500 6 2.500 6 2-4.500 2.500-7.500S21 9.500 21 7.500C21 5 19.500 3 17 3c-1.500 0-3 1-5 1S8.500 3 7 3z"/>','Dental Care','Root Canal Treatment, Crown &amp; Bridges, Wisdom Tooth Removal, Orthodontic Fixed Wire Treatment, Ultrasonic Scaling &amp; Polishing, etc.'],
['<path fill-rule="evenodd" d="M12 2C7 2 3.500 5.500 3.500 10c0 2.800 1.300 4.700 3 5.800V19a1 1 0 0 0 1 1H9v-2h1.500v2h3v-2H15v2h1.500a1 1 0 0 0 1-1v-3.200c1.700-1.100 3-3 3-5.800C20.500 5.500 17 2 12 2zM8.500 9a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm7 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>','Maxillofacial Surgery','Specialized care for facial injuries, jaw disorders, and complex oral conditions.'],
['<path d="M3 21V8l5-3v5l5-3v14zm2-2h2v-2H5zm0-4h2v-2H5zm4 4h2v-2H9zm0-4h2v-2H9zM15 21V3h6v18zm2-3h2v-2h-2zm0-4h2v-2h-2zm0-4h2V8h-2z"/>','General Surgery','Laparoscopic surgery, hernia repair, appendix removal, gallbladder surgery, etc.'],
['<path fill-rule="evenodd" d="M7 3a4 4 0 0 0-4 4v5h8V7a4 4 0 0 0-4-4zM3 14v3a4 4 0 0 0 8 0v-3z"/><circle cx="17" cy="16" r="4.500"/><path d="M14 19l6-6" stroke="#fdeee8" stroke-width="1.500"/>','MD Medicine','Management of diabetes, hypertension, thyroid disorders, infectious diseases, etc.'],
['<path d="M7 10a5 5 0 0 1 10 0c0 3-2.500 3.800-2.500 6a3 3 0 0 1-5.500 1.500M10 10a2 2 0 0 1 4 0c0 1.200-1 1.500-1.500 2.500" fill="none" stroke="#ff7a45" stroke-width="2" stroke-linecap="round"/>','ENT(Ear,Nose,Throat)','Sinus treatment, tonsillectomy, hearing loss treatment, nasal surgery, etc']
];
var spg=document.getElementById("spgrid");
SP.forEach(function(s){var d=document.createElement("div");d.className="sp-card";d.innerHTML='<div class="sp-ic"><svg viewBox="0 0 24 24" aria-hidden="true">'+s[0]+'</svg></div><h3>'+s[1]+'</h3><p>'+s[2]+'</p>';spg.appendChild(d);});
var LG=[["#fff","#333","Odisha State Health Scheme"],["#fff","#1a5a2a","PM-JAY Ayushman Bharat"],["#0b4f9e","#fff","Bajaj Allianz General Insurance"],["#fff","#222","Care Health Insurance"],["#e31e24","#fff","HDFC ERGO"],["#2c64a8","#fff","SBI General Insurance"],["#2c64a8","#fff","Star Health Insurance"],["#fff","#b3261e","Aditya Birla Health Insurance"]];
var mqt=document.getElementById("mqtrack");
[0,1].forEach(function(k){var s=document.createElement("div");s.className="set";if(k)s.setAttribute("aria-hidden","true");LG.forEach(function(l){var t=document.createElement("div");t.className="logo-tile";t.style.background=l[0];t.style.color=l[1];t.textContent=l[2];s.appendChild(t);});mqt.appendChild(s);});
var DD=[["ddb","ddp"],["mdb","mdp"]].map(function(p){return{b:document.getElementById(p[0]),p:document.getElementById(p[1])};});
function ddSet(d,o){d.p.classList.toggle("open",o);d.b.setAttribute("aria-expanded",o?"true":"false");}
DD.forEach(function(d){d.b.addEventListener("click",function(e){e.stopPropagation();var o=!d.p.classList.contains("open");DD.forEach(function(x){ddSet(x,false);});ddSet(d,o);});});
document.addEventListener("click",function(e){DD.forEach(function(d){if(!d.p.contains(e.target))ddSet(d,false);});});
document.addEventListener("keydown",function(e){if(e.key==="Escape"){DD.forEach(function(d){ddSet(d,false);});}});
var nt=document.getElementById("newstrack");
function nScroll(d){var c=nt.querySelector(".n-card");nt.scrollBy({left:d*(c.offsetWidth+25),behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});}
document.getElementById("newsprev").onclick=function(){nScroll(-1);};
document.getElementById("newsnext").onclick=function(){nScroll(1);};
var vt=document.getElementById("vtrack");
function vScroll(d){var c=vt.querySelector(".v-card");vt.scrollBy({left:d*(c.offsetWidth+25),behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});}
document.getElementById("vprev").onclick=function(){vScroll(-1);};
document.getElementById("vnext").onclick=function(){vScroll(1);};
var cbm=document.getElementById("cbm"),cbs=document.getElementById("cbstatus");
var cbNote="Demo only: this page isn\u2019t connected to a server, so nothing is sent.";
document.getElementById("cbsend").onclick=function(){if(!cbm.checkValidity()){cbm.reportValidity();return;}cbs.textContent=cbNote;};
document.getElementById("cbres").onclick=function(e){e.preventDefault();if(!cbm.checkValidity()){cbm.reportValidity();return;}cbs.textContent=cbNote;};
document.getElementById("cbchg").onclick=function(e){e.preventDefault();cbm.focus();cbm.select();};
document.getElementById("cbform").addEventListener("submit",function(e){e.preventDefault();cbs.textContent=cbNote;});
document.getElementById("bkform").addEventListener("submit",function(e){e.preventDefault();document.getElementById("bkstatus").textContent="Demo only: this page isn\u2019t connected to a server or payment service, so nothing is sent.";});
document.getElementById("ftform").addEventListener("submit",function(e){e.preventDefault();document.getElementById("ftnote").textContent="Demo only: this page isn\u2019t connected to a server, so nothing is sent.";});
var TM=[
["Suman Mishra",5,"I am truly grateful to the staff at Shree Balaji Nursing Home. The doctors were patient, kind, and explained everything clearly. The cleanliness and facilities were excellent!"],
["Rajeev Kumar",5,"Had my father admitted here during a medical emergency. The team responded quickly and gave him the best care. Affordable and compassionate treatment!"],
["Ananya Patnaik",3,"Being a resident of Bhawanipatna, I can say this is one of the most reliable nursing homes in the area. The gynecology department is especially good."],
["Subhendu Das",5,"We recently had our baby delivered here. The staff were very supportive and the pediatric care post-delivery was excellent. Thank you Balaji Nursing Home!"],
["Drishti Mohanty",4,"The atmosphere is peaceful and the nursing staff is very polite. I would recommend this place to anyone in need of affordable quality care."],
["Pratik Reddy",5,"Came here for my mother\u2019s treatment. The doctors were extremely knowledgeable and caring. The diagnostic services were also timely and accurate."],
["Neha Sahu",4,"Shree Balaji Nursing Home provides personalized care that feels like home. The staff is friendly and genuinely concerned about patients\u2019 well-being."],
["Alok Verma",5,"Very clean and hygienic. The staff was attentive during my short stay. One of the better nursing homes in the Kalahandi district."],
["Priyanka Nayak",4,"Excellent maternity care services. The nurses were helpful throughout my stay and made me feel comfortable and safe."]
];
var TMC=["#e07a5f","#3d8c7a","#5b7fc4","#b565a7","#d4a017","#4a9bb5","#7a8b3c","#c0504d","#6a5acd"];
var tmT=document.getElementById("tmtrack"),tmD=document.getElementById("tmdots"),tmPage=0,tmPages=3,tmTimer=null;
TM.forEach(function(r,i){var c=document.createElement("div");c.className="tm-card";var st="";for(var k=0;k<5;k++){st+=k<r[1]?"\u2605":"\u2606";}
c.innerHTML='<div class="tm-av" style="background:'+TMC[i]+'">'+r[0].charAt(0)+'</div><h3 class="tm-name">'+r[0]+'</h3><div class="tm-stars" aria-label="'+r[1]+' out of 5">'+st+'</div><p class="tm-text">\u201c'+r[2]+'\u201d</p>';tmT.appendChild(c);});
function tmGo(p){tmPage=p;tmT.style.transform="translateX(calc(-"+p+" * (100% + 25px)))";Array.prototype.forEach.call(tmD.children,function(b,i){b.setAttribute("aria-current",i===p?"true":"false");});}
function tmBuild(){var n=window.innerWidth<700?1:window.innerWidth<1000?2:3;tmT.style.setProperty("--n",n);tmPages=Math.ceil(TM.length/n);tmD.innerHTML="";for(var i=0;i<tmPages;i++){(function(i){var b=document.createElement("button");b.type="button";b.setAttribute("aria-label","Show testimonials "+(i+1));b.onclick=function(){tmGo(i);};tmD.appendChild(b);})(i);}tmGo(Math.min(tmPage,tmPages-1));}
function tmStart(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;tmStop();tmTimer=setInterval(function(){tmGo((tmPage+1)%tmPages);},5000);}
function tmStop(){if(tmTimer){clearInterval(tmTimer);tmTimer=null;}}
var tmSec=document.getElementById("testimonials");tmSec.addEventListener("mouseenter",tmStop);tmSec.addEventListener("mouseleave",tmStart);tmSec.addEventListener("focusin",tmStop);tmSec.addEventListener("focusout",tmStart);
window.addEventListener("resize",tmBuild);tmBuild();tmStart();
