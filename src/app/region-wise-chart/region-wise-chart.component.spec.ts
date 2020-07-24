import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionWiseChartComponent } from './region-wise-chart.component';

describe('RegionWiseChartComponent', () => {
  let component: RegionWiseChartComponent;
  let fixture: ComponentFixture<RegionWiseChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionWiseChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionWiseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
