const express = require('express')
const app = express();
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const BarChartData = require('./models/barChartSchema')
const SmallCarddata = require('./models/smallCardSchema')
dotenv.config();

const port = process.env.port || 4000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DATABASE_ACCESS,console.log("database connected"))

app.get('/',(req,res)=>{
    res.send("hi i am here")
})

app.get('/chartdata',async (req,res)=>{
    const data = await BarChartData.find();
    res.status(200).json(data)
})
app.get('/carddata',async(req,res)=>{
    const data = await SmallCarddata.find();
    res.status(200).json(data)
})
app.post('/postdata' ,async(req,res)=>{
    const {month ,Spinning,Transportation,Carding,HeatingandCooling} = req.body
    console.log(month)
    const dataentry = await BarChartData.create({
        month,Spinning,Transportation,Carding,HeatingandCooling
    })
    console.log(dataentry)
    res.json({status:200})
})
app.post('/cardpostdata' ,async(req,res)=>{
    const {emission ,amount,badge,highlighted,badgeHighlighted} = req.body
    const dataentry = await SmallCarddata.create({
        emission ,amount,badge,highlighted,badgeHighlighted
    })
    console.log(dataentry)
    res.json({status:200})
})

app.listen(port,()=>{console.log("server started at port "+ port)})

