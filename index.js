const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

const app = express();

app.use(cors({
    origin: true, // "true" will copy the domain of the request back
                  // to the reply. If you need more control than this
                  // use a function.

    credentials: true, // This MUST be "true" if your endpoint is
                       // authenticated via either a session cookie
                       // or Authorization header. Otherwise the
                       // browser will block the response.

    methods: 'POST,GET,PUT,OPTIONS,DELETE' // Make sure you're not blocking
                                           // pre-flight OPTIONS requests
}));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "kaigan-games-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true
  })
);

const db = require("./models");
const Role = db.role;

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to kaigangames backend!" });
});

// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});