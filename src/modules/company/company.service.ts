import {Company, ICompany} from "./company.model";


export const createCompany = async (payload: Partial<ICompany>) => {
    const existing = await Company.findOne({email: payload.email});
    if (existing) {
        throw new Error("Company with this email already exists");
    }
    const company = await Company.create(payload);
    return company;
};

export const getAllCompanies = async () => {
    return await Company.find();
};

export const getCompanyById = async (id: string) => {
    const company = await Company.findById(id);
    if (!company) {
        throw new Error("Company not found");

    }
    return company;
}
export const updateCompany = async (id: string,payload: Partial<ICompany>) => {
    const company = await Company.findByIdAndUpdate(id, payload,{
        new: true, // updated data 
    });
    if (!company ){
        throw new Error ("Company not found");
    }
    return company;
};