const http=require('http');

http.createServer((req,res) => {
    res.write('GOOD MORNING');
    res.end();
})
.listen(9000,()=> console.log('Server running....'));