const mongoose = require('mongoose');

const URL_MONGO = "mongodb+srv://qbit1:mtamta910@cluster0-l5x8w.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(URL_MONGO,{ useNewUrlParser: true },(error) => {
    if(!error){
        console.log('Conexión existosa con mongoDB')
    }else{
        console.log(error)
    }
})

const Schema = mongoose.Schema;

const peliSchema = new Schema({
    title: String,
    year:String,
    classification: String,
    synopsis:{
        type:String
    },
    duration:{
        type:Number,
        default:90
    },
    genre:{
        type:String,
        enum:['HR','AC','CD','SF'],
        required:true
    },
    cover_img:[String],
    directores:{
        type:[{
            name:String,
            edad:{
                type:Number,
                default:18
            }
        }]
    }


},{timestamps:true});

const Pelicula = mongoose.model('Peliculas',peliSchema);

module.exports = {
    Pelicula
}