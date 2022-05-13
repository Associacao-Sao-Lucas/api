import { ContactController, HealthController, HomeController, PartnersController, StaffController, TransparencyController, DonationsController, GalleryController, ActivitiesController } from "./controllers";

import { useExpressServer } from "routing-controllers";
import express from "express";


const app = express()
app.set('view engine', 'pug')
app.set('views', './src/api/views')
app.use('/public', express.static('public'))

export default useExpressServer(app, {
	controllers: [
		HealthController,
		HomeController,
		PartnersController,
		StaffController,
		ContactController,
		TransparencyController,
		DonationsController,
		GalleryController,
		ActivitiesController
	],
	validation: true,
	classTransformer: true,
	defaultErrorHandler: false,
});