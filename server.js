const express =  require("express"),
    bp = require("body-parser"),
    dataBaseName = "dashboard",
    app = express(),
    port = 8000;

app.use(express.static(__dirname+"/static"))
app.use(bp.urlencoded({extend:true}));
app.set('views', __dirname+'/views');
app.set('view engine', 'pug');
require('./server/utils/mongoose')(dataBaseName);
require('./server/utils/routes')(app);


app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});