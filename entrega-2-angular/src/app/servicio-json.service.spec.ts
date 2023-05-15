import { TestBed } from '@angular/core/testing';

import { ServicioJsonService } from './servicio-json.service';

describe('ServicioJsonService', () => {
  let service: ServicioJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
