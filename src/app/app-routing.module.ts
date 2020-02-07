import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainViewModule} from './main-view/main-view.module';
import {MainViewComponent} from './main-view/main-view.component';


/**
 * LAZY LOADING
 */
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main-view/main-view.module').then((m) => m.MainViewModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


/**
 * EAGER LOADING
 */

// const routes: Routes = [
//   {
//     path: '',
//     component: MainViewComponent
//   }
// ];
//
// @NgModule({
//   imports: [RouterModule.forRoot(routes), MainViewModule],
//   exports: [RouterModule]
// })

export class AppRoutingModule {
}
