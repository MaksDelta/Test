import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildForChildComponent } from './child-for-child.component';

describe('ChildForChildComponent', () => {
  let component: ChildForChildComponent;
  let fixture: ComponentFixture<ChildForChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildForChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildForChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
