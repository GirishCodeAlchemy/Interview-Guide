const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send({
        name: 'Todo App v1.0'
    });
});

let server = app.listen(3000, () => {
    console.log('Server running on port 3000');
    let host = server.address().address;
    let port = server.address().port;
    console.log('Server running at http://%s:%s', host, port);
});
