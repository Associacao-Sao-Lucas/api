import { Get, Controller } from "routing-controllers";

@Controller("/health")
export class HealthController {
	@Get("/")
	check() {
		return { status: "ok" };
	}
}

