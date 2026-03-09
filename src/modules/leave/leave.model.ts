import mongoose, { Schema, Document} from "mongoose";


export interface ILeave  extends Document {

    employee: mongoose.Types.ObjectId;
    fromDate: Date;
    toDate: Date;
    reason: string;
    status: "PENDING" | "APPROVED" | "REJECTED";
    createdAt: Date;
    updatedAt: Date;
}
const leaveSchema = new Schema<ILeave>(
    {
        employee: {
            type: Schema.Types.ObjectId,
            ref: "Employee",
            required: true,
        },

        fromDate: {
            type: Date,
            required: true,
        },

        toDate: {
            type: Date,
            required: true,
        },

        reason: {
            type: String,
            required: true,
            trim: true,
        },

        status: {
            type: String,
            enum: ["PENDING", "APPROVED", "REJECTED"],
            default: "PENDING",
        },

    },

    {timestamps: true}
);
export const Leave = mongoose.model<ILeave>("Leave", leaveSchema);