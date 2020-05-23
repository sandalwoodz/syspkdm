import { Test, TestingModule } from '@nestjs/testing';
import { RcourseService } from './rcourse.service';

describe('RcourseService', () => {
  let service: RcourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RcourseService],
    }).compile();

    service = module.get<RcourseService>(RcourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
