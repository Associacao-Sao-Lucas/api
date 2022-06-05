import { StaffController } from "./controllers";

import { useExpressServer } from "routing-controllers";
import express from "express";
import multer from "multer";
import "reflect-metadata";

multer();

const app = express();
app.set("view engine", "pug");
app.set("views", "./src/admin/views");
app.use("/public", express.static("public"));

export default useExpressServer(app, {
	controllers: [StaffController],
	routePrefix: "/admin",
});
