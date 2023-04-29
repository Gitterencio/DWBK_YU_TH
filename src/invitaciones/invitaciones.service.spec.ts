import { Test, TestingModule } from '@nestjs/testing';
import { InvitacionesService } from './invitaciones.service';

describe('InvitacionesService', () => {
  let service: InvitacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvitacionesService],
    }).compile();

    service = module.get<InvitacionesService>(InvitacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
