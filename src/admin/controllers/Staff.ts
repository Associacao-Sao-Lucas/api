import {
	Get,
	Controller,
	Render,
	Post,
	UploadedFile,
	Body,
	Redirect,
} from "routing-controllers";
import { serialize } from "v8";
import { DiskFileStorage } from "../../logic/providers";
import { MemoryRepository } from "../../logic/repositories";

import { StaffService } from "../../logic/services/Staff";

@Controller("/colaboradores")
export class StaffController {
	private service = new StaffService(
		new DiskFileStorage(),
		new MemoryRepository()
	);

	@Get("/criar")
	@Render("staff/create")
	create_form() {}

	@Post("/criar")
	@Redirect("/")
	async create(
		@Body() body: any,
		@UploadedFile("resume") file: Express.Multer.File
	) {
		try {
			await this.service.create(
				{
					name: body.name,
					job: body.job,
				},
				file
			);
		} catch (err) {
			console.log(err);
		}
	}

	@Get("/editar")
	@Render("/staff/edit")
	edit_form() {}

	// @Post("/editar")
	// @Redirect("/")
}
