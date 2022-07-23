import "dotenv/config";

import { TsGoogleDrive } from "ts-google-drive";
import { File as DriveFile } from "ts-google-drive/build/File";

export type File = {
	name: string;
	id: string;
};

export type Folder = {
	name: string;
	files: File[];
	folders: Folder[];
};

export class Drive {
	private drive = new TsGoogleDrive({
		credentials: {
			client_email: process.env.DRIVE_CLIENT_EMAIL,
			private_key: process.env.DRIVE_PRIVATE_KEY,
		},
	});

	public async folder(name: string): Promise<Folder | undefined> {
		return (await this.folders()).find((folder) => folder.name === name);
	}

	public async folders(): Promise<Folder[]> {
		console.log(process.env.DRIVE_CLIENT_EMAIL, process.env.DRIVE_PRIVATE_KEY);

		const drive_files = await this.drive.query().run();

		return drive_files
			.filter((drive_file) => this.is_root_folder(drive_file))
			.map((drive_file) => this.create_folder(drive_file, drive_files));
	}

	private is_root_folder(drive_file: DriveFile): boolean {
		return drive_file.isFolder && drive_file.parents.length === 0;
	}

	private create_folder(from: DriveFile, other_files: DriveFile[]): Folder {
		const folder: Folder = { name: from.name, files: [], folders: [] };

		other_files
			.filter((drive_file) => drive_file.parents.includes(from.id))
			.forEach((child) => {
				if (child.isFolder) {
					folder.folders.push(this.create_folder(child, other_files));
				} else {
					folder.files.push({ name: child.name, id: child.id });
				}
			});

		return folder;
	}
}
