import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsuleInfoDetailsComponent } from './capsule-info-details.component';

describe('CapsuleInfoDetailsComponent', () => {
  let component: CapsuleInfoDetailsComponent;
  let fixture: ComponentFixture<CapsuleInfoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapsuleInfoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsuleInfoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
