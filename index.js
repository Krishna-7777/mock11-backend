const express= require("express")
const cors=require("cors")
const { noticeRoutes } = require("./routes/notice.routes")
const { connect } = require("./config/db")

const app=express()

app.use(cors('*'))
app.use(express.json())

app.get('/',(ask,give)=>{
    give.send("Notice - Backend")
})

app.use('/notice',noticeRoutes)

app.listen(4000,()=>{
    try {
        connect
        console.log("Conneted to the DB and Server is running at 4000...");
    } catch (error) {
        console.log(error)
    }
})