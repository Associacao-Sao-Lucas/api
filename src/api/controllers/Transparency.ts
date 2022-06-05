import { Get, Controller, Render, Post, Middleware } from "routing-controllers";

@Controller("/transparencia")
export class TransparencyController {
  @Get("/")
  @Render("transparency")
  read() {}
}
