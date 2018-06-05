import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsuleInfoComponent } from './capsule-info.component';

describe('CapsuleInfoComponent', () => {
  let component: CapsuleInfoComponent;
  let fixture: ComponentFixture<CapsuleInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapsuleInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsuleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
