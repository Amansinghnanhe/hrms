import EmployeeModel, {IEmployee} from "./employee.model";

export const createEmployee = async (data: Partial<IEmployee>) => {
    const existingEmployee = await EmployeeModel.findOne({
        $or: [
            {userId: data.userId},
            {employeeCode: data.employeeCode}
        ]
    });

    if(existingEmployee) {
        throw new Error("Employee already exists");
    }
    return EmployeeModel.create(data);

};

export const getAllEmployees = async () => {
    return EmployeeModel.find()
    .populate("userId", "name email role")
    .sort({createAt: -1});
};

export const getEmployeeById = async (id: any) => {
    console.log("sssssssss",id)
    const employee = await EmployeeModel.findById(id)
    .populate("userId", "name email role");

    if(!employee) throw new Error("Employee not found");
    return employee;
};

export const getEmployeeByUserId = async(userId: string) => {
    const employee = await EmployeeModel.findOne({userId})
    .populate ("userId", "name email role");

    if(!employee) throw new Error("Employee not found");
    return employee;
};

export const updateEmployeeStatus = async (
    id: string,
    status: "ACTIVE" | "INACTIVE"
) => {
    const employee = await EmployeeModel.findByIdAndUpdate(
        id,
        { status },
        {new: true}
    );

    if (!employee) throw new Error("Employee not found");
    return employee;
}