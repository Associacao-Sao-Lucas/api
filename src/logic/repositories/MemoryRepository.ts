import { Repository } from "./Repository";

export class MemoryRepository implements Repository<any> {
  private entities: any[] = [
    {
      id: 1,
      name: "Gabriel",
      job: "Desenvolvedor",
      resume: "1653252341892-softwarefaster-sample.pdf",
    },
    {
      id: 2,
      name: "Jonas",
      job: "Desenvolvedor",
      resume: "1653252349735-Simple-CT-1.1.0.zip",
    }
  ]

  private static instance = new MemoryRepository()

  static init(): MemoryRepository {
    return this.instance
  }

  async create(entity: any): Promise<any> {
    const id = this.entities.length + 1;
    entity = { ...entity, id }
    
    this.entities.push(entity)
    
    return entity
  }

  async delete(entity_id: string): Promise<void> {
    this.entities = this.entities.filter(entity => entity.id !== entity_id);
  }

  async update(entity: any): Promise<any> {
    this.entities[entity.id] = entity
    return entity
  }

  async show(entity_id: string): Promise<any> {
    return this.entities[entity_id as any as number]
  }

  async index(): Promise<any[]> {
    return this.entities
  }
}