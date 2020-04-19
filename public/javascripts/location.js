// Get the modalpro
var modalpro = document.getElementById("mymodalpro");

// Get the button that opens the modalpro
var btn = document.getElementById("myBtn");

// Get the <span> element that closepros the modalpro
var span = document.getElementsByClassName("closepro")[0];

// When the user clicks the button, open the modalpro 
btn.onclick = function() {
  modalpro.style.display = "block";
}

// When the user clicks on <span> (x), closepro the modalpro
span.onclick = function() {
  modalpro.style.display = "none";
}

// When the user clicks anywhere outside of the modalpro, closepro it
window.onclick = function(event) {
  if (event.target == modalpro) {
    modalpro.style.display = "none";
  }
}
//slide header 
var i=0;
function silde(){
var img = ["images/img/img1.jpg", "images/img/img2.jpg" , "images/img/img3.jpg" ,"images/img/texture.jpg"] ;
    if (i<4) {
        i++;
    } 
    if (i===4){
        i=0;
    }
    //pour titre
    if(i!==0){
      document.getElementById("text").style.display = "none";
    }else{
      document.getElementById("text").style.display = "block";
    }
    document.getElementById('her').style.backgroundImage = 'url("'+img[i]+'")';//"'+nom de varible+'"
}
function sildem(){
    var img = ["images/img/img1.jpg", "images/img/img2.jpg" , "images/img/img3.jpg" ,"images/img/img4.jpg"] ;
        if (i<4) {
            i--;
        } 
        if (i===-1){
            i=3;
        }
        if(i!==0){
          document.getElementById("text").style.display = "none";
        }else{
          document.getElementById("text").style.display = "block";
        }
        document.getElementById('her').style.backgroundImage = 'url("'+img[i]+'")';
}
/////////////////////////////////////////////
// Get the modalprosn
var modalprosn = document.getElementById('idsn');

// When the user clicks anywhere outside of the modalprosn, closepro it
window.onclick = function(event) {
  if (event.target == modalprosn) {
    modalprosn.style.display = "none";
  }
}
// Get the modalprolg
var modalprolg = document.getElementById('idlg');

// When the user clicks anywhere outside of the modalprosn, closepro it
window.onclick = function(event1) {
  if (event1.target == modalprolg) {
    modalprolg.style.display = "none";
  }
}
var j=0;
function dis(){ //reservation 
  if(j===0){

    document.getElementById("resv").style.display = "flex";
    document.getElementById("chekk").style.display = "none";
    document.getElementById("ch").style.display = "none";
    j++;
  }else{
    
    document.getElementById("resv").style.display = "none";
    document.getElementById("chekk").style.display = "none";
    document.getElementById("ch").style.display = "flex";
    j=0;
  }
}
function dis1(){ //home
   
    document.getElementById("resv").style.display = "none";
    document.getElementById("chekk").style.display = "none";
    document.getElementById("ch").style.display = "flex";
    j=0;
}
function chek(){ // btn locatin maint
 var tot = document.getElementById("total").innerHTML,
      pr = document.getElementById("Person").value,
      dr=document.getElementById("dure1").innerHTML,
      id=document.getElementById("idp").innerHTML,
      tt=document.getElementById("titre").innerHTML;
  document.getElementById("titre1").innerHTML= tt;
  document.getElementById("prix").innerHTML= tot;
  document.getElementById("prixd").value =tot;
  document.getElementById("nbrp").innerHTML= pr+"numbre de person";
  document.getElementById("nbrp1").value = pr;
  document.getElementById("dure").innerHTML= dr;
  document.getElementById("duree").value = dr;
  document.getElementById("idcro").value = id;
  document.getElementById("chekk").style.display = "block";
  document.getElementById("resv").style.display = "none";
  j=0;
}
function logtosin(){
  document.getElementById("idlg").style.display = "none";
  document.getElementById("idsn").style.display = "block";
}
function jour(){
  document.getElementById("sle1").style.display = "block";
  document.getElementById("sle").style.display = "none";
}
function moin(){
  document.getElementById("sle1").style.display = "none";
  document.getElementById("sle").style.display = "block";
}
function totalM(){
  var mm = document.getElementById("moins").value;
  var pm = document.getElementById("pr").innerHTML;
  document.getElementById("total").innerHTML= 'totale: ' + mm*parseInt(pm)  + '€' ;
  document.getElementById("dure1").innerHTML= 'du duré : ' + mm + "mois"  ;
}
function totalj(){
var jj = document.getElementById("jour").value;
var pj = document.getElementById("prj").innerHTML;
document.getElementById("total").innerHTML= 'totale: ' + jj*parseInt(pj)  + '€' ;
document.getElementById("dure1").innerHTML= 'du duré : ' + jj + "jours"  ;
}

function eventt(){
  if(window.innerWidth < 1200){
   document.getElementById("photo").style.display= "none";
  }else 
  document.getElementById("photo").style.display= "block";
}
