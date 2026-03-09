import { Attendance } from "./attendance.model";
import mongoose from "mongoose";


export const checkIn = async (employeeId: string) => {
    const today = new Date();
    today.setHours(0,0,0,0,);

    const existing = await Attendance.findOne({
        employee: employeeId,
        date: today
    });
    if (existing) {
        throw new Error("Already checked in today");
    }
    const attendance = await Attendance.create({
        employee: employeeId,
        date: today,
        checkIn: new Date(),
    });
    return attendance;
}


export const checkOut = async (employeeId: string) =>{
    const today = new Date();
    today.setHours(0,0,0,0);

    const attendance = await Attendance.findOne({
        employee: employeeId,
        date: today,
    });

    if(!attendance) {
        throw new Error("check -in first");
    }
    if(attendance.checkOut) {
        throw new Error("Already checked out");
    };
    attendance.checkOut = new Date();
    await attendance.save();
    return attendance;
};


export const  getAllAttendance = async () => {
    return await Attendance.find()
    .populate("employee")
    .sort({ date: -1});

};