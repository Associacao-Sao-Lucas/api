import { Get, Controller, Render, Post, Middleware } from "routing-controllers";

@Controller("/atividades")
export class ActivitiesController {
  @Get("/")
  @Render("activities")
  read() {}
}
