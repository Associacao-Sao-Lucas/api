import {
	Get,
	Controller,
	Render,
	Post,
	UploadedFile,
	Body,
	Redirect,
	Param,
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

	@Get("/")
	@Render("staff/index")
	async index() {
		const staff = await this.service.index();
		return { staff };
	}

	@Get("/criar")
	@Render("staff/create")
	create_form() {}

	@Post("/criar")
	@Redirect("/")
	async create(
		@Body() body: any,
		@UploadedFile("resume") file: Express.Multer.File
	) {
		await this.service.create(
			{
				name: body.name,
				job: body.job,
			},
			file
		);
	}

	@Get("/editar/:id")
	@Render("/staff/edit")
	async edit_form(@Param("id") id: string) {
		const staffMember = await this.service.show(id);
		return { staffMember };
	}

	@Post("/editar")
	@Redirect("/")
	async edit(
		@Body() body: any,
		@UploadedFile("resume") file: Express.Multer.File
	) {}
}
