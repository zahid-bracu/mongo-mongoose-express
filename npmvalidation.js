const mongoose =require('mongoose'); // add mongoose
var validator = require('validator'); //import validator

// connecting / creating to databases (customer is database)
mongoose.connect("mongodb://localhost:27017/customer", { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true})
.then(()=> {
    console.log("Connected")
})
.catch((err)=>console.log(err))


// scehma setting
const customerInfoSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true, //required the field
        unique:true,
        lowercase:true,
        trim:true,
        minlength:[2,"Minimun name length is 2"],
        maxlength:16
    },
    ctype:{
        type:String,
        required:true,
        enum:['regular','flying','walking']
    },
    mail:{
        type:String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    key:{
        type:Number,
        validate(value){
            if(value<0){
                throw new Error("Invalid Negative Input");
            }
        }
    },
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
            name:"Thor",
            ctype:"regular",
            mail:"Spooky@gmail.com",
            key:321,
            active:false
        })
        
        // saving the push data to collection
        const result= await musakaInfo.save();
        console.log("Data Saved")
    }catch(err){
        console.log(err);
    }
}


createData()