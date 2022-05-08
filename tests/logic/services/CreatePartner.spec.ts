import { CreatePartner } from '../../../src/logic/services/CreatePartner';
import { MockRepository } from '../../mocks/MockRepository';

describe('Create Partner', () => {
  const repository = new MockRepository<any>();
  const createPartner = new CreatePartner(repository);

  it('should create a new Partner in the repository', async () => { 
    const partner = {
      name: 'José Carvalho',
      logo: 'logo-url',
      url:  'http://www.josecarvalho.com',
    }

    await createPartner.execute(partner)

    expect(repository.create).toHaveBeenCalledWith(partner);
  })
})