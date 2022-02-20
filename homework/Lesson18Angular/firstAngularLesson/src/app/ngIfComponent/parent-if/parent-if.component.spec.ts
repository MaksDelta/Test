import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentIfComponent } from './parent-if.component';

describe('ParentIfComponent', () => {
  let component: ParentIfComponent;
  let fixture: ComponentFixture<ParentIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentIfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
