import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainViewComponent} from './main-view.component';
import {RouterModule, Routes} from '@angular/router';
import {FilterComponent} from './filter/filter.component';

const routes: Routes = [
  {
    path: '',
    component: MainViewComponent
  }
];

@NgModule({
  declarations: [MainViewComponent, FilterComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class MainViewModule {
}
