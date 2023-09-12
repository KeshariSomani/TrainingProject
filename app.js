const {render}=require('ejs');
const express=require('express');
var cookieParser= require('cookie-parser');
const session = require('express-session');                       //session for
var connection=require('./connection');                            //require is used to use any modules
const app=express();
const bodyParser=require('body-parser');

app.use(cookieParser());                                       //cookie paresr is used for browser
app.use(session({secret: "Shhh, its a secret!"}));

//support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const port=9000;

//View Engine setup
app.set('view engine','ejs');
//add public directory into your project
app.use(express.static('public'));
app.use(express.static('uploads'));

//latest jobs
app.get("/latestjobs",(req,res)=>{
    connection.query("select * from add_job",(error,result)=>{
        if(error)
        {
            throw error;
        }
       else{
        res.render("latestjob",{data:result});
       }
})
})

//set Routing
app.get('/',(req,res)=>{
   // res.end("<h1>Hello World</h1>");
   res.render("landing");                                                   // home is the file name
})
//about
app.get('/about',(req,res)=>{
    // res.end("<h1>Hello World</h1>");
    res.render("about");
 })

 //rating
 app.get("/rating",(req,res)=>{
    res.render("rating");
})
//post action for review
app.post("/userreview",(req,res)=>{
 
    var name=req.body.name;
    var star=req.body.hdnstar;
    var mob=req.body.mob;

connection.query("insert into tbl_star values(?,?,?)",[name,star,mob],(error,result)=>{
    if(error)
    throw error;
    elseres.end("<script>alert('thnks 4 review');window.location.href='/rating'</script>")
})
})

 //job
app.get('/job',(req,res)=>{
    // res.end("<h1>Hello World</h1>");
    res.render("jobmain");
})
 //help
app.get('/help',(req,res)=>{
    // res.end("<h1>Hello World</h1>");
    res.render("help1");
 })
 //registration
 app.get('/registration',(req,res)=>{
    // res.end("<h1>Hello World</h1>");
    res.render("reg");
 })

 //Routing of admin Zone Pages
app.get('/dashboard',(req,res)=>{
    if(req.session.email!=null)
    {
        res.render("./AdminZone/dashboard")
    }
    else
    {
        res.end("<script>alert('First Login then goto next zone');window.location.href='/login'</script> ")
    }
})
 //Routing of admin Zone Pages login
 app.get('/login',(req,res)=>{
    res.render("./AdminZone/login");
})
 //Routing of admin Zone Pages AZ enqmng
 app.get('/enqmng',(req,res)=>{
   if(req.session.email!=null)
   {
    connection.query("select * from enquiry",(error,result)=>{
        if(result.length>0)
        {
        res.render("./AdminZone/enqmng",{title:' Enquiry Management ',data:result});
        }
        else
        {
        throw error;
        }
    })
}
 else
 {
    res.end("<script>alert('First login then goto Next zone');window.location.href='/login'</script>")
 }
})
//Routing of admin Zone Pages AZ usermng
app.get('/usermng',(req,res)=>{
    if(req.session.email!=null)
    {
    connection.query("select * from registration",(error,result)=>{
        if(result.length>0)
        {
        res.render("./AdminZone/usermng",{title:' User Management ',data:result});
        }
        else
        {
        throw error;
        }
    })
}
else
{
   res.end("<script>alert('First login then goto Next zone');window.location.href='/login'</script>")
}
});
//Routing of admin Zone Pages AZ usermng
app.get('/aplyusermng',(req,res)=>{ 
    if(req.session.email!=null)
    {
 connection.query("select * from apply_job",(error,result)=>{
        if(result.length>0)
        {
            res.render("./AdminZone/aplyusermng",{title:' Apply User Management ',data:result});  
        }
        else
        {
        throw error;
        }
    })
}
else
{
   res.end("<script>alert('First login then goto Next zone');window.location.href='/login'</script>")
}
});


//Routing of admin Zone Pages AZ usermng
app.get('/Addjob',(req,res)=>{
    if(req.session.email!=null)
    {
        res.render("./AdminZone/Addjob");
    }
    else
 {
    res.end("<script>alert('First login then goto Next zone');window.location.href='/login'</script>")
 }
})
    


//Routing of admin Zone Pages AZ jobmng
app.get('/jobmng',(req,res)=>{
    if(req.session.email!=null)
    {
        connection.query("select * from add_job",(error,result)=>{
            if(result.length>0)
            {
            res.render("./AdminZone/jobmng",{title:' Job Management ',data:result});
            }
            else
            {
            throw error;
            }
        })
    }
    else
 {
    res.end("<script>alert('First login then goto Next zone');window.location.href='/login'</script>")
 }
})
 
 //Routing of admin Zone Pages AZ password
 app.get('/password',(req,res)=>{
    if(req.session.email!=null)
    {
        res.render("./AdminZone/password");
    }
    else
 {
    res.end("<script>alert('First login then goto Next zone');window.location.href='/login'</script>")
 }
})
    
app.get('/logout',function(req,res){
    req.session.destroy();
    res.end("<script>alert('LOGOUT');window.location.href='/login'</script>")
})
//Routing of jobmain Pages 
app.get('/accntjob',(req,res)=>{
    res.render("accntjob");
})
//Routing of jobmain Pages 
app.get('/animationjob',(req,res)=>{
    res.render("animationjob");
})
//Routing of jobmain Pages 
app.get('/bankjob',(req,res)=>{
    res.render("bankjob");
})
//Routing of jobmain Pages 
app.get('/BPO',(req,res)=>{
    res.render("BPO");
})
//Routing of jobmain Pages 
app.get('/datasciencejob',(req,res)=>{
    res.render("datasciencejob");
})
//Routing of jobmain Pages 
app.get('/java',(req,res)=>{
    res.render("java");
})
//Routing of jobmain Pages 
app.get('/marketingjob',(req,res)=>{
    res.render("marketingjob");
})
//Routing of jobmain Pages 
app.get('/networkingjob',(req,res)=>{
    res.render("networkingjob");
})
//Routing of jobmain Pages 
app.get('/seojob',(req,res)=>{
    res.render("seojob");
})
//Routing of jobmain Pages 
app.get('/softwareeng',(req,res)=>{
    res.render("softwareeng");
})
//Routing of jobmain Pages 
app.get('/teajob',(req,res)=>{
    res.render("teajob");
})
//Routing of jobmain Pages 
app.get('/applyjob',(req,res)=>{
    res.render("applyjob");
})


//Admin login close
 //start post action (need help)
 app.post('/ahelp',(req,res)=>{                                                   //call from (form action)
    //get all value from body
     var fname=req.body.f_name;     //f_name come from input type name
     var lname=req.body.l_name;
     var email=req.body.email;
     var mob=req.body.mob;
     var msg=req.body.msg;
    
    //insert data into database
    connection.query("insert into enquiry values(?,?,?,?,?)",[fname,lname,email,mob,msg],(error,result)=>{                         //variable name declare in this bracket[]

     if(error)
     {
        throw error;
     }
     else
     {
          res.end("<script>alert('Thanks ! your query is submitted as soon as we contact you');window.location.href='/help'</script>");
     }  
    }) 
 })

 //post action for (add job)
 app.post('/adjob',(req,res)=>{
 var jobttl=req.body.jb_ttl;
 var qual=req.body.ql;
 var salary=req.body.s_range;
 var jobdes=req.body.jb_des;

 connection.query("insert into add_job(jb_ttl,m_qual,s_range,jb_des) values(?,?,?,?)",[jobttl,qual,salary,jobdes],(error,result)=>{                         //variable name declare in this bracket[]

    if(error)
    {
       throw error;
    }
    else
    {
         res.end("<script>alert('Sucessfully ! Added new job');window.location.href='/addjob'</script>");
    }  
   }) 
})
//post action (admin_login)

app.post('/alogin',(req,res)=>{                                                   //call from (form action)
    //get all value from body
     var email=req.body.adid;
     var password=req.body.passwd;

    //insert data into database
  //match textbox values from database login table:
  connection.query("select * from admin_login where adid= ? and passwd= ?",[email,password],function(error,result,fields){
    if(result.length>0)
    {
        //set value into session
    
      req.session.email=email;   //set value into session    (=email is var name)     
       res.end("<script>alert('Welcome to Admin Zone');window.location.href='/dashboard'</script>");
       //res.redirect('/dashboard');
    }
    else
    {
      res.end("<script>alert('Invalid UserId or Password ');window.location.href='/login'</script>");
    }
    res.end();
})
})

//post action from applyjob
app.post('/alyjob',(req,res)=>{                                                   //call from (form action)
    //get all value from body
     var name=req.body.name;     
     var title=req.body.jbttl;
     var email=req.body.email_add;
     var mobile=req.body.mob;
     
     connection.query("select * from registration where email= ? ",[email],(error,result,fields)=>{
        if(result.length>0)
        {
    //insert data into database
    connection.query("insert into apply_job values(?,?,?,?,?)",[,name,title,email,mobile],(error,result)=>{                         //variable name declare in this bracket[]

     if(error)
     {
        throw error;
     }
     else
     {
          res.end("<script>alert('Thanks ! you have applied sucessfully');window.location.href='/applyjob'</script>");
     }  
    })
}
     else
     {
        res.end("<script> alert (' you can not apply job because you are not registered');window.location.href='/registration'</script>");
     }
    }) 
 })

 //registration from with file upload
 //file upload code from here
   var multer = require('multer');
   var myfile="";
   var storage = multer.diskStorage({
    destination: function(req,file,callback){
        callback(null,'./uploads');
    },
    filename: function(req,file,callback){
        callback(null,file.originalname);
        myfile=file.originalname;
    }
    });
    var upload = multer({ storage : storage}).single('rescv');
 //end here

app.post('/myreg',(req,res)=>{
upload(req,res,function(error)
{
var fname,lname,email,mob,street,city,state,quali,gender,passwd,resume;
fname=req.body.f_name;
lname=req.body.l_name;
email=req.body.email;
mob=req.body.c_no;
street=req.body.strt;
city=req.body.city;
state=req.body.state;
quali=req.body.qual;
gender=req.body.gnd;
passwd=req.body.chs_pwd;
resume=myfile;

    if(error)
    {
        throw error;
    }
    else{
       connection.query("insert into registration values(?,?,?,?,?,?,?,?,?,?,?)",[fname,lname,email,mob,street,city,state,quali,gender,passwd,resume],(error,result)=>{
        if(error)
    {
        throw error;
    
    }
    else{
        res.end("<script>alert('Thanks for Registration into my portal');window.location.href='/registration'</script>");
    }
})
    }
    })
})
//change password 
app.post("/changep",(req,res)=>{
    var npass=req.body.new;
    var cpass=req.body.confirm;
    if(npass==cpass)
    {
   connection.query("update admin_login set passwd= ?",[npass],(error,result)=>{
 
    if(error)
    {
 throw error;
    }
    else{
       res.end("<script>alert(' Password updated ');window.location.href='/login'</script>");
    }
   })
    }
    else
    {
       res.end("<script>alert('Paasword is not matched ');window.location.href='/password'</script>")
    }
 })


app.listen(port,(error)=>{
    if(error) throw error;
    else
    console.log('server is connected on port %d',port);
})