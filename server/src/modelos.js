const mongoose = require('mongoose');

const URL_MONGO = "mongodb+srv://qbit1:mtamta910@cluster0-l5x8w.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(URL_MONGO,{ useNewUrlParser: true },(error)=>{
    !error
    ? console.log('Conexión exitosa a MongoDB')
    : console.log(error)
})

const Schema = mongoose.Schema;

// const CuentaSchema = new Schema({
//     nombre:String,
//     balance:Number,
//     movimientos:[
//             {   
                
//                 type:mongoose.Schema.Types.ObjectId,
//                 ref: 'Movimiento'
            
//             }
        
//     ]
  
  
  
    
// },{timestamps:true})

// const MovimientoSchema = new Schema ({
//     tipo:String,
// },{timestamps:true})



// const UsuarioSchema = new Schema ({
//     nombre:String,
//     correo:String,
//     contraseña:String
// },{timestamps:true})



const CuentaSchema = new Schema({
    nombre:String,
    email:String,
    saldoTotal:String,
    BTC:String,
            ETH:String,
            XRP:String,
            MxnBtc:String,
            MxnEth:String,
            MxnXrp:String,
            MXN:String,
            BTCpercentage: String,
            ETHpercentage: String,
            XRPpercentage: String,
            MXNpercentage:String,
            

    wallet:{
        type:[{
            // BTC:String,
            // ETH:String,
            // XRP:String,
            // MxnBtc:String,
            // MxnEth:String,
            // MxnXrp:String,
            // MXN:String,
            // BTCpercentage: String,
            // ETHpercentage: String,
            // XRPpercentage: String,
        }]
    },

    movimientos:{
        type:[{
            tipo:String,
            cantidad:String,
           
            moneda:{
                type: String,
                enum:['BTC','ETH'],
                
            }
        }]
    },
},{timestamps:true});




// const Usuario = mongoose.model('Usuario',UsuarioSchema);
const Cuenta = mongoose.model('Cuenta',CuentaSchema);
// const Movimiento = mongoose.model('Movimiento',MovimientoSchema);

module.exports = {
    
    Cuenta,
} 