import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { AngularFirstComponent } from './pages/Angular/angular-first/angular-first.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: ParentComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'a-first', component: AngularFirstComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
