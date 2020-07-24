import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePersonalAlertsComponent } from './manage-personal-alerts.component';

describe('ManagePersonalAlertsComponent', () => {
  let component: ManagePersonalAlertsComponent;
  let fixture: ComponentFixture<ManagePersonalAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePersonalAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePersonalAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
