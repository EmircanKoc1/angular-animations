import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftResizeAndStartGradientComponent } from './left-resize-and-start-gradient.component';

describe('LeftResizeAndStartGradientComponent', () => {
  let component: LeftResizeAndStartGradientComponent;
  let fixture: ComponentFixture<LeftResizeAndStartGradientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftResizeAndStartGradientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftResizeAndStartGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
