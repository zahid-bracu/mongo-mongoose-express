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


// model & collection setup (customer info is collection)
const customerInfo=new mongoose.model('customerInfo',customerInfoSchema);



// sending multiple data
 const deleteOneData = async(_id)=>{
     try{
         var result= await customerInfo.findByIdAndDelete({_id});
         console.log(result);
     }catch(err){
         console.log(err)
     }
 }

 deleteOneData("603bc5adfcdda70ac41016db");