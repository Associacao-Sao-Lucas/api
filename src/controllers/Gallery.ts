import { Get, Controller, Render, Post, Middleware } from "routing-controllers";

@Controller("/galeria")
export class GalleryController {
  @Get("/")
  @Render("gallery")
  read() {}
}
