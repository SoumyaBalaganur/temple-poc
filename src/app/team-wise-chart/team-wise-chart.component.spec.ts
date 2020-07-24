import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamWiseChartComponent } from './team-wise-chart.component';

describe('TeamWiseChartComponent', () => {
  let component: TeamWiseChartComponent;
  let fixture: ComponentFixture<TeamWiseChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamWiseChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamWiseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
