import { PartnersService } from '../../../src/logic/services/Partners';
import { MockRepository } from '../../mocks/MockRepository';

describe('PartnersService', () => {
  const repository = new MockRepository<any>();
  const partnersService = new PartnersService(repository);
  
  it('should create a new Partner in the repository', async () => { 
    const partner = {
      name: 'José Carvalho',
      logo: 'logo-url',
      url:  'http://www.josecarvalho.com',
    }

    await partnersService.create(partner)

    expect(repository.create).toHaveBeenCalledWith(partner);
  })

  it('should delete a Partner from the repository', async () => { 
    const partner_id = "12345"

    await partnersService.delete(partner_id)

    expect(repository.delete).toHaveBeenCalledWith(partner_id);
  })
  
  it('should update a Partner in the repository', async () => { 
    const partner = {
      id: "12345",
      name: 'José Carvalho',
      logo: 'logo-url',
      url:  'http://www.josecarvalho.com',
    }

    const updated_partner = await partnersService.update(partner)

    expect(updated_partner).toEqual(partner);
    expect(repository.update).toHaveBeenCalledWith(partner);
  })
})

// - show = mostra 1 partner
// - index = mostra todos os partners
// - update = atualiza 1 partner