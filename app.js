const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();
const APIROUTER = require('./routers/api_router')

const PORT  = process.env.PORT  || 5000


main().catch(err => {console.log(err)})
async function main() {
    await mongoose.connect(process.env.DB_STRING);
    console.log("DB CONNECTED ..")
}




const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use('/', APIROUTER);

app.listen(PORT, () => console.log("SERVER ON ..."))