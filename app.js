const bodyParser = require(`body-parser`);
const express    = require(`express`);
const app        = express();

var num = 0;
app.set(`view engine`, `ejs`);
app.use(express.static(`public`));
app.use(bodyParser.urlencoded({extended:true}));
var jsonParser = bodyParser.json()

app.get(`/`, function(req, res){
    res.render(`quantity`, { num:num});
});

app.post(`/`, jsonParser,function(req, res){
    res.render(`quantity`, { num: req.body.quantity});
});

app.listen(process.env.PORT || 5000)