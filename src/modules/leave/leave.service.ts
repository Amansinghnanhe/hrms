import { Leave } from "./leave.model";

export const applyLeave = async (
    employeeId: string,
    payload: {
        fromDate: Date;
        toDate: Date;
        reason: string;
    }
) =>{
    if (new Date(payload.fromDate)> new Date(payload.toDate)) {
        throw new Error("From date cannot be after To date");
    }
    const leave = await Leave.create({
        employee: employeeId,
        ...payload,
    });
    return leave;
};
export const getMyLeaves = async (employeeId: string) => {
    return await Leave.find({ employee: employeeId })
        .sort({ createdAt: -1 });
};
export const getAllLeaves = async () => {
    return await Leave.find()
    .populate("employee")
    .sort({ createdAt: -1});
};
export const updateLeaveStatus = async (
    leaveId: string,
    status: "APPROVED" | "REJECTED"
) => {
    const leave = await Leave.findByIdAndUpdate(
         leaveId,
    { status },
    {new: true}

    );
    if (!leave) {
        throw new Error("Leave not found");
    }
    return leave;
   
}