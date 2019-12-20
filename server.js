const express = require('express');

const PORT = process.env.port || 3000;

const app = express();

var whitelist = ['http://api.krzysztofczepiec.pl']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "api.krzysztofczepiec.pl"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
});

