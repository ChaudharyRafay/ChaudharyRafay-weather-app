const express=require('express');
const path=require('path');
const hbs=require('hbs');
const app=express();
const port=process.env.PORT ||8000;
//public static path
const static_path=(path.join(__dirname,'../public'));
const templatepath = path.join(__dirname, "../templates/views");
const partial_path=path.join(__dirname,"../templates/partials")
//for serving hbs files
app.set('view engine', 'hbs');
//for serving static files
 app.use(express.static(static_path));
 app.set('views',templatepath);
 hbs.registerPartials(partial_path);
 //for routing
app.get('/',(req,res)=>{
res.render('index');
});
app.get('/about',(req,res)=>{
    res.render('about');
    });
app.get('/weather',(req,res)=>{
        res.render('weather');
        });
app.get('*',(req,res)=>{
            res.render('404',{
                errorMsg:'Oops! Page Not Found,click here to go back'
            })
            });
app.listen(port,()=>{
    console.log(`Listening to the port at ${port}`);
});