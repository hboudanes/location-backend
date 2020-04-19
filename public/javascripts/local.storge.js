function getproduit(p){
   x = document.getElementById("tit"+p+"").innerHTML;
   y = document.getElementById("prix1"+p+"").innerHTML;
   z = document.getElementById("vill"+p+"").innerHTML;
   t = document.getElementById("idpro"+p+"").innerHTML;
  
  document.getElementById("titre").innerHTML=x;
  document.getElementById("prj").innerHTML =y+ "€/jour";
  document.getElementById("pr").innerHTML = (y*30)+ "€/mois"
  document.getElementById("vil").innerHTML = z;
  document.getElementById("idp").innerHTML = t;
  
}
