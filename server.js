var express     = require('express');
var app         = express();
var mongoose     = require('mongoose');

mongoose.connect('mongodb://jac:jac@ds059375.mongolab.com:59375/jacconsultores');

app.configure(function() {
    app.use(express.static(__dirname + '/'));
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
});

/*****************************************************************
 * Condominios API
 ****************************************************************/
var Condominio = mongoose.model("Condominio", {
    nombre: String,
    direccion: String,
    telefono: String
});

app.get('/api/condominio', function(req, res) {
    Condominio.find(function(err, condominios) {
        if(err) {
            res.send(err);
        }
        res.json(condominios);
    });
});

app.post('/api/condominio', function(req, res) {
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
    isCasaCondominio: Boolean,
    idCondominio: Number,
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

/*****************************************************************
 * Cliente API
 ****************************************************************/
var Cliente = mongoose.model("Cliente", {
    isCompra: Boolean,
    nombre: String,
    telefono: String,
    telefono2: String,
    isReferido: Boolean,
    telefonoReferido: String,
    comision: Number,
    fecha: Date,
    casa: Boolean,
    condominio: Boolean,
    lote: Boolean,
    otrosCliente: String,
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
    observaciones: String
});

app.get('/api/cliente', function(req, res) {
    Cliente.find(function(err, clientes) {
        if(err) {
            res.send(err);
        }
        res.json(clientes);
    });
});

app.post('/api/cliente', function(req, res) {
    Cliente.create({
        isCompra: req.body.isCompra,
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        telefono2: req.body.telefono2,
        isReferido: req.body.isReferido,
        telefonoReferido: req.body.telefonoReferido,
        comision: req.body.comision,
        fecha: req.body.fecha,
        casa: req.body.casa,
        condominio: req.body.condominio,
        lote: req.body.lote,
        otrosCliente: req.body.otrosCliente,
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
        observaciones: req.body.observaciones
    }, function(err, cliente){
        if(err) {
            res.send(err);
        }

        Cliente.find(function(err, clientes) {
            if(err){
                res.send(err);
            }
            res.json(clientes);
        });
    });
});
/*****************************************************************
 * Cliente API
 ****************************************************************/

/*****************************************************************
 * Lote API
 ****************************************************************/
var Lote = mongoose.model("Lote", {
    residencial: String,
    isPropietario: Boolean,
    direccion: String,
    descripcion: String,
    planoCatastro: String,
    area: Number,
    preciom2: Number,
    cuotaMant: Number,
    precioTotal: Number,
    observaciones: String
});

app.get('/api/lote', function(req, res) {
    Lote.find(function(err, lotes) {
        if(err) {
            res.send(err);
        }
        res.json(lotes);
    });
});

app.post('/api/lote', function(req, res) {
    Lote.create({
        residencial: req.body.residencial,
        isPropietario: req.body.isPropietario,
        direccion: req.body.direccion,
        descripcion: req.body.descripcion,
        planoCatastro: req.body.planoCatastro,
        area: req.body.area,
        preciom2: req.body.preciom2,
        cuotaMant: req.body.cuotaMant,
        precioTotal: req.body.precioTotal,
        observaciones: req.body.observaciones
    }, function(err, lote){
        if(err) {
            res.send(err);
        }

        Lote.find(function(err, lotes) {
            if(err){
                res.send(err);
            }
            res.json(lotes);
        });
    });
});
/*****************************************************************
 * Lote API
 ****************************************************************/

/**************************
 * CODE TEST
 *************************/
var Todo = mongoose.model('Todo', {
    text: String
});

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

/**************************
 * CODE TEST
 *************************/


// Escucha en el puerto 8080 y corre el server
//app.listen(8080, function() {
//    console.log('App listening on port 8080');
//});

app.listen(process.env.PORT || 3000);