import { Test, TestingModule } from '@nestjs/testing';
import { InvitacionesController } from './invitaciones.controller';

describe('InvitacionesController', () => {
  let controller: InvitacionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvitacionesController],
    }).compile();

    controller = module.get<InvitacionesController>(InvitacionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
