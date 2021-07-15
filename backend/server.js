const express = require('express');
const cors = require("cors");
const app = express();

const corsOptions = {
    origin: "http://localhost:4200"
}

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require('./models');
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.get('/', (req, res) =>{
    res.send('<h2>Hello from Express.js server!!</h2>');
});

app.get('/sport', (req,res) => {
    res.send('<h2>Svi članci vezani za sport!</h2>');
});

app.get('/zabava', (req,res) => {
    res.send('<h2>Svi članci vezani za zabavu!</h2>');
});

app.get('/politika', (req,res) => {
    res.send('<h2>Svi članci vezani za politiku!</h2>');
});

require('../backend/routes/user.routes')(app);
require('../backend/routes/vijest.routes')(app);

// Server setup
app.listen(8080, () => {
    console.log('server listening on port 8080');
});