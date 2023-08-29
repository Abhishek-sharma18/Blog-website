import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
//components
import Connection from './database/db.js';
import Router from './routes/route.js';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);


const PORT = 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
mongoose.set('strictQuery',true)
mongoose.connect('mongodb://user:codeforinterview@ac-exhz8vm-shard-00-00.wqaqcnn.mongodb.net:27017,ac-exhz8vm-shard-00-01.wqaqcnn.mongodb.net:27017,ac-exhz8vm-shard-00-02.wqaqcnn.mongodb.net:27017/?ssl=true&replicaSet=atlas-1saj9a-shard-0&authSource=admin&retryWrites=true&w=majority')
Connection(username, password);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));