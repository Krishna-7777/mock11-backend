const mongoose = require("mongoose")

const schema=mongoose.Schema({
    name:String,
    title:String,
    text:String,
    date:{type:Date,default:Date.now()}
})

const NoticeModel=mongoose.model('notice',schema);

module.exports={
    NoticeModel
}