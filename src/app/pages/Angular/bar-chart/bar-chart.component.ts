import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  barChartOptions;
  barChartLabels;
  barChartType;
  barChartLegend;
  barChartData;

  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.barChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true,
    };

    this.barChartLabels = [
      '2000',
      '2001',
      '2002',
      '2003',
      '2004',
      '2005',
      '2006',
    ];
    this.barChartType = 'bar';
    this.barChartLegend = true;
    this.barChartData = [
      { data: [25, 30, 40, 50, 60, 70, 80], label: 'Typescript' },
      { data: [90, 85, 85, 85, 85, 85, 80], label: 'Javascript' },
    ];
  }
}
