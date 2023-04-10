import { Test, TestingModule } from '@nestjs/testing';
import { YearHoroscopeController } from './year_horoscope.controller';

describe('YearHoroscopeController', () => {
  let controller: YearHoroscopeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YearHoroscopeController],
    }).compile();

    controller = module.get<YearHoroscopeController>(YearHoroscopeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
