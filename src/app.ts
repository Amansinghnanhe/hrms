import express from "express";
import routes from "./routes";
import userRoutes from "./modules/user/user.routes";
import employeeRoutes from "./modules/employee/employee.routes";
import { errorMiddleware } from "./middlewares/error.middleware";


const app = express();
app.use(express.json());
app.use("/api", routes);
app.use("/users", userRoutes);
app.use("/employee", employeeRoutes);

app.use(errorMiddleware);

export default app;