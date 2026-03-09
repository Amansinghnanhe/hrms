import UserModel,{IUser} from "./user.models";
import { hashPassword } from "../../utils/password";



export const createUser = async(data: Partial<IUser>) =>{
    const existingUser = await UserModel.findOne({emil: data.email});
    if(existingUser) throw new Error("Email already exists");


    const hashedPassword = await hashPassword(data.password!);
    const user = await UserModel.create({
        ...data, 
        password: hashedPassword
    });
    return user;
};


export const getAllUser = async () =>{
    return await UserModel.find().select("-password");
};

export const getUserById = async(id:string) =>{
    const user = await UserModel.findById(id). select("password");
    if(!user) throw new Error("User not found");
    return user;
};

export const updateUserStatus = async(id: string, status: "ACTIVE" | "BLOCKED") =>{
    const user = await UserModel.findByIdAndUpdate(
        id,
        {status},
        {new: true}
    ).select("-password");
    
    if(!user) throw new Error("User not found");
    return user;
}
