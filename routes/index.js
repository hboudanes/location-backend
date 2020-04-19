var express = require('express');
var router = express.Router();
const fs=require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  let data = fs.readFileSync('../produit.json');
  let produit = JSON.parse(data); 
  var i;
  var pro="";
  for (i=0 ;i<produit.length;i++){
  
     var posthtml=' <div class="col-12 col-sm-10 col-lg-5   test1">'+
     '<img src="images/img/appr.jpg" class="imgprodu">'+
     '<div style="float: right;">'+
     ' <h2 class="tit"> '+produit[i].titre+' </h2><br>'+
     ' <h3 class="prix"> '+produit[i].prix+'€</h3>'+
      '<h3 class="des">'+produit[i].ville+'</h3>'+
    ' </div>'+
   ' </div>';
       
    
    pro += posthtml;
  }
  
  res.render('index', { title: 'location' ,produit : pro});
});
router.get('/:id', function(req, res, next) {
  let rawdata = fs.readFileSync('../client.json');
  let client = JSON.parse(rawdata); 
  let data = fs.readFileSync('../produit.json');
  let produit = JSON.parse(data); 
  var i;
  var pro="";
  for (i=0 ;i<produit.length;i++){
  
     var posthtml=' <div class="col-12 col-sm-10 col-lg-5 test1"  onclick="getproduit('+i+')">'+
     '<img src="images/img/appr.jpg" class="imgprodu">'+
     '<div style="float: right;">'+
     ' <h2 class="tit" id="tit'+i+'"> '+produit[i].titre+' </h2><br>'+
     ' <h3 class="prix" id="prix1'+i+'"> '+produit[i].prix+'</h3>'+
      '<h3 class="des" id="vill'+i+'">'+produit[i].ville+'</h3>'+
      '<p class="d-none" id="idpro'+i+'">'+produit[i].idpro+'</p>'+
    ' </div>'+
   ' </div>';
       
    
    pro += posthtml;
  }
  var n=client[req.params.id].name.charAt(0);
  console.log(n,req.params.id)
  var z=req.params.id;
  res.render('compte', { name: n , produit : pro, usern:client[z].name , id:z });
  router.post('/'+ z + '/reservation',(req,res,next)=>{
    let data1 = fs.readFileSync('../reservat.json');
  let commend = JSON.parse(data1); 
  var newcommd = {
  "idreservat": commend.length, 
  "idpro":req.body.idpro,
  "idclient":z,                
  "cname":req.body.cardname,
  "nameclient":client[z].name,
  "prixtotale":req.body.prixt ,
  "nbrprson" :req.body.nbpr,
  "dure" :req.body.dure};      
  
  commend.push(newcommd);
  let data2 = JSON.stringify(commend);
  fs.writeFileSync('../reservat.json', data2);
  res.redirect('/'+ z );
  });
});
router.post('/signin',(req,res,next)=>{
  let rawdata = fs.readFileSync('../client.json');
  let client = JSON.parse(rawdata); 
  var newclient = {
  "id":client.length,
  "name":req.body.user,
  "age":req.body.age,
  "password":req.body.password};
  client.push(newclient);
  let data = JSON.stringify(client);
  fs.writeFileSync('../client.json', data);
 
  res.redirect('/');
});
router.post('/login',(req,res,next)=>{
  let rawdata = fs.readFileSync('../client.json');
  let client = JSON.parse(rawdata); 

  var i=0;
  var v=false,t;
  for ( i = 0; i < client.length; i++) {
    if (req.body.user == client[i].name && req.body.password == client[i].password) {
      console.log(client[i].name)
      console.log(client[i].password)
      v=true;
      t=client[i].id
      break;
    } else {
      
    }
  }
  if (v) {
    res.redirect('/'+t)
  } else {
    console.log('errors')
  }
  
});
module.exports = router;
