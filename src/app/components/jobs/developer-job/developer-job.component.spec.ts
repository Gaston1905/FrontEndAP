import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperJobComponent } from './developer-job.component';

describe('DeveloperJobComponent', () => {
  let component: DeveloperJobComponent;
  let fixture: ComponentFixture<DeveloperJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloperJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloperJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
