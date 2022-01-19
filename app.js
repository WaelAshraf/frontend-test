const bodyParser = require(`body-parser`);
const express    = require(`express`);
const app        = express();
//list of items added by user
var num = 0;

app.set(`view engine`, `ejs`);

app.use(express.static(`public`));
app.use(bodyParser.urlencoded({extended:true}));
 
// create application/json parser
var jsonParser = bodyParser.json()
app.get(`/`, function(req, res){
    console.log(num)
    res.render(`list`, { num:num});
});

app.post(`/`, jsonParser,function(req, res){
    //console.log(req.body.quantity)
    res.render(`list`, { num: req.body.quantity});
});


app.listen(3000, function(){
    console.log(`Server running`)
})