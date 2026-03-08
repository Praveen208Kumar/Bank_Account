const mongoose = require('mongoose')




const transactionSchema = new mongoose.Schema ({
  fromAccount:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Account",
    required:[true,"Transaction must be associated with a from Account"],
    index:true
  },
  toAccount:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Account",
    required:[true,"Transaction must be associated with a To Account"],
    index:true
  },
 status: {
  type: String,
  enum: {
    values: ["PENDING", "COMPLETED", "FAILED", "REVERSED"],  // ← Uppercase to match controller
  },
  default: "PENDING"  // ← Changed from "Pending" to "PENDING"
},
  amount:{
    type:Number,
    required:[true,"Amount is required for creating a transection"],
    min:[0,"Transaction amount cannot be negative" ],
  },
  idempotencyKey:{
    type:String,
    required:[true,"Idempotency key is required for creating a transection"],
    index:true,
    unique:true,
  }
},{
  timestamps:true

})


// use a proper model name (singular, capitalized) to avoid confusion and match references
const transactionModel = mongoose.model("Transaction", transactionSchema)

module.exports = transactionModel
