const {mongoose}=require('./conn');

// scehma setting
const customerInfoSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true //required the field
    },
    ctype:String,
    key:Number,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now //default value set
    }

})

const customerInfo=new mongoose.model('customerInfo',customerInfoSchema);

module.exports={customerInfo};