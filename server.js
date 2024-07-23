const express = require('express');

const app = express();
const PORT = process.env.PORT || 3007;

app.listen(PORT, () => {
    console.log('server started!');
})