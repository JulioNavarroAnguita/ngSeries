import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ErrorComponent } from "./error/error.component";
import { SeriesComponent } from "./series/series.component";
import { HomeComponent } from "./home/home.component";
import { DetailComponent } from "./detail/detail.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import {
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatTableModule,
  MatCardModule,
  MatListModule,
  MatToolbarModule,
  MatTabsModule
} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    SeriesComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
