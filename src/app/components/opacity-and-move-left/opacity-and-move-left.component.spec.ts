import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpacityAndMoveLeftComponent } from './opacity-and-move-left.component';

describe('OpacityAndMoveLeftComponent', () => {
  let component: OpacityAndMoveLeftComponent;
  let fixture: ComponentFixture<OpacityAndMoveLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpacityAndMoveLeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpacityAndMoveLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
