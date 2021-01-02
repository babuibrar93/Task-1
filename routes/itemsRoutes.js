var express = require('express');
var router = express.Router();
var Items = require("../model/Item");



/* GET home page. */
router.get('/', async function(req, res, next) {
   let lists = await Items.find();
  //  console.log(lists);
  res.render("Items/item-list", {lists});
});

// Add Item page
router.get('/add', async function(req, res, next) {
  res.render("add-items");
});

// will store the data in database
router.post('/', async function(req, res, next) {
  console.log(req.body); 
  let items = new Items(req.body);
  await items.save();
  res.redirect("/itemsRoutes");
});


router.get('/delete/:id', async function(req, res, next) {
 let item = await Items.findByIdAndDelete(req.params.id);
 res.redirect("/itemsRoutes");
});

router.get('/edit/:id', async function(req, res, next) {
  let item = await Items.findById(req.params.id);
  // console.log(item)
  res.render("edit-items", {item});
 });


  router.post('/update/:id', async function(req, res, next) {
    let item = await Items.findById(req.params.id);
    item.productid = req.body.productid;
    item.prName = req.body.prName;
    item.prCatagory = req.body.prCatagory;
    item.prPrice = req.body.prPrice;
    item.prDetails = req.body.prDetails;
    item.prImage = req.body.prImage;
    await item.save();

    res.redirect("/itemsRoutes");
  });
 

module.exports = router; 
