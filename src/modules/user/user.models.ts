import { Schema, model, Document, Model } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: "ADMIN" | "HR" | "EMPLOYEE";
    status?: "ACTIVE" | "BLOCKED";
}

const UserSchema = new Schema<IUser>(
    {
        name: { 
            type: String,
             required: true,
              unique: true ,
            },

        email: { 
            type: String, 
            required: true,
             unique: true
             },

        password: { 
            type: String,
             required: true
             },

        role: { 
            type: String, 
            enum: ["ADMIN", "HR", "EMPLOYEE"],
             default: "EMPLOYEE"
             },
             
        status: { 
            type: String,
             enum: ["ACTIVE", "BLOCKED"], 
             default: "ACTIVE" 
            },
    },
    { timestamps: true }
);


const UserModel: Model<IUser> = (model<IUser>("User") as Model<IUser>) || model<IUser>("User", UserSchema);

export default UserModel;
