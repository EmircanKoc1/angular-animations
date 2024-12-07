import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnimationComponent } from './list-animation.component';

describe('ListAnimationComponent', () => {
  let component: ListAnimationComponent;
  let fixture: ComponentFixture<ListAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
