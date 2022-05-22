import { FileStorage, InFile, OutFile } from "./FileStorage";
import fs from 'fs'

export class DiskFileStorage implements FileStorage {
  async store(file: InFile): Promise<OutFile> {
    const file_id = `${Date.now()}-${file.originalname}`
    const file_path = `./public/files/${file_id}`

    fs.writeFileSync(file_path, file.buffer)

    return { id: file_id }
  }
}