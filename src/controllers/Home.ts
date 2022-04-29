import { Get, Controller, Render } from "routing-controllers";

@Controller("/")
export class HomeController {
	@Get("/")
	@Render("index")
  home() {}
}

