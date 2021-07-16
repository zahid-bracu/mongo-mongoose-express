const mongoose =require('mongoose'); 
mongoose.connect("mongodb+srv://demoUser:9augustbd@cluster0.rwjuz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true})
.then(()=> {
    console.log("Connected")
})
.catch((err)=>console.log(err))
module.exports={mongoose};