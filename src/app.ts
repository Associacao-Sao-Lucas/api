import { HealthController, HomeController } from "./controllers";
import { useExpressServer } from "routing-controllers";
import express from "express";

const app = express()
app.set('view engine', 'pug')
app.set('views', './src/views')

export default useExpressServer(app, {
	controllers: [
		HealthController,
		HomeController
	],
	validation: true,
	classTransformer: true,
	defaultErrorHandler: false,
});
