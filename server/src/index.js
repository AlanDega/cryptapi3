const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')


const { Cuenta} = require('./modelos');

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

// app.post('/add/movimiento/:idCuenta',(req,res) => {
//     const {idCuenta} = req.params;
//     Cuenta.findByIdAndUpdate(idCuenta,{$push: {movimientos:[req.body]}},{new:true}).exec()
//         .then(pelicula => res.status(201).send(pelicula))
//         .catch(err => res.status(409).send(err))
// });


// app.get('/',(req,res)=>{
//     res.send({message:'API funcionando'})
// })
// //usuario
// app.post('/create/usuario',(req,res)=>{
//     const {nombre, email, contraseña} = req.body;

//     const newUsuario = Usuario({
//         nombre,
//         email,
//         contraseña
      
//     })

//     newUsuario.save((error,model)=>{
//         !error
//         ? res.status(201).send({message:'Documento creado en la DB',documento:model})
//         : res.status(400).send({message:'No se pudo guardar en la BD', error:error})
//     })
// })
// //Cuenta
// app.post('/create/cuenta',(req,res)=>{
//     const {nombre, balance} = req.body;

//     const newCuenta = Cuenta({
//         nombre,
//         balance,
//         movimientos
      
//     })

//     newCuenta.save((error,model)=>{
//         !error
//         ? res.status(201).send({message:'Documento creado en la DB',documento:model})
//         : res.status(400).send({message:'No se pudo guardar en la BD', error:error})
//     })
// })



// app.get('/cuenta/balance',(req,res)=>{
//     Cuenta.find().exec()
//     .then(balance => res.send(balance))
//     .catch(err => res.status(409).send(err));
// })

// app.get('/all/balance',(req,res)=>{
//     Cuenta.find().exec()
//     .then(balance => res.send(balance))
//     .catch(err => res.status(409).send(err));
// });

// app.get('/cuenta/:id',(req,res)=> {
//     const {id} = req.params;
//     Cuenta.findById(id).exec()
//         .then(cuenta => cuenta? res.send(cuenta) : res.status(404).send({message:'Pelicula not found'}))
//         .catch(err => res.status(409).send(err))
// });

// app.put('/cuenta/:id',(req,res) => {
//     const {id} = req.params;
//     Cuenta.findByIdAndUpdate(id,{$set:req.body},{new:true}).exec()
//         .then(cuenta => res.send(cuenta))
//         .catch(err => res.status(409).send(err))
// });

// app.patch('/add/balance/:cuentaid',(req,res)=>{
//     const {cuentaid} = req.params;
//     Cuenta.findByIdAndUpdate(cuentaid,{$push:{balance:[req.body.id]}},{new:true}).exec()
//     .then(cuenta => res.status(200).send({message:'Se ha añadido un nuevo balance',cuenta:cuenta}))
//     .catch(err => res.status(409).send({message:'No se ha podido añadir el balance',error:error}));
// })
// app.patch('/add/movimiento/5da4b70d5c278e0f63d2c62d',(req,res)=>{
//     const {cuentaid} = req.params;
//     Cuenta.findByIdAndUpdate(cuentaid,{$push:{movimientos:[req.body.id]}},{new:true}).exec()
//     .then(cuenta => res.status(200).send({message:'Se ha añadido un nuevo movimiento',cuenta:cuenta}))
//     .catch(err => res.status(409).send({message:'No se ha podido añadir el mov',error:error}));
// })

// //Director
// app.post('/create/movimiento',(req,res) => {
//     const {
//         tipo,
//     } = req.body

//     const newMovimiento = Movimiento({
//         tipo,
        
//     });

//     newMovimiento.save((err,movimiento)=>{
//         err
//         ? res.status(400).send(err)
//         : res.status(201).send({message:'Has publicado una nuevo movimiento',movimiento:movimiento})
//     })
// });


app.get('/',(req,res)=>{
    res.send({message:'Server on C:'})
});

//Create Cuenta
app.post('/create/cuenta',(req,res) => {
   const {nombre,email,imagen,saldoTotal,saldoMXN,saldoBTC,saldoETH,saldoXRP} = req.body; 
   const newCuenta = Cuenta({
     nombre,
     email,
     imagen,
     saldoTotal,
     saldoMXN,
     saldoBTC,
     saldoETH,
     saldoXRP,
   });
   newCuenta.save((err,cuenta)=>{
       err 
       ? res.status(409).send(err) 
       : res.status(201).send(cuenta)
   });
});

app.get('/all/cuentas',(req,res) => {
    Cuenta.find().exec()
        .then(cuentas => res.send(cuentas))
        .catch(err => res.status(409).send(err))
});

app.get('/cuenta/:id',(req,res)=> {
    const {id} = req.params;
    Cuenta.findById(id).exec()
        .then(cuenta => cuenta ? res.send(cuenta) : res.status(404).send({message:'Cuenta not found'}))
        .catch(err => res.status(409).send(err))
});

app.put('/cuenta/:id',(req,res) => {
    const {id} = req.params;
    Cuenta.findByIdAndUpdate(id,{$set:req.body},{new:true}).exec()
        .then(cuenta => res.send(cuenta))
        .catch(err => res.status(409).send(err))
});

app.patch('/cuenta/:id',(req,res) => {
    const {id} = req.params;
    Cuenta.findByIdAndUpdate(id,{$set:req.body},{new:true}).exec()
        .then(cuenta => res.send(cuenta))
        .catch(err => res.status(409).send(err))
});


app.post('/add/movimiento/:idCuenta',(req,res) => {
    const {idCuenta} = req.params;
    Cuenta.findByIdAndUpdate(idCuenta,{$push: {movimientos:[req.body]}},{new:true}).exec()
        .then(cuenta => res.status(201).send(cuenta))
        .catch(err => res.status(409).send(err))
});

app.post('/add/moneda/:idCuenta',(req,res) => {
    const {idCuenta} = req.params;
    Cuenta.findByIdAndUpdate(idCuenta,{$push: {wallet:[req.body]}},{new:true}).exec()
        .then(cuenta => res.status(201).send(cuenta))
        .catch(err => res.status(409).send(err))
});

app.listen(PORT,() => {
    console.log(`Server on port ${PORT}`);
});
