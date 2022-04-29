import { Get, Controller, Render, Post, Middleware } from "routing-controllers";

@Controller("/partners")
export class PartnersController {
	@Get("/")
	@Render("partners")
  read() {}
}

