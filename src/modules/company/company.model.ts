import mongoose, {Schema, Document} from "mongoose";

export interface ICompany extends Document {
    name: string;
    email: string;
    phone: string;
    address: string;
    website?: string;
    status: "ACTIVE" | "INACTIVE";
    createdAt: Date;
    updatedAt: Date;
}

const companySchema = new Schema<ICompany>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
        },

        phone: {
            type: String,
            required: true,
        },

        address: {
            type: String,
            required: true,
        },

        website: {
            type: String,
        },

        status: {
            type: String,
            enum: ["ACTIVE", "INACTIVE"],
            default: "ACTIVE",

        },

    },
    { timestamps: true }

)
export const Company = mongoose.model<ICompany>("Company", companySchema);