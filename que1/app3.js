var express=require('express');
var app=express();
var bodyParser=require('body-parser');       
var connection=require('./model/database.js');

app.set("views","./views")
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));

app.get('/signup',function(req,res){
    console.log("Welcome to signup page");
    res.render("signup_student");
})
app.use('/check',function(req,res){
    console.log('validated');
    var username=req.body.username;
    var rollnumber=req.body.rollnumber;
    var email=req.body.Email;
    var pwd=req.body.Password;
    var date=req.body.date;

    connection.query('insert into register_page values(?,?,?,?,?)',[rollnumber,username,email,pwd,date],(err,results)=>{
        console.log('this is query');
        if(err) throw err;
        if(results){
            console.log("Values Inserted");
            res.render('login');
            
        }
    })
})
app.get('/login',function(req,res){
    console.log("Welcome to login page");
    res.render('login');
})
app.post('/validate',function(req,res){
    console.log('validated');
    var username=req.body.username;
    var rollnum=req.body.Rollnum;

    
    connection.query('select username from register_page where username like ?',[username],(err,results)=>{
        if(err) throw err;
        if(results){
            connection.query('select rollnum from register_page where username like ? and rollnum like ?',[username,rollnum],(err1,results1)=>{
                if(err1) throw error;
                if(results1){
                console.log("hello");
             connection.query('select * from Student_marks where name like ? and rollno like ?',[username,rollnum],(err2,results2)=>{
                    if(err2) throw error;
                    if(results2){
                    res.render("user",{userdata:results});
                        console.log(results);
                    }
                
                })
            }
            
            })
        }
    })
    
    
})
app.get('/markentry',function(req,res){
    console.log("Welcome to markentry page");
    res.render("admin_MarkEntrySheet");
})
app.use('/entry',function(req,res){
    var username=req.body.username;
    var rollnumber=req.body.rollnumber;
    var date=req.body.date;
    var mark1=req.body.mark1;
    var mark2=req.body.mark2;
    var mark3=req.body.mark3;
    

    connection.query('insert into Student_marks values(?,?,?,?,?,?)',[username,rollnumber,date,mark1,mark2,mark3],(err,results)=>{
        console.log('this is query');
        if(err) throw err;
        if(results){
            console.log("Marks updated");
            res.render('admin_login');
            
        }
    })
})

app.listen(3003,()=> {
    console.log("Server is running at 3003");
})