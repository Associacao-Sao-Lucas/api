import { StaffService, DiskFileStorage, MemoryRepository } from "../../logic";

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

@Controller("/colaboradores")
export class StaffController {
	private service = new StaffService(
		new DiskFileStorage(),
		new MemoryRepository()
	);

	@Get("/")
	@Render("staff/index")
	async index() {
		return { staff: await this.service.index() };
	}

	@Get("/criar")
	@Render("staff/create")
	create_form() {}

	@Post("/criar")
	@Redirect("/admin/colaboradores")
	async create(
		@Body() body: any,
		@UploadedFile("resume") file: Express.Multer.File
	) {
		await this.service.create({ name: body.name, job: body.job }, file);
	}

	@Get("/editar/:id")
	@Render("staff/edit")
	async edit_form(@Param("id") id: string) {
		return { staffMember: await this.service.show(id) };
	}

	@Post("/editar/:id")
	@Redirect("/admin/colaboradores")
	async edit(
		@Param("id") id: string,
		@Body() body: any,
		@UploadedFile("resume") file: Express.Multer.File
	) {
		await this.service.update({ id: id, name: body.name, job: body.job });
	}
}
