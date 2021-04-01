import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'persons', pathMatch: 'full' },
  { path: 'persons', component: PersonListComponent },
  { path: 'persons/:id', component: PersonDetailsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
