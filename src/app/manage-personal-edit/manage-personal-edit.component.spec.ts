import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePersonalEditComponent } from './manage-personal-edit.component';

describe('ManagePersonalEditComponent', () => {
  let component: ManagePersonalEditComponent;
  let fixture: ComponentFixture<ManagePersonalEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePersonalEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePersonalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
