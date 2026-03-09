import User from "./auth.model";
import { hashPassword, comparePassword} from "../../utils/password";
import { generateToken } from "../../utils/jwt";


export const signupService = async (data:any) => {
    const existingUser = await User.findOne({email: data.email });
    if(existingUser) throw new Error("User already exists");


    const hashedPassword = await hashPassword(data.password);
    const user = await User.create ({
        ...data,
        password: hashedPassword,
    });
    const token = generateToken(user._id.toString(), user.role.toString());
    return {user, token};
};


export const loginService = async (email: string, password: string) =>{
    const user = await User.findOne({email}). select("+password");
    if(!user) throw new Error("Invalid credentials");

    const isMatch = await comparePassword(password, user.password);
    if(!isMatch) throw new Error("Invalid credentials");

    const token = generateToken(user._id.toString(), user.role);
    return {user, token};
};