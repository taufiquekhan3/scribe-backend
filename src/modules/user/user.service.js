import User from "./user.model.js";


const createUserService = async ({ name, username, email }) => {
    try {

        //normalize
        const normalizedUser = username.tolowerCase().trim(); //2

        //uniqueness check
        const existingUser = await User.findOne({ //4
            username: normalizedUser,
        })

        if (existingUser) {
            throw new Error("USERNAME_TAKEN");
        }


        const user = await User.create(   //5
            {
                name: name.trim(),
                username: normalizedUser.trim(),
                email: email.toLowerCase(),
            }
        )

        console.log(user);


        return user;
    } catch (error) {

    }
}


export default createUserService;