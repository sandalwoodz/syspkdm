import { Test, TestingModule } from '@nestjs/testing';
import { RcourseController } from './rcourse.controller';

describe('Rcourse Controller', () => {
  let controller: RcourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RcourseController],
    }).compile();

    controller = module.get<RcourseController>(RcourseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
