import { Get, Controller, Render, Post, Middleware } from "routing-controllers";

@Controller("/gallery")
export class GalleryController {
	@Get("/")
	@Render("gallery")
	read() {}
}