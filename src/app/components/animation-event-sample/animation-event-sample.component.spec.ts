import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationEventSampleComponent } from './animation-event-sample.component';

describe('AnimationEventSampleComponent', () => {
  let component: AnimationEventSampleComponent;
  let fixture: ComponentFixture<AnimationEventSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationEventSampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationEventSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
