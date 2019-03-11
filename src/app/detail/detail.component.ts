import { SeriesService } from './../series.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Serie } from '../modelos/serie';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  serie: Observable<Serie>;

  constructor(
    private seriesService: SeriesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.serie = this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) =>
          this.seriesService.getSerie(params.get('id'))
      )
    );

  }

  atras() {
    this.router.navigate(['/series']);
  }

}
