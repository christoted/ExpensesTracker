const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text:{
        type : String,
        required : [true, 'Please add Some Text'],
        trim : true
    },
    
    amount : {
        type : Number,
        required: [true, 'Please add some number [Positive|Negative]']
    },

    createdAt:{
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('Transaction',TransactionSchema); 