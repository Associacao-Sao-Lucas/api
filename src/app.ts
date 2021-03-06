import { useExpressServer } from "routing-controllers";
import express from "express";

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
	validation: false,
	classTransformer: false,
});
