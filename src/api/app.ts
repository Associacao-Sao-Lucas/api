import { ContactController, HealthController, HomeController, PartnersController, StaffController, TransparencyController, DonationsController, GalleryController, ActivitiesController, AdminStaffController } from "./controllers";

import { useExpressServer } from "routing-controllers";
import express from "express";
import multer from "multer"
import 'reflect-metadata'

multer()

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
		ActivitiesController,
		AdminStaffController
	],
	validation: true,
	classTransformer: true,
	defaultErrorHandler: false,
});