import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series: Array<Serie> = [];
  average: number = 0;
  constructor(private serieService: SerieService) { }

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.promedio;
    });
  }
  promedio(){
    let cantidad: number = 0;
    let suma: number = 0;
    this.series.forEach(serie => {
      suma += serie.seasons;
      cantidad += 1;
    });
    this.average = suma/cantidad;
  }

  ngOnInit() {
    this.getSeries();
  }

}
