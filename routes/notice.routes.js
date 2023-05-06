const express= require("express")
const { NoticeModel } = require("../models/notice.model")

const noticeRoutes= express.Router()

noticeRoutes.post('/',async(ask,give)=>{
    try {
        let notice = new NoticeModel(ask.body)
        await notice.save()
        give.send({msg:"Notice Created"})
    } catch (error) {
        console.log(error);
        give.send({msg:"Error in Notice Creation"})
    }
})

noticeRoutes.get('/',async(ask,give)=>{
    try {
        let notice = await NoticeModel.find()
        give.send(notice)
    } catch (error) {
        console.log(error);
        give.send({msg:"Error in fetching Notices"})
    }
})

noticeRoutes.delete('/:id',async(ask,give)=>{
    try {
        await NoticeModel.findByIdAndRemove(ask.params.id)
        give.send({msg:"Notice Deleted!"})
    } catch (error) {
        give.send({msg:"Error in Notice Deletion!"})
    }
})

noticeRoutes.patch('/:id',async(ask,give)=>{
    try {
        await NoticeModel.findByIdAndUpdate(ask.params.id,ask.body)
        give.send({msg:"Notice Updated!"})
    } catch (error) {
        give.send({msg:"Error in Notice Updation!"})
    }
})

module.exports={
    noticeRoutes
}