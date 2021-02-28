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


const createData = async ()=>{
    try{
        // pushing some data to collection
        const musakaInfo=new customerInfo({
            name:"Musaka",
            ctype:"Regular",
            key:420,
            active:true
        })
        
        // saving the push data to collection
        const result= await musakaInfo.save();
        console.log(result)
    }catch(err){
        console.log(err);
    }
}


createData()