import { Get, Controller, Render, Post, Middleware } from "routing-controllers";
import { Drive } from "../../logic";

@Controller("/transparencia")
export class TransparencyController {
	private drive = new Drive();

	@Get("/")
	@Render("transparency")
	async read() {
		return { transparency_folder: await this.drive.folder("Transparência") };
	}
}
