const mongoose =require('mongoose'); // add mongoose

const dbconn="mongodb+srv://demoUser:9augustbd@cluster0.rwjuz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

 mongoose.connect(dbconn, { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true})
.then(()=> {
    console.log("Connected")
})
.catch((err)=>console.log(err))



 