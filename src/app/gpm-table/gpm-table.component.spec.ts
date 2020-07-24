import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpmTableComponent } from './gpm-table.component';

describe('GpmTableComponent', () => {
  let component: GpmTableComponent;
  let fixture: ComponentFixture<GpmTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpmTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpmTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
