const mongoose = require("mongoose")

const schema=mongoose.Schema({
    text:String
})

const NoticeModel=mongoose.model('notice',schema);

module.exports={
    NoticeModel
}