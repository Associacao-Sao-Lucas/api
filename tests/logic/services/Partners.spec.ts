import { PartnersService } from "../../../src/logic/services/Partners";
import { MockFileStorage } from "../../mocks/MockFileStorage";
import { MockRepository } from "../../mocks/MockRepository";

describe("PartnersService", () => {
  const file_storage = new MockFileStorage();
  const repository = new MockRepository<any>();
  const partnersService = new PartnersService(file_storage, repository);

  const partner = {
    id: "12345",
    name: "José Carvalho",
    logo: "logo-url",
    url: "http://www.josecarvalho.com",
  };

  it("should create a new Partner", async () => {
    const partner = {
      name: "José Carvalho",
      url: "http://www.josecarvalho.com",
    };

    const logo = {
      originalname: "logo.png",
      mimetype: "application/png",
      buffer: Buffer.from("Awesome logo"),
    };

    const new_partner = await partnersService.create(partner, logo);

    expect(typeof new_partner.id).toBe("string");
    expect(new_partner.logo).toBe("mock-file");
  });

  it("should delete a Partner from the repository", async () => {
    await partnersService.delete(partner.id);

    expect(repository.delete).toHaveBeenCalledWith(partner.id);
  });

  it("should update a Partner in the repository", async () => {
    const partner_id = await partnersService.update(partner);

    expect(partner_id).toEqual(partner.id);
    expect(repository.update).toHaveBeenCalledWith(partner);
  });

  it("should show a Partner by its id", async () => {
    repository.show.mockResolvedValue(partner);

    const found_partner = await partnersService.show(partner.id);

    expect(found_partner).toEqual(partner);
  });

  it("should show all Partners", async () => {
    repository.index.mockResolvedValue([partner, partner, partner]);

    const all_partners = await partnersService.index();

    expect(all_partners).toEqual([partner, partner, partner]);
  });
});
