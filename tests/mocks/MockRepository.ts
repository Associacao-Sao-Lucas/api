import { Repository } from "../../src/logic/repositories/Repository"

export class MockRepository<T> implements Repository<T> {
  create = jest.fn(async (entity: T) => entity);
  delete = jest.fn()
  update = jest.fn(async (entity: T) => entity);
}