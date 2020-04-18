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
var img = ["img/img1.jpg", "img/img2.jpg" , "img/img3.jpg" ,"img/texture.jpg"] ;
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
    var img = ["img/img1.jpg", "img/img2.jpg" , "img/img3.jpg" ,"img/img4.jpg"] ;
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
   
    j++;
  }else{
    
    document.getElementById("resv").style.display = "none";
    document.getElementById("chekk").style.display = "none";
   
    j=0;
  }
}
function dis1(){ //home
   
    document.getElementById("resv").style.display = "none";
    document.getElementById("chekk").style.display = "none";
    
    j=0;
}
function chek(){ // btn locatin maint
  document.getElementById("chekk").style.display = "block";
  document.getElementById("resv").style.display = "none";
  document.body.style.backgroundImage = "none" ;
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
  document.getElementById("total").innerHTML= 'totale: ' + mm*200  + '€' ;
  document.getElementById("dure1").innerHTML= 'du duré : ' + mm + "mois"  ;
}
function totalj(){
var jj = document.getElementById("jour").value;
document.getElementById("total").innerHTML= 'totale: ' + jj*20  + '€' ;
document.getElementById("dure1").innerHTML= 'du duré : ' + jj + "jours"  ;
}
function eventt(){
  if(window.innerWidth < 1200){
   document.getElementById("photo").style.display= "none";
  }else 
  document.getElementById("photo").style.display= "block";
}
