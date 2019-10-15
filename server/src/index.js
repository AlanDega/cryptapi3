const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')


const { Cuenta } = require('./modelos');

const app = express();

/* 
5d9fd25d239485333f62158a
5d9fd2d577f77a350a49c5e6
5d9fd31e7a4457356efb018d
*/

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


const PORT = process.env.PORT || 4000;


app.get('/',(req,res)=>{
    res.send({message:'API funcionando'})
})

//Cuenta
app.post('/create/cuenta',(req,res)=>{
    const {nombre, balance} = req.body;

    const newCuenta = Cuenta({
        nombre,
        balance,
      
    })

    newCuenta.save((error,model)=>{
        !error
        ? res.status(201).send({message:'Documento creado en la DB',documento:model})
        : res.status(400).send({message:'No se pudo guardar en la BD', error:error})
    })
})



app.get('/cuenta/balance',(req,res)=>{
    Cuenta.find().exec()
    .then(balance => res.send(balance))
    .catch(err => res.status(409).send(err));
})

app.get('/all/balance',(req,res)=>{
    Cuenta.find().exec()
    .then(balance => res.send(balance))
    .catch(err => res.status(409).send(err));
});

app.get('/cuenta/:id',(req,res)=> {
    const {id} = req.params;
    Cuenta.findById(id).exec()
        .then(cuenta => cuenta? res.send(cuenta) : res.status(404).send({message:'Pelicula not found'}))
        .catch(err => res.status(409).send(err))
});

app.put('/cuenta/:id',(req,res) => {
    const {id} = req.params;
    Cuenta.findByIdAndUpdate(id,{$set:req.body},{new:true}).exec()
        .then(cuenta => res.send(cuenta))
        .catch(err => res.status(409).send(err))
});

app.patch('/add/balance/:cuentaid',(req,res)=>{
    const {cuentaid} = req.params;
    Cuenta.findByIdAndUpdate(cuentaid,{$push:{balance:[req.body.id]}},{new:true}).exec()
    .then(cuenta => res.status(200).send({message:'Se ha añadido un nuevo balance',cuenta:cuenta}))
    .catch(err => res.status(409).send({message:'No se ha podido añadir el balance',error:error}));
})


//Director


app.listen(PORT,()=>{
    console.log(`Servidor inicializado en el puerto: ${PORT}`);
})