import {
	ContactController,
	HealthController,
	HomeController,
	PartnersController,
	StaffController,
	TransparencyController,
	DonationsController,
	GalleryController,
} from "./controllers";

import { useExpressServer } from "routing-controllers";
import express from "express";
import multer from "multer";

import "reflect-metadata";
import "dotenv/config";
multer();

const app = express();
app.set("view engine", "pug");
app.set("views", "./src/views");
app.use("/public", express.static("public"));

export default useExpressServer(app, {
	controllers: [
		HealthController,
		HomeController,
		PartnersController,
		StaffController,
		DonationsController,
		ContactController,
		TransparencyController,
		GalleryController,
	],
	validation: true,
	classTransformer: true,
	defaultErrorHandler: false,
});
