export type InFile = {
  originalname: string;
  mimetype: string;
  buffer: Buffer;
};

export type OutFile = {
  id: string;
};

export interface FileStorage {
  store(file: InFile): Promise<OutFile>;
}
