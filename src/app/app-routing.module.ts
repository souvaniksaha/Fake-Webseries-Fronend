import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FreeWebseriesComponent } from './free-webseries/free-webseries.component';
import { PaidWebseriesComponent } from './paid-webseries/paid-webseries.component';


const routes: Routes = [
  // register route for free web series
  {
    path: 'free-series',
    component: FreeWebseriesComponent
  },
  // register route for paid web series
  {
    path: 'paid-series',
    component: PaidWebseriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
