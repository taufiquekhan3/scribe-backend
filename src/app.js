
// defines the behaviour of the app

import express from "express";

const app = express();

// middleware
app.use(express.json());


app.get('/health', (req, res) => {
    res.send('Hello World!')
})

export default app;
