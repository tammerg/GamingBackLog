var express = require('express');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('database', 'username', 'password');
var PORT = process.env.PORT || 8080;

var app = express();


//Setup the view engine
app.set('views'.join(__dirname, 'views'));


// Middleware

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expses({
  secret: 'strange spaghetti overlord',
  resave: true,
  saveUninitialized: true,
  cookie : { secure : false, maxAge : (7 * 24 * 60 * 60 * 1000) } // 7 Days
}));
app.use(passport.initialize());
app.use(passport.session());


// Static Routes
app.use("/", express.static("public"));
app.use("/js", express.static("public/javascripts"));
app.use("/css", express.static("public/stylesheets"));

// Routing
app.use('/', index);
app.use('/auth', authenticate);

app.listen(PORT, function(){
  console.log('you are listening on port:', PORT);
});
