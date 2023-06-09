import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Data } from './data.js';

const app = express();
dotenv.config()

app.use(cors({
    origin: ['*', 'http://localhost:3000'],
    credentials: true,
    maxAge: 7200,
    methods: "GET,POST"
}));
app.use(express.json());

app.get("/health", async (_, res) => {
    console.log('healthy')
    res.send();
})

const dataStore: Data[] = [];

app.get("/harvest", async (_, res) => {
    // Azure collection endpoint
    console.log('harvest');
    const jsonData = JSON.stringify(dataStore);
    res.send(jsonData);
})
app.use(express.json())

app.post("/reception", async (req, res) => {
    // Arduino endpoint
    console.log(req);
    console.log(req.body)
    dataStore.push(new Data(req.body, new Date()))
    res.send()
})

app.listen(process.env.PORT, () => {console.log(`Listening on port: ${process.env.PORT}`)})