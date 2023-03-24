let express=require('express');
let app=express();
let port=process.env.PORT || 3000;
app.use('/assets', express.static(__dirname+'/public'));
app.use('/',function (req, res, next){console.log('Request URL:' + req.url),next()});
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.listen(port);

//Pagina de inicio
app.get('/', function (req, res) {
    res.render('index');
});
//Pagina de mensaje a una persona:
app.get('/person/:id', function (req, res) {
    res.render('person', {ID:req.params.id, Message: req.query.message, Times: req.query.times});
}); 
//Pagina de agregar estudiante:
app.get('/student', function (req, res) {
    res.render('student');
}); 

//Metodo post para los estudiantes:
app.post('/addStudent', function (req, res) { 
    res.render('displayData',{
        nombre:req.body.nombre,
        edad: req.body.edad, 
        nss: req.body.nss, 
        tipoSangre:req.body.tipoSangre});
})