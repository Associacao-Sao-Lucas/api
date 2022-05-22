import { FileStorage, OutFile } from "../../src/logic/providers/FileStorage"

const mock_file = { id: 'mock-file' }

export class MockFileStorage implements FileStorage {
  async store(file: any): Promise<OutFile> {
    return mock_file;
  }
}
