import express from "express";
import createUserService from "./user.service.js";

const createUser = async (req, res) => {
    //1] check whether the incoming body name email and data are existing or not 
    //2] check whether the email and all follows the validation 
    //3] normalize the user , email.
    //4] after all this check the uniqueness of username
    //5] one unique true in db create a user and send back the response 

    try {

        const { name, username, email } = req.body;

        console.log(name);


        if (!name || !username || !email) {  //1
            return res.status(401).json({ messages: " All fields are required" });
        }


        const user = await createUserService({ name, username, email });

        console.log(user);


        return res.status(201).json({
            id: user._id,
            name: user.name,
            username: user.username,
            createdAt: user.createdAt,
        });


    } catch (error) {
        if (error.message == "USERNAME_TAKEN") {
            res.status(409).json({ messages: "USERNAME ALREADY TAKEN" })
        }


        console.log(error);
        return res.status(409).json({ messages: "internal server error in user controller" });


    }



}


export default createUser;