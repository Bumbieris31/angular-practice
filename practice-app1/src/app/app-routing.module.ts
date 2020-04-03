import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatsComponent } from './cats/cats.component';
import { CatInputComponent } from './cats/cat-input.component';

const routes: Routes = [
  { path: '', component: CatsComponent },
  { path: 'input', component: CatInputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
