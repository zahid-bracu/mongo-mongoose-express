const {customerInfo}=require('./schema');

// read data
const readDocument = async ()=>{
    try{
        const data= await customerInfo.find({}).countDocuments()
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

//
readDocument();