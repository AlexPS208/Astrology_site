import { Test, TestingModule } from '@nestjs/testing';
import { DayAdviceController } from './day_advice.controller';

describe('DayAdviceController', () => {
  let controller: DayAdviceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DayAdviceController],
    }).compile();

    controller = module.get<DayAdviceController>(DayAdviceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
