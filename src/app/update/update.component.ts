import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SeriesService } from './../series.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Serie } from '../modelos/serie';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  serie: Serie;
  updateGroup: FormGroup;

  id: number;

  constructor(private seriesService: SeriesService,
    private formBuilder: FormBuilder, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    if (!this.id) {
      alert('Acción inválida');
      this.router.navigate(['series']);
      return;
    }


    this.seriesService.getSerie(this.id)
      .subscribe(data => {
        this.updateGroup.setValue(data);
      });

    this.updateGroup = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      image: ['', Validators.required],
      seasons: ['', Validators.required],
      description: ['', Validators.required]
    });


  }

  updateSerie() {
    if (this.updateGroup.dirty && this.updateGroup.valid) {
      this.seriesService.updateSerie(this.updateGroup.value).subscribe(
        () => this.router.navigate(['series'])
      );
    }
  }

}
