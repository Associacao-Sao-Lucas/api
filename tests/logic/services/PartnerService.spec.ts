import { PartnerService } from '../../../src/logic/services/PartnerService';
import { MockRepository } from '../../mocks/MockRepository';

describe('PartnerService', () => {
  const repository = new MockRepository<any>();
  const partnerService = new PartnerService(repository);

  it('should create a new Partner in the repository', async () => { 
    const partner = {
      name: 'José Carvalho',
      logo: 'logo-url',
      url:  'http://www.josecarvalho.com',
    }

    await partnerService.create(partner)

    expect(repository.create).toHaveBeenCalledWith(partner);
  })

  
})