const mongoose =require("mongoose")
function connectToDB(){
  mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    console.log("mongo db is connected ")
  })
  .catch(err=>{
    console.log("error in mongo db connection:", err.message)
    process.exit(1)
  })
}
module.exports=connectToDB
