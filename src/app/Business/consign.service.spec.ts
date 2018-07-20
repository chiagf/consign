import { TestBed, inject } from '@angular/core/testing';

import { ConsignService } from './Consign/consign.service';

describe('ConsignService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsignService]
    });
  });

  it('should be created', inject([ConsignService], (service: ConsignService) => {
    expect(service).toBeTruthy();
  }));
});
