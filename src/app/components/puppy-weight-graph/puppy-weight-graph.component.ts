import { Component, OnInit } from '@angular/core';
import {ChartDataSets} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {PuppyDataService} from '../../services/puppyData/puppy-data.service';
import {PuppyData} from '../../domain/PuppyData';

@Component({
  selector: 'app-puppy-weight-graph',
  templateUrl: './puppy-weight-graph.component.html',
  styleUrls: ['./puppy-weight-graph.component.css']
})
export class PuppyWeightGraphComponent implements OnInit {

  lineChartData: ChartDataSets[] = [];

  lineChartLabels: Label[] = [];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(private puppyDataService: PuppyDataService) { }

  ngOnInit() {
    this.getPuppyData();
  }

  getPuppyData(): void {
    this.puppyDataService.getPuppyData().subscribe(puppyData => {
      this.updateGraph(puppyData);
      console.log(puppyData);
    });
  }

  parseData(puppyData: PuppyData[]): {dataPoints: number[], labels: string[], labelName: string} {
    const dataPoints = puppyData.map(data => data.weight);
    const labelName = puppyData[0].dog.pedigreeName;
    const labels = puppyData.map(data => `${data.weekNumber}`); //template string

    return {dataPoints, labels, labelName};
  }

  updateGraph(puppyData: {[key: number]:PuppyData[]}){
    const lineChartData = [];
    let lineChartLabels = [];
    Object.keys(puppyData).forEach(dogId => {
      const parsedData = this.parseData(puppyData[dogId]);
      lineChartData.push({data: parsedData.dataPoints, label: parsedData.labelName})
      lineChartLabels = lineChartLabels.concat(parsedData.labels)
    });

    this.lineChartData = lineChartData;
    console.log(this.lineChartData);
    this.lineChartLabels = Array.from(new Set(lineChartLabels)).sort((a,b) => a-b);
    console.log(this.lineChartLabels);
  }
}
