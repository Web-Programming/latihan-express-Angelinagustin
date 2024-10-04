var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/paketwisata',function (req, res, next){
  let paketwisata= [
    {'nama' :'wisata pulau kemarau', 'harga':5000},
    {'nama' :'wisata punti kayu', 'harga':2000},
    {'nama' :'wisata jakabaring', 'harga':7000},
  ]
  res.render('paketwisata', {
    title:'Paket Wisata',
    listpaketwisata: listpaketwisata});
});

router.get('/orderpaket',function (req, res, next){
  let orderpaket= [
    {'namapesanan' : 'budi',
      'email' :'budi123@gmail.com', 
      'noHP': '09293', 
      'tglPesanan':'10 April 2024'},
  ]
  res.render('orderpaket', {
    title:'Form Pemesanan Paket',
    formulirpesanan :formulirpesanan
  });
});

router.post('/orderdetail',function (req, res, next){
  res.render('orderdetail', {title:'Detail Pemesanan Paket'});
});



module.exports = router;
