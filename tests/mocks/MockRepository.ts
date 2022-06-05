import { Repository } from "../../src/logic/repositories/Repository";

export class MockRepository<T> implements Repository<T> {
  create = jest.fn(async (entity: T) => ({ ...entity, id: "12234" }));
  delete = jest.fn();
  update = jest.fn(async (entity: T) => entity);
  show = jest.fn();
  index = jest.fn();
}
