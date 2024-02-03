const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    name:{type:String, required:true},
    x_coordinate: {type:Number, required:true},
    y_coordinate: {type:Number, required:true},
})


module.exports = mongoose.model("Character", CharacterSchema); 