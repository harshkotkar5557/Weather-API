const http = require ('http')
const { write } = require('node:fs')
const { STATUS_CODES } = require('node:http')

http.createServer(function(req,res){
    if(status==200){
        res.write('hellow')
    }else{
        res.write('error')
    }
}).listen(5050)