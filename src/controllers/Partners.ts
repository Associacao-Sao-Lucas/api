import { Get, Controller, Render } from "routing-controllers";
import { Drive } from "../logic";

@Controller("/parceiros")
export class PartnersController {
	private drive = new Drive();

	@Get("/")
	@Render("partners")
	async read() {
		return { partners_folder: await this.drive.folder("Parceiros") };
	}
}
