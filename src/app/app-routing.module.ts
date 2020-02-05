import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main-view/main-view.module').then((m) => m.MainViewModule),
    // component: MainViewComponent
  }
];

@NgModule({
  //imports: [RouterModule.forRoot(routes), MainViewModule],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
