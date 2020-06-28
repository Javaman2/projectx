import { TestBed } from '@angular/core/testing';

import { ProjectyService } from './projecty.service';

describe('ProjectyService', () => {
  let service: ProjectyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
