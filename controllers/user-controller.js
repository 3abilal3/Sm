import User from "../models/User";
import bcrypt from 'bcryptjs'

export const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find()

    } catch (error) {
        return console.log(error)
    }
    if (!users) {
        res.status(404).json({ message: "no user found" })
    }
    return res.status(200).json({ users })
}

export const signup = async (req, res, next) => {
    const { name, email, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email })

    } catch (error) {
        return console.log(error)
    }
    if (existingUser) {
        res.status(400).json({ message: "email already exists" })
    }
    const hashedPassword = bcrypt.hashSync(password);
    const user = new User({
        name,
        email,
        password: hashedPassword,
        blogs:[]
    });

    try {
        await user.save();

    } catch (error) {
        return console.log(error)
    }
    return res.status(200).json({ user })
}

export const login = async (req, res, next) => {
    const {  email, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email })

    } catch (error) {
        return console.log(error)
    }
    if (!existingUser) {
        res.status(404).json({ message: "could'nt find the user of this email" })
    }

    const isComparePwd=bcrypt.compareSync(password,existingUser.password);
    if (!isComparePwd) {
        res.status(400).json({ message: "Password is incorrect" })
    }
    return res.status(200).json({ message: "Login successfully" })
}