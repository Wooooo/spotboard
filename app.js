const
    express     = require('express'),
    app         = express();


app.use(express.static('dist'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});