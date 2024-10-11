// controller index
const index = (req, res)=>{
    res.render("index",{title: 'Express mvc'});
};

// contoller kontak
const kontak = (req, res)=>{
    res.render("kontak",{title: 'ini halaman kontak'});
};

// controller profile
const profile = (req, res)=>{
    res.render("profile",{title: 'ini halaman profile guyss'});
};

module.exports={ index, kontak, profile};