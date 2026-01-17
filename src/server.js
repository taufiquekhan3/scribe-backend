// defines the execution of the app

import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

dotenv.config();


const PORT = process.env.PORT || 3000;


const callserver = async () => {

    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Example app listening on port ${PORT}`)
        })
    }
    catch (error) {
        console.error("Server failed to start", error);
        process.exit(1);
    }
}


callserver();
