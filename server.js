const http = require('http');
const fs = require('fs');

const hostname = '192.168.2.88'; // IP
const port = 3000; // порт

const server = http.createServer((req, res) => {
    let url = req.url;
    if (url == '/') {
        url = '/index'
    }

    // console.log(url);
    if (url != '/favicon.ico') {
if(req.url.endsWith('.css')){
let cssFile = req.url.slice(1);
fs.readFile (cssFile, (err, data) =>{
    if (err) throw err;
    res.setHeader('Content-Type', 'text/css');
    res.statusCode = 200;
    res.write(data);
    res.end()
})
}
else if(){
    
}
        fs.readFile(url.substr(1, url.length) + '.html', function (err, data) {
            if (!err) {
                res.writeHead(200, { 'Content-Type': 'text/html', });
                data = data.toString().replace(/\{\{name\}\}/g, "Dolbokran");
                res.write(data);
                res.end();
            } else {
                fs.readFile('404.html', function (err, data) {
                    res.writeHead(400, { 'Content-Type': 'text/html', });
                    res.write(data)
                    res.end();
                }
                );
            }
        })

    }
}
);


server.listen(port, hostname, () => {
    console.log('Server is running!')
})