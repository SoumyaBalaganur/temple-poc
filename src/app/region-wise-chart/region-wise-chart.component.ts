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
  selector: 'app-region-wise-chart',
  templateUrl: './region-wise-chart.component.html',
  styleUrls: ['./region-wise-chart.component.css']
})
export class RegionWiseChartComponent implements OnInit {

  constructor() { }

  convertData(data: any[]) {
    const uniqueCategorykeys = ['USAS (Yes, Yes - Spotlight, BLANK)', 'IAS (Yes, Yes - Spotlight, BLANK)', 'CANADA (Yes, Yes - Spotlight, BLANK)', 'INSTITUTIONAL (Yes, Yes - Spotlight, BLANK)'];
    const uniqueCategories = ['USAS', 'IAS', 'CANADA', 'INSTITUTIONAL']
    const uniqueYear = Array.from(new Set(data.map(item => item["Fiscal Year"])));
    const series = uniqueYear.map(year => {
      return {
        name: year,
        data: new Array(uniqueCategories.length).fill(0)
      }
    })
    data.forEach(item => {
      const yearObj = series.find(year => year.name === item["Fiscal Year"]);
      for(let i = 0; i < uniqueCategorykeys.length; i++) {
        (item[uniqueCategorykeys[i]].includes('Yes')) ? yearObj.data[i]++ : null;  
      }
      // .data[uniqueCategories.indexOf(item["GPM Team"])]++;
    })
    const convertedData = {
      series: series,
      categories: uniqueCategories,
    };
    console.log(convertedData)
    return convertedData
  }

  convertedData: any = this.convertData(data);

  ngOnInit() {
    this.convertData(data);
    Highcharts.chart("region-wise", this.options);
  }

  options: any = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Region wise - Content Trend'
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
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
            dataLabels: {
              // enabled: true
            }
        }
    },
    series: this.convertedData.series
}

}
