import { Drive } from "../../src/logic";

describe("Drive", () => {
	it("should load all Files and Folders within an specific Folder", async () => {
		const drive = new Drive();
		const test_folder = await drive.folder("__test__");

		expect(test_folder).toStrictEqual({
			name: "__test__",
			files: [
				{
					name: "file_with_content.txt",
					id: "1wBHW4s7unVOrPufWjrzZeGXG-BqTDLlj",
				},
			],
			folders: [
				{
					name: "folder2",
					files: [
						{
							name: "document3.txt",
							id: "1qn-3hJ8Wo2RB4Czr9M79Qn5V8ZSJcZtv",
						},
					],
					folders: [],
				},
				{
					name: "folder1",
					files: [
						{
							name: "document2.txt",
							id: "1p9nHAHHpR2QDMx314KnH8rmmjUR45Got",
						},
						{
							name: "document1.txt",
							id: "1DAjWj7GrmoMDOYOAb0p4RkykjBey0mCn",
						},
					],
					folders: [],
				},
			],
		});
	});

	it("should load the content of the specified file", async () => {
		const drive = new Drive();
		const content = await drive.file_content("file_with_content.txt");

		expect(content).toBe("Test File Content");
	});
});
