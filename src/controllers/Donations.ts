import { Get, Controller, Render, Post, Middleware } from "routing-controllers";

@Controller("/doacoes")
export class DonationsController {
  @Get("/")
  @Render("donations")
  read() {}
}
