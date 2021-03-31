var express=require('express');
var app=express();
var bodyParser=require('body-parser');       
var connection=require('./model/database.js');

app.set("views","./views")
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));


app.get('/login',function(req,res){
    console.log("Welcome to login page");
    res.render('login');
})

app.get('/q2',function(req,res){
connection.query('select * from product_details where price>16000',(err,results)=>{
    console.log("Question 2 values fetch");
    res.render("user",{userdata:results});
})
})
app.get('/ProductsEntry',function(req,res){
    console.log("Welcome to products entry page");
    res.render("admin_ProductEntrySheet");
})
app.use('/entry',function(req,res){
    var id=req.body.id;
    var productname=req.body.productname;
    var brand=req.body.Brand;
    var price=req.body.price;

    

    connection.query('insert into product_details values(?,?,?,?)',[id,productname,brand,price],(err,results)=>{
        console.log('this is query');
        if(err) throw err;
        if(results){
            console.log("products updated");
            res.render('admin_login');
            
        }
    })
})

app.listen(3004,()=> {
    console.log("Server is running at 3004");
})