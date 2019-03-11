import { CreateComponent } from './create/create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';
import { DetailComponent } from './detail/detail.component';
import { ErrorComponent } from './error/error.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'series',
    component: SeriesComponent
  },
  {
    path: 'serie/:id',
    component: DetailComponent
  },
  {
    path: 'new',
    component: CreateComponent
  },
  {
    path: 'update',
    component: UpdateComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
