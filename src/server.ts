import app from "./app";
import "dotenv/config";

async function main(): Promise<void> {
	const port = Number(process.env.PORT ?? 3001);

	app.listen(port, () => {
		console.log(`Server listening on port ${port}`);
	});
}

main().catch(console.log);
