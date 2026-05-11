import express from 'express'


const app = express()

app.get('/health',(req,res)=>{

    res.status(200).json({
        status:'Ok',
        timestamp: new Date().toISOString(),
        service:'Task Scheduling API'
    })

})


export default app