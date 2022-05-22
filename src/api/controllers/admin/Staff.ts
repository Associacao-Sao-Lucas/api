import {
  Get,
  Controller,
  Render,
  Post,
  UploadedFile,
  Body
} from "routing-controllers";

@Controller("/admin/colaboradores")
export class AdminStaffController {
	@Get("/")
	@Render("admin/staff")
  read() { }
  
  @Post("/")
  create(
    @Body() body: any,
    @UploadedFile("resume") file: Express.Multer.File
  ) { 
    console.log(body)
    console.log(file)
    return { status: 'ok'}    
  }
}

