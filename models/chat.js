const mongoose=require('mongoose')
const chatSchema=new mongoose.Schema({
    content:{
        type:String
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    groupId:{
        type:mongoose.Types.ObjectId,
        ref:'Group'
    }
})
module.exports=mongoose.model('Chat',chatSchema)