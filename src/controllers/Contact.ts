import { Get, Controller, Render, Post, Middleware } from "routing-controllers";

@Controller("/contato")
export class ContactController {
	@Get("/")
	@Render("contact")
  	read() {}
}