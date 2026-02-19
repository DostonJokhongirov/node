import http from 'node:http'

const server = http.createServer((req, res) => {
    // req - so'rov
    // res - javob

    console.log(req.url);

    res.write('<h1>Hello world!</h1>')
    res.end()
})

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})