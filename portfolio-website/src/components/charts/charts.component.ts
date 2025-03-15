import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  public chartOptions: ChartOptions = {
    responsive: true,
  };
  public chartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public chartType: ChartType = 'bar';
  public chartLegend = true;
  public chartColors: Color[] = [
    {
      backgroundColor: 'rgba(0,123,255,0.5)',
    },
  ];

  public chartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  constructor() {}

  ngOnInit(): void {}

  changeChartType(type: string): void {
    this.chartType = type as ChartType;
  }
}
