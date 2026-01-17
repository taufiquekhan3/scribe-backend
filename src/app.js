
// defines the behaviour of the app

import express from "express";
import UserRouter from "./modules/user/user.routes.js";

const app = express();

// middleware
app.use(express.json());

app.use("/api/users", UserRouter);


app.get('/health', (req, res) => {
    res.send('Hello World!')
})

export default app;
