import {Schema, model, Document, Types} from "mongoose";


export interface IEmployee extends Document {
    
    userId: Types.ObjectId;
    employeeCode : string;
    designation: string;
    department: string;
    salary: number;
    joiningDate: Date;
    status: "ACTIVE" | "ACTIVE";
}
const EmployeeSchema = new Schema<IEmployee>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true

        },

        employeeCode: {
            type: String,
            required: true,
            unique: true,
        },

        designation: {
            type:String,
            required: true,
        },

          department: {
            type:String,
            required: true,
        },

          salary: {
            type: Number,
            required: true,
        },

          joiningDate: {
            type: Date,
            required: true,
        },

        status: {
             type: String,
             enum: ["ACTIVE", "ACTIVE"],
             default:"ACTIVE"

        }
        
    },
     { timestamps: true }

);
export default model<IEmployee>("Employee",EmployeeSchema );