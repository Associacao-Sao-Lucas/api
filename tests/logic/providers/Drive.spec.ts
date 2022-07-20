import { Drive } from "../../../src/logic/providers";

describe("Drive", () => {
	it("should load all files from the assigned folder", async () => {
		const drive = new Drive();

		await drive.load();

		const files = drive.folder_files("__test__");

		expect(files[0].name).toBe("folder2");
		expect(files[1].name).toBe("folder1");
	});

	it("should build a graph from files", async () => {
		const drive = new Drive();

		await drive.load();

		expect(drive.folders).toStrictEqual([
			{
				name: "__test__",
				files: [],
				folders: [
					{
						name: "folder2",
						files: [
							{
								name: "document3.txt",
								url: "https://drive.google.com/file/d/1qn-3hJ8Wo2RB4Czr9M79Qn5V8ZSJcZtv/view?usp=sharing",
							},
						],
						folders: [],
					},
					{
						name: "folder1",
						files: [
							{
								name: "document2.txt",
								url: "https://drive.google.com/file/d/1p9nHAHHpR2QDMx314KnH8rmmjUR45Got/view?usp=sharing",
							},
							{
								name: "document1.txt",
								url: "https://drive.google.com/file/d/1DAjWj7GrmoMDOYOAb0p4RkykjBey0mCn/view?usp=sharing",
							},
						],
						folders: [],
					},
				],
			},
		]);
	});
});
