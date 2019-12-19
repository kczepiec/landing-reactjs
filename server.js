const express = require('express');

const PORT = process.env.port || 3000;

const app = express();

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
});

