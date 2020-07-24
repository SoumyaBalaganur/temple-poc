import { Component, OnInit } from '@angular/core';
import { data } from '../../assets/data';
import * as Highcharts from 'highcharts';

declare var require: any;
// tslint:disable-next-line: no-require-imports
const boost = require('highcharts/modules/boost');
// tslint:disable-next-line: no-require-imports
const noData = require('highcharts/modules/no-data-to-display');
// tslint:disable-next-line: no-require-imports
const more = require('highcharts/highcharts-more');


boost(Highcharts);
noData(Highcharts);
more(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-usability-wise-chart',
  templateUrl: './usability-wise-chart.component.html',
  styleUrls: ['./usability-wise-chart.component.css']
})
export class UsabilityWiseChartComponent implements OnInit {

  constructor() { }

  convertData(data: any[]) {
    const uniqueCategories = Array.from(new Set(data.map(item => item["Is it OK for external use (subject to compliance review)? (Yes, BLANK)"])));
    const uniqueYear = Array.from(new Set(data.map(item => item["Fiscal Year"])));
    const series = uniqueYear.map(year => {
      return {
        name: year,
        data: new Array(uniqueCategories.length).fill(0)
      }
    })
    data.forEach(item => {
      series.find(year => year.name === item["Fiscal Year"])
      .data[uniqueCategories.indexOf(item["Is it OK for external use (subject to compliance review)? (Yes, BLANK)"])]++;
    })

    uniqueCategories[uniqueCategories.indexOf("")] = 'Both';
    const convertedData = {
      series: series,
      // categories: uniqueCategories,
      categories: ['Internal', 'Both', 'External'],
    };
    console.log(convertedData)
    return convertedData
  }

  convertedData: any = this.convertData(data);

  ngOnInit() {
    this.convertData(data);
    Highcharts.chart("usability-wise", this.options);
  }

  options: any = {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Chart Title'
    },
    xAxis: {
        categories: this.convertedData.categories,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Count'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>'
        + '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      },
      bar: {
        dataLabels: {
          // enabled: true
        }
      }
    },
    series: this.convertedData.series
}

}
