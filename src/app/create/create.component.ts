import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeriesService } from '../series.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private router: Router, private seriesService: SeriesService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.formGroup = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      image: ['', Validators.required],
      seasons: ['', Validators.required],
      description: ['', Validators.required]
    });

  }


  saveSerie() {
    if (this.formGroup.dirty && this.formGroup.valid) {
      this.seriesService.createSerie(this.formGroup.value).subscribe(
        () => this.router.navigate(['series'])
      );
    }
  }
}
