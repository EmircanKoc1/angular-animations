import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableAnimationSampleComponent } from './reusable-animation-sample.component';

describe('ReusableAnimationSampleComponent', () => {
  let component: ReusableAnimationSampleComponent;
  let fixture: ComponentFixture<ReusableAnimationSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReusableAnimationSampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableAnimationSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
