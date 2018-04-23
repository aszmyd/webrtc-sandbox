const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

require('express-ws')(app);

app.listen(8100, () => console.log('Example app listening on port 8100!'));

app.ws('/echo', function(ws, req) {
    ws.on('message', function(msg) {
        ws.send(msg);
    });
});