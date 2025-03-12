const connectToMongo = require('./db');
const express = require('express')
const cors = require('cors'); // Import CORS

connectToMongo();
const app =express()
const port = 3001

app.use(express.json())  //it is a middleware, require to deal with mongodb beacause it Handling incoming data in JSON format from API clients.
// Enable CORS
app.use(cors()); // Allow all origins by default

//available routes
app.use('/api/card', require('./routes/card'))
app.use('/api/product', require('./routes/product'))

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})