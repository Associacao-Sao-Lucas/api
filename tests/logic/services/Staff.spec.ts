import { StaffService } from "../../../src/logic/services/Staff";
import { MockFileStorage } from "../../mocks/MockFileStorage";
import { MockRepository } from "../../mocks/MockRepository";

describe("StaffService", () => {
  const file_storage = new MockFileStorage();
  const repository = new MockRepository<any>();
  const staffService = new StaffService(file_storage, repository);

  const staff_member = {
    id: "010101",
    name: "Rafael Silva",
    job: "Engineer",
    resume: "curriculum.pdf",
  };

  it("should create a new StaffMember", async () => {
    const staff_member = {
      name: "Rafael Silva",
      job: "Engineer",
    };

    const resume = {
      originalname: "curriculum.pdf",
      mimetype: "application/pdf",
      buffer: Buffer.from("Some PDF content"),
    };

    const new_staff_member = await staffService.create(staff_member, resume);

    expect(typeof new_staff_member.id).toBe("string");
    expect(new_staff_member.resume).toBe("mock-file");
  });

  it("Should delete a StaffMember from the repository", async () => {
    await staffService.delete(staff_member.id);

    expect(repository.delete).toHaveBeenCalledWith(staff_member.id);
  });

  it("Should update a StaffMember in the repository", async () => {
    const staff_member_id = await staffService.update(staff_member);

    expect(staff_member_id).toEqual(staff_member.id);
    expect(repository.update).toHaveBeenCalledWith(staff_member);
  });

  it("Should show a StaffMember by its id", async () => {
    repository.show.mockResolvedValue(staff_member);
    const found_staff_member = await staffService.show(staff_member.id);
    expect(found_staff_member).toEqual(staff_member);
  });

  it("Should show the whole staff", async () => {
    repository.index.mockResolvedValue([staff_member, staff_member]);
    const staff_list = await staffService.index();
    expect([staff_member, staff_member]).toEqual(staff_list);
  });
});
