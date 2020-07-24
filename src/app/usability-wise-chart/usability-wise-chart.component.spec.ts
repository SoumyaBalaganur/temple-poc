import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsabilityWiseChartComponent } from './usability-wise-chart.component';

describe('UsabilityWiseChartComponent', () => {
  let component: UsabilityWiseChartComponent;
  let fixture: ComponentFixture<UsabilityWiseChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsabilityWiseChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsabilityWiseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
