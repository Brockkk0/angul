import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNameComponent } from './add-name/add-name.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddNameComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
