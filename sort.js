const mongoose =require('mongoose'); // add mongoose


// connecting / creating to databases (customer is database)
mongoose.connect("mongodb://localhost:27017/customer", { useNewUrlParser: true, useUnifiedTopology: true,})
.then(()=> {
    console.log("Connected")
})
.catch((err)=>console.log(err))


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


// // model & collection setup (customer info is collection)
const customerInfo=new mongoose.model('customerInfo',customerInfoSchema);


// read data
const readDocument = async ()=>{
    try{
        const data= await customerInfo.find({}).select({name:1}).sort({name : -1})
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

readDocument();