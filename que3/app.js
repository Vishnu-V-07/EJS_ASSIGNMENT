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
app.post('/validate',function(req,res){
    console.log('validated');
    var city=req.body.username;
    var Range=req.body.Rollnum;




connection.query('select country,high,low  from Temperature where city like ? and Range1 like ? ',[city,Range],(err,results)=>{
    console.log("Question 3 values fetch");
    res.render("user",{userdata:results});
})
})

app.listen(3004,()=> {
    console.log("Server is running at 3004");
})