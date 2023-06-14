const http = require('http');

const server = http.createServer((req, resp) => {

    const url = req.url;
    const method = req.method;

    if(url === '/'){
        resp.setHeader('Content-Type', 'text/html');
        resp.write('<html>');
        resp.write('<body><h1>Hello, welcome to my page</h1></body>');
        resp.write('<form method="POST" action="/create-user">');
        resp.write('username: <input type="text" name="username">');
        resp.write('<button type="submit">send</button>');
        resp.write('</form>');
        resp.write('</html>');
        return resp.end();
    }

    if(url === '/users'){
        // console.log('user page');
        resp.setHeader('Content-Type','text/html');
        resp.write('<html>');
        resp.write('<ul><li>User 1</li></ul>');
        resp.write('<ul><li>User 2</li></ul>');
        resp.write('<ul><li>User 3</li></ul>');
        resp.write('<ul><li>User 4</li></ul>');
        resp.write('<ul><li>User 5</li></ul>');
        resp.write('</html>');
        return resp.end();
    }

    if(url === "/create-user" && method === 'POST'){
        resp.setHeader('Content-Type', 'text/html');
        // console.log('return a user form input');
        // console.log(req.on);

        const body = [];

        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {

            console.log(body.toString());
            const thebuffer = Buffer.concat(body).toString();
            console.log(thebuffer);        
            let username = thebuffer.split('=')[1];
            console.log(username);

        })

        resp.statusCode = 302;
        resp.setHeader('Location','/');
        resp.end();
    }


});

server.listen(9000);