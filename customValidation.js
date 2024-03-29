
/***  ***/
const mongoose =require('mongoose'); // add mongoose


// connecting / creating to databases (customer is database)
mongoose.connect("mongodb+srv://demoUser:9augustbd@cluster0.rwjuz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true})
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

// very nice
const createData = async ()=>{
    try{
        // pushing some data to collection
            const musakaInfo=new customerInfo({
            name:"Lukuta",
            ctype:"regular",
            key:149,
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