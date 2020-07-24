import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from '../../assets/data'
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material'; 


@Component({
  selector: 'app-manage-personal-alerts',
  templateUrl: './manage-personal-alerts.component.html',
  styleUrls: ['./manage-personal-alerts.component.css']
})
 
export class ManagePersonalAlertsComponent implements OnInit {

  displayedColumns: string[] =   [
    'Alert Name', 
    'Platform',
    'Strategy',
    'Product',
    'Alert Type',
    'Threshold',
      'Notify',
  ];
  dataSource = new MatTableDataSource(data.filter(item => item['GPM Team'] === 'Global Fixed Income'));

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  } 
   
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

 

