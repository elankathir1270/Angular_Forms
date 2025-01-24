import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealTimeListComponent } from './real-time-list/real-time-list.component';
import { RealTimeFormComponent } from './real-time-form/real-time-form.component';

const routes: Routes = [
  {
    path: '',
    component: RealTimeListComponent,
    title: 'real-time-list',
  },
  {
    path: 'real-time',
    component: RealTimeListComponent,
    title: 'real-time-list',
  },
  {
    path: ':id',
    component: RealTimeFormComponent,
    canDeactivate: [
      (comp: RealTimeFormComponent) => {
        return comp.canExit();
      },
    ],
    title: 'real-time-update',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
