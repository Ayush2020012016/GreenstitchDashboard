const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    emission: {type: String,required:true},
    amount:{type:String,required:true},
    badge:{type:String,required:true},
    highlighted:{type:Boolean,required:true},
    badgeHighlighted:{type:Boolean,required:true},
});

const SmallCarddata = mongoose.model('smallCarddata', cardSchema);

module.exports = SmallCarddata;
