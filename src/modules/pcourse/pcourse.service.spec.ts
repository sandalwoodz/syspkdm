import { Test, TestingModule } from '@nestjs/testing';
import { PcourseService } from './pcourse.service';

describe('PcourseService', () => {
  let service: PcourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PcourseService],
    }).compile();

    service = module.get<PcourseService>(PcourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
