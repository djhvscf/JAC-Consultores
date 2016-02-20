var express     = require('express');
var app         = express();
var mongoose     = require('mongoose');

// Conexión con la base de datos
//mongoose.connect('mongodb://localhost:27017/jacconsultores');
mongoose.connect('mongodb://jac:jac@ds059375.mongolab.com:59375/jacconsultores');

// Configuración
app.configure(function() {
    // Localización de los ficheros estÃ¡ticos
    app.use(express.static(__dirname + '/'));
    // Muestra un log de todos los request en la consola
    app.use(express.logger('dev'));
    // Permite cambiar el HTML con el método POST
    app.use(express.bodyParser());
    // Simula DELETE y PUT
    app.use(express.methodOverride());
});

var Todo = mongoose.model('Todo', {
    text: String
});

/*****************************************************************
 * Condominios API
 ****************************************************************/
var Condominio = mongoose.model("Condominio", {
    nombre: String,
    direccion: String,
    telefono: String
});

app.get('/api/condominios', function(req, res) {
    Condominio.find(function(err, condominios) {
        if(err) {
            res.send(err);
        }
        res.json(condominios);
    });
});

app.post('/api/condominios', function(req, res) {
    Condominio.create({
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono
    }, function(err, condominio){
        if(err) {
            res.send(err);
        }

        Condominio.find(function(err, condominios) {
            if(err){
                res.send(err);
            }
            res.json(condominios);
        });
    });
});
/*****************************************************************
 * Condominios API
 ****************************************************************/

/*****************************************************************
 * Propiedad API
 ****************************************************************/
var Propiedad = mongoose.model("Propiedad", {
    isVenta: Boolean,
    direccion: String,
    isPropietario: Boolean,
    telefono: String,
    comision: Number,
    cuotaMant: Number,
    cuotaSeg: Number,
    lote: Number,
    const: Number,
    anos: Number,
    niveles: Number,
    garage: Number,
    habitaciones: Number,
    banos: Number,
    oficina: Boolean,
    terra: Boolean,
    patio: Boolean,
    sala: Boolean,
    anteComedor: Boolean,
    ctoServ: Boolean,
    salaTv: Boolean,
    cocina: Boolean,
    ctoPilas: Boolean,
    bodega: Boolean,
    otros: String,
    areaComp: String,
    observaciones: String
});

// Rutas de nuestro API
// GET de todos los TODOs
app.get('/api/propiedad', function(req, res) {
    Propiedad.find(function(err, propiedades) {
        if(err) {
            res.send(err);
        }
        res.json(propiedades);
    });
});

app.post('/api/propiedad', function(req, res) {
    Propiedad.create({
        isCasaCondominio: req.body.isCasaCondominio,
        idCondominio: req.body.idCondominio,
        isVenta: req.body.isVenta,
        direccion: req.body.direccion,
        isPropietario: req.body.isPropietario,
        telefono: req.body.telefono,
        comision: req.body.comision,
        cuotaMant: req.body.cuotaMant,
        cuotaSeg: req.body.cuotaSeg,
        lote: req.body.lote,
        const: req.body.const,
        anos: req.body.anos,
        niveles: req.body.niveles,
        garage: req.body.garage,
        habitaciones: req.body.habitaciones,
        banos: req.body.banos,
        oficina: req.body.oficina,
        terra: req.body.terra,
        patio: req.body.patio,
        sala: req.body.sala,
        anteComedor: req.body.anteComedor,
        ctoServ: req.body.ctoServ,
        salaTv: req.body.salaTv,
        cocina: req.body.cocina,
        ctoPilas: req.body.ctoPilas,
        bodega: req.body.bodega,
        otros: req.body.otros,
        areaComp: req.body.areaComp,
        observaciones: req.body.observaciones
    }, function(err, propiedad){
        if(err) {
            res.send(err);
        }

        Propiedad.find(function(err, propiedades) {
            if(err){
                res.send(err);
            }
            res.json(propiedades);
        });
    });
});
/*****************************************************************
 * Propiedad API
 ****************************************************************/


// Rutas de nuestro API
// GET de todos los TODOs
app.get('/api/todos', function(req, res) {
    Todo.find(function(err, todos) {
        if(err) {
            res.send(err);
        }
        res.json(todos);
    });
});

// POST que crea un TODO y devuelve todos tras la creación
app.post('/api/todos', function(req, res) {
    Todo.create({
        text: req.body.text,
        done: false
    }, function(err, todo){
        if(err) {
            res.send(err);
        }

        Todo.find(function(err, todos) {
            if(err){
                res.send(err);
            }
            res.json(todos);
        });
    });
});

// DELETE un TODO específico y devuelve todos tras borrarlo.
app.delete('/api/todos/:todo', function(req, res) {
    Todo.remove({
        _id: req.params.todo
    }, function(err, todo) {
        if(err){
            res.send(err);
        }

        Todo.find(function(err, todos) {
            if(err){
                res.send(err);
            }
            res.json(todos);
        });

    })
});

// Carga una vista HTML simple donde irá nuestra Single App Page
// Angular Manejará el Frontend
app.get('*', function(req, res) {
    res.sendfile('index.html');
});

// Escucha en el puerto 8080 y corre el server
//app.listen(8080, function() {
//    console.log('App listening on port 8080');
//});

app.listen(process.env.PORT || 3000);