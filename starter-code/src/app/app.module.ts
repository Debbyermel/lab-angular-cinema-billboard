import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


// Route importation
import { Routes, RouterModule } from '@angular/router';
import { MyHomeComponent} from './my-home/my-home.component';
import { MyMovieComponent } from './my-movie/my-movie.component';

// Routes view
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'movies', component: MyHomeComponent },
  { path: 'movie/:id', component: MyMovieComponent },  
];


@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
