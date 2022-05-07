import { Get, Controller, Render, Post, Middleware } from "routing-controllers";

@Controller("/contact")
export class ContactController {
	@Get("/")
	@Render("contact")
  	read() {}
}