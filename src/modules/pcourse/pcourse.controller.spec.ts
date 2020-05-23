import { Test, TestingModule } from '@nestjs/testing';
import { PcourseController } from './pcourse.controller';

describe('Pcourse Controller', () => {
  let controller: PcourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PcourseController],
    }).compile();

    controller = module.get<PcourseController>(PcourseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
