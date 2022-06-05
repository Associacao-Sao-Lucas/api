import { Get, Controller, Render, Post, Middleware } from "routing-controllers";

@Controller("/colaboradores")
export class StaffController {
  @Get("/")
  @Render("staff")
  read() {}
}
