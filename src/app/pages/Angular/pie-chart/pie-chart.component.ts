import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  pieChartOptions;
  pieChartLabels;
  chartType;
  chartLegend;
  chartData;

  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.pieChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true,
    };

    this.pieChartLabels = ['Angular', 'React', 'Vue'];
    this.chartType = 'pie';
    this.chartLegend = true;
    this.chartData = [{ data: [30, 50, 20] }];
  }
}
