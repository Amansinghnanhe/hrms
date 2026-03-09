import mongoose, { Schema, Document} from "mongoose";
import { required } from "zod/mini";

export interface IAttendance extends Document {

    employee: mongoose.Types.ObjectId;
    date: Date;
    checkIn?: Date;
    checkOut?: Date;
    status: "PRESENT" | "ABSENT";
    createdAt: Date;
    updatedAt: Date;

}
const attendanceSchema = new  Schema<IAttendance>(
{
    employee:{
        type: Schema.Types.ObjectId,
        ref: "Employee",
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },

    checkIn: {
        type: Date,
    },
    checkOut: {
        type: Date,
    },
    status: {
        type: String,
        enum: ["PRESENT", "ABSENT"],
        default: "PRESENT",
    },

},

{timestamps: true}

);
attendanceSchema.index({ employee:1, date: 1}, {unique: true});
export const Attendance = mongoose.model<IAttendance>(
    "Attendance",
    attendanceSchema
)
