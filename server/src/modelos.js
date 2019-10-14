const mongoose = require('mongoose');

const URL_MONGO = "mongodb+srv://qbit1:mtamta910@cluster0-l5x8w.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(URL_MONGO,{ useNewUrlParser: true },(error)=>{
    !error
    ? console.log('Conexión exitosa a MongoDB')
    : console.log(error)
})

const Schema = mongoose.Schema;

const CuentaSchema = new Schema({
    nombre:String,
    balance:Number,
    depositos:[
            {   

                type:mongoose.Schema.Types.ObjectId,
                ref: 'Deposito'
            
            }
        
    ]
  
  
  
    
},{timestamps:true})






const Cuenta = mongoose.model('Cuenta',CuentaSchema);

module.exports = {
    Cuenta,
} 