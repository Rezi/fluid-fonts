import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { PresentationComponent } from '../presentation/presentation.component';

const routes: Routes = [
  {
    path: 'slide/:id',
    component: PresentationComponent
  },
  {
    path: '**',
    component: PresentationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
