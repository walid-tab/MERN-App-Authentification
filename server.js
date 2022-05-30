const express = require('express')
const connectDB = require('./config/connectDB');
const userRouter = require('./routes/userRouter');
const app = express()
const port = process.env.PORT ||5000

//db connection
connectDB();
//middleware
app.use(express.json())
app.use('/api',userRouter)


app.listen(port,
    console.log(`server is up and running on http://localhost:${port}`)) 