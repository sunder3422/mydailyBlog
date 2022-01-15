const express= require("express");
const app= express();
const bodyParser= require('body-parser');
app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))

app.listen(3000);
var day1="day1"
var obj={};
 var blog=[
   // {head:"Day 1",body:"hI this is my first blog. do support me"},
   // {head:"Day 2",body:"hI this is my second blog. do support me"},
   // {head:"Day 3",body:"hI this is my third blog. do support me"}
 ];
app.get('/',(req,res)=>{

  res.render('index',{blogs:blog});
});

app.get('/about',(req,res)=>{
  res.render('about');
});

app.get('/contact',(req,res)=>{
  res.render('contact');
});

app.get('/addBlog',(req,res)=>{
  res.render('addBlog')
});

app.get("/post/:topic",(req,res)=>{
  console.log(req.params.topic);
  var data={};
  if(blog.length>0)
  {
    blog.forEach(x=>{
      if(x.head===req.params.topic)
      {
        res.render('posts',{head:x.head,body:x.body});
        // break;
      }
    })
  }

});

app.post('/',(req,res)=>{
  var getHead=req.body.blogHeading;
  var getBody=req.body.blogData;
  console.log(req.body);
  obj["head"]=getHead;
  obj["body"]=getBody;
  // blog.head=getHead;
  // blog.body=getBody;
  blog.push(obj);
  obj={};
  // console.log(blog);
  res.redirect("/")
})
