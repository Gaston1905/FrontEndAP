import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintanceJobComponent } from './maintance-job.component';

describe('MaintanceJobComponent', () => {
  let component: MaintanceJobComponent;
  let fixture: ComponentFixture<MaintanceJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintanceJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaintanceJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
