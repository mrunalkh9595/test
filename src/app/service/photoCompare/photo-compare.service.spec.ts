import { TestBed } from '@angular/core/testing';

import { PhotoCompareService } from './photo-compare.service';

describe('PhotoCompareService', () => {
  let service: PhotoCompareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoCompareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
