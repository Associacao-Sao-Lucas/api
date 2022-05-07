import { Get, Controller, Render, Post, Middleware } from "routing-controllers";

@Controller("/transparency")
export class TransparencyController {
	@Get("/")
	@Render("transparency")
  	read() {}
}