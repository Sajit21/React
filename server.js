const express= require('http');
const app=express();

const router=express.Router();


router.get('/',function(req,res,next){
    console.log("hello server")
    res.end();
})


app.use('router')

app.listener(3000,function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("error not found")
    }
})
