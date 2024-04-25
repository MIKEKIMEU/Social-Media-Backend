import user from '../models/user.js';
import bcrypt from 'bcryptjs';

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

    let existingUser; // Corrected variable name
    try{
        existingUser = await user.findOne({email}); //filter by email
    } catch(err){
        console.error(err); // Use console.error for errors
        return res.status(500).json({ message: "Internal server error" });
    }
    if(existingUser){
        return res.status(400).json({message: "User already exists! Login instead"});
    }
    const hashedPassword = bcrypt.hashSync(password); // Hash the password

    const newUser = new user({ // Use a different variable name to avoid confusion
        name,
        email,
        password: hashedPassword,
    });

    try{
       await newUser.save(); // Save the new user
       return res.status(201).json({ newUser }); // Return the newly created user
    }
    catch(err){
        console.error(err); // Use console.error for errors
        return res.status(500).json({ message: "Internal server error" });
    }
}
