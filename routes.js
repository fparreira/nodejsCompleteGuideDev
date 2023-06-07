const fs = require('fs')

const requestHandler = (req, resp) => {

    const url = req.url;
    const method = req.method;
    
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
        res.write('</html>');
        return res.end();
    }
    
    if(url === "/message" && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            // console.log(parseBody);
            const message = parseBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
    
        });
    
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<h1>First Page Node Js Server</h1>');
    res.write('</html>');
    res.end();

}

module.exports = requestHandler;