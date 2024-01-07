import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowCostJobComponent } from './low-cost-job.component';

describe('LowCostJobComponent', () => {
  let component: LowCostJobComponent;
  let fixture: ComponentFixture<LowCostJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowCostJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LowCostJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
