import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddContentIdeaComponent } from './add-content-idea/add-content-idea.component';
import { ManagePersonalAlertsComponent } from './manage-personal-alerts/manage-personal-alerts.component';
import { ManagePersonalAddComponent } from './manage-personal-add/manage-personal-add.component';
import { ManagePersonalEditComponent } from './manage-personal-edit/manage-personal-edit.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'content-idea/create', component: AddContentIdeaComponent},
  { path: 'manage-personal/manage-personal-alerts', component: ManagePersonalAlertsComponent},
  { path: 'manage-personal/manage-personal-add', component: ManagePersonalAddComponent},
  { path: 'manage-personal/manage-personal-edit', component: ManagePersonalEditComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
