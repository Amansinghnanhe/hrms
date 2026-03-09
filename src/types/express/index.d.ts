import { IUser } from "../../modules/user/user.model"; // aapke user model ke hisaab se

declare global {
  namespace Express {
    interface Request {
      user?: IUser & {id:string}; // optional, kyunki har request me user nahi hoga
    }
  }
}
export {};
