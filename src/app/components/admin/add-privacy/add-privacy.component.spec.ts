import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrivacyComponent } from './add-privacy.component';

describe('AddPrivacyComponent', () => {
  let component: AddPrivacyComponent;
  let fixture: ComponentFixture<AddPrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPrivacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
