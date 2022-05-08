import { Get, Controller, Render, Post, Middleware } from "routing-controllers";

@Controller("/parceiros")
export class PartnersController {
	@Get("/")
	@Render("partners")
	read() {}
}
