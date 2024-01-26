const mongoose=require('mongoose')

const groupSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    isPrivate:{
        type:Boolean,
        default:false
    },
    avatar:{
        publicId: String,
        url: String,
    },
    bio:{
        type:String
    }
    ,
    user:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }]
})
module.exports=mongoose.model('Group', groupSchema)
