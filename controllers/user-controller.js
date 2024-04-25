import user from '../models/user.js';

export const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await user.find();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
    }
    if (!users || users.length === 0) {
        return res.status(404).json({ message: "No users found" });
    }
    return res.status(200).json({ users });
}

export const signup = async (req, res, next)=>{
    const {name,email,password} = req.body; //use postman as frontend

    letexistingUser;
    try{
        existingUser = await user.findOne({email}); //filter by email
    } catch(err){
        console.log(err);
    }
}