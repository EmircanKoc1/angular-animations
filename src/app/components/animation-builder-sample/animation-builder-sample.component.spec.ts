import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationBuilderSampleComponent } from './animation-builder-sample.component';

describe('AnimationBuilderSampleComponent', () => {
  let component: AnimationBuilderSampleComponent;
  let fixture: ComponentFixture<AnimationBuilderSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationBuilderSampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationBuilderSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
