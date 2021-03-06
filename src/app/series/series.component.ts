import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Serie } from '../modelos/serie';
import { SeriesService } from '../series.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series: Observable<Serie[]>;
  displayedColumns: string[] = ['id', 'image', 'name', 'seasons', 'actions'];

  constructor(private seriesService: SeriesService) { }

  ngOnInit() {
    this.series = this.seriesService.getSeries();
  }

  deleteSerie(serie: Serie) {
    this.seriesService.deleteSerie(serie.id).subscribe(
      () => this.ngOnInit()
    );
  }




}
