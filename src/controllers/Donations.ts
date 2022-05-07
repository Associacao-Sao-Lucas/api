import { Get, Controller, Render, Post, Middleware } from "routing-controllers";

@Controller("/donations")
export class DonationsController {
	@Get("/")
	@Render("donations")
  	read() {}
}