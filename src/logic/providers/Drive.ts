import { TsGoogleDrive } from "ts-google-drive";
import { File } from "ts-google-drive/build/File";

const tsGoogleDrive = new TsGoogleDrive({ keyFilename: "serviceAccount.json" });

export type Folder = {
	name: string;
	files: File[];
	folders: Folder[];
};

export class Drive {
	public all_files: File[] = [];
	public folders: Folder[] = [];

	public async load(): Promise<void> {
		this.all_files = await tsGoogleDrive.query().run();

		this.folders = this.all_files
			.filter((file) => file.parents.length === 0 && file.isFolder)
			.map((root_file) => this.into_folder(root_file));
	}

	public folder_files(folder_name: string): File[] {
		const folder = this.all_files.find((file) => file.name === folder_name);
		return this.all_files.filter((file) => file.parents[0] === folder!.id);
	}

	private into_folder(file: File): Folder {
		const folder = {
			name: file.name,
			files: [] as any[],
			folders: [] as any[],
		};

		this.all_files
			.filter((child) => child.parents[0] === file.id)
			.forEach((child) => {
				if (child.isFolder) {
					folder.folders.push(this.into_folder(child));
				} else {
					folder.files.push({ name: child.name, url: this.url(child.id) });
				}
			});

		return folder;
	}

	private url(id: string) {
		return `https://drive.google.com/file/d/${id}/view?usp=sharing`;
	}
}
