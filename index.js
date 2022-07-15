const express = require("express")
const config = require("config")



const PORT = config.get('PORT') || 5000 
const app = express()

app.use(express.json({extended:true}))
app.use('/api/main',require('./router/main.router'))


async function start(){
    try {
        app.listen(PORT, ()=>console.log("SERVER STARTED ON PORT ",PORT))
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()