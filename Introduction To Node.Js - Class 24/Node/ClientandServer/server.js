// creating a backend server

var http=require('http');
//hyper text transfer protocol

let server=http.createServer((request,response)=>
{
    response.end('Hello World');
});


server.listen(5000,'localhost',()=>
{
    console.log('Server is running on port 5000')
})