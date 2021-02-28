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
const createData = async ()=>{
    try{
        // data one : creating data object
        const musakaInfo=new customerInfo({
            name:"Musaka",
            ctype:"Regular",
            key:420,
            active:true
        })

        // data two : creating data object
        const somalaInfo=new customerInfo({
            name:"Somala",
            ctype:"Floating",
            key:423,
            active:false
        })

        const picassaInfo=new customerInfo({
            name:"Picassa",
            ctype:"Flying",
            key:512,
            active:false
        })

        const yasakaInfo=new customerInfo({
            name:"Yasaka",
            ctype:"Ongoing",
            key:430,
            active:false
        })
        
        // saving the push data to collection
        const result= await customerInfo.insertMany([somalaInfo,musakaInfo,picassaInfo,yasakaInfo]);
        console.log(result)
    }catch(err){
        console.log(err);
    }
}
createData()

// read data
const readDocument = async ()=>{
    try{
        const data= await customerInfo.find({})
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

readDocument();