import { Get, Controller, Render, Post, Middleware } from "routing-controllers";

@Controller("/staff")
export class StaffController {
	@Get("/")
	@Render("staff")
  	read() {}
}