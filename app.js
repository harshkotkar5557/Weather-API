const express = require("express")
const app = express();

app.get('/' ,function(req,res){
    res.sendFile(__dirname + '/index.html')
    // console.log(req.url);
})

app.listen(3000, function(){
    console.log('hellow i am listening');
})

